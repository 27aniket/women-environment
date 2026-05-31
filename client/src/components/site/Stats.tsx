import { motion } from "framer-motion";
import { Trees, Users, Map, Wind } from "lucide-react";
import { Counter } from "./Counter";

const stats = [
  { icon: Trees, label: "Trees Planted", value: 12500, suffix: "+", tint: "from-leaf to-forest" },
  { icon: Users, label: "Women Champions", value: 450, suffix: "+", tint: "from-forest to-leaf" },
  { icon: Map, label: "Acres Restored", value: 180, suffix: "+", tint: "from-leaf to-gold" },
  { icon: Wind, label: "CO₂ Tons Offset", value: 650, suffix: "+", tint: "from-gold to-leaf" },
];

export function Stats() {
  return (
    <section id="impact" className="relative -mt-24 px-6 pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-3xl glass p-6 shadow-elevated transition-all hover:shadow-glow md:p-8"
              >
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${s.tint} shadow-soft`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="font-display text-4xl font-bold text-foreground md:text-5xl">
                  <Counter to={s.value} />
                  <span className="gradient-text">{s.suffix}</span>
                </div>
                <div className="mt-2 text-sm font-medium text-muted-foreground">{s.label}</div>
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-primary opacity-0 blur-3xl transition-opacity group-hover:opacity-20" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
