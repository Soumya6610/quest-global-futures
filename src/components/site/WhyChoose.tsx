import { motion } from "motion/react";
import { Check, X } from "lucide-react";

const rows: { feat: string; us: boolean; them: boolean | string }[] = [
  { feat: "Scientific Psychometric Assessments", us: true, them: false },
  { feat: "Personalized Career Roadmap", us: true, them: false },
  { feat: "Mental Wellness Integration", us: true, them: false },
  { feat: "Global Opportunities Network", us: true, them: false },
  { feat: "Expert Mentors (Avg. 12+ yrs)", us: true, them: "Generic counselors" },
  { feat: "Long-Term Support & Reviews", us: true, them: false },
  { feat: "Multi-modal: Online · Video · In-Person", us: true, them: false },
];

export function WhyChoose() {
  return (
    <section className="relative py-24 lg:py-32 bg-navy text-white overflow-hidden">
      <div className="absolute inset-0 bg-aurora opacity-50" />
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold font-semibold">
            <span className="h-px w-8 bg-gold/40" /> Why TQGC
          </div>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            More than counseling. A complete <span className="text-gradient-gold">transformation system</span>.
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto rounded-3xl glass-dark overflow-hidden shadow-elevated"
        >
          <div className="grid grid-cols-[1.6fr_1fr_1fr] text-sm">
            <div className="p-5 lg:p-6 text-white/60 font-medium uppercase text-xs tracking-wider">Feature</div>
            <div className="p-5 lg:p-6 text-center font-display font-bold text-gold border-l border-white/10">TQGC</div>
            <div className="p-5 lg:p-6 text-center font-display font-semibold text-white/60 border-l border-white/10">Traditional</div>

            {rows.map((r, i) => (
              <div key={r.feat} className="contents">
                <div className={`p-5 lg:p-6 border-t border-white/10 ${i % 2 ? "bg-white/[0.02]" : ""}`}>
                  {r.feat}
                </div>
                <div className={`p-5 lg:p-6 border-t border-l border-white/10 text-center ${i % 2 ? "bg-white/[0.02]" : ""}`}>
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gold/20 text-gold">
                    <Check className="h-4 w-4" />
                  </span>
                </div>
                <div className={`p-5 lg:p-6 border-t border-l border-white/10 text-center text-white/60 ${i % 2 ? "bg-white/[0.02]" : ""}`}>
                  {r.them === true ? (
                    <Check className="h-4 w-4 mx-auto" />
                  ) : r.them === false ? (
                    <X className="h-4 w-4 mx-auto opacity-60" />
                  ) : (
                    <span className="text-xs">{r.them}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}