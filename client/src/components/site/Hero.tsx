import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import hero from "@/assets/hero-plantation.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-24">
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Women planting trees together at sunrise"
          className="h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.78_0.16_75_/_0.25),transparent_60%)]" />
      </div>

      {/* Floating elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[28%] h-32 w-32 rounded-full bg-leaf/30 blur-3xl animate-float" />
        <div className="absolute right-[12%] top-[40%] h-40 w-40 rounded-full bg-gold/30 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
        <div className="absolute left-[20%] bottom-[20%] h-28 w-28 rounded-full bg-leaf/25 blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl flex-col items-start justify-center px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white"
        >
          <Sparkles className="h-3.5 w-3.5 text-gold" />
          ESG · Sustainability · Climate Action
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-6 max-w-4xl font-display text-5xl font-extrabold leading-[1.05] text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]"
        >
          Women Leading{" "}
          <span className="relative inline-block">
            <span className="relative z-10 bg-gradient-to-r from-[oklch(0.9_0.18_140)] via-[oklch(0.85_0.16_145)] to-[oklch(0.78_0.16_75)] bg-clip-text text-transparent">
              Green Transformation
            </span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="absolute -bottom-2 left-0 h-[6px] w-full origin-left rounded-full bg-gradient-gold"
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-8 max-w-2xl text-lg text-white/85 sm:text-xl"
        >
          Empowering women to build sustainable communities through plantation,
          climate action, and environmental leadership across rural India.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#champions"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow transition-all hover:scale-[1.03] hover:shadow-elevated"
          >
            <span className="relative z-10">Explore Champions</span>
            <ArrowRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" />
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>
          <a
            href="#impact"
            className="inline-flex items-center gap-2 rounded-full glass-dark px-8 py-4 text-base font-semibold text-white transition hover:bg-white/15"
          >
            Join Initiative
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-16 flex flex-wrap items-center gap-8 text-white/70"
        >
          {["NGO Partners", "ESG Backed", "CSR Verified", "Govt. Aligned"].map((t) => (
            <div key={t} className="text-xs font-semibold uppercase tracking-[0.2em]">{t}</div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
