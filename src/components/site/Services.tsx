import { motion } from "motion/react";
import {
  GraduationCap,
  Briefcase,
  HeartPulse,
  Plane,
  Sparkles,
  Award,
  Building2,
  Brain,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { icon: GraduationCap, title: "Career Counseling for Students", desc: "Discover your strengths and design a future-ready path from Class 8 onwards.", tag: "Students" },
  { icon: Briefcase, title: "Career Counseling for Professionals", desc: "Pivot, advance, or reinvent — backed by data and decade-long expertise.", tag: "Professionals" },
  { icon: HeartPulse, title: "Psychological Counseling", desc: "Confidential, evidence-based therapy from licensed clinical psychologists.", tag: "Wellness" },
  { icon: Plane, title: "Study Abroad Guidance", desc: "End-to-end admissions, SOP, visa, scholarships across 32 destinations.", tag: "Global" },
  { icon: Sparkles, title: "Life Coaching & Wellness", desc: "Habit design, confidence, relationships — a calm, intentional life.", tag: "Coaching" },
  { icon: Award, title: "Training & Certification", desc: "Career launchpad programs with industry-recognized credentials.", tag: "Skill" },
  { icon: Building2, title: "Corporate Training", desc: "Leadership, EQ, and wellbeing programs for high-performing teams.", tag: "Enterprise" },
  { icon: Brain, title: "Psychometric Assessments", desc: "Globally validated tools: DMIT, MBTI, Big Five, aptitude & interest.", tag: "Assessments" },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary font-semibold">
              <span className="h-px w-8 bg-primary/40" /> What we do
            </div>
            <h2 className="mt-4 font-display text-4xl lg:text-5xl font-bold tracking-tight text-balance">
              An integrated practice for <span className="text-gradient-brand">mind, career & life</span>.
            </h2>
          </div>
          <p className="text-muted-foreground lg:max-w-md">
            Each engagement combines scientific assessment, expert mentorship, and a personalized roadmap — built around your story, not a template.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
              className="group relative rounded-3xl p-6 bg-card border border-border hover:border-primary/40 hover:-translate-y-1 hover:shadow-glow transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <s.icon className="h-6 w-6" />
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground bg-muted px-2 py-1 rounded-full">
                  {s.tag}
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold leading-snug">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="mt-5 -ml-3 text-primary hover:text-primary"
              >
                <a href="#book">
                  Book Session <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}