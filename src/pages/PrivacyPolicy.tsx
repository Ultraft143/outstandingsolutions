import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoHorizontal from "@/assets/logo-horizontal.png";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-secondary py-6">
        <div className="container mx-auto px-4">
          <Link to="/">
            <img
              src={logoHorizontal}
              alt="Outstanding Solutions"
              className="h-12 w-auto"
            />
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <Link to="/">
            <Button variant="ghost" className="mb-8 gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar à página principal
            </Button>
          </Link>

          <h1 className="text-4xl font-bold text-primary mb-8">
            Política de Privacidade
          </h1>

          <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
            <p className="text-sm text-muted-foreground">
              Última atualização: {new Date().toLocaleDateString("pt-PT")}
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                1. Introdução
              </h2>
              <p>
                A Outstanding Solutions está comprometida em proteger a sua
                privacidade. Esta Política de Privacidade explica como
                recolhemos, utilizamos, divulgamos e protegemos as suas
                informações pessoais quando visita o nosso website ou utiliza os
                nossos serviços.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                2. Informações que Recolhemos
              </h2>
              <p>Podemos recolher os seguintes tipos de informações:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Informações de contacto:</strong> nome, endereço de
                  email, número de telefone e endereço postal.
                </li>
                <li>
                  <strong>Informações empresariais:</strong> nome da empresa,
                  cargo e informações comerciais relevantes.
                </li>
                <li>
                  <strong>Dados de utilização:</strong> informações sobre como
                  utiliza o nosso website e serviços.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                3. Como Utilizamos as Suas Informações
              </h2>
              <p>Utilizamos as informações recolhidas para:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fornecer e melhorar os nossos serviços</li>
                <li>Comunicar consigo sobre os nossos serviços</li>
                <li>Responder às suas questões e pedidos</li>
                <li>Cumprir obrigações legais e regulamentares</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                4. Partilha de Informações
              </h2>
              <p>
                Não vendemos, alugamos ou partilhamos as suas informações
                pessoais com terceiros para fins de marketing. Podemos partilhar
                informações com prestadores de serviços de confiança que nos
                ajudam a operar o nosso negócio, sujeitos a obrigações de
                confidencialidade.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                5. Segurança dos Dados
              </h2>
              <p>
                Implementamos medidas de segurança técnicas e organizativas
                apropriadas para proteger as suas informações pessoais contra
                acesso não autorizado, alteração, divulgação ou destruição.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                6. Os Seus Direitos
              </h2>
              <p>
                Ao abrigo do RGPD, tem direito a aceder, retificar, apagar ou
                limitar o tratamento dos seus dados pessoais. Pode também
                exercer o direito à portabilidade dos dados e opor-se ao
                tratamento em determinadas circunstâncias.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                7. Contacto
              </h2>
              <p>
                Para questões relacionadas com esta Política de Privacidade ou
                para exercer os seus direitos, contacte-nos através de:
              </p>
              <p>
                <strong>Email:</strong> geral@outstanding.pt
                <br />
                <strong>Telefone:</strong> +351 962 344 785
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-secondary py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-secondary-foreground/60 text-sm">
            © {new Date().getFullYear()} Outstanding Solutions. Todos os
            direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
