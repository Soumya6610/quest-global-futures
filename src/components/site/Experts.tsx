import { motion } from "motion/react";
import { Linkedin, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import e1 from "@/assets/expert-1.jpg";
import e2 from "@/assets/expert-2.jpg";
import e3 from "@/assets/expert-3.jpg";

const team = [
  { name: "Dr. Anaya Krishnan", role: "Lead Clinical Psychologist", years: "14 yrs", spec: "CBT · Anxiety · Adolescents", img: e1 },
  { name: "Sarah Whitfield", role: "Global Admissions Mentor", years: "11 yrs", spec: "Ivy League · UK · Europe", img: e2 },
  { name: "Rohan Mehta", role: "Career Strategist", years: "9 yrs", spec: "Tech Careers · Pivots · MBA", img: e3 },
];

export function Experts() {
  return (
    <section id="experts" className="relative py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary font-semibold">
            <span className="h-px w-8 bg-primary/40" /> Meet The Experts
          </div>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl font-bold tracking-tight">
            Senior practitioners. <span className="text-gradient-brand">Real outcomes.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((m, i) => (
            <motion.article
              key={m.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-3xl overflow-hidden bg-card border border-border hover:shadow-glow hover:-translate-y-1 transition-all"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={m.img}
                  alt={m.name}
                  loading="lazy"
                  width={640}
                  height={800}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />
                <a
                  href="#"
                  aria-label={`${m.name} on LinkedIn`}
                  className="absolute top-4 right-4 h-9 w-9 rounded-full glass-dark flex items-center justify-center text-white hover:bg-white/20"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <div className="text-xs uppercase tracking-wider text-gold">{m.years} experience</div>
                  <h3 className="mt-1 font-display text-xl font-semibold">{m.name}</h3>
                  <p className="text-sm text-white/75">{m.role}</p>
                </div>
              </div>
              <div className="p-5 flex items-center justify-between gap-3">
                <p className="text-sm text-muted-foreground">{m.spec}</p>
                <Button size="sm" variant="brand" asChild>
                  <a href="#book">
                    <CalendarDays className="h-4 w-4" /> Book
                  </a>
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}