import { Link } from "react-router-dom";
import logoWhite from "@/assets/logo-white.png";

const footerLinks = [
  {
    title: "Navegação",
    links: [
      { label: "Início", href: "#inicio" },
      { label: "Quem Somos", href: "#quem-somos" },
      { label: "Soluções e Serviços", href: "#solucoes" },
      { label: "Onde Fazemos a Diferença", href: "#diferenca" },
    ],
  },
  {
    title: "Serviços",
    links: [
      { label: "Consultoria Financeira", href: "#solucoes" },
      { label: "Contabilidade", href: "#solucoes" },
      { label: "Fiscalidade", href: "#solucoes" },
      { label: "Gestão de RH", href: "#solucoes" },
    ],
  },
  {
    title: "Contacto",
    links: [
      { label: "geral@outstanding.pt", href: "mailto:geral@outstanding.pt" },
      { label: "+351 962 344 785", href: "tel:+351962344785" },
      { label: "Torres Vedras", href: "#contacto" },
    ],
  },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-2 -mt-8">
              <img 
                src={logoWhite} 
                alt="Outstanding Solutions"
                width={1920}
                height={1280}
                className="h-24 w-auto brightness-0 invert"
              />
            </div>
            <p className="-mt-2 text-secondary-foreground/70 text-sm leading-relaxed">
              O seu Gabinete de Consultoria Financeira B2B. Transformamos
              números em alavancas de crescimento e estabilidade.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4 text-primary">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("#") ? (
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-foreground/60 text-sm">
              © {new Date().getFullYear()} Outstanding Solutions. Todos os
              direitos reservados.
            </p>
            <div className="flex gap-6">
              <Link
                to="/politica-privacidade/"
                className="text-secondary-foreground/60 hover:text-primary text-sm transition-colors"
              >
                Política de Privacidade
              </Link>
              <Link
                to="/termos-condicoes/"
                className="text-secondary-foreground/60 hover:text-primary text-sm transition-colors"
              >
                Termos e Condições
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
