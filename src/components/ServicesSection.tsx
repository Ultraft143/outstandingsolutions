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
    <section id="solucoes" className="py-24 bg-background">
      <div className="container mx-auto px-4">
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

        {/* Services Grid */}
        <div className="max-w-6xl mx-auto space-y-8 mb-24">
          {services.map((service, index) => (
            <AnimatedSection
              key={service.title}
              animation={index % 2 === 0 ? "fade-left" : "fade-right"}
              delay={index * 100}
            >
              <div
                className={`rounded-2xl overflow-hidden ${
                  index % 2 === 0 ? "bg-card" : "bg-cream"
                } shadow-card hover:shadow-elevated transition-shadow duration-300`}
              >
                <div className="p-8 md:p-10">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                    {/* Icon and number */}
                    <div className="flex-shrink-0">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-hero flex items-center justify-center shadow-card">
                          <service.icon className="w-8 h-8 text-primary-foreground" />
                        </div>
                        <span className="text-6xl font-display font-bold text-primary/30">
                          {service.number}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-primary font-semibold mb-4">
                        {service.subtitle}
                      </p>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-4">
                        {service.features.map((feature) => (
                          <div key={feature.title} className="flex gap-3">
                            <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <div>
                              <h4 className="font-semibold text-foreground">
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
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Process Steps */}
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Como Iniciamos a Nossa Parceria Outstanding?
            </h3>
            <p className="text-lg text-muted-foreground">
              Um processo de sucesso: Transparência e Segurança em 5 Etapas
            </p>
          </AnimatedSection>

          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block" />

            <div className="space-y-6">
              {steps.map((step, index) => (
                <AnimatedSection
                  key={step.number}
                  animation="fade-left"
                  delay={index * 100}
                >
                  <div className="relative flex gap-6 md:gap-8">
                    {/* Step number */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-teal flex items-center justify-center shadow-teal">
                        <span className="font-display text-2xl font-bold text-primary-foreground">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow pb-6">
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
