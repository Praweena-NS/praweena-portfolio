import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, category, subject, message, honeypot } = body;

    // Honeypot anti-spam check (if filled by bot, silently return success)
    if (honeypot && String(honeypot).trim().length > 0) {
      return NextResponse.json({
        success: true,
        message: "Enquiry submitted successfully.",
      });
    }

    // Server-side validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const validCategories = [
      "Bespoke / Custom Consultation",
      "Boutique & Brand Collaboration",
      "Academic / Press Inquiry",
      "General Enquiry",
    ];

    if (!category || !validCategories.includes(category)) {
      return NextResponse.json(
        { success: false, error: "Please select a valid enquiry category." },
        { status: 400 }
      );
    }

    if (!subject || typeof subject !== "string" || subject.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide an enquiry subject." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: "Message must be at least 10 characters long." },
        { status: 400 }
      );
    }

    // Generate formatted mailto fallback for direct client opening without third-party services
    const mailtoSubject = encodeURIComponent(`[KHAIRA Atelier - ${category}] ${subject.trim()}`);
    const mailtoBody = encodeURIComponent(
      `From: ${name.trim()} (${email.trim()})\nCategory: ${category}\nSubject: ${subject.trim()}\n\nMessage:\n${message.trim()}\n\n---\nSent via Praweena - KHAIRA Atelier Portfolio`
    );
    const mailtoUrl = `mailto:thekhaira.atelier@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

    // Log the valid enquiry for the server console
    console.log(`[Atelier Enquiry Received] From: ${name} <${email}> | Category: ${category} | Subject: ${subject}`);

    return NextResponse.json({
      success: true,
      message: "Thank you for reaching out to Atelier KHAIRA. Your inquiry has been registered with my studio.",
      mailtoUrl,
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred while processing your request." },
      { status: 500 }
    );
  }
}
