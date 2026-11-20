import { Star, Quote } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

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

export function TestimonialsSection() {
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

        {/* Testimonials Grid */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection
              key={testimonial.author}
              animation="fade-up"
              delay={index * 150}
            >
              <div className="group relative bg-card rounded-3xl p-8 shadow-card hover:shadow-elevated transition-all duration-500 h-full overflow-hidden hover-lift flex flex-col">
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
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
