import { useState } from "react";
import { motion } from "motion/react";
import { MapPin } from "lucide-react";

const countries = [
  { code: "US", name: "USA", flag: "🇺🇸", courses: "STEM · MBA · Data Science", scope: "$120k+ avg. starting", visa: "F-1 / OPT 36 months", scholarship: "Up to 100% merit aid" },
  { code: "CA", name: "Canada", flag: "🇨🇦", courses: "AI · Healthcare · Business", scope: "PR pathway in 3 yrs", visa: "Study Permit + PGWP", scholarship: "Vanier, OGS, Trillium" },
  { code: "UK", name: "UK", flag: "🇬🇧", courses: "Finance · Design · Law", scope: "Russell Group prestige", visa: "Graduate Route 2 yrs", scholarship: "Chevening, Commonwealth" },
  { code: "DE", name: "Germany", flag: "🇩🇪", courses: "Engineering · Auto · AI", scope: "Tuition-free public unis", visa: "Job Seeker 18 months", scholarship: "DAAD, Erasmus+" },
  { code: "AU", name: "Australia", flag: "🇦🇺", courses: "Nursing · IT · Business", scope: "Skilled migration friendly", visa: "Subclass 500 + 485", scholarship: "AAS, RTP, Endeavour" },
  { code: "SG", name: "Singapore", flag: "🇸🇬", courses: "Fintech · AI · Logistics", scope: "Asia HQ hub salaries", visa: "Student Pass + EP", scholarship: "ASEAN, SINGA" },
  { code: "JP", name: "Japan", flag: "🇯🇵", courses: "Robotics · Anime · Research", scope: "Bilingual edge advantage", visa: "Designated Activities", scholarship: "MEXT, JASSO" },
  { code: "EU", name: "Europe", flag: "🇪🇺", courses: "Liberal Arts · Tech · Design", scope: "Schengen mobility", visa: "Per-country student visa", scholarship: "Erasmus Mundus" },
];

export function Global() {
  const [active, setActive] = useState(countries[0]);

  return (
    <section id="global" className="relative py-24 lg:py-32 bg-secondary/40 border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary font-semibold">
            <span className="h-px w-8 bg-primary/40" /> Global Opportunities
          </div>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            One world. <span className="text-gradient-brand">Infinite pathways.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Tap a destination to see live insights from our admissions desk.</p>
        </div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 items-start">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {countries.map((c) => {
              const sel = active.code === c.code;
              return (
                <button
                  key={c.code}
                  onClick={() => setActive(c)}
                  className={`group text-left rounded-2xl p-5 border transition-all ${
                    sel
                      ? "bg-primary text-primary-foreground border-primary shadow-glow -translate-y-1"
                      : "bg-card border-border hover:border-primary/40 hover:-translate-y-0.5"
                  }`}
                >
                  <div className="text-3xl">{c.flag}</div>
                  <div className="mt-3 font-display font-semibold">{c.name}</div>
                  <div className={`text-xs mt-0.5 flex items-center gap-1 ${sel ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    <MapPin className="h-3 w-3" /> Explore
                  </div>
                </button>
              );
            })}
          </div>

          <motion.div
            key={active.code}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="rounded-3xl bg-card border border-border p-7 shadow-elevated"
          >
            <div className="flex items-center gap-3">
              <span className="text-4xl">{active.flag}</span>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Destination</div>
                <h3 className="font-display text-2xl font-bold">{active.name}</h3>
              </div>
            </div>
            <dl className="mt-6 space-y-4 text-sm">
              {[
                ["Popular Courses", active.courses],
                ["Career Scope", active.scope],
                ["Visa Guidance", active.visa],
                ["Scholarships", active.scholarship],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 border-b border-border pb-3 last:border-0">
                  <dt className="text-muted-foreground">{k}</dt>
                  <dd className="font-medium text-right">{v}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}