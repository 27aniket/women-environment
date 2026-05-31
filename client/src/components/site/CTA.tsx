import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-primary p-10 text-primary-foreground shadow-elevated sm:p-16"
      >
        <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gold/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-leaf/40 blur-3xl" />
        <div className="relative grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em]">
              Partner With Us
            </div>
            <h2 className="mt-5 font-display text-4xl font-bold leading-tight sm:text-5xl">
              Sponsor a champion. <br />
              <span className="text-gold">Grow a forest.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base text-white/90">
              Join leading ESG and CSR teams backing women-led plantation across India.
              Every contribution is traceable, audit-ready, and measured in real trees.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href="mailto:partners@womengreen.org"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-base font-semibold text-primary shadow-soft transition hover:scale-[1.02] hover:shadow-gold"
            >
              <Mail className="h-5 w-5" />
              Partner With Us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#champions"
              className="inline-flex items-center justify-center gap-2 rounded-full glass-dark px-6 py-4 text-base font-semibold text-white transition hover:bg-white/15"
            >
              Browse Champions
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
