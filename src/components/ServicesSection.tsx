import { TrendingUp, Calculator, Users, ChevronRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const services = [
  {
    icon: TrendingUp,
    number: "01",
    title: "Consultoria Financeira Estratégica B2B",
    subtitle: "Crescimento, Estabilidade, Futuro Sólido.",
    description:
      "Somos o seu verdadeiro gabinete de consultoria financeira. Focamo-nos em planeamento estratégico para otimizar o desempenho do seu negócio e garantir a sua estabilidade.",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=900&q=80",
    features: [
      {
        title: "Apoio à Gestão",
        text: "Fornecemos periodicamente um Relatório Económico-Financeiro que transforma os seus dados em informação estratégica para a tomada de decisões em tempo útil.",
      },
      {
        title: "Gestão de Tesouraria",
        text: "Traçamos estratégias para otimizar o Cash Flow, garantindo liquidez e segurança para os seus investimentos.",
      },
      {
        title: "Planos de Negócios & Due Diligence",
        text: "Ajudamos a iniciar atividades de modo eficiente e a identificar os fatores de criação de valor em transações estratégicas.",
      },
    ],
  },
  {
    icon: Calculator,
    number: "02",
    title: "Contabilidade e Fiscalidade Consultiva",
    subtitle: "Segurança, Transparência, Soluções Fora da Caixa.",
    description:
      "Vamos além do cumprimento de obrigações fiscais. Prestamos serviços de Contabilidade e Fiscalidade em todos os regimes e dimensões, atuando com transparência e rigor.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80",
    features: [
      {
        title: "Otimização Fiscal",
        text: "Desenhamos as melhores soluções fiscais para a sua empresa, minimizando a carga fiscal e maximizando a eficiência.",
      },
      {
        title: "Contabilidade Consultiva",
        text: "Garantimos o cumprimento legal e a certificação, utilizando a nossa expertise para identificar oportunidades e riscos.",
      },
    ],
  },
  {
    icon: Users,
    number: "03",
    title: "Gestão Estratégica de RH e Apoio a Incentivos IEFP",
    subtitle: "Multidisciplinaridade, Compromisso, Otimização de Custos.",
    description:
      "O capital humano é o seu ativo mais valioso. Oferecemos uma solução multidisciplinar que integra as necessidades de Recursos Humanos com a estratégia financeira.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80",
    features: [
      {
        title: "Processamento de Remunerações",
        text: "Processamos salários com rigor e sigilo.",
      },
      {
        title: "Apoio a Incentivos",
        text: "Prestamos o melhor aconselhamento e apoio cirúrgico na captação de incentivos disponíveis, nomeadamente candidaturas IEFP e outras formas de apoio à contratação.",
      },
    ],
  },
];

const steps = [
  {
    number: "1",
    title: "Diagnóstico Personalizado",
    description:
      "Realizamos uma reunião inicial para fazer um diagnóstico detalhado das necessidades específicas da sua empresa e dos seus objetivos de crescimento.",
  },
  {
    number: "2",
    title: "Proposta Estratégica",
    description:
      "Analisamos as características únicas do seu negócio e desenhamos uma proposta de trabalho 100% personalizada.",
  },
  {
    number: "3",
    title: "Portabilidade Segura",
    description:
      "Cuidamos de todos os procedimentos burocráticos para a transição com o anterior contabilista.",
  },
  {
    number: "4",
    title: "Integração Consultiva",
    description:
      "Realizamos uma reunião de integração consultiva com a sua equipa para entender a fundo as nuances do seu negócio.",
  },
  {
    number: "5",
    title: "Suporte Especializado e Contínuo",
    description:
      "O nosso compromisso é contínuo. Estamos sempre disponíveis para fornecer o suporte necessário.",
  },
];

export function ServicesSection() {
  return (
    <section id="solucoes" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <AnimatedSection className="max-w-4xl mx-auto text-center mb-20">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Soluções e Serviços
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            As Nossas Soluções Outstanding{" "}
            <span className="text-gradient-teal">& Serviços Estratégicos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Na Outstanding Solutions, cada cliente é único. Adaptamos os nossos
            serviços para satisfazer as suas necessidades específicas e libertar
            os seus recursos chave.
          </p>
        </AnimatedSection>

        {/* Services - alternating split layout with images */}
        <div className="max-w-6xl mx-auto space-y-16 mb-28">
          {services.map((service, index) => {
            const reverse = index % 2 === 1;
            return (
              <AnimatedSection
                key={service.title}
                animation={reverse ? "fade-left" : "fade-right"}
              >
                <div
                  className={`grid lg:grid-cols-2 gap-10 items-center ${
                    reverse ? "lg:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  {/* Image */}
                  <div className="relative group">
                    <div className="relative rounded-3xl overflow-hidden shadow-elevated aspect-[5/4]">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-secondary/40 via-transparent to-transparent" />

                      {/* Number badge */}
                      <div className="absolute top-6 left-6 bg-card/95 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-card">
                        <span className="font-display text-2xl font-bold text-gradient-teal">
                          {service.number}
                        </span>
                      </div>

                      {/* Icon badge */}
                      <div className="absolute bottom-6 right-6 w-16 h-16 rounded-2xl bg-gradient-teal flex items-center justify-center shadow-elevated group-hover:rotate-12 transition-transform duration-500">
                        <service.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                    </div>
                    {/* Decorative ring */}
                    <div className="absolute -z-10 -top-4 -left-4 w-32 h-32 border-2 border-primary/30 rounded-full" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-primary font-semibold mb-4">
                      {service.subtitle}
                    </p>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-4">
                      {service.features.map((feature) => (
                        <div
                          key={feature.title}
                          className="group/feat flex gap-3 p-4 rounded-xl hover:bg-cream transition-colors"
                        >
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover/feat:bg-primary group-hover/feat:scale-110 transition-all">
                            <ChevronRight className="w-4 h-4 text-primary group-hover/feat:text-primary-foreground transition-colors" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-1">
                              {feature.title}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {feature.text}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Process Steps */}
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              O nosso processo
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Como Iniciamos a Nossa Parceria Outstanding?
            </h3>
            <p className="text-lg text-muted-foreground">
              Um processo de sucesso: Transparência e Segurança em 5 Etapas
            </p>
          </AnimatedSection>

          <div className="relative">
            {/* Connection line — from first ball center to last ball center */}
            <div className="pointer-events-none absolute left-12 top-12 bottom-12 w-0.5 bg-gradient-to-b from-primary via-primary/40 to-primary hidden md:block" />

            <div className="space-y-4">
              {steps.map((step, index) => (
                <AnimatedSection
                  key={step.number}
                  animation="fade-left"
                  delay={index * 100}
                >
                  <div className="group relative flex gap-6 md:gap-8 items-start p-4 rounded-2xl hover:bg-cream transition-colors">
                    <div className="flex-shrink-0 relative z-10">
                      <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-primary/20 group-hover:animate-pulse-ring" />
                        <div className="relative w-16 h-16 rounded-full bg-gradient-teal flex items-center justify-center shadow-teal group-hover:scale-110 transition-transform">
                          <span className="font-display text-2xl font-bold text-primary-foreground">
                            {step.number}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex-grow pt-2">
                      <h4 className="font-display text-xl font-semibold text-foreground mb-2">
                        {step.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
