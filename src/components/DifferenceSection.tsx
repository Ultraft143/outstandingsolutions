import {
  BarChart3,
  TrendingDown,
  Activity,
  PiggyBank,
  Factory,
  Store,
  Heart,
} from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import differenceBackground from "@/assets/diferenca.webp";

const needs = [
  {
    icon: BarChart3,
    number: "01",
    need: "Informação para a Decisão",
    problem:
      "Precisar de informação financeira em tempo útil para decidir com segurança.",
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
    <section
      id="diferenca"
      className="relative py-24 bg-gradient-hero overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 opacity-15">
        <img
          src={differenceBackground}
          width={1280}
          height={854}
          decoding="async"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />

      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob" />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-blob"
        style={{ animationDelay: "3s" }}
      />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <AnimatedSection className="max-w-4xl mx-auto text-center mb-20">
          <span className="inline-block text-primary bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-1.5 font-semibold text-sm uppercase tracking-wider mb-4">
            Onde Fazemos a Diferença
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Um parceiro estratégico B2B,{" "}
            <span className="text-gradient-teal">
              com expertise para mover o seu negócio.
            </span>
          </h2>
          <p className="text-xl text-primary-foreground/80">
            Na Outstanding Solutions, pensamos o seu negócio como se fosse o
            nosso e focamo-nos em acrescentar-lhe valor real para impulsionar o
            crescimento.
          </p>
        </AnimatedSection>

        {/* Needs Grid */}
        <div className="max-w-6xl mx-auto mb-20">
          <AnimatedSection className="text-center mb-12" delay={100}>
            <h3 className="font-display text-2xl font-semibold text-primary-foreground">
              Um gestor de sucesso precisa de:
            </h3>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {needs.map((item, index) => (
              <AnimatedSection
                key={item.number}
                animation="scale"
                delay={150 + index * 100}
              >
                <div className="group relative bg-card/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-6 hover:bg-card/15 hover:border-primary/40 transition-all duration-300 h-full overflow-hidden hover-lift">
                  {/* gradient hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-teal flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-teal">
                        <item.icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <div>
                        <span className="text-primary text-sm font-semibold">
                          {item.number}
                        </span>
                        <h4 className="font-display text-xl font-semibold text-primary-foreground">
                          {item.need}
                        </h4>
                      </div>
                    </div>

                    <div className="space-y-3 pl-[4.5rem]">
                      <p className="text-primary-foreground/70 text-sm">
                        <span className="font-semibold text-primary-foreground">
                          O Desafio:
                        </span>{" "}
                        {item.problem}
                      </p>
                      <p className="text-primary-foreground/90 text-sm">
                        <span className="font-semibold text-primary">
                          A Nossa Proposta:
                        </span>{" "}
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Sectors */}
        <AnimatedSection className="max-w-4xl mx-auto text-center" delay={500}>
          <p className="text-primary-foreground/80 mb-8 text-lg">
            A nossa experiência abrange vários setores, garantindo que as nossas
            soluções são adaptáveis e personalizadas ao seu modelo de negócio:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {sectors.map((sector) => (
              <div
                key={sector.name}
                className="group flex items-center gap-3 bg-card/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-6 py-3 hover:bg-primary hover:border-primary transition-all duration-300 cursor-default hover:scale-105"
              >
                <sector.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                <span className="font-semibold text-primary-foreground">
                  {sector.name}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
