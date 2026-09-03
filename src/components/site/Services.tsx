import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowUpRight,
  Brain,
  BriefcaseBusiness,
  Building2,
  ChevronLeft,
  ChevronRight,
  Code2,
  Crown,
  GraduationCap,
  HeartPulse,
  Landmark,
  Palette,
  Pause,
  Play,
  Rocket,
  Scale,
  UsersRound,
} from "lucide-react";
import { useEffect, useState } from "react";

const services = [
  {
    icon: BriefcaseBusiness,
    title: "Career & Education",
    description: "Career paths, course choices, transitions and practical next steps.",
    examples: ["Career direction", "College choices", "Professional transitions"],
    status: "Profiles available",
  },
  {
    icon: GraduationCap,
    title: "Study Abroad",
    description: "Independent guidance on destinations, affordability and application readiness.",
    examples: ["Country shortlisting", "SOP and applications", "Scholarships"],
    status: "Profiles available",
  },
  {
    icon: Brain,
    title: "Mental Wellness",
    description: "Private conversations with appropriately qualified wellness professionals.",
    examples: ["Stress and anxiety", "Relationships", "Life transitions"],
    status: "Profiles available",
  },
  {
    icon: Scale,
    title: "Legal & Documentation",
    description:
      "Find verified legal professionals for general guidance and document-related needs.",
    examples: ["Contracts", "Consumer matters", "Documentation"],
    status: "Onboarding consultants",
  },
  {
    icon: Landmark,
    title: "Finance & Tax",
    description:
      "Consult qualified professionals for personal finance, tax and compliance questions.",
    examples: ["Tax planning", "Personal finance", "Compliance"],
    status: "Onboarding consultants",
  },
  {
    icon: Rocket,
    title: "Business & Startup",
    description: "Practical one-to-one input for founders, small businesses and growing teams.",
    examples: ["Business planning", "Go-to-market", "Operations"],
    status: "Onboarding consultants",
  },
  {
    icon: Code2,
    title: "Technology & Digital",
    description: "Expert guidance for technology choices, digital delivery and product decisions.",
    examples: ["Technology strategy", "Product guidance", "Digital transformation"],
    status: "Onboarding consultants",
  },
  {
    icon: HeartPulse,
    title: "Health & Nutrition",
    description:
      "Connect with appropriately licensed professionals for general wellbeing guidance.",
    examples: ["Nutrition", "Lifestyle planning", "Preventive wellbeing"],
    status: "Onboarding consultants",
  },
  {
    icon: UsersRound,
    title: "Relationships & Family",
    description: "Structured support for communication, parenting and family transitions.",
    examples: ["Communication", "Parenting", "Family wellbeing"],
    status: "Onboarding consultants",
  },
  {
    icon: Building2,
    title: "Real Estate & Property",
    description: "Specialist guidance for property research, documentation and decision support.",
    examples: ["Property evaluation", "Documentation", "Investment questions"],
    status: "Onboarding consultants",
  },
  {
    icon: Palette,
    title: "Design & Creative",
    description:
      "Portfolio, creative-career and independent-practice guidance from experienced mentors.",
    examples: ["Portfolio review", "Creative careers", "Freelance practice"],
    status: "Onboarding consultants",
  },
  {
    icon: Crown,
    title: "Leadership & Executive",
    description:
      "Confidential guidance for leadership decisions, communication and team effectiveness.",
    examples: ["Leadership clarity", "Executive presence", "Team decisions"],
    status: "Onboarding consultants",
  },
];

const pageSize = 3;

export function Services() {
  const [page, setPage] = useState(0);
  const [manualPaused, setManualPaused] = useState(false);
  const [interactionPaused, setInteractionPaused] = useState(false);
  const [itemsPerSlide, setItemsPerSlide] = useState(pageSize);
  const paused = manualPaused || interactionPaused;

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const update = () => {
      setItemsPerSlide(media.matches ? pageSize : 1);
      setPage(0);
    };
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const pageCount = Math.ceil(services.length / itemsPerSlide);
  const activeServices = services.slice(page * itemsPerSlide, page * itemsPerSlide + itemsPerSlide);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setPage((current) => (current + 1) % pageCount);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [pageCount, paused]);

  const previous = () => setPage((current) => (current - 1 + pageCount) % pageCount);
  const next = () => setPage((current) => (current + 1) % pageCount);

  return (
    <section
      id="services"
      className="relative overflow-hidden py-20 lg:py-28"
      onMouseEnter={() => setInteractionPaused(true)}
      onMouseLeave={() => setInteractionPaused(false)}
      onFocusCapture={() => setInteractionPaused(true)}
      onBlurCapture={() => setInteractionPaused(false)}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Consultation categories
            </div>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight lg:text-5xl">
              Start with the decision you need help making.
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Explore a broader marketplace across personal, professional and specialist needs.
              Every category will use its own verification requirements and intake questions.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={previous}
              aria-label="Previous consultation categories"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card hover:border-primary/40"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next consultation categories"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="relative mt-12 min-h-[410px] md:min-h-[390px]" aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={page}
              initial={{ opacity: 0, x: 48 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -48 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="absolute inset-x-0 top-0 grid gap-6 md:grid-cols-3"
            >
              {activeServices.map((service) => (
                <article
                  key={service.title}
                  className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/35 hover:shadow-glow"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <service.icon className="h-6 w-6" />
                    </span>
                    <span
                      className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider ${service.status === "Profiles available" ? "bg-primary/10 text-primary" : "bg-gold/12 text-foreground"}`}
                    >
                      {service.status}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-5 space-y-2 text-sm">
                    {service.examples.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/experts"
                    className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-primary"
                  >
                    Explore category <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div
          className="mt-5 flex items-center justify-center gap-2"
          aria-label="Category slide selection"
        >
          {Array.from({ length: pageCount }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setPage(index)}
              aria-label={`Show category slide ${index + 1}`}
              aria-current={page === index ? "true" : undefined}
              className={`h-2.5 rounded-full transition-all ${page === index ? "w-9 bg-primary" : "w-2.5 bg-border hover:bg-primary/40"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
