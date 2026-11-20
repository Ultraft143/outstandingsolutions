import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Link } from "react-router-dom";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "geral@outstanding.pt",
    href: "mailto:geral@outstanding.pt",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "+351 962 344 785",
    href: "tel:+351962344785",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Rua Dr. Gomes Leal 3A, Torres Vedras 2560-331",
    href: "https://maps.google.com/?q=Rua+Dr.+Gomes+Leal+3A+Torres+Vedras",
  },
  {
    icon: Clock,
    label: "Horário",
    value: "Seg - Sex: 9:00 - 13:00 / 14:00 - 18:00",
    href: null,
  },
];

// Form submissions are delivered by FormSubmit (https://formsubmit.co) to the
// general mailbox. The first submission triggers an activation email that must
// be confirmed from geral@outstanding.pt before messages start arriving.
// After activation, FormSubmit provides a random alias: set it at build time as
// VITE_FORMSUBMIT_ID so the email address is no longer exposed in the bundle.
const CONTACT_FORM_ENDPOINT = `https://formsubmit.co/ajax/${
  import.meta.env.VITE_FORMSUBMIT_ID || "geral@outstanding.pt"
}`;

// Submissions faster than this after the page loads are almost certainly bots.
const MIN_FILL_TIME_MS = 3000;

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.5!2d-9.2585!3d39.0917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd18e7d9c9c9c9c9%3A0x0!2sRua%20Dr.%20Gomes%20Leal%203A%2C%20Torres%20Vedras!5e0!3m2!1spt-PT!2spt!4v1700000000000!5m2!1spt-PT!2spt";

const interests = [
  { id: "consultoria", label: "Consultoria Financeira" },
  { id: "contabilidade", label: "Contabilidade/Fiscalidade" },
  { id: "rh", label: "RH/IEFP" },
  { id: "outro", label: "Outro" },
];

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    interesses: [] as string[],
  });

  const [isSending, setIsSending] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [showMap, setShowMap] = useState(false);
  const mountedAt = useRef(Date.now());

  const resetForm = () =>
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      empresa: "",
      interesses: [],
    });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSending) return;

    // Likely spam (honeypot filled or submitted too fast): pretend it worked
    // without sending anything, so bots get no signal.
    if (honeypot || Date.now() - mountedAt.current < MIN_FILL_TIME_MS) {
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contacto consigo brevemente.",
      });
      resetForm();
      return;
    }

    setIsSending(true);

    const interessesLabels = interests
      .filter((i) => formData.interesses.includes(i.id))
      .map((i) => i.label)
      .join(", ");

    try {
      const response = await fetch(CONTACT_FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Nome: formData.nome,
          Empresa: formData.empresa,
          // FormSubmit sets Reply-To from a field named exactly "email" (with _replyto).
          email: formData.email,
          Telefone: formData.telefone || "—",
          "Área de Interesse": interessesLabels || "—",
          _subject: `Novo contacto do site — ${formData.nome} (${formData.empresa})`,
          _replyto: formData.email,
          _template: "table",
        }),
      });

      const result = await response.json().catch(() => null);
      if (!response.ok || (result && String(result.success) === "false")) {
        throw new Error(result?.message || `HTTP ${response.status}`);
      }

      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contacto consigo brevemente.",
      });
      resetForm();
    } catch {
      toast({
        variant: "destructive",
        title: "Não foi possível enviar a mensagem",
        description:
          "Por favor tente novamente ou contacte-nos diretamente para geral@outstanding.pt.",
      });
    } finally {
      setIsSending(false);
    }
  };

  const toggleInterest = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      interesses: prev.interesses.includes(id)
        ? prev.interesses.filter((i) => i !== id)
        : [...prev.interesses, id],
    }));
  };

  return (
    <section id="contacto" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <AnimatedSection className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Fale Connosco
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Está preparado para dar o próximo passo?
          </h2>
        </AnimatedSection>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <AnimatedSection animation="fade-left" delay={100}>
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                Envie-nos uma mensagem
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome *</Label>
                    <Input
                      id="nome"
                      required
                      value={formData.nome}
                      onChange={(e) =>
                        setFormData({ ...formData, nome: e.target.value })
                      }
                      placeholder="O seu nome"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="empresa">Nome da Empresa *</Label>
                    <Input
                      id="empresa"
                      required
                      value={formData.empresa}
                      onChange={(e) =>
                        setFormData({ ...formData, empresa: e.target.value })
                      }
                      placeholder="Nome da sua empresa"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Profissional *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="email@empresa.pt"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefone">Contacto Telefónico</Label>
                    <Input
                      id="telefone"
                      type="tel"
                      value={formData.telefone}
                      onChange={(e) =>
                        setFormData({ ...formData, telefone: e.target.value })
                      }
                      placeholder="+351 000 000 000"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>
                    Qual o seu principal desafio financeiro atual? (Área de
                    Interesse)
                  </Label>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {interests.map((interest) => (
                      <label
                        key={interest.id}
                        className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary/50 cursor-pointer transition-colors"
                      >
                        <Checkbox
                          checked={formData.interesses.includes(interest.id)}
                          onCheckedChange={() => toggleInterest(interest.id)}
                        />
                        <span className="text-sm">{interest.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Honeypot anti-spam field — hidden from real users */}
                <input
                  type="text"
                  name="_honey"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={isSending}
                >
                  <Send className="w-4 h-4" />
                  {isSending ? "A enviar..." : "Enviar Mensagem"}
                </Button>

                {/* RGPD art. 13 — inform at the point of collection */}
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Os dados que nos envia são usados apenas para responder ao seu
                  pedido de contacto. Saiba como os tratamos e quais os seus
                  direitos na nossa{" "}
                  <Link
                    to="/politica-privacidade/"
                    className="text-primary underline hover:text-primary/80"
                  >
                    Política de Privacidade
                  </Link>
                  .
                </p>
              </form>
            </div>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection animation="fade-right" delay={200} className="flex flex-col justify-center">
            <div className="bg-gradient-hero rounded-2xl p-8 text-primary-foreground">
              <h3 className="font-display text-2xl font-semibold mb-8">
                Informações de Contacto
              </h3>

              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-primary-foreground/60 mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="font-medium hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Google Maps */}
              {/* Google Maps — only loaded after the visitor asks for it, so no
                  data is sent to Google on page load. */}
              <div className="mt-8 rounded-xl overflow-hidden">
                {showMap ? (
                  <iframe
                    src={MAP_EMBED_URL}
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Localização Outstanding Solutions"
                    className="rounded-xl"
                  ></iframe>
                ) : (
                  <button
                    type="button"
                    onClick={() => setShowMap(true)}
                    className="w-full h-[200px] rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/15 border border-primary-foreground/20 flex flex-col items-center justify-center gap-2 px-6 text-center transition-colors"
                  >
                    <MapPin className="w-7 h-7" />
                    <span className="font-semibold">Mostrar mapa</span>
                    <span className="text-xs text-primary-foreground/70">
                      Ao carregar o mapa, o Google recebe dados de navegação
                      (como o seu endereço IP).
                    </span>
                  </button>
                )}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
