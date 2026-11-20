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
      // Phones: the photo sits on top in 4:3 (so the whole office and team are
      // visible) with the title below on the brand colour. Tablet/desktop: the
      // photo fills the screen and the title overlays it.
      className="relative overflow-hidden bg-secondary md:h-screen md:min-h-[640px]"
    >
      {/* Office photo */}
      <div className="relative aspect-[4/3] md:absolute md:inset-0 md:aspect-auto">
        <img
          src={heroImage}
          alt="Escritório da Outstanding Solutions com a equipa a trabalhar"
          className="w-full h-full object-cover object-[38%_50%] md:object-center md:scale-105 animate-fade-in"
          style={{ animationDuration: "1.5s" }}
          width={2000}
          height={1125}
          loading="eager"
          // Lowercase on purpose: React 18 doesn't know `fetchPriority` yet.
          {...{ fetchpriority: "high" }}
        />
        {/* Phones: darken the top (white header logo sits on the light ceiling)
            and blend the bottom into the title block. */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 via-transparent to-secondary/40 md:hidden" />
        {/* Tablet/desktop: subtle overlay that keeps the image dominant */}
        <div className="absolute inset-0 hidden md:block bg-gradient-to-t from-secondary/85 via-secondary/10 to-secondary/30" />
      </div>

      {/* Title — below the photo on phones, bottom-aligned over it from md up */}
      <div className="relative container mx-auto px-4 pt-8 pb-28 md:h-full md:flex md:flex-col md:justify-end md:pt-0 md:pb-32">
        <div className="max-w-3xl">
          <h1
            className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight drop-shadow-lg animate-slide-up max-w-3xl"
            style={{ animationDelay: "0.7s", animationFillMode: "backwards" }}
          >
            Otimizamos a sua Gestão Financeira,{" "}
            <span className="text-gradient-teal">para Garantir um Futuro Sólido</span>
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
