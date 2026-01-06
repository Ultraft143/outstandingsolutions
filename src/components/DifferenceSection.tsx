import { BarChart3, TrendingDown, Activity, PiggyBank, Factory, Store, Heart } from "lucide-react";

const needs = [
  {
    icon: BarChart3,
    number: "01",
    need: "Informação para a Decisão",
    problem: "Precisar de informação financeira em tempo útil para decidir com segurança.",
    solution:
      "Entregamos reporting financeiro e análises preditivas que transformam dados em ferramentas de decisão estratégicas.",
  },
  {
    icon: TrendingDown,
    number: "02",
    need: "Otimização Fiscal",
    problem:
      "Necessidade de conhecer atempadamente as obrigações fiscais para tomar as melhores decisões.",
    solution:
      "Desenhamos soluções fiscais que garantem o cumprimento legal rigoroso, ao mesmo tempo que otimizamos a sua carga fiscal para a máxima estabilidade.",
  },
  {
    icon: Activity,
    number: "03",
    need: "Medição de Desempenho",
    problem:
      "Exigir informação relevante para acompanhar o seu negócio e medir o desempenho com indicadores-chave (KPIs).",
    solution:
      "Utilizamos criatividade e multidisciplinaridade para definir os indicadores mais relevantes, dando-lhe uma visão clara e confiável do estado do seu negócio.",
  },
  {
    icon: PiggyBank,
    number: "04",
    need: "Rentabilidade Real",
    problem:
      "Ter conhecimento real da rentabilidade do seu negócio, centros de custo, produto e do cash flow gerado.",
    solution:
      "Aprofundamos a análise para lhe fornecer um retrato exato da rentabilidade, permitindo-lhe focar os seus recursos no que gera o seu crescimento.",
  },
];

const sectors = [
  { icon: Factory, name: "Indústria" },
  { icon: Store, name: "Comércio" },
  { icon: Heart, name: "IPSS" },
];

export function DifferenceSection() {
  return (
    <section id="diferenca" className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Onde Fazemos a Diferença
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Um parceiro estratégico B2B,{" "}
            <span className="text-gradient-gold">
              com expertise para mover o seu negócio.
            </span>
          </h2>
          <p className="text-xl text-primary-foreground/80">
            Na Outstanding Solutions, pensamos o seu negócio como se fosse o
            nosso e focamo-nos em acrescentar-lhe valor real para impulsionar o
            crescimento.
          </p>
        </div>

        {/* Needs Grid */}
        <div className="max-w-6xl mx-auto mb-20">
          <h3 className="text-center font-display text-2xl font-semibold text-primary-foreground mb-12">
            Um gestor de sucesso precisa de:
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {needs.map((item) => (
              <div
                key={item.number}
                className="bg-card/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-6 hover:bg-card/20 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <span className="text-secondary text-sm font-semibold">
                      {item.number}
                    </span>
                    <h4 className="font-display text-xl font-semibold text-primary-foreground">
                      {item.need}
                    </h4>
                  </div>
                </div>

                <div className="space-y-4 pl-16">
                  <div>
                    <p className="text-primary-foreground/70 text-sm">
                      <span className="font-semibold text-primary-foreground">
                        O Desafio:
                      </span>{" "}
                      {item.problem}
                    </p>
                  </div>
                  <div>
                    <p className="text-primary-foreground/90 text-sm">
                      <span className="font-semibold text-secondary">
                        A Nossa Proposta:
                      </span>{" "}
                      {item.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sectors */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary-foreground/80 mb-8">
            A nossa experiência abrange vários setores, garantindo que as nossas
            soluções são adaptáveis e personalizadas ao seu modelo de negócio:
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {sectors.map((sector) => (
              <div
                key={sector.name}
                className="flex items-center gap-3 bg-card/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-6 py-3 hover:bg-card/20 transition-colors"
              >
                <sector.icon className="w-5 h-5 text-secondary" />
                <span className="font-semibold text-primary-foreground">
                  {sector.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
