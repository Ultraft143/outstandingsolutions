import { Lightbulb, Shield, Target } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import aboutImage from "@/assets/quem-somos.webp";

const promises = [
  {
    icon: Lightbulb,
    title: "Expertise e Multidisciplinaridade",
    description:
      "Transformar desafios em soluções personalizadas e fora da caixa.",
  },
  {
    icon: Shield,
    title: "Transparência e Compromisso",
    description:
      "Garantir um serviço com rigor, ética e total transparência em todas as interações.",
  },
  {
    icon: Target,
    title: "Foco no Cliente",
    description: "Considerar o seu sucesso como a nossa primeira meta.",
  },
];

export function AboutSection() {
  return (
    <section
      id="quem-somos"
      className="py-24 bg-cream relative overflow-hidden"
    >
      <div className="absolute -right-40 top-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-blob" />
      <div
        className="absolute -left-40 bottom-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-blob"
        style={{ animationDelay: "4s" }}
      />

      <div className="container mx-auto px-4 relative">
        {/* Split section: image + text */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          {/* Image */}
          <AnimatedSection animation="fade-right" className="order-2 lg:order-1">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-elevated aspect-[4/3] group">
                <img
                  src={aboutImage}
                  alt="Equipa Outstanding Solutions a trabalhar em conjunto"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  width={1200}
                  height={900}
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-transparent to-transparent" />
              </div>
            </div>
          </AnimatedSection>

          {/* Text */}
          <AnimatedSection animation="fade-left" className="order-1 lg:order-2">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Quem Somos
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Outstanding Solutions: Mais do que Consultoras,{" "}
              <span className="text-gradient-teal">
                Somos Parceiras de Confiança.
              </span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-5">
              A Outstanding Solutions move-se pela vontade de trabalhar lado a
              lado com empresas e empreendedores. A nossa missão é transformar
              a Informação Financeira numa ferramenta estratégica que acrescente
              valor e contribua ativamente para melhores resultados.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              O que nos torna{" "}
              <strong className="text-primary">Outstanding</strong> é a nossa
              abordagem próxima e empática. Criamos um relacionamento de
              confiança que nos permite entender as necessidades de cada negócio
              e impulsionar o crescimento.
            </p>
          </AnimatedSection>
        </div>

        {/* Promises */}
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              As nossas promessas
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
              Na Outstanding Solutions:
            </h3>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {promises.map((promise, index) => (
              <AnimatedSection
                key={promise.title}
                animation="fade-up"
                delay={150 + index * 120}
              >
                <div className="group relative bg-card rounded-2xl p-8 h-full hover-lift overflow-hidden border border-border">
                  {/* Top gradient bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-teal transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                  <div className="w-16 h-16 rounded-2xl bg-gradient-teal flex items-center justify-center mb-6 shadow-teal group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
                    <promise.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h4 className="font-display text-xl font-semibold text-foreground mb-3">
                    {promise.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {promise.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
