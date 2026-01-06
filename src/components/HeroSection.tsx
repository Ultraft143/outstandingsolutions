import { Button } from "@/components/ui/button";
import { ChevronDown, FileText, Calculator, Scale } from "lucide-react";

const challenges = [
  {
    icon: FileText,
    title: "Informação",
    description:
      "Precisa de informação financeira de qualidade e em tempo útil para tomar decisões estratégicas com segurança?",
  },
  {
    icon: Calculator,
    title: "Contabilidade Consultiva",
    description:
      "Sente que a sua contabilidade se limita ao cumprimento de obrigações? Nós oferecemos soluções consultivas fora da caixa que vão além do básico.",
  },
  {
    icon: Scale,
    title: "Gestão Fiscal",
    description:
      "Procura uma gestão fiscal que desenhe as melhores soluções e garanta um processo seguro e confiável?",
  },
];

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToNext = () => {
    const element = document.querySelector("#quem-somos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-gradient-hero overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern opacity-30" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-40 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 pt-32 pb-20">
        {/* Main Hero Content */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-in">
            Otimize a Sua Gestão Financeira.{" "}
            <span className="text-gradient-gold">
              Garanta um Futuro Sólido e Sustentado.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Somos o seu Gabinete de Consultoria Financeira B2B. Através da nossa
            abordagem próxima e empática, transformamos números em alavancas de
            crescimento e estabilidade.
          </p>
        </div>

        {/* Challenges Section */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-xl md:text-2xl font-semibold text-secondary mb-10 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            A sua empresa enfrenta estes desafios?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {challenges.map((challenge, index) => (
              <div
                key={challenge.title}
                className="bg-card/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-6 hover:bg-card/20 transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center mb-4">
                  <challenge.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-primary-foreground mb-3">
                  {challenge.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center animate-slide-up" style={{ animationDelay: "0.7s" }}>
            <Button
              variant="hero"
              size="xl"
              onClick={scrollToContact}
              className="text-lg"
            >
              Nós podemos ajudar!
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-secondary transition-colors animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
}
