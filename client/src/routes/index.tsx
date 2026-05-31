import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { ChampionsGrid } from "@/components/site/ChampionsGrid";
import { About } from "@/components/site/About";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Women Green Champions Portal — ESG & Plantation Impact" },
      {
        name: "description",
        content:
          "A premium platform showcasing women environmental champions leading plantation, climate action, and sustainable communities across India.",
      },
      { property: "og:title", content: "Women Green Champions Portal" },
      {
        property: "og:description",
        content: "Empowering women to create sustainable communities through plantation and climate action.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <ChampionsGrid />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
