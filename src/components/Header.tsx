import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoHorizontal from "@/assets/logo-horizontal.png";
import logoWhite from "@/assets/logo-white.png";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#quem-somos", label: "Quem Somos" },
  { href: "#solucoes", label: "Soluções e Serviços" },
  { href: "#diferenca", label: "Onde Fazemos a Diferença" },
  { href: "#testemunhos", label: "O Que Dizem De Nós" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-card py-0"
          : "bg-transparent py-0"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("#inicio")}
          className="flex items-center"
        >
          <img 
            src={isScrolled ? logoHorizontal : logoWhite} 
            alt="Outstanding Solutions - Consultoria Financeira" 
            className="h-20 md:h-24 lg:h-28 w-auto transition-all duration-300"
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button
            variant="hero"
            size="lg"
            onClick={() => scrollToSection("#contacto")}
          >
            Fale Connosco
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-foreground" : "text-white"} size={28} />
          ) : (
            <Menu className={isScrolled ? "text-foreground" : "text-white"} size={28} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-card shadow-elevated animate-slide-up">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-left py-2 text-foreground font-medium hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Button
              variant="hero"
              size="lg"
              className="mt-4"
              onClick={() => scrollToSection("#contacto")}
            >
              Fale Connosco
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
