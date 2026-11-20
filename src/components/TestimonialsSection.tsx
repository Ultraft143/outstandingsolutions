import { useCallback, useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "A Outstanding tem tudo a ver com confiança e profissionalismo. Estão sempre disponíveis para ouvir as nossas necessidades, com uma capacidade de adaptabilidade essencial.",
    author: "Miguel Rita",
    role: "CEO",
    company: "Empathyslice",
  },
  {
    quote:
      "A Outstanding Solutions é um parceiro estratégico fundamental. A sua competência, visão e empatia acrescentam valor real à nossa gestão e tomada de decisão.",
    author: "Susana Mira",
    role: "CEO",
    company: "SMart Comunicação",
  },
  {
    quote:
      "A Outstanding é muito mais do que um prestador de serviços: é um parceiro de confiança que nos transmite total segurança e tranquilidade na gestão empresarial.",
    author: "Cristina de Sousa",
    role: "CEO",
    company: "Fortune",
  },
  {
    quote:
      "Mais do que tratar da contabilidade, a Outstanding dá-me a segurança de saber que tenho alguém ao meu lado que conhece o meu negócio e me ajuda a decidir com confiança.",
    author: "Marta Maçarico",
    role: "CEO",
    company: "Marta Maçarico - Atelier",
  },
];

/** Time each slide stays before the carousel advances on its own. */
const AUTOPLAY_DELAY_MS = 5000;

export function TestimonialsSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const [snapCount, setSnapCount] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const syncState = useCallback((carousel: NonNullable<CarouselApi>) => {
    setSelected(carousel.selectedScrollSnap());
    setSnapCount(carousel.scrollSnapList().length);
  }, []);

  useEffect(() => {
    if (!api) return;
    syncState(api);
    api.on("select", syncState).on("reInit", syncState);
    return () => {
      api.off("select", syncState).off("reInit", syncState);
    };
  }, [api, syncState]);

  // Autoplay: advance every few seconds, paused while the visitor hovers or
  // focuses the carousel, and disabled for people who prefer reduced motion.
  useEffect(() => {
    if (!api || isPaused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      // Embla turns `loop` off when there aren't enough slides to fill the
      // view, so wrap back to the start manually in that case.
      if (api.canScrollNext()) api.scrollNext();
      else api.scrollTo(0);
    }, AUTOPLAY_DELAY_MS);
    return () => window.clearInterval(timer);
  }, [api, isPaused, selected]);

  return (
    <section id="testemunhos" className="py-24 bg-cream relative overflow-hidden">
      <div className="absolute top-1/2 -translate-y-1/2 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -translate-y-1/2 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <AnimatedSection className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            O Que Dizem De Nós
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            A confiança dos nossos clientes{" "}
            <span className="text-gradient-teal">é o nosso maior ativo.</span>
          </h2>
        </AnimatedSection>

        {/* Testimonials carousel — 3 visible on desktop, 2 on tablet, 1 on mobile */}
        <AnimatedSection animation="fade-up" className="max-w-6xl mx-auto">
          <Carousel
            setApi={setApi}
            opts={{ loop: true, align: "start" }}
            aria-label="Testemunhos de clientes"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocusCapture={() => setIsPaused(true)}
            onBlurCapture={() => setIsPaused(false)}
          >
            <CarouselContent className="-ml-6 py-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={testimonial.author}
                  className="pl-6 md:basis-1/2 lg:basis-1/3"
                  aria-label={`${index + 1} de ${testimonials.length}`}
                >
                  <div className="group relative bg-card rounded-3xl p-8 shadow-card hover:shadow-elevated transition-all duration-500 h-full overflow-hidden flex flex-col">
                    {/* Gradient top bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-teal transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                    {/* Quote icon */}
                    <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/15 group-hover:text-primary/30 group-hover:scale-110 transition-all duration-300" />

                    {/* Stars */}
                    <div className="flex gap-1 mb-5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-foreground/80 leading-relaxed mb-8 relative z-10 italic flex-grow">
                      "{testimonial.quote}"
                    </p>

                    {/* Author */}
                    <div className="pt-6 border-t border-border">
                      <p className="font-semibold text-foreground">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Dots */}
          {snapCount > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: snapCount }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => api?.scrollTo(i)}
                  aria-label={`Ver testemunho ${i + 1}`}
                  aria-current={i === selected}
                  className={cn(
                    "h-2.5 rounded-full transition-all duration-300",
                    i === selected
                      ? "w-8 bg-primary"
                      : "w-2.5 bg-primary/25 hover:bg-primary/50",
                  )}
                />
              ))}
            </div>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
}
