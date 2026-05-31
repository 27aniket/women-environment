import { motion } from "framer-motion";
import { Award, Globe2, HeartHandshake, Leaf } from "lucide-react";
import about from "@/assets/about-plantation.jpg";

const pillars = [
  { icon: Leaf, title: "Climate Action", desc: "Native-species plantation that restores ecosystems and sequesters carbon." },
  { icon: HeartHandshake, title: "Women Empowerment", desc: "Livelihood, leadership, and skills for rural women across India." },
  { icon: Globe2, title: "ESG Aligned", desc: "Transparent, measurable, and audit-ready environmental impact." },
  { icon: Award, title: "Community Owned", desc: "Champions lead — we provide tools, training, and a global stage." },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-24 bg-gradient-soft">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[2rem] shadow-elevated">
            <img src={about} alt="Aerial view of plantation" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-8 -right-4 rounded-2xl bg-card p-5 shadow-elevated ring-1 ring-border sm:-right-8">
            <div className="font-display text-3xl font-bold gradient-text">98%</div>
            <div className="mt-1 text-xs font-medium text-muted-foreground">Sapling survival rate</div>
          </div>
          <div className="absolute -top-6 -left-4 rounded-2xl bg-gradient-primary p-5 text-primary-foreground shadow-glow">
            <div className="font-display text-2xl font-bold">12+ States</div>
            <div className="mt-1 text-xs opacity-90">Active plantations</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            About the Mission
          </div>
          <h2 className="mt-6 font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl">
            A platform built for <span className="gradient-text">measurable</span> green impact.
          </h2>
          <p className="mt-6 text-base text-muted-foreground sm:text-lg">
            The Women Green Champions Portal showcases verified plantation initiatives led by women,
            documented with location data, tree counts, and environmental impact — ready for CSR,
            ESG, and government partners to back at scale.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group rounded-2xl bg-card p-5 ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-soft hover:ring-primary/30"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary text-white shadow-soft transition group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-4 font-display text-lg font-semibold text-foreground">{p.title}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{p.desc}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
