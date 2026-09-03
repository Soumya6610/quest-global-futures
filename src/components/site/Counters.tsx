import { animate, motion, useInView, useMotionValue, useTransform } from "motion/react";
import { BadgeCheck, Languages, MapPinned, SearchCheck } from "lucide-react";
import { useEffect, useRef } from "react";

const stats = [
  { value: 6, suffix: "", label: "Sample expert profiles" },
  { value: 6, suffix: "", label: "Indian cities represented" },
  { value: 12, suffix: "", label: "Consultation categories" },
  { value: 3, suffix: "", label: "Ways to consult" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const value = useMotionValue(0);
  const rounded = useTransform(value, (current) => Math.floor(current).toLocaleString("en-IN"));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(value, to, { duration: 1.4, ease: "easeOut" });
    return controls.stop;
  }, [inView, to, value]);

  return (
    <span ref={ref} className="font-display text-5xl font-bold text-gradient-brand lg:text-6xl">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function Counters() {
  return (
    <section className="relative border-y border-border bg-secondary/40 py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-8 bg-primary/40" /> Marketplace preview
            <span className="h-px w-8 bg-primary/40" />
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight lg:text-5xl">
            A clearer way to find one-to-one guidance.
          </h2>
          <p className="mt-4 text-muted-foreground">
            The frontend already demonstrates the information and safeguards the live marketplace
            will expose before a client books.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-3xl border border-border bg-card/75 p-5 text-center shadow-elevated backdrop-blur lg:p-7"
            >
              <Counter to={stat.value} suffix={stat.suffix} />
              <p className="mt-3 text-sm font-medium text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-muted-foreground">
          {[
            { icon: SearchCheck, label: "Browse before registering" },
            { icon: MapPinned, label: "City-based discovery" },
            { icon: Languages, label: "Language and format filters" },
            { icon: BadgeCheck, label: "Post-session review design" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-sm font-medium">
              <item.icon className="h-5 w-5 text-primary" />
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
