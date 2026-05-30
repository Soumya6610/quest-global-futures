import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Priya R.", role: "Student · Now at MIT", quote: "TQGC's assessments helped me find a direction I'd never considered. The mentorship through SOPs and interviews was world-class.", rating: 5 },
  { name: "Marcus L.", role: "Senior PM, Singapore", quote: "I came in burnt-out and confused. Six months later I have a pivot plan, a coach, and my anxiety is finally manageable.", rating: 5 },
  { name: "Anita & Vikram", role: "Parents", quote: "Our daughter went from quiet and lost to engaged and confident. The child counseling team changed our household.", rating: 5 },
  { name: "Sara K.", role: "Founder, Dubai", quote: "Executive coaching with TQGC is the highest-ROI investment I've made in myself. Calm, clear, and incredibly senior.", rating: 5 },
  { name: "Aarav T.", role: "Class 12 · Bound for Toronto", quote: "They didn't sell me a country — they helped me discover the right one. Scholarship secured.", rating: 5 },
  { name: "Dr. Ifeoma O.", role: "International Client", quote: "Truly globally-minded. They understood my cross-cultural goals without judgment.", rating: 5 },
];

export function Stories() {
  return (
    <section id="stories" className="relative py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary font-semibold">
            <span className="h-px w-8 bg-primary/40" /> Success Stories
          </div>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl font-bold tracking-tight">
            Real people. <span className="text-gradient-brand">Real transformations.</span>
          </h2>
          <div className="mt-5 inline-flex items-center gap-2 text-sm">
            <span className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </span>
            <span className="font-semibold">4.9 / 5</span>
            <span className="text-muted-foreground">· 1,800+ verified reviews</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.07 }}
              className="rounded-3xl bg-card border border-border p-6 hover:shadow-glow hover:-translate-y-1 transition-all"
            >
              <Quote className="h-7 w-7 text-primary/40" />
              <blockquote className="mt-3 text-sm leading-relaxed">"{r.quote}"</blockquote>
              <figcaption className="mt-5 flex items-center justify-between border-t border-border pt-4">
                <div>
                  <div className="font-semibold text-sm">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
                <div className="flex">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                  ))}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}