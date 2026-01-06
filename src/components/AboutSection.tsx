import { Lightbulb, Shield, Target } from "lucide-react";

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
    <section id="quem-somos" className="py-24 bg-cream relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Quem Somos
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Outstanding Solutions: Mais do que Consultoras,{" "}
            <span className="text-gradient-gold">Somos Parceiras de Confiança.</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              A Outstanding Solutions move-se pela vontade de trabalhar lado a
              lado com empresas e empreendedores. A nossa missão é transformar a
              Informação Financeira numa ferramenta estratégica que acrescente
              valor e contribua ativamente para melhores resultados.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              O que nos torna <strong className="text-foreground">Outstanding</strong> é a nossa abordagem
              próxima e empática. Criamos um relacionamento de confiança que nos
              permite entender as necessidades de cada negócio e garantir um
              processo seguro e confiável. Somos o parceiro essencial que
              garante a estabilidade e impulsiona o crescimento do seu negócio.
            </p>
          </div>
        </div>

        {/* Promises */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-center font-display text-2xl font-semibold text-foreground mb-10">
            Na Outstanding Solutions, prometemos:
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {promises.map((promise, index) => (
              <div
                key={promise.title}
                className="group text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-gold flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-gold">
                  <promise.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-display text-xl font-semibold text-foreground mb-3">
                  {promise.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {promise.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
