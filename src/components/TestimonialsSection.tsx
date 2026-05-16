import { Star, Quote } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const testimonials = [
  {
    quote:
      "A Outstanding Solutions transformou a forma como gerimos as nossas finanças. O acompanhamento é excepcional e os relatórios são uma ferramenta essencial para as nossas decisões.",
    author: "Maria Santos",
    role: "CEO",
    company: "Empresa Exemplo",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "A abordagem empática e profissional da equipa fez toda a diferença. Sentimos que são verdadeiros parceiros no crescimento do nosso negócio.",
    author: "João Ferreira",
    role: "Diretor Financeiro",
    company: "Empresa Exemplo",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "A otimização fiscal que nos proporcionaram resultou em poupanças significativas. Recomendo vivamente os seus serviços.",
    author: "Ana Costa",
    role: "Gestora",
    company: "Empresa Exemplo",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
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
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection
              key={index}
              animation="fade-up"
              delay={index * 150}
            >
              <div className="group relative bg-card rounded-3xl p-8 shadow-card hover:shadow-elevated transition-all duration-500 h-full overflow-hidden hover-lift">
                {/* Gradient top bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-teal transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Quote icon */}
                <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/15 group-hover:text-primary/30 group-hover:scale-110 transition-all duration-300" />

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                      style={{
                        animationDelay: `${i * 100}ms`,
                      }}
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground/80 leading-relaxed mb-8 relative z-10 italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-border">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-teal blur-md opacity-50" />
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="relative w-14 h-14 rounded-full object-cover ring-2 ring-card"
                      loading="lazy"
                    />
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
        <AnimatedSection className="max-w-5xl mx-auto mt-20" delay={500}>
          <p className="text-center text-muted-foreground mb-8 font-medium">
            Empresas que confiam em nós
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="h-16 bg-card rounded-xl flex items-center justify-center text-muted-foreground text-sm font-medium border border-border hover:border-primary/40 hover:text-primary transition-all duration-300 hover:scale-105"
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
