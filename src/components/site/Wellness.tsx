import { motion } from "motion/react";
import { Heart, Wind, Users, Baby, UserCheck, Sparkles, Crown } from "lucide-react";
import { Link } from "@tanstack/react-router";

const items = [
  { icon: Wind, title: "Anxiety Management", desc: "Cognitive tools to quiet the noise." },
  { icon: Heart, title: "Stress Management", desc: "Regulate, restore, and rebuild balance." },
  { icon: Users, title: "Relationship Counseling", desc: "Repair, deepen, or reset what matters." },
  { icon: Baby, title: "Child Counseling", desc: "Safe space for big feelings, age 6–17." },
  { icon: UserCheck, title: "Parenting Guidance", desc: "Modern parenting, grounded in research." },
  {
    icon: Sparkles,
    title: "Confidence Coaching",
    desc: "Voice, presence, and unshakable self-trust.",
  },
  { icon: Crown, title: "Executive Coaching", desc: "Leadership clarity for C-suite & founders." },
];

export function Wellness() {
  return (
    <section id="wellness" className="relative py-24 lg:py-32 bg-navy text-white overflow-hidden">
      <div className="absolute inset-0 bg-aurora opacity-50" />
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-start">
          <div className="lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold font-semibold">
              <span className="h-px w-8 bg-gold/40" /> Mental Wellness
            </div>
            <h2 className="mt-4 font-display text-4xl lg:text-5xl font-bold tracking-tight text-balance">
              Life is more than a job title.{" "}
              <span className="text-gradient-gold">We tend to all of it.</span>
            </h2>
            <p className="mt-5 text-white/70 leading-relaxed max-w-md">
              Find professionals for private conversations about stress, relationships, confidence
              and life transitions. Qualifications and scope must be verified before publication.
            </p>
            <Link
              to="/experts"
              className="mt-7 inline-flex rounded-full bg-gold px-5 py-3 text-sm font-semibold text-navy-deep"
            >
              Browse wellness experts
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {items.map((it, i) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: (i % 2) * 0.06 }}
                className="glass-dark rounded-2xl p-5 hover:bg-white/10 transition-colors"
              >
                <span className="inline-flex h-11 w-11 rounded-xl bg-gold/15 text-gold items-center justify-center">
                  <it.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold">{it.title}</h3>
                <p className="mt-1 text-sm text-white/65">{it.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
