import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoWhite from "@/assets/logo-white.png";

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-secondary py-4">
        <div className="container mx-auto px-4">
          <Link to="/">
            <img
              src={logoWhite}
              alt="Outstanding Solutions"
              className="h-16 -my-2 w-auto brightness-0 invert"
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
            Termos e Condições
          </h1>

          <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
            <p className="text-sm text-muted-foreground">
              Última atualização: {new Date().toLocaleDateString("pt-PT")}
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                1. Aceitação dos Termos
              </h2>
              <p>
                Ao aceder e utilizar o website da Outstanding Solutions, aceita
                estar vinculado a estes Termos e Condições. Se não concordar com
                alguma parte destes termos, não deverá utilizar o nosso website
                ou serviços.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                2. Descrição dos Serviços
              </h2>
              <p>
                A Outstanding Solutions fornece serviços de consultoria
                financeira, contabilidade, fiscalidade e gestão de recursos
                humanos para empresas. Os serviços específicos são acordados
                individualmente com cada cliente.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                3. Responsabilidades do Cliente
              </h2>
              <p>O cliente compromete-se a:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Fornecer informações precisas e completas necessárias para a
                  prestação dos serviços
                </li>
                <li>
                  Manter a confidencialidade de quaisquer credenciais de acesso
                  fornecidas
                </li>
                <li>Utilizar os serviços de acordo com a legislação aplicável</li>
                <li>Efetuar os pagamentos nos prazos acordados</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                4. Propriedade Intelectual
              </h2>
              <p>
                Todo o conteúdo presente neste website, incluindo textos,
                gráficos, logótipos, imagens e software, é propriedade da
                Outstanding Solutions ou dos seus licenciadores e está protegido
                por leis de propriedade intelectual.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                5. Limitação de Responsabilidade
              </h2>
              <p>
                A Outstanding Solutions não será responsável por quaisquer danos
                indiretos, incidentais, especiais ou consequenciais resultantes
                da utilização ou incapacidade de utilização dos nossos serviços,
                exceto na medida exigida por lei.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                6. Confidencialidade
              </h2>
              <p>
                Comprometemo-nos a manter a confidencialidade de todas as
                informações fornecidas pelos nossos clientes. Todas as
                informações comerciais e financeiras são tratadas com o máximo
                sigilo profissional.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                7. Alterações aos Termos
              </h2>
              <p>
                Reservamo-nos o direito de modificar estes Termos e Condições a
                qualquer momento. As alterações entram em vigor imediatamente
                após a sua publicação no website. O uso continuado dos serviços
                após quaisquer alterações constitui aceitação dos novos termos.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                8. Lei Aplicável
              </h2>
              <p>
                Estes Termos e Condições são regidos pela legislação portuguesa.
                Qualquer litígio será submetido à jurisdição exclusiva dos
                tribunais portugueses.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                9. Contacto
              </h2>
              <p>
                Para questões relacionadas com estes Termos e Condições,
                contacte-nos através de:
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
