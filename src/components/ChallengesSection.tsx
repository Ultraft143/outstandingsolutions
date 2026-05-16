import { Button } from "@/components/ui/button";
import {
  FileText,
  Calculator,
  Scale,
  ArrowRight,
} from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

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

export function ChallengesSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="desafios"
      className="relative py-24 bg-gradient-hero-light overflow-hidden"
    >
      <div className="absolute top-20 -right-32 w-[24rem] h-[24rem] bg-primary/15 rounded-full blur-3xl animate-blob" />
      <div
        className="absolute -bottom-20 -left-20 w-[20rem] h-[20rem] bg-secondary/10 rounded-full blur-3xl animate-blob"
        style={{ animationDelay: "3s" }}
      />
      <div className="absolute inset-0 bg-dots-pattern opacity-30" />

      <div className="relative container mx-auto px-4">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Os seus desafios
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            A sua empresa enfrenta{" "}
            <span className="text-gradient-teal">estes desafios?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Somos o seu Gabinete de Consultoria Financeira B2B. Através da nossa
            abordagem próxima e empática, transformamos números em alavancas de
            crescimento e estabilidade.
          </p>
        </AnimatedSection>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mb-12">
          {challenges.map((challenge, index) => (
            <AnimatedSection
              key={challenge.title}
              animation="fade-up"
              delay={index * 130}
            >
              <div className="group relative bg-card border border-border rounded-2xl p-8 h-full hover-lift overflow-hidden">
                <div className="absolute inset-0 bg-gradient-soft opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-teal flex items-center justify-center mb-5 shadow-teal group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <challenge.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {challenge.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {challenge.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center" delay={400}>
          <Button
            variant="hero"
            size="xl"
            onClick={scrollToContact}
            className="group"
          >
            Nós podemos ajudar
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
