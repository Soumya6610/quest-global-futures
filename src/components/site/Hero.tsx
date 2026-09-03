import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  MapPinned,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const highlights = [
  {
    icon: MapPinned,
    label: "City discovery",
    value: "6 cities",
    note: "with online access nationwide",
  },
  { icon: Star, label: "Review preview", value: "4.8 avg.", note: "across sample expert profiles" },
  { icon: BadgeCheck, label: "Trust layer", value: "Verified", note: "admin approval designed in" },
];

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-dvh items-center overflow-hidden text-white">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          width={1920}
          height={1280}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[var(--navy-deep)]/70" />
        <div className="absolute inset-0 bg-aurora opacity-65" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />
      </div>
      <div className="container relative mx-auto px-4 pb-24 pt-36 lg:px-8 lg:pb-32 lg:pt-44">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_300px] xl:gap-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs font-medium text-white/85"
            >
              <Sparkles className="h-3.5 w-3.5 text-gold" /> Built for private one-to-one guidance
              across India
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[0.98] tracking-tight text-balance sm:text-6xl lg:text-7xl xl:text-8xl"
            >
              Find clarity with the <span className="text-gradient-gold">right expert</span> by your
              side.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-7 max-w-2xl text-lg leading-relaxed text-white/75 lg:text-xl"
            >
              Discover consultants for career decisions, study abroad planning and mental wellness.
              Compare their approach, language, fee and availability before you book.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <Button variant="hero" size="xl" asChild>
                <Link to="/experts">
                  <Search className="h-5 w-5" /> Find an expert
                </Link>
              </Button>
              <Button variant="glass" size="xl" asChild>
                <Link to="/auth">
                  Log in or register <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs text-white/65"
            >
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-gold" /> Browse before registering
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-gold" /> Credential verification designed in
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-gold" /> Fees shown in INR
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/10 pt-5 text-[11px] uppercase tracking-[0.14em] text-white/45"
            >
              <span className="text-white/75">Built for</span>
              <span>Students</span>
              <span>Professionals</span>
              <span>Families</span>
              <span>Consultants</span>
            </motion.div>
          </div>

          <div className="hidden space-y-4 lg:block">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.label}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: 0.35 + index * 0.12 }}
                className={`rounded-2xl glass-dark p-4 shadow-elevated ${index === 1 ? "xl:-translate-x-10" : ""}`}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-gold">
                    <highlight.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/45">
                      {highlight.label}
                    </div>
                    <div className="mt-0.5 font-display text-lg font-bold">{highlight.value}</div>
                    <div className="text-[11px] text-white/50">{highlight.note}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
