import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";
import { TrendingUp, Users, Award, Briefcase } from "lucide-react";

const stats = [
  { icon: Briefcase, value: 15, suffix: "+", label: "Anos de experiência" },
  { icon: Users, value: 80, suffix: "+", label: "Clientes ativos" },
  { icon: TrendingUp, value: 100, suffix: "%", label: "Foco no cliente" },
  { icon: Award, value: 3, suffix: "", label: "Áreas de especialização" },
];

function StatItem({
  icon: Icon,
  value,
  suffix,
  label,
  inView,
  delay,
}: {
  icon: typeof Briefcase;
  value: number;
  suffix: string;
  label: string;
  inView: boolean;
  delay: number;
}) {
  const count = useCountUp(value, inView, 1800);

  return (
    <div
      className="group text-center transition-all duration-700"
      style={{
        transitionDelay: `${delay}ms`,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
      }}
    >
      <div className="inline-flex w-14 h-14 rounded-2xl bg-gradient-teal items-center justify-center mb-4 shadow-teal group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
        <Icon className="w-7 h-7 text-primary-foreground" />
      </div>
      <div className="font-display text-4xl md:text-5xl font-bold text-foreground tabular-nums">
        {count}
        <span className="text-gradient-teal">{suffix}</span>
      </div>
      <p className="text-sm text-muted-foreground mt-2 font-medium">{label}</p>
    </div>
  );
}

export function StatsStrip() {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <section ref={ref} className="relative py-16 bg-card border-y border-border overflow-hidden">
      <div className="absolute inset-0 bg-dots-pattern opacity-30" />
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <StatItem
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              inView={isInView}
              delay={i * 120}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
