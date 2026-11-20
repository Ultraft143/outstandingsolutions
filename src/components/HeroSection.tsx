import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/inicio.webp";

export function HeroSection() {
  const scrollToNext = () => {
    const element = document.querySelector("#desafios");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative h-screen min-h-[640px] overflow-hidden bg-secondary"
    >
      {/* Full-bleed impact image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Escritório da Outstanding Solutions com a equipa a trabalhar"
          className="w-full h-full object-cover scale-105 animate-fade-in"
          style={{ animationDuration: "1.5s" }}
          width={1600}
          height={900}
          loading="eager"
          // Lowercase on purpose: React 18 doesn't know `fetchPriority` yet.
          {...{ fetchpriority: "high" }}
        />
        {/* Subtle overlays — keep image dominant */}
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/85 via-secondary/10 to-secondary/30" />
      </div>

      {/* Bottom-aligned minimal title — image dominates the viewport */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-end pb-28 md:pb-32">
        <div className="max-w-3xl">
          <h1
            className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight drop-shadow-lg animate-slide-up max-w-3xl"
            style={{ animationDelay: "0.7s", animationFillMode: "backwards" }}
          >
            Otimize a Sua Gestão Financeira.{" "}
            <span className="text-gradient-teal">Garanta um Futuro Sólido.</span>
          </h1>
        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={scrollToNext}
        aria-label="Descobrir mais"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/90 hover:text-primary transition-colors group"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-medium opacity-80 group-hover:opacity-100 transition-opacity">
          Descobrir
        </span>
        <span className="relative flex items-center justify-center w-9 h-9 rounded-full border border-primary-foreground/40 group-hover:border-primary transition-colors">
          <span className="absolute inset-0 rounded-full bg-primary/30 animate-pulse-ring" />
          <ChevronDown
            size={18}
            className="relative animate-bounce"
            style={{ animationDuration: "1.6s" }}
          />
        </span>
      </button>
    </section>
  );
}
