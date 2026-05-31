import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Sprout } from "lucide-react";
import { champions } from "@/data/champions";

export function ChampionsGrid() {
  return (
    <section id="champions" className="relative px-6 py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <Sprout className="h-3.5 w-3.5" />
            Women Green Champions
          </div>
          <h2 className="mt-6 font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl md:text-6xl">
            Meet the women rewriting
            <br />
            <span className="gradient-text">our climate story</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Inspiring leaders on the frontlines of rural plantation, biodiversity, and
            sustainable livelihoods — each one transforming her community, one tree at a time.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {champions.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link
                to="/champion/$id"
                params={{ id: c.id }}
                className="group relative block overflow-hidden rounded-3xl bg-card shadow-soft ring-1 ring-border/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-elevated hover:ring-primary/40"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={c.cardImage}
                    alt={c.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full glass-dark px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                    <Sprout className="h-3 w-3 text-leaf" />
                    {c.plantationType.split(" ")[0]}
                  </div>
                  <div className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full glass-dark text-white transition-transform group-hover:rotate-45">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <div className="font-display text-2xl font-bold leading-tight">{c.name}</div>
                    <div className="mt-1 text-sm text-white/85">{c.plantationType}</div>
                    <div className="mt-3 flex items-center gap-1.5 text-xs text-white/70">
                      <MapPin className="h-3.5 w-3.5" />
                      {c.location}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-5">
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-2xl font-bold gradient-text">{c.treesPlanted.toLocaleString()}</span>
                    <span className="text-xs font-medium text-muted-foreground">trees planted</span>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold text-primary transition group-hover:bg-gradient-primary group-hover:text-primary-foreground">
                    View Profile
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
