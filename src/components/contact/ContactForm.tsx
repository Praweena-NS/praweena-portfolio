"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Mail, Clock } from "lucide-react";
import { InstagramIcon } from "@/components/ui/BrandIcons";

const INQUIRY_TYPES = [
  "Bespoke Bridal Silhouette",
  "Private Haute Couture Commission",
  "Floral Fusion Luxury Gifting / Hamper",
  "Boutique & Brand Collaboration",
  "Academic / Editorial / Press Dialogue",
  "General Atelier Inquiry",
];

const BUDGET_RANGES = [
  "Bespoke Consultation / Exploration",
  "₹25,000 — ₹50,000",
  "₹50,000 — ₹1,50,000",
  "₹1,50,000 — ₹3,00,000+",
  "Press / Academic / Non-Commercial",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: INQUIRY_TYPES[0],
    targetTimeline: "",
    budgetRange: BUDGET_RANGES[0],
    cityLocation: "",
    moodboardUrl: "",
    subject: "",
    message: "",
    honeypot: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [mailtoUrl, setMailtoUrl] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please complete all required fields (Name, Email, Message).");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          category: formData.inquiryType,
          subject: formData.subject || `${formData.inquiryType} Inquiry from ${formData.name}`,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setStatus("error");
        setErrorMessage(data.error || "Unable to send enquiry. Please try again.");
        return;
      }

      setStatus("success");
      setMailtoUrl(data.mailtoUrl || null);
    } catch {
      setStatus("error");
      setErrorMessage("Network error occurred. Please reach out directly to thekhaira.atelier@gmail.com.");
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      inquiryType: INQUIRY_TYPES[0],
      targetTimeline: "",
      budgetRange: BUDGET_RANGES[0],
      cityLocation: "",
      moodboardUrl: "",
      subject: "",
      message: "",
      honeypot: "",
    });
    setStatus("idle");
    setErrorMessage("");
    setMailtoUrl(null);
  };

  if (status === "success") {
    return (
      <div className="bg-ink/[0.03] border border-champagne/40 rounded-2xl p-8 sm:p-10 text-center animate-fadeIn">
        <div className="w-14 h-14 rounded-full bg-champagne/20 text-ink flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={28} className="text-champagne" />
        </div>
        <h3 className="font-serif text-3xl text-ink dark:text-ivory mb-3">Enquiry Received</h3>
        <p className="font-sans text-sm text-ink/75 dark:text-ivory/75 font-light leading-relaxed max-w-md mx-auto mb-8">
          Thank you for reaching out to Atelier KHAIRA. Every inquiry is personally reviewed by Praweena NS. You can expect a response within 24 to 48 hours.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {mailtoUrl && (
            <a
              href={mailtoUrl}
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-ink text-ivory hover:bg-lavender hover:text-ink transition-colors font-sans text-xs uppercase tracking-widest"
            >
              <Mail size={14} />
              <span>Open in Mail App</span>
            </a>
          )}
          <button
            type="button"
            onClick={handleReset}
            className="px-6 py-3 rounded-full border border-ink/20 dark:border-champagne/30 text-ink dark:text-ivory hover:border-lavender hover:text-lavender transition-colors font-sans text-xs uppercase tracking-widest"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot field for anti-spam */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        className="sr-only opacity-0 absolute -left-[9999px]"
        aria-hidden="true"
      />

      {/* Error Banner */}
      {status === "error" && (
        <div className="flex items-center space-x-3 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm">
          <AlertCircle size={18} className="flex-shrink-0" />
          <p>{errorMessage}</p>
        </div>
      )}

      {/* Name and Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-xs uppercase tracking-widest font-mono text-[#57525E] dark:text-[#B5AFA6] mb-2">
            Your Full Name <span className="text-champagne">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="e.g. Ananya Krishnan"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-transparent border border-ink/20 dark:border-champagne/30 focus:border-lavender focus:ring-1 focus:ring-lavender rounded-xl px-4 py-3.5 font-sans text-sm text-[#1C1A20] dark:text-[#F5F1E8] placeholder:text-ink/30 dark:placeholder:text-ivory/30 outline-none transition-colors"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-xs uppercase tracking-widest font-mono text-[#57525E] dark:text-[#B5AFA6] mb-2">
            Email Address <span className="text-champagne">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="e.g. ananya@domain.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-transparent border border-ink/20 dark:border-champagne/30 focus:border-lavender focus:ring-1 focus:ring-lavender rounded-xl px-4 py-3.5 font-sans text-sm text-[#1C1A20] dark:text-[#F5F1E8] placeholder:text-ink/30 dark:placeholder:text-ivory/30 outline-none transition-colors"
          />
        </div>
      </div>

      {/* Inquiry Type & Budget Range */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="inquiryType" className="block text-xs uppercase tracking-widest font-mono text-[#57525E] dark:text-[#B5AFA6] mb-2">
            Inquiry Type <span className="text-champagne">*</span>
          </label>
          <div className="relative">
            <select
              id="inquiryType"
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              className="w-full bg-[#F5F1E8] dark:bg-[#121115] border border-ink/20 dark:border-champagne/30 focus:border-lavender focus:ring-1 focus:ring-lavender rounded-xl px-4 py-3.5 font-sans text-sm text-[#1C1A20] dark:text-[#F5F1E8] outline-none transition-colors cursor-pointer appearance-none"
            >
              {INQUIRY_TYPES.map((type) => (
                <option key={type} value={type} className="bg-[#F5F1E8] dark:bg-[#121115] text-[#1C1A20] dark:text-[#F5F1E8] py-2">
                  {type}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#57525E] dark:text-[#B5AFA6] text-xs font-mono">
              ▼
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="budgetRange" className="block text-xs uppercase tracking-widest font-mono text-[#57525E] dark:text-[#B5AFA6] mb-2">
            Estimated Budget Range
          </label>
          <div className="relative">
            <select
              id="budgetRange"
              name="budgetRange"
              value={formData.budgetRange}
              onChange={handleChange}
              className="w-full bg-[#F5F1E8] dark:bg-[#121115] border border-ink/20 dark:border-champagne/30 focus:border-lavender focus:ring-1 focus:ring-lavender rounded-xl px-4 py-3.5 font-sans text-sm text-[#1C1A20] dark:text-[#F5F1E8] outline-none transition-colors cursor-pointer appearance-none"
            >
              {BUDGET_RANGES.map((range) => (
                <option key={range} value={range} className="bg-[#F5F1E8] dark:bg-[#121115] text-[#1C1A20] dark:text-[#F5F1E8] py-2">
                  {range}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#57525E] dark:text-[#B5AFA6] text-xs font-mono">
              ▼
            </div>
          </div>
        </div>
      </div>

      {/* Target Event / Timeline & City / Location */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="targetTimeline" className="block text-xs uppercase tracking-widest font-mono text-[#57525E] dark:text-[#B5AFA6] mb-2">
            Target Event / Delivery Timeline
          </label>
          <input
            id="targetTimeline"
            name="targetTimeline"
            type="text"
            placeholder="e.g. December 2026 / Bridal Season"
            value={formData.targetTimeline}
            onChange={handleChange}
            className="w-full bg-transparent border border-ink/20 dark:border-champagne/30 focus:border-lavender focus:ring-1 focus:ring-lavender rounded-xl px-4 py-3.5 font-sans text-sm text-[#1C1A20] dark:text-[#F5F1E8] placeholder:text-ink/30 dark:placeholder:text-ivory/30 outline-none transition-colors"
          />
        </div>

        <div>
          <label htmlFor="cityLocation" className="block text-xs uppercase tracking-widest font-mono text-[#57525E] dark:text-[#B5AFA6] mb-2">
            City / Location
          </label>
          <input
            id="cityLocation"
            name="cityLocation"
            type="text"
            placeholder="e.g. Coimbatore, Chennai, Bengaluru"
            value={formData.cityLocation}
            onChange={handleChange}
            className="w-full bg-transparent border border-ink/20 dark:border-champagne/30 focus:border-lavender focus:ring-1 focus:ring-lavender rounded-xl px-4 py-3.5 font-sans text-sm text-[#1C1A20] dark:text-[#F5F1E8] placeholder:text-ink/30 dark:placeholder:text-ivory/30 outline-none transition-colors"
          />
        </div>
      </div>

      {/* Reference Moodboard / Drive Link */}
      <div>
        <label htmlFor="moodboardUrl" className="block text-xs uppercase tracking-widest font-mono text-[#57525E] dark:text-[#B5AFA6] mb-2">
          Reference Moodboard / Pinterest / Drive Link (Optional)
        </label>
        <input
          id="moodboardUrl"
          name="moodboardUrl"
          type="url"
          placeholder="https://pinterest.com/... or Google Drive link"
          value={formData.moodboardUrl}
          onChange={handleChange}
          className="w-full bg-transparent border border-ink/20 dark:border-champagne/30 focus:border-lavender focus:ring-1 focus:ring-lavender rounded-xl px-4 py-3.5 font-sans text-sm text-[#1C1A20] dark:text-[#F5F1E8] placeholder:text-ink/30 dark:placeholder:text-ivory/30 outline-none transition-colors"
        />
      </div>

      {/* Message Textarea */}
      <div>
        <label htmlFor="message" className="block text-xs uppercase tracking-widest font-mono text-[#57525E] dark:text-[#B5AFA6] mb-2">
          Bespoke Vision / Detailed Message <span className="text-champagne">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Describe your silhouette requirements, bespoke preferences, or collaboration scope..."
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-transparent border border-ink/20 dark:border-champagne/30 focus:border-lavender focus:ring-1 focus:ring-lavender rounded-xl px-4 py-3.5 font-sans text-sm text-[#1C1A20] dark:text-[#F5F1E8] placeholder:text-ink/30 dark:placeholder:text-ivory/30 outline-none transition-colors resize-y"
        />
      </div>

      {/* Submit CTA */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-10 py-4 rounded-full bg-ink text-ivory dark:bg-champagne dark:text-[#121115] hover:bg-lavender hover:text-ink transition-all duration-300 font-sans text-xs uppercase tracking-[0.25em] shadow-lg shadow-ink/10 disabled:opacity-50 disabled:cursor-not-allowed group cursor-pointer"
      >
        <span>{status === "submitting" ? "Transmitting Enquiry..." : "Start a Consultation"}</span>
        <Send
          size={14}
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </button>

      {/* 24-48 Hour Response Notice */}
      <div className="flex items-center space-x-2 text-xs font-mono text-[#6E5D3F] dark:text-[#C9B38C] pt-2">
        <Clock size={13} className="text-[#6E5D3F] dark:text-[#C9B38C] flex-shrink-0" />
        <span>Every inquiry is personally reviewed. Expect a response within 24–48 hours.</span>
      </div>

      {/* Direct Quick-Action Links */}
      <div className="pt-4 border-t border-ink/10 dark:border-champagne/20 flex flex-wrap items-center gap-4 text-xs font-sans text-[#57525E] dark:text-[#B5AFA6]">
        <span>Direct Channels:</span>
        <a
          href="https://www.instagram.com/praweena._.05"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-1.5 text-[#1C1A20] dark:text-[#F5F1E8] hover:text-lavender transition-colors font-medium"
        >
          <InstagramIcon size={13} />
          <span>Instagram DM (@praweena._.05)</span>
        </a>
        <span>•</span>
        <a
          href="mailto:thekhaira.atelier@gmail.com"
          className="inline-flex items-center space-x-1.5 text-[#1C1A20] dark:text-[#F5F1E8] hover:text-lavender transition-colors font-medium"
        >
          <Mail size={13} />
          <span>thekhaira.atelier@gmail.com</span>
        </a>
      </div>
    </form>
  );
}
