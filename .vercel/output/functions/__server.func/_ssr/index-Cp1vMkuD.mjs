import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { T as Toaster$1 } from "../_libs/sonner.mjs";
import { P as ProductHeader, B as Button } from "./ProductHeader-BK9LMNZM.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { m as motion } from "../_libs/motion.mjs";
import { e as experts } from "./router-DUENwKpS.mjs";
import { E as ExpertCard } from "./ExpertCard-v-APd21Y.mjs";
import { P as ProductFooter } from "./ProductFooter-C8JtqOvD.mjs";
import { S as Sparkles, a as Search, A as ArrowRight, C as CircleCheck, b as ShieldCheck, M as MapPinned, c as Star, B as BadgeCheck, d as SearchCheck, L as Languages, e as ChevronLeft, f as ChevronRight, g as ArrowUpRight, h as Check, i as Minus, U as UserRoundCheck, j as CalendarCheck2, k as MapPin, l as MonitorSmartphone, W as Wind, H as Heart, m as Users, n as Baby, o as UserCheck, p as Crown, Q as Quote, q as Bot, r as CalendarDays, I as IndianRupee, s as Headphones, t as Scale, u as LockKeyhole, T as TriangleAlert, v as BriefcaseBusiness, G as GraduationCap, w as Brain, x as Landmark, R as Rocket, y as CodeXml, z as HeartPulse, D as UsersRound, E as Building2, P as Palette } from "../_libs/lucide-react.mjs";
import { A as AnimatePresence, u as useInView, a as useMotionValue, b as useTransform, c as animate } from "../_libs/framer-motion.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function Navbar() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ProductHeader, { overlay: true });
}
const heroBg = "/assets/hero-bg-DVMqkC7y.jpg";
const highlights = [
  {
    icon: MapPinned,
    label: "City discovery",
    value: "6 cities",
    note: "with online access nationwide"
  },
  { icon: Star, label: "Review preview", value: "4.8 avg.", note: "across sample expert profiles" },
  { icon: BadgeCheck, label: "Trust layer", value: "Verified", note: "admin approval designed in" }
];
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "top", className: "relative flex min-h-dvh items-center overflow-hidden text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 -z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: heroBg,
          alt: "",
          "aria-hidden": "true",
          width: 1920,
          height: 1280,
          className: "h-full w-full object-cover"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[var(--navy-deep)]/70" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-aurora opacity-65" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container relative mx-auto px-4 pb-24 pt-36 lg:px-8 lg:pb-32 lg:pt-44", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_300px] xl:gap-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5 },
            className: "inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs font-medium text-white/85",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5 text-gold" }),
              " Built for private one-to-one guidance across India"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.h1,
          {
            initial: { opacity: 0, y: 24 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.65, delay: 0.08 },
            className: "mt-6 max-w-4xl font-display text-5xl font-bold leading-[0.98] tracking-tight text-balance sm:text-6xl lg:text-7xl xl:text-8xl",
            children: [
              "Find clarity with the ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "right expert" }),
              " by your side."
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.p,
          {
            initial: { opacity: 0, y: 16 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: 0.2 },
            className: "mt-7 max-w-2xl text-lg leading-relaxed text-white/75 lg:text-xl",
            children: "Discover consultants for career decisions, study abroad planning and mental wellness. Compare their approach, language, fee and availability before you book."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: 0.3 },
            className: "mt-9 flex flex-wrap gap-3",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero", size: "xl", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/experts", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-5 w-5" }),
                " Find an expert"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "glass", size: "xl", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/auth", children: [
                "Log in or register ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
              ] }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 0.55 },
            className: "mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs text-white/65",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-gold" }),
                " Browse before registering"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-4 w-4 text-gold" }),
                " Credential verification designed in"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-gold" }),
                " Fees shown in INR"
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 0.7 },
            className: "mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/10 pt-5 text-[11px] uppercase tracking-[0.14em] text-white/45",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/75", children: "Built for" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Students" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Professionals" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Families" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Consultants" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden space-y-4 lg:block", children: highlights.map((highlight, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, x: 24 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.55, delay: 0.35 + index * 0.12 },
          className: `rounded-2xl glass-dark p-4 shadow-elevated ${index === 1 ? "xl:-translate-x-10" : ""}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(highlight.icon, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-semibold uppercase tracking-[0.16em] text-white/45", children: highlight.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 font-display text-lg font-bold", children: highlight.value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-white/50", children: highlight.note })
            ] })
          ] })
        },
        highlight.label
      )) })
    ] }) })
  ] });
}
const stats = [
  { value: 6, suffix: "", label: "Sample expert profiles" },
  { value: 6, suffix: "", label: "Indian cities represented" },
  { value: 12, suffix: "", label: "Consultation categories" },
  { value: 3, suffix: "", label: "Ways to consult" }
];
function Counter({ to, suffix }) {
  const ref = reactExports.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const value = useMotionValue(0);
  const rounded = useTransform(value, (current) => Math.floor(current).toLocaleString("en-IN"));
  reactExports.useEffect(() => {
    if (!inView) return;
    const controls = animate(value, to, { duration: 1.4, ease: "easeOut" });
    return controls.stop;
  }, [inView, to, value]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, className: "font-display text-5xl font-bold text-gradient-brand lg:text-6xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { children: rounded }),
    suffix
  ] });
}
function Counters() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative border-y border-border bg-secondary/40 py-20 lg:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mb-14 max-w-2xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-primary/40" }),
        " Marketplace preview",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-primary/40" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-3xl font-bold tracking-tight lg:text-5xl", children: "A clearer way to find one-to-one guidance." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "The frontend already demonstrates the information and safeguards the live marketplace will expose before a client books." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8", children: stats.map((stat, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-50px" },
        transition: { duration: 0.5, delay: index * 0.08 },
        className: "rounded-3xl border border-border bg-card/75 p-5 text-center shadow-elevated backdrop-blur lg:p-7",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { to: stat.value, suffix: stat.suffix }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm font-medium text-muted-foreground", children: stat.label })
        ]
      },
      stat.label
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-muted-foreground", children: [
      { icon: SearchCheck, label: "Browse before registering" },
      { icon: MapPinned, label: "City-based discovery" },
      { icon: Languages, label: "Language and format filters" },
      { icon: BadgeCheck, label: "Post-session review design" }
    ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm font-medium", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "h-5 w-5 text-primary" }),
      item.label
    ] }, item.label)) })
  ] }) });
}
const services = [
  {
    icon: BriefcaseBusiness,
    title: "Career & Education",
    description: "Career paths, course choices, transitions and practical next steps.",
    examples: ["Career direction", "College choices", "Professional transitions"],
    status: "Profiles available"
  },
  {
    icon: GraduationCap,
    title: "Study Abroad",
    description: "Independent guidance on destinations, affordability and application readiness.",
    examples: ["Country shortlisting", "SOP and applications", "Scholarships"],
    status: "Profiles available"
  },
  {
    icon: Brain,
    title: "Mental Wellness",
    description: "Private conversations with appropriately qualified wellness professionals.",
    examples: ["Stress and anxiety", "Relationships", "Life transitions"],
    status: "Profiles available"
  },
  {
    icon: Scale,
    title: "Legal & Documentation",
    description: "Find verified legal professionals for general guidance and document-related needs.",
    examples: ["Contracts", "Consumer matters", "Documentation"],
    status: "Onboarding consultants"
  },
  {
    icon: Landmark,
    title: "Finance & Tax",
    description: "Consult qualified professionals for personal finance, tax and compliance questions.",
    examples: ["Tax planning", "Personal finance", "Compliance"],
    status: "Onboarding consultants"
  },
  {
    icon: Rocket,
    title: "Business & Startup",
    description: "Practical one-to-one input for founders, small businesses and growing teams.",
    examples: ["Business planning", "Go-to-market", "Operations"],
    status: "Onboarding consultants"
  },
  {
    icon: CodeXml,
    title: "Technology & Digital",
    description: "Expert guidance for technology choices, digital delivery and product decisions.",
    examples: ["Technology strategy", "Product guidance", "Digital transformation"],
    status: "Onboarding consultants"
  },
  {
    icon: HeartPulse,
    title: "Health & Nutrition",
    description: "Connect with appropriately licensed professionals for general wellbeing guidance.",
    examples: ["Nutrition", "Lifestyle planning", "Preventive wellbeing"],
    status: "Onboarding consultants"
  },
  {
    icon: UsersRound,
    title: "Relationships & Family",
    description: "Structured support for communication, parenting and family transitions.",
    examples: ["Communication", "Parenting", "Family wellbeing"],
    status: "Onboarding consultants"
  },
  {
    icon: Building2,
    title: "Real Estate & Property",
    description: "Specialist guidance for property research, documentation and decision support.",
    examples: ["Property evaluation", "Documentation", "Investment questions"],
    status: "Onboarding consultants"
  },
  {
    icon: Palette,
    title: "Design & Creative",
    description: "Portfolio, creative-career and independent-practice guidance from experienced mentors.",
    examples: ["Portfolio review", "Creative careers", "Freelance practice"],
    status: "Onboarding consultants"
  },
  {
    icon: Crown,
    title: "Leadership & Executive",
    description: "Confidential guidance for leadership decisions, communication and team effectiveness.",
    examples: ["Leadership clarity", "Executive presence", "Team decisions"],
    status: "Onboarding consultants"
  }
];
const pageSize = 3;
function Services() {
  const [page, setPage] = reactExports.useState(0);
  const [manualPaused, setManualPaused] = reactExports.useState(false);
  const [interactionPaused, setInteractionPaused] = reactExports.useState(false);
  const [itemsPerSlide, setItemsPerSlide] = reactExports.useState(pageSize);
  const paused = manualPaused || interactionPaused;
  reactExports.useEffect(() => {
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
  reactExports.useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setPage((current) => (current + 1) % pageCount);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [pageCount, paused]);
  const previous = () => setPage((current) => (current - 1 + pageCount) % pageCount);
  const next = () => setPage((current) => (current + 1) % pageCount);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: "services",
      className: "relative overflow-hidden py-20 lg:py-28",
      onMouseEnter: () => setInteractionPaused(true),
      onMouseLeave: () => setInteractionPaused(false),
      onFocusCapture: () => setInteractionPaused(true),
      onBlurCapture: () => setInteractionPaused(false),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 lg:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-between gap-6 lg:flex-row lg:items-end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary", children: "Consultation categories" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-4xl font-bold tracking-tight lg:text-5xl", children: "Start with the decision you need help making." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-2xl text-muted-foreground", children: "Explore a broader marketplace across personal, professional and specialist needs. Every category will use its own verification requirements and intake questions." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: previous,
                "aria-label": "Previous consultation categories",
                className: "flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card hover:border-primary/40",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-5 w-5" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: next,
                "aria-label": "Next consultation categories",
                className: "flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-5 w-5" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-12 min-h-[410px] md:min-h-[390px]", "aria-live": "polite", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", initial: false, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, x: 48 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: -48 },
            transition: { duration: 0.45, ease: "easeOut" },
            className: "absolute inset-x-0 top-0 grid gap-6 md:grid-cols-3",
            children: activeServices.map((service) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "article",
              {
                className: "group flex h-full flex-col rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/35 hover:shadow-glow",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(service.icon, { className: "h-6 w-6" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: `rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider ${service.status === "Profiles available" ? "bg-primary/10 text-primary" : "bg-gold/12 text-foreground"}`,
                        children: service.status
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-display text-2xl font-bold", children: service.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: service.description }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-2 text-sm", children: service.examples.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-gold" }),
                    item
                  ] }, item)) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: "/experts",
                      className: "mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-primary",
                      children: [
                        "Explore category ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
                      ]
                    }
                  )
                ]
              },
              service.title
            ))
          },
          page
        ) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "mt-5 flex items-center justify-center gap-2",
            "aria-label": "Category slide selection",
            children: Array.from({ length: pageCount }).map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setPage(index),
                "aria-label": `Show category slide ${index + 1}`,
                "aria-current": page === index ? "true" : void 0,
                className: `h-2.5 rounded-full transition-all ${page === index ? "w-9 bg-primary" : "w-2.5 bg-border hover:bg-primary/40"}`
              },
              index
            ))
          }
        )
      ] })
    }
  );
}
const rows = [
  {
    feature: "Speciality, experience and approach",
    marketplace: "Visible",
    directory: "Often limited"
  },
  {
    feature: "City, language and consultation mode",
    marketplace: "Filterable",
    directory: "Manual search"
  },
  {
    feature: "Fee and session duration",
    marketplace: "Shown upfront",
    directory: "Ask separately"
  },
  { feature: "Credential-verification status", marketplace: "Designed in", directory: "Varies" },
  {
    feature: "Reviews tied to completed sessions",
    marketplace: "Designed in",
    directory: "May be anonymous"
  },
  {
    feature: "Booking, intake and follow-up",
    marketplace: "One account",
    directory: "Separate channels"
  }
];
function WhyChoose() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-navy py-24 text-white lg:py-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-aurora opacity-45" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container relative mx-auto px-4 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mb-14 max-w-3xl text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-gold/40" }),
          " Why this experience"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-4xl font-bold tracking-tight text-balance lg:text-5xl", children: [
          "Better decisions begin with",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "better information." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-5 max-w-2xl text-white/65", children: "TQGC is being designed as a consultation marketplace, not just a list of phone numbers." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          className: "mx-auto max-w-5xl overflow-hidden rounded-3xl glass-dark shadow-elevated",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[1.45fr_0.8fr_0.8fr] text-xs sm:text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 text-xs font-medium uppercase tracking-wider text-white/60 sm:p-6", children: "What clients need" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-l border-white/10 p-4 text-center font-display font-bold text-gold sm:p-6", children: "TQGC" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-l border-white/10 p-4 text-center font-display font-semibold text-white/60 sm:p-6", children: "Basic directory" }),
            rows.map((row, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "contents", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `border-t border-white/10 p-4 sm:p-6 ${index % 2 ? "bg-white/[0.02]" : ""}`,
                  children: row.feature
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `border-l border-t border-white/10 p-4 text-center sm:p-6 ${index % 2 ? "bg-white/[0.02]" : ""}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 text-gold", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: row.marketplace })
                  ] })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `border-l border-t border-white/10 p-4 text-center text-white/50 sm:p-6 ${index % 2 ? "bg-white/[0.02]" : ""}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-4 w-4" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: row.directory })
                  ] })
                }
              )
            ] }, row.feature))
          ] })
        }
      )
    ] })
  ] });
}
const steps = [
  {
    icon: Search,
    number: "01",
    title: "Describe what you need",
    description: "Choose a category or search by the concern, decision, language or format that matters to you."
  },
  {
    icon: UserRoundCheck,
    number: "02",
    title: "Compare expert profiles",
    description: "Review experience, approach, qualifications, fees, languages and available consultation modes."
  },
  {
    icon: CalendarCheck2,
    number: "03",
    title: "Choose a private slot",
    description: "Log in with mobile OTP, share a short intake note and select an available time in IST."
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "Consult and follow up",
    description: "Join the session from your dashboard and keep confirmations, invoices and follow-ups together."
  }
];
function Journey() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "how-it-works", className: "relative bg-navy py-20 text-white lg:py-28", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-aurora opacity-35" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container relative mx-auto px-4 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-gold", children: "How it works" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-4xl font-bold tracking-tight lg:text-5xl", children: "From uncertainty to a confirmed conversation." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4", children: steps.map((step, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.article,
        {
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: index * 0.07 },
          className: "rounded-3xl glass-dark p-6",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(step.icon, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl font-bold text-white/20", children: step.number })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-display text-xl font-semibold", children: step.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-white/60", children: step.description })
          ]
        },
        step.title
      )) })
    ] })
  ] });
}
const cities = ["Bengaluru", "Hyderabad", "Jaipur", "Mumbai", "New Delhi", "Pune"];
function Global() {
  const [activeCity, setActiveCity] = reactExports.useState(cities[0]);
  const cityExperts = experts.filter((expert) => expert.location === activeCity);
  const activeExpert = cityExperts[0];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "cities", className: "relative border-y border-border bg-secondary/40 py-24 lg:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mb-14 max-w-3xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-primary/40" }),
        " Guidance across India"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-4xl font-bold tracking-tight text-balance lg:text-5xl", children: [
        "Local context. ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-brand", children: "Nationwide access." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Browse by city for in-person availability, or meet by video from anywhere in India." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-start gap-8 lg:grid-cols-[1.25fr_0.9fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3 sm:grid-cols-3", children: cities.map((city) => {
        const selected = activeCity === city;
        const expert = experts.find((item) => item.location === city);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setActiveCity(city),
            className: `group rounded-2xl border p-5 text-left transition-all ${selected ? "-translate-y-1 border-primary bg-primary text-primary-foreground shadow-glow" : "border-border bg-card hover:-translate-y-0.5 hover:border-primary/40"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `flex h-10 w-10 items-center justify-center rounded-xl ${selected ? "bg-white/15" : "bg-primary/10 text-primary"}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 font-display text-lg font-semibold", children: city }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `mt-1 text-xs ${selected ? "text-primary-foreground/75" : "text-muted-foreground"}`,
                  children: expert?.category ?? "Online consultations"
                }
              )
            ]
          },
          city
        );
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.article,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.3 },
          className: "rounded-3xl border border-border bg-card p-7 shadow-elevated",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15 text-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-6 w-6" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Featured city" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold", children: activeCity })
              ] })
            ] }),
            activeExpert && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "Sample expert in this city" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-display text-xl font-semibold", children: activeExpert.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm text-muted-foreground", children: activeExpert.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "mt-5 space-y-3 border-y border-border py-5 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("dt", { className: "flex items-center gap-2 text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Languages, { className: "h-4 w-4" }),
                    " Languages"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-right", children: activeExpert.languages.join(", ") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("dt", { className: "flex items-center gap-2 text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MonitorSmartphone, { className: "h-4 w-4" }),
                    " Available by"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-right", children: activeExpert.modes.join(" · ") })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/experts",
                  className: "mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary",
                  children: [
                    "Explore experts by city ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
                  ]
                }
              )
            ] })
          ]
        },
        activeCity
      )
    ] })
  ] }) });
}
function Experts() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "experts", className: "border-y border-border bg-secondary/40 py-20 lg:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-between gap-6 lg:flex-row lg:items-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary", children: "Explore sample profiles" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-4xl font-bold tracking-tight lg:text-5xl", children: "Choose based on fit, not a generic recommendation." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-2xl text-muted-foreground", children: "The frontend shows the information every real profile should provide. Credentials and registrations will require admin verification before publication." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "lg", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/experts", children: [
        "View all experts ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3", children: experts.map((expert) => /* @__PURE__ */ jsxRuntimeExports.jsx(ExpertCard, { expert }, expert.id)) })
  ] }) });
}
const items = [
  { icon: Wind, title: "Anxiety Management", desc: "Cognitive tools to quiet the noise." },
  { icon: Heart, title: "Stress Management", desc: "Regulate, restore, and rebuild balance." },
  { icon: Users, title: "Relationship Counseling", desc: "Repair, deepen, or reset what matters." },
  { icon: Baby, title: "Child Counseling", desc: "Safe space for big feelings, age 6–17." },
  { icon: UserCheck, title: "Parenting Guidance", desc: "Modern parenting, grounded in research." },
  {
    icon: Sparkles,
    title: "Confidence Coaching",
    desc: "Voice, presence, and unshakable self-trust."
  },
  { icon: Crown, title: "Executive Coaching", desc: "Leadership clarity for C-suite & founders." }
];
function Wellness() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "wellness", className: "relative py-24 lg:py-32 bg-navy text-white overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-aurora opacity-50" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 lg:px-8 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1fr_1.4fr] gap-12 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:sticky lg:top-28", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold font-semibold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-gold/40" }),
          " Mental Wellness"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-4xl lg:text-5xl font-bold tracking-tight text-balance", children: [
          "Life is more than a job title.",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "We tend to all of it." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-white/70 leading-relaxed max-w-md", children: "Find professionals for private conversations about stress, relationships, confidence and life transitions. Qualifications and scope must be verified before publication." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/experts",
            className: "mt-7 inline-flex rounded-full bg-gold px-5 py-3 text-sm font-semibold text-navy-deep",
            children: "Browse wellness experts"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-4", children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-40px" },
          transition: { duration: 0.4, delay: i % 2 * 0.06 },
          className: "glass-dark rounded-2xl p-5 hover:bg-white/10 transition-colors",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-11 w-11 rounded-xl bg-gold/15 text-gold items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(it.icon, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-display text-lg font-semibold", children: it.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-white/65", children: it.desc })
          ]
        },
        it.title
      )) })
    ] }) })
  ] });
}
const reviews = experts.flatMap(
  (expert) => expert.reviews.map((review) => ({
    ...review,
    expertName: expert.name,
    category: expert.category
  }))
).slice(0, 6);
function Stories() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "stories", className: "relative py-24 lg:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mb-14 max-w-3xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-primary/40" }),
        " Review experience preview"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-4xl font-bold tracking-tight lg:text-5xl", children: [
        "Confidence grows when",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-brand", children: "experiences are visible." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-2xl text-muted-foreground", children: "These sample reviews demonstrate how feedback from completed bookings will appear once the backend verifies attendance." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3", children: reviews.map((review, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.figure,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-40px" },
        transition: { duration: 0.4, delay: index % 3 * 0.07 },
        className: "rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-glow",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "h-7 w-7 text-primary/35" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex", children: Array.from({ length: 5 }).map((_, star) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Star,
              {
                className: `h-3.5 w-3.5 ${star < review.rating ? "fill-gold text-gold" : "text-border"}`
              },
              star
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "mt-4 text-sm leading-relaxed", children: [
            "“",
            review.text,
            "”"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("figcaption", { className: "mt-5 border-t border-border pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: review.author }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
                review.city,
                " · with ",
                review.expertName
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-xs text-primary", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "h-4 w-4" }),
              " Sample"
            ] })
          ] }) })
        ]
      },
      review.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/experts",
        className: "inline-flex rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold hover:border-primary/40",
        children: "Compare expert ratings and reviews"
      }
    ) })
  ] }) });
}
const suggestions = [
  {
    question: "I am unsure about my career direction",
    category: "Career & Education",
    answer: "Start with career consultants who cover decision frameworks, transitions and education pathways."
  },
  {
    question: "I need help shortlisting countries",
    category: "Study Abroad",
    answer: "Compare study-abroad experts by destination experience, affordability approach and application support."
  },
  {
    question: "Work stress is affecting my decisions",
    category: "Mental Wellness",
    answer: "Look for appropriately qualified wellness professionals and compare their approach, language and format."
  }
];
function AIAssistant() {
  const [active, setActive] = reactExports.useState(suggestions[0]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 lg:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-[2rem] bg-navy p-8 text-white shadow-elevated lg:rounded-[2.5rem] lg:p-14", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-aurora opacity-60" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid items-center gap-10 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
          " Guided matching preview"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-4xl font-bold tracking-tight text-balance lg:text-5xl", children: [
          "Not sure where to start?",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Narrow the choice." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-md leading-relaxed text-white/70", children: "Choose the statement closest to your situation. This frontend helper suggests a category; it does not replace professional advice." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex flex-wrap gap-2", children: suggestions.map((suggestion) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setActive(suggestion),
            className: `rounded-full border px-3 py-2 text-xs transition-all ${active.question === suggestion.question ? "border-gold bg-gold text-navy-deep" : "border-white/15 text-white/80 hover:bg-white/10"}`,
            children: suggestion.question
          },
          suggestion.question
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.3 },
          className: "rounded-3xl glass-dark p-5 shadow-elevated",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border-b border-white/10 pb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 animate-pulse rounded-full bg-gold" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-white/70", children: "TQGC matching guide · Frontend preview" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 py-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-[85%] rounded-2xl rounded-tr-sm bg-primary/40 px-4 py-2.5 text-sm", children: active.question }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "h-4 w-4 text-gold" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[88%] rounded-2xl rounded-tl-sm bg-white/10 px-4 py-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-semibold uppercase tracking-wider text-gold", children: [
                    "Suggested category · ",
                    active.category
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-white/90", children: active.answer })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/experts",
                className: "flex h-11 items-center justify-center gap-2 rounded-full bg-[var(--gradient-gold)] text-sm font-semibold text-navy-deep shadow-gold",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SearchCheck, { className: "h-4 w-4" }),
                  " See matching experts",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
                ]
              }
            )
          ]
        },
        active.question
      )
    ] })
  ] }) }) });
}
function Booking() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 lg:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-[2rem] bg-navy p-8 text-white shadow-elevated lg:p-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-gold", children: "Ready when you are" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight lg:text-5xl", children: "Book with information—not pressure." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-xl leading-relaxed text-white/65", children: "See the fee, session length, language and next available slot before creating your account. Registration is required only when you are ready to reserve." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero", size: "xl", asChild: true, className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/experts", children: [
        "Browse consultations ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 sm:grid-cols-2", children: [
      [CalendarDays, "Real slot selection", "Dates and times displayed in IST"],
      [IndianRupee, "Transparent INR pricing", "Gateway checkout added with backend"],
      [Languages, "Language preferences", "English, Hindi and regional options"],
      [ShieldCheck, "Private account boundary", "Bookings and documents require login"]
    ].map(([Icon, title, description]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl glass-dark p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-gold" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-sm font-semibold", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs leading-relaxed text-white/55", children: description })
    ] }, title)) })
  ] }) }) }) });
}
function Contact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "border-t border-border bg-secondary/35 py-16 lg:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 lg:grid-cols-[0.9fr_1.1fr]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary", children: "Support and safety" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-4xl font-bold tracking-tight", children: "A consultation platform needs visible safeguards." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 leading-relaxed text-muted-foreground", children: "These support channels are represented in the frontend now. Real contact details, response targets and escalation owners must be assigned before launch." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2", children: [
      [Headphones, "General support", "Bookings, rescheduling and account access"],
      [Scale, "Grievance redressal", "Complaints, refunds and professional conduct"],
      [LockKeyhole, "Privacy requests", "Access, correction and deletion requests"],
      [
        TriangleAlert,
        "Emergency notice",
        "The platform is not an emergency or crisis service"
      ]
    ].map(([Icon, title, description]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-lg font-semibold", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: description })
    ] }, title)) })
  ] }) }) });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Counters, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Services, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(WhyChoose, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Experts, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Journey, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Global, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Wellness, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stories, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AIAssistant, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Booking, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProductFooter, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { position: "top-center", richColors: true })
  ] });
}
export {
  Index as component
};
