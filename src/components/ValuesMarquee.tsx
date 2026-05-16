const values = [
  "Transparência",
  "Compromisso",
  "Multidisciplinaridade",
  "Foco no Cliente",
  "Crescimento Sustentado",
  "Empatia",
  "Rigor",
  "Inovação",
  "Confiança",
  "Estabilidade",
];

export function ValuesMarquee() {
  const doubled = [...values, ...values];

  return (
    <section
      aria-label="Os nossos valores"
      className="relative bg-secondary py-8 overflow-hidden border-y border-secondary/30"
    >
      <div className="mask-fade-edges overflow-hidden">
        <div className="flex gap-16 animate-marquee whitespace-nowrap w-max">
          {doubled.map((v, i) => (
            <div key={i} className="flex items-center gap-16 text-primary-foreground/90">
              <span className="font-display text-2xl md:text-3xl font-semibold">
                {v}
              </span>
              <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
