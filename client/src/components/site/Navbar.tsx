import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { Leaf, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Home", to: "/", hash: "" },
  { label: "Impact", to: "/", hash: "#impact" },
  { label: "Champions", to: "/", hash: "#champions" },
  { label: "About", to: "/", hash: "#about" },
  { label: "Contact", to: "/", hash: "#contact" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const py = useTransform(scrollY, [0, 120], [20, 10]);
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      style={{ paddingTop: py, paddingBottom: py }}
      className="fixed inset-x-0 top-0 z-50 glass border-b border-white/30"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary shadow-glow transition-transform group-hover:scale-110">
            <Leaf className="h-5 w-5 text-white" />
          </span>
          <div className="leading-tight">
            <div className="font-display text-base font-bold text-foreground">Women Green</div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">Champions Portal</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={`${l.hash || "/"}`}
              className="group relative text-sm font-medium text-foreground/80 transition hover:text-foreground"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#champions"
          className="hidden rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:shadow-glow hover:scale-105 md:inline-flex"
        >
          Join Initiative
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-xl glass md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-white/30 bg-background/90 backdrop-blur-xl"
        >
          <div className="flex flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={`${l.hash || "/"}`}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#champions"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gradient-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            >
              Join Initiative
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
