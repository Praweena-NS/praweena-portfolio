"use client";

export default function EditorialMarquee() {
  const marqueeItems = [
    "POETRY IN THREAD",
    "MODERN IN SILHOUETTE",
    "KHAIRA ATELIER",
    "AHIMSA SILK & COUTURE ARCHITECTURE",
    "BOTANICAL DYES & ZERO-WASTE DRAPING",
    "TIRUPPUR & COIMBATORE",
  ];

  return (
    <div className="w-full overflow-hidden py-4 sm:py-5 border-y border-champagne/25 bg-[#F5F1E8] dark:bg-[#16141B] relative select-none transition-colors duration-300">
      <div className="flex w-max items-center animate-marquee motion-reduce:animate-none space-x-8">
        {[...Array(4)].map((_, loopIdx) => (
          <div key={loopIdx} className="flex items-center space-x-8 flex-shrink-0">
            {marqueeItems.map((item, idx) => (
              <div key={idx} className="flex items-center space-x-8">
                <span className="font-editorial italic text-base sm:text-lg tracking-[0.2em] uppercase text-ink/80 dark:text-ivory/80 whitespace-nowrap">
                  {item}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-champagne flex-shrink-0" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
