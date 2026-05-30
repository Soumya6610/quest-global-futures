import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";
import { ShieldCheck, Award, Globe } from "lucide-react";

const stats = [
  { value: 12, suffix: "+", label: "Years of Experience" },
  { value: 2700, suffix: "+", label: "Clients Guided" },
  { value: 250, suffix: "+", label: "Professionals Trained" },
  { value: 25000, suffix: "+", label: "Community Members" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.floor(v).toLocaleString());

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, mv, to]);

  return (
    <span ref={ref} className="font-display text-5xl lg:text-6xl font-bold text-gradient-brand">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function Counters() {
  return (
    <section className="relative py-20 lg:py-28 bg-secondary/40 border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary font-semibold">
            <span className="h-px w-8 bg-primary/40" /> Proven Impact
            <span className="h-px w-8 bg-primary/40" />
          </div>
          <h2 className="mt-4 font-display text-3xl lg:text-5xl font-bold tracking-tight">
            A decade of guiding minds, careers, and futures.
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center p-6 rounded-3xl glass shadow-elevated"
            >
              <Counter to={s.value} suffix={s.suffix} />
              <p className="mt-3 text-sm font-medium text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-muted-foreground">
          {[
            { icon: ShieldCheck, label: "Govt. Registered (MSME)" },
            { icon: Award, label: "ISO 9001:2015 Certified" },
            { icon: Globe, label: "Global Mentor Network" },
          ].map((b) => (
            <div key={b.label} className="flex items-center gap-2 text-sm font-medium">
              <b.icon className="h-5 w-5 text-primary" />
              {b.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}