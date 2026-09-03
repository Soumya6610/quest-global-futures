import { motion } from "motion/react";
import { Check, Minus } from "lucide-react";

const rows = [
  {
    feature: "Speciality, experience and approach",
    marketplace: "Visible",
    directory: "Often limited",
  },
  {
    feature: "City, language and consultation mode",
    marketplace: "Filterable",
    directory: "Manual search",
  },
  {
    feature: "Fee and session duration",
    marketplace: "Shown upfront",
    directory: "Ask separately",
  },
  { feature: "Credential-verification status", marketplace: "Designed in", directory: "Varies" },
  {
    feature: "Reviews tied to completed sessions",
    marketplace: "Designed in",
    directory: "May be anonymous",
  },
  {
    feature: "Booking, intake and follow-up",
    marketplace: "One account",
    directory: "Separate channels",
  },
];

export function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-white lg:py-32">
      <div className="absolute inset-0 bg-aurora opacity-45" />
      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            <span className="h-px w-8 bg-gold/40" /> Why this experience
          </div>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-balance lg:text-5xl">
            Better decisions begin with{" "}
            <span className="text-gradient-gold">better information.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-white/65">
            TQGC is being designed as a consultation marketplace, not just a list of phone numbers.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl overflow-hidden rounded-3xl glass-dark shadow-elevated"
        >
          <div className="grid grid-cols-[1.45fr_0.8fr_0.8fr] text-xs sm:text-sm">
            <div className="p-4 text-xs font-medium uppercase tracking-wider text-white/60 sm:p-6">
              What clients need
            </div>
            <div className="border-l border-white/10 p-4 text-center font-display font-bold text-gold sm:p-6">
              TQGC
            </div>
            <div className="border-l border-white/10 p-4 text-center font-display font-semibold text-white/60 sm:p-6">
              Basic directory
            </div>
            {rows.map((row, index) => (
              <div key={row.feature} className="contents">
                <div
                  className={`border-t border-white/10 p-4 sm:p-6 ${index % 2 ? "bg-white/[0.02]" : ""}`}
                >
                  {row.feature}
                </div>
                <div
                  className={`border-l border-t border-white/10 p-4 text-center sm:p-6 ${index % 2 ? "bg-white/[0.02]" : ""}`}
                >
                  <span className="inline-flex items-center gap-1.5 text-gold">
                    <Check className="h-4 w-4" />
                    <span className="hidden sm:inline">{row.marketplace}</span>
                  </span>
                </div>
                <div
                  className={`border-l border-t border-white/10 p-4 text-center text-white/50 sm:p-6 ${index % 2 ? "bg-white/[0.02]" : ""}`}
                >
                  <span className="inline-flex items-center gap-1.5">
                    <Minus className="h-4 w-4" />
                    <span className="hidden sm:inline">{row.directory}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
