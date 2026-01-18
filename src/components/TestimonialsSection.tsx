import { Star, Quote } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const testimonials = [
  {
    quote:
      "A Outstanding Solutions transformou a forma como gerimos as nossas finanças. O acompanhamento é excepcional e os relatórios são uma ferramenta essencial para as nossas decisões.",
    author: "Maria Santos",
    role: "CEO",
    company: "Empresa Exemplo",
  },
  {
    quote:
      "A abordagem empática e profissional da equipa fez toda a diferença. Sentimos que são verdadeiros parceiros no crescimento do nosso negócio.",
    author: "João Ferreira",
    role: "Diretor Financeiro",
    company: "Empresa Exemplo",
  },
  {
    quote:
      "A otimização fiscal que nos proporcionaram resultou em poupanças significativas. Recomendo vivamente os seus serviços.",
    author: "Ana Costa",
    role: "Gestora",
    company: "Empresa Exemplo",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testemunhos" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
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
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection
              key={index}
              animation="fade-up"
              delay={index * 150}
            >
              <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-shadow duration-300 relative h-full">
                {/* Quote icon */}
                <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center">
                    <span className="font-display text-lg font-bold text-primary-foreground">
                      {testimonial.author[0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Client logos placeholder */}
        <AnimatedSection className="max-w-4xl mx-auto mt-16" delay={500}>
          <p className="text-center text-muted-foreground mb-8">
            Empresas que confiam em nós
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-32 h-12 bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-sm"
              >
                Logo Cliente
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
