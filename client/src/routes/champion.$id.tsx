import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Download, Leaf, MapPin, Sprout, TreeDeciduous, Wind, X } from "lucide-react";
import { useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import {Footer }from "@/components/site/Footer";
import { champions, getChampion } from "@/data/champions";

export const Route = createFileRoute("/champion/$id")({
  loader: ({ params }) => {
    const champion = getChampion(params.id);
    if (!champion) throw notFound();
    return { champion };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.champion.name} — ${loaderData.champion.plantationType}` },
          { name: "description", content: loaderData.champion.description },
          { property: "og:title", content: `${loaderData.champion.name} — Green Champion` },
          { property: "og:description", content: loaderData.champion.description },
          { property: "og:image", content: loaderData.champion.detailImage },
        ]
      : [{ title: "Champion" }],
  }),
  component: ChampionDetail,
  notFoundComponent: () => (
    <div className="grid min-h-screen place-items-center bg-background px-6">
      <div className="text-center">
        <h1 className="font-display text-4xl font-bold">Champion not found</h1>
        <Link to="/" className="mt-4 inline-block text-primary underline">Go home</Link>
      </div>
    </div>
  ),
  errorComponent: ({ error, reset }) => {
    const router = useRouter();
    return (
      <div className="grid min-h-screen place-items-center bg-background px-6 text-center">
        <div>
          <h1 className="font-display text-3xl font-bold">Something went wrong</h1>
          <p className="mt-2 text-muted-foreground">{error.message}</p>
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="mt-4 rounded-full bg-gradient-primary px-5 py-2 text-sm font-semibold text-primary-foreground"
          >
            Try again
          </button>
        </div>
      </div>
    );
  },
});

function ChampionDetail() {
  const { champion } = Route.useLoaderData();
  const [lightbox, setLightbox] = useState<string | null>(null);

  const infoCards = [
    { icon: TreeDeciduous, label: "Trees Planted", value: champion.treesPlanted.toLocaleString() },
    { icon: Leaf, label: "Acres Restored", value: `${champion.acres} acres` },
    { icon: Wind, label: "CO₂ Offset", value: `${champion.co2Tons} tons / yr` },
    { icon: MapPin, label: "Location", value: champion.location },
    { icon: Calendar, label: "Plantation Date", value: champion.plantationDate },
    { icon: Sprout, label: "Type", value: champion.plantationType },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-28">
        {/* Breadcrumb + Back */}
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/"
              className="group inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-primary transition hover:bg-gradient-primary hover:text-primary-foreground"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Champions
            </Link>
            <nav className="text-xs font-medium text-muted-foreground">
              <Link to="/" className="hover:text-foreground">Home</Link>
              <span className="mx-2">/</span>
              <a href="/#champions" className="hover:text-foreground">Champions</a>
              <span className="mx-2">/</span>
              <span className="text-foreground">{champion.name}</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="relative mx-auto mt-10 max-w-7xl px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                <Sprout className="h-3.5 w-3.5" />
                {champion.role}
              </div>
              <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] text-foreground sm:text-6xl md:text-7xl">
                {champion.name}
              </h1>
              <div className="mt-4 text-xl font-medium gradient-text">{champion.plantationType}</div>
              <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">{champion.description}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={() => setLightbox(champion.detailImage)}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:scale-[1.03] hover:shadow-glow"
                >
                  View Certificate
                </button>
                <a
                  href={champion.detailImage}
                  download
                  className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground"
                >
                  <Download className="h-4 w-4" />
                  Download Poster
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[2rem] shadow-elevated ring-1 ring-border">
                <button
                  type="button"
                  onClick={() => setLightbox(champion.detailImage)}
                  className="block w-full"
                >
                  <img
                    src={champion.detailImage}
                    alt={`${champion.name} — ${champion.plantationType}`}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </button>
              </div>
              <div className="absolute -bottom-6 -left-4 rounded-2xl bg-card p-5 shadow-elevated ring-1 ring-border sm:-left-8">
                <div className="font-display text-3xl font-bold gradient-text">{champion.treesPlanted.toLocaleString()}</div>
                <div className="mt-1 text-xs font-medium text-muted-foreground">Trees planted</div>
              </div>
              <div className="absolute -top-4 -right-4 rounded-2xl bg-gradient-gold p-4 text-accent-foreground shadow-gold sm:-right-8">
                <div className="font-display text-xl font-bold">{champion.co2Tons}t</div>
                <div className="text-[10px] uppercase tracking-wider">CO₂ / year</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Info grid */}
        <section className="mx-auto mt-24 max-w-7xl px-6">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Plantation Details</h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {infoCards.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="group rounded-2xl bg-card p-6 ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-soft hover:ring-primary/30"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-white shadow-soft transition group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-4 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">{c.label}</div>
                  <div className="mt-1 font-display text-xl font-bold text-foreground">{c.value}</div>
                </motion.div>
              );
            })}
            <div className="rounded-2xl bg-gradient-primary p-6 text-primary-foreground shadow-elevated">
              <div className="text-xs font-semibold uppercase tracking-[0.15em] opacity-80">Coordinates</div>
              <div className="mt-3 font-mono text-sm">{champion.latitude}</div>
              <div className="font-mono text-sm">{champion.longitude}</div>
              <div className="mt-4 text-sm opacity-90">{champion.impact}</div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        {/* <section className="mx-auto mt-24 max-w-7xl px-6">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Gallery</h2>
            <span className="text-xs font-medium text-muted-foreground">Field documentation</span>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {champion.gallery.map((g: string, i: number) => (
              <motion.button
                key={i}
                type="button"
                onClick={() => setLightbox(g)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group relative overflow-hidden rounded-2xl shadow-soft ${i % 3 === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square"}`}
              >
                <img
                  src={g}
                  alt={`${champion.name} gallery ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.button>
            ))}
          </div>
        </section> */}

        {/* More champions */}
        <section className="mx-auto mt-24 max-w-7xl px-6">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">More Champions</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {champions.filter((c) => c.id !== champion.id).map((c) => (
              <Link
                key={c.id}
                to="/champion/$id"
                params={{ id: c.id }}
                className="group relative block overflow-hidden rounded-2xl bg-card ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-elevated"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={c.cardImage} alt={c.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="font-display text-xl font-bold">{c.name}</div>
                    <div className="text-xs opacity-90">{c.plantationType}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-24">
          <Footer />
        </div>
      </main>

      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[100] grid place-items-center bg-black/90 p-6 backdrop-blur-sm"
        >
          <button className="absolute top-6 right-6 grid h-12 w-12 place-items-center rounded-full glass-dark text-white">
            <X className="h-5 w-5" />
          </button>
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            src={lightbox}
            alt="Preview"
            className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain shadow-elevated"
          />
        </div>
      )}
    </div>
  );
}
