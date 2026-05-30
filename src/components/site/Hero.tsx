import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowRight, Play, Sparkles, GraduationCap, Brain, Globe2 } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const floatCards = [
  { icon: Brain, label: "Wellness", value: "98%", sub: "Client Wellbeing", pos: "top-[18%] left-[4%]", delay: 0 },
  { icon: GraduationCap, label: "Admits", value: "1.2k+", sub: "Top Universities", pos: "top-[58%] left-[2%]", delay: 0.2 },
  { icon: Globe2, label: "Countries", value: "32", sub: "Global Network", pos: "top-[22%] right-[4%]", delay: 0.4 },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-dvh flex items-center overflow-hidden text-white"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          width={1920}
          height={1280}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[var(--navy-deep)]/55" />
        <div className="absolute inset-0 bg-aurora opacity-70" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-32 pb-24 lg:pt-40 lg:pb-32 relative">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium text-white/85"
          >
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            Trusted by 25,000+ globally · Since 2012
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight text-balance"
          >
            Empowering Lives.{" "}
            <span className="text-gradient-gold">Transforming</span> Careers.
            Building Futures.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-7 max-w-2xl text-lg lg:text-xl text-white/75 leading-relaxed text-balance"
          >
            Professional career counseling, psychological wellness, study abroad
            guidance, life coaching &amp; global mentorship — under one roof.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#book">
                Book Free Consultation <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href="#services">
                <Play className="h-4 w-4" /> Explore Services
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-white/60"
          >
            <span className="uppercase tracking-[0.18em]">Featured in</span>
            {["Forbes", "BusinessLine", "YourStory", "EdTech Global", "Mindvalley"].map((b) => (
              <span key={b} className="text-sm font-semibold text-white/75 tracking-wide">
                {b}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating stat cards */}
      <div className="hidden md:block">
        {floatCards.map((c) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 + c.delay }}
            className={`absolute ${c.pos} animate-float`}
            style={{ animationDelay: `${c.delay}s` }}
          >
            <div className="glass-dark rounded-2xl p-4 pr-6 flex items-center gap-3 shadow-elevated min-w-[180px]">
              <span className="h-11 w-11 rounded-xl bg-[var(--gradient-gold)] flex items-center justify-center">
                <c.icon className="h-5 w-5 text-navy-deep" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-wider text-white/60">{c.label}</div>
                <div className="font-display text-xl font-bold">{c.value}</div>
                <div className="text-[11px] text-white/60">{c.sub}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}