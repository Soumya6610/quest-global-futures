import { motion } from "motion/react";
import { ClipboardCheck, Map, BarChart3, MessageCircle, Target, Trophy } from "lucide-react";

const steps = [
  { icon: ClipboardCheck, title: "Self Assessment", desc: "Scientific psychometric profile across 80+ dimensions." },
  { icon: Map, title: "Career Mapping", desc: "Match aptitude, interest & opportunity into a clear shortlist." },
  { icon: BarChart3, title: "Skill Analysis", desc: "Identify gaps and create a focused learning plan." },
  { icon: MessageCircle, title: "Counseling Session", desc: "1:1 with senior expert. Online, video, or in-person." },
  { icon: Target, title: "Action Plan", desc: "Quarterly milestones with accountability check-ins." },
  { icon: Trophy, title: "Success Journey", desc: "Long-term mentorship through admits, jobs & life changes." },
];

export function Journey() {
  return (
    <section id="journey" className="relative py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary font-semibold">
            <span className="h-px w-8 bg-primary/40" /> The Quest Method
          </div>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl font-bold tracking-tight">
            Your discovery journey, <span className="text-gradient-brand">step by step</span>.
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden lg:block" />

          <div className="space-y-12 lg:space-y-20">
            {steps.map((s, i) => {
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5 }}
                  className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-center"
                >
                  <div className={left ? "lg:order-1" : "lg:order-2"}>
                    <div className="glass rounded-3xl p-7 shadow-elevated border border-border">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                          <s.icon className="h-5 w-5" />
                        </span>
                        <span className="text-xs uppercase tracking-wider text-muted-foreground">Step 0{i + 1}</span>
                      </div>
                      <h3 className="font-display text-2xl font-semibold">{s.title}</h3>
                      <p className="mt-2 text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                  <div className={`hidden lg:flex justify-center ${left ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="h-20 w-20 rounded-full bg-[var(--gradient-gold)] flex items-center justify-center font-display text-2xl font-bold text-navy-deep shadow-gold">
                      {i + 1}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}