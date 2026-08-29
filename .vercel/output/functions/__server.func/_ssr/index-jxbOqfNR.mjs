import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { T as Toaster$1, t as toast } from "../_libs/sonner.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { m as motion } from "../_libs/motion.mjs";
import { C as Compass, S as Sun, M as Moon, X, a as Menu, b as Sparkles, A as ArrowRight, P as Play, B as Brain, G as GraduationCap, E as Earth, c as ShieldCheck, d as Award, e as Globe, f as Briefcase, H as HeartPulse, g as Plane, h as Building2, i as ArrowUpRight, j as Check, k as ClipboardCheck, l as Map, m as ChartColumn, n as MessageCircle, T as Target, o as Trophy, p as MapPin, L as Linkedin, q as CalendarDays, W as Wind, r as Heart, U as Users, s as Baby, t as UserCheck, u as Crown, v as Star, Q as Quote, w as Bot, x as Send, V as Video, y as Building, z as ChevronLeft, D as ChevronRight, F as Phone, I as Mail, J as Instagram, Y as Youtube, K as Facebook } from "../_libs/lucide-react.mjs";
import { A as AnimatePresence, u as useInView, a as useMotionValue, b as useTransform, c as animate } from "../_libs/framer-motion.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/radix-ui__react-compose-refs.mjs";
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
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-[var(--gradient-gold)] [background-image:var(--gradient-gold)] text-navy-deep font-semibold shadow-gold hover:brightness-110 hover:-translate-y-0.5 transition-all",
        glass: "glass-dark text-white hover:bg-white/15 transition-all hover:-translate-y-0.5",
        brand: "bg-primary text-primary-foreground shadow-glow hover:bg-primary/90 hover:-translate-y-0.5 transition-all"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-11 rounded-full px-7 text-sm",
        xl: "h-14 rounded-full px-9 text-base",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const STORAGE_KEY = "tqgc-theme";
function getInitialTheme() {
  if (typeof window === "undefined") return "dark";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function useTheme() {
  const [theme, setTheme] = reactExports.useState("dark");
  reactExports.useEffect(() => {
    const initial = getInitialTheme();
    setTheme(initial);
  }, []);
  reactExports.useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);
  return {
    theme,
    toggle: () => setTheme((t) => t === "dark" ? "light" : "dark"),
    setTheme
  };
}
const NAV = [
  { href: "#services", label: "Services" },
  { href: "#journey", label: "Journey" },
  { href: "#global", label: "Global" },
  { href: "#experts", label: "Experts" },
  { href: "#wellness", label: "Wellness" },
  { href: "#stories", label: "Stories" },
  { href: "#contact", label: "Contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  const { theme, toggle } = useTheme();
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5"
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: cn(
              "container mx-auto px-4 lg:px-8 flex items-center justify-between rounded-full transition-all duration-500",
              scrolled ? "glass-dark shadow-elevated max-w-6xl py-2.5" : "max-w-7xl py-2"
            ),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "flex items-center gap-2.5 group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-9 w-9 rounded-xl bg-[var(--gradient-gold)] flex items-center justify-center shadow-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "h-5 w-5 text-navy-deep", strokeWidth: 2.5 }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg font-bold tracking-tight text-white", children: "TQGC" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-1", children: NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: n.href,
                  className: "px-3.5 py-2 text-sm text-white/75 hover:text-white transition-colors rounded-full hover:bg-white/5",
                  children: n.label
                },
                n.href
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: toggle,
                    "aria-label": theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
                    className: "h-10 w-10 rounded-full glass-dark flex items-center justify-center text-white hover:text-gold transition-colors",
                    children: theme === "dark" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-4.5 w-4.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-4.5 w-4.5" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero", size: "lg", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#book", children: "Book Consultation" }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:hidden flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: toggle,
                    "aria-label": theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
                    className: "h-10 w-10 rounded-full glass-dark flex items-center justify-center text-white",
                    children: theme === "dark" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-5 w-5" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    "aria-label": open ? "Close menu" : "Open menu",
                    onClick: () => setOpen((s) => !s),
                    className: "h-10 w-10 rounded-full glass-dark flex items-center justify-center text-white",
                    children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
                  }
                )
              ] })
            ]
          }
        ),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden mt-3 mx-4 rounded-3xl glass-dark p-5 animate-in fade-in slide-in-from-top-2 duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex flex-col gap-1", children: [
          NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: n.href,
              onClick: () => setOpen(false),
              className: "px-4 py-3 rounded-xl text-white/80 hover:bg-white/10 hover:text-white text-sm",
              children: n.label
            },
            n.href
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero", size: "lg", asChild: true, className: "mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#book", onClick: () => setOpen(false), children: "Book Free Consultation" }) })
        ] }) })
      ]
    }
  );
}
const heroBg = "/assets/hero-bg-DVMqkC7y.jpg";
const floatCards = [
  { icon: Brain, label: "Wellness", value: "98%", sub: "Client Wellbeing", pos: "top-[18%] left-[4%]", delay: 0 },
  { icon: GraduationCap, label: "Admits", value: "1.2k+", sub: "Top Universities", pos: "top-[58%] left-[2%]", delay: 0.2 },
  { icon: Earth, label: "Countries", value: "32", sub: "Global Network", pos: "top-[22%] right-[4%]", delay: 0.4 }
];
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "top",
      className: "relative min-h-dvh flex items-center overflow-hidden text-white",
      children: [
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[var(--navy-deep)]/55" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-aurora opacity-70" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 lg:px-8 pt-32 pb-24 lg:pt-40 lg:pb-32 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 16 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6 },
              className: "inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium text-white/85",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5 text-gold" }),
                "Trusted by 25,000+ globally · Since 2012"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.h1,
            {
              initial: { opacity: 0, y: 24 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.7, delay: 0.1 },
              className: "mt-6 font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight text-balance",
              children: [
                "Empowering Lives.",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Transforming" }),
                " Careers. Building Futures."
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              initial: { opacity: 0, y: 16 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.7, delay: 0.25 },
              className: "mt-7 max-w-2xl text-lg lg:text-xl text-white/75 leading-relaxed text-balance",
              children: "Professional career counseling, psychological wellness, study abroad guidance, life coaching & global mentorship — under one roof."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 16 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.7, delay: 0.4 },
              className: "mt-10 flex flex-wrap items-center gap-4",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero", size: "xl", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#book", children: [
                  "Book Free Consultation ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 h-4 w-4" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "glass", size: "xl", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#services", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-4 w-4" }),
                  " Explore Services"
                ] }) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 0.7, duration: 0.6 },
              className: "mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-white/60",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "uppercase tracking-[0.18em]", children: "Featured in" }),
                ["Forbes", "BusinessLine", "YourStory", "EdTech Global", "Mindvalley"].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-white/75 tracking-wide", children: b }, b))
              ]
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block", children: floatCards.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8, delay: 0.6 + c.delay },
            className: `absolute ${c.pos} animate-float`,
            style: { animationDelay: `${c.delay}s` },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-dark rounded-2xl p-4 pr-6 flex items-center gap-3 shadow-elevated min-w-[180px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-11 w-11 rounded-xl bg-[var(--gradient-gold)] flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "h-5 w-5 text-navy-deep" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-white/60", children: c.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl font-bold", children: c.value }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-white/60", children: c.sub })
              ] })
            ] })
          },
          c.label
        )) })
      ]
    }
  );
}
const stats = [
  { value: 12, suffix: "+", label: "Years of Experience" },
  { value: 2700, suffix: "+", label: "Clients Guided" },
  { value: 250, suffix: "+", label: "Professionals Trained" },
  { value: 25e3, suffix: "+", label: "Community Members" }
];
function Counter({ to, suffix }) {
  const ref = reactExports.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.floor(v).toLocaleString());
  reactExports.useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, mv, to]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, className: "font-display text-5xl lg:text-6xl font-bold text-gradient-brand", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { children: rounded }),
    suffix
  ] });
}
function Counters() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-20 lg:py-28 bg-secondary/40 border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary font-semibold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-primary/40" }),
        " Proven Impact",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-primary/40" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-3xl lg:text-5xl font-bold tracking-tight", children: "A decade of guiding minds, careers, and futures." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8", children: stats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-50px" },
        transition: { duration: 0.5, delay: i * 0.08 },
        className: "text-center p-6 rounded-3xl glass shadow-elevated",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { to: s.value, suffix: s.suffix }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm font-medium text-muted-foreground", children: s.label })
        ]
      },
      s.label
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-muted-foreground", children: [
      { icon: ShieldCheck, label: "Govt. Registered (MSME)" },
      { icon: Award, label: "ISO 9001:2015 Certified" },
      { icon: Globe, label: "Global Mentor Network" }
    ].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm font-medium", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(b.icon, { className: "h-5 w-5 text-primary" }),
      b.label
    ] }, b.label)) })
  ] }) });
}
const services$1 = [
  { icon: GraduationCap, title: "Career Counseling for Students", desc: "Discover your strengths and design a future-ready path from Class 8 onwards.", tag: "Students" },
  { icon: Briefcase, title: "Career Counseling for Professionals", desc: "Pivot, advance, or reinvent — backed by data and decade-long expertise.", tag: "Professionals" },
  { icon: HeartPulse, title: "Psychological Counseling", desc: "Confidential, evidence-based therapy from licensed clinical psychologists.", tag: "Wellness" },
  { icon: Plane, title: "Study Abroad Guidance", desc: "End-to-end admissions, SOP, visa, scholarships across 32 destinations.", tag: "Global" },
  { icon: Sparkles, title: "Life Coaching & Wellness", desc: "Habit design, confidence, relationships — a calm, intentional life.", tag: "Coaching" },
  { icon: Award, title: "Training & Certification", desc: "Career launchpad programs with industry-recognized credentials.", tag: "Skill" },
  { icon: Building2, title: "Corporate Training", desc: "Leadership, EQ, and wellbeing programs for high-performing teams.", tag: "Enterprise" },
  { icon: Brain, title: "Psychometric Assessments", desc: "Globally validated tools: DMIT, MBTI, Big Five, aptitude & interest.", tag: "Assessments" }
];
function Services() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "services", className: "relative py-24 lg:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary font-semibold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-primary/40" }),
          " What we do"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-4xl lg:text-5xl font-bold tracking-tight text-balance", children: [
          "An integrated practice for ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-brand", children: "mind, career & life" }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground lg:max-w-md", children: "Each engagement combines scientific assessment, expert mentorship, and a personalized roadmap — built around your story, not a template." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5", children: services$1.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-40px" },
        transition: { duration: 0.45, delay: i % 4 * 0.06 },
        className: "group relative rounded-3xl p-6 bg-card border border-border hover:border-primary/40 hover:-translate-y-1 hover:shadow-glow transition-all duration-300",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-6 w-6" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold uppercase tracking-wider text-muted-foreground bg-muted px-2 py-1 rounded-full", children: s.tag })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold leading-snug", children: s.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: s.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "ghost",
              size: "sm",
              asChild: true,
              className: "mt-5 -ml-3 text-primary hover:text-primary",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#book", children: [
                "Book Session ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
              ] })
            }
          )
        ]
      },
      s.title
    )) })
  ] }) });
}
const rows = [
  { feat: "Scientific Psychometric Assessments", us: true, them: false },
  { feat: "Personalized Career Roadmap", us: true, them: false },
  { feat: "Mental Wellness Integration", us: true, them: false },
  { feat: "Global Opportunities Network", us: true, them: false },
  { feat: "Expert Mentors (Avg. 12+ yrs)", us: true, them: "Generic counselors" },
  { feat: "Long-Term Support & Reviews", us: true, them: false },
  { feat: "Multi-modal: Online · Video · In-Person", us: true, them: false }
];
function WhyChoose() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-24 lg:py-32 bg-navy text-white overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-aurora opacity-50" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 lg:px-8 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-3xl mx-auto mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold font-semibold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-gold/40" }),
          " Why TQGC"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-4xl lg:text-5xl font-bold tracking-tight text-balance", children: [
          "More than counseling. A complete ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "transformation system" }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          className: "max-w-5xl mx-auto rounded-3xl glass-dark overflow-hidden shadow-elevated",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[1.6fr_1fr_1fr] text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5 lg:p-6 text-white/60 font-medium uppercase text-xs tracking-wider", children: "Feature" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5 lg:p-6 text-center font-display font-bold text-gold border-l border-white/10", children: "TQGC" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5 lg:p-6 text-center font-display font-semibold text-white/60 border-l border-white/10", children: "Traditional" }),
            rows.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "contents", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-5 lg:p-6 border-t border-white/10 ${i % 2 ? "bg-white/[0.02]" : ""}`, children: r.feat }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-5 lg:p-6 border-t border-l border-white/10 text-center ${i % 2 ? "bg-white/[0.02]" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-7 w-7 items-center justify-center rounded-full bg-gold/20 text-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-5 lg:p-6 border-t border-l border-white/10 text-center text-white/60 ${i % 2 ? "bg-white/[0.02]" : ""}`, children: r.them === true ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4 mx-auto" }) : r.them === false ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4 mx-auto opacity-60" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: r.them }) })
            ] }, r.feat))
          ] })
        }
      )
    ] })
  ] });
}
const steps = [
  { icon: ClipboardCheck, title: "Self Assessment", desc: "Scientific psychometric profile across 80+ dimensions." },
  { icon: Map, title: "Career Mapping", desc: "Match aptitude, interest & opportunity into a clear shortlist." },
  { icon: ChartColumn, title: "Skill Analysis", desc: "Identify gaps and create a focused learning plan." },
  { icon: MessageCircle, title: "Counseling Session", desc: "1:1 with senior expert. Online, video, or in-person." },
  { icon: Target, title: "Action Plan", desc: "Quarterly milestones with accountability check-ins." },
  { icon: Trophy, title: "Success Journey", desc: "Long-term mentorship through admits, jobs & life changes." }
];
function Journey() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "journey", className: "relative py-24 lg:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary font-semibold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-primary/40" }),
        " The Quest Method"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-4xl lg:text-5xl font-bold tracking-tight", children: [
        "Your discovery journey, ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-brand", children: "step by step" }),
        "."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden lg:block" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-12 lg:space-y-20", children: steps.map((s, i) => {
        const left = i % 2 === 0;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 24 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-80px" },
            transition: { duration: 0.5 },
            className: "grid lg:grid-cols-2 gap-6 lg:gap-16 items-center",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: left ? "lg:order-1" : "lg:order-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-3xl p-7 shadow-elevated border border-border", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-5 w-5" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: [
                    "Step 0",
                    i + 1
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-semibold", children: s.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: s.desc })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `hidden lg:flex justify-center ${left ? "lg:order-2" : "lg:order-1"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-20 w-20 rounded-full bg-[var(--gradient-gold)] flex items-center justify-center font-display text-2xl font-bold text-navy-deep shadow-gold", children: i + 1 }) })
            ]
          },
          s.title
        );
      }) })
    ] })
  ] }) });
}
const countries = [
  { code: "US", name: "USA", flag: "🇺🇸", courses: "STEM · MBA · Data Science", scope: "$120k+ avg. starting", visa: "F-1 / OPT 36 months", scholarship: "Up to 100% merit aid" },
  { code: "CA", name: "Canada", flag: "🇨🇦", courses: "AI · Healthcare · Business", scope: "PR pathway in 3 yrs", visa: "Study Permit + PGWP", scholarship: "Vanier, OGS, Trillium" },
  { code: "UK", name: "UK", flag: "🇬🇧", courses: "Finance · Design · Law", scope: "Russell Group prestige", visa: "Graduate Route 2 yrs", scholarship: "Chevening, Commonwealth" },
  { code: "DE", name: "Germany", flag: "🇩🇪", courses: "Engineering · Auto · AI", scope: "Tuition-free public unis", visa: "Job Seeker 18 months", scholarship: "DAAD, Erasmus+" },
  { code: "AU", name: "Australia", flag: "🇦🇺", courses: "Nursing · IT · Business", scope: "Skilled migration friendly", visa: "Subclass 500 + 485", scholarship: "AAS, RTP, Endeavour" },
  { code: "SG", name: "Singapore", flag: "🇸🇬", courses: "Fintech · AI · Logistics", scope: "Asia HQ hub salaries", visa: "Student Pass + EP", scholarship: "ASEAN, SINGA" },
  { code: "JP", name: "Japan", flag: "🇯🇵", courses: "Robotics · Anime · Research", scope: "Bilingual edge advantage", visa: "Designated Activities", scholarship: "MEXT, JASSO" },
  { code: "EU", name: "Europe", flag: "🇪🇺", courses: "Liberal Arts · Tech · Design", scope: "Schengen mobility", visa: "Per-country student visa", scholarship: "Erasmus Mundus" }
];
function Global() {
  const [active, setActive] = reactExports.useState(countries[0]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "global", className: "relative py-24 lg:py-32 bg-secondary/40 border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary font-semibold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-primary/40" }),
        " Global Opportunities"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-4xl lg:text-5xl font-bold tracking-tight text-balance", children: [
        "One world. ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-brand", children: "Infinite pathways." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Tap a destination to see live insights from our admissions desk." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1.4fr_1fr] gap-8 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3", children: countries.map((c) => {
        const sel = active.code === c.code;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setActive(c),
            className: `group text-left rounded-2xl p-5 border transition-all ${sel ? "bg-primary text-primary-foreground border-primary shadow-glow -translate-y-1" : "bg-card border-border hover:border-primary/40 hover:-translate-y-0.5"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl", children: c.flag }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 font-display font-semibold", children: c.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `text-xs mt-0.5 flex items-center gap-1 ${sel ? "text-primary-foreground/80" : "text-muted-foreground"}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3" }),
                " Explore"
              ] })
            ]
          },
          c.code
        );
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.35 },
          className: "rounded-3xl bg-card border border-border p-7 shadow-elevated",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl", children: active.flag }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Destination" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold", children: active.name })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dl", { className: "mt-6 space-y-4 text-sm", children: [
              ["Popular Courses", active.courses],
              ["Career Scope", active.scope],
              ["Visa Guidance", active.visa],
              ["Scholarships", active.scholarship]
            ].map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between gap-4 border-b border-border pb-3 last:border-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-muted-foreground", children: k }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "font-medium text-right", children: v })
            ] }, k)) })
          ]
        },
        active.code
      )
    ] })
  ] }) });
}
const e1 = "/assets/expert-1-CEDIzihE.jpg";
const e2 = "/assets/expert-2-C1POr4Kt.jpg";
const e3 = "/assets/expert-3-DHpyp5-S.jpg";
const team = [
  { name: "Dr. Anaya Krishnan", role: "Lead Clinical Psychologist", years: "14 yrs", spec: "CBT · Anxiety · Adolescents", img: e1 },
  { name: "Sarah Whitfield", role: "Global Admissions Mentor", years: "11 yrs", spec: "Ivy League · UK · Europe", img: e2 },
  { name: "Rohan Mehta", role: "Career Strategist", years: "9 yrs", spec: "Tech Careers · Pivots · MBA", img: e3 }
];
function Experts() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "experts", className: "relative py-24 lg:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary font-semibold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-primary/40" }),
        " Meet The Experts"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-4xl lg:text-5xl font-bold tracking-tight", children: [
        "Senior practitioners. ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-brand", children: "Real outcomes." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: team.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.article,
      {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" },
        transition: { duration: 0.5, delay: i * 0.08 },
        className: "group rounded-3xl overflow-hidden bg-card border border-border hover:shadow-glow hover:-translate-y-1 transition-all",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/5] overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: m.img,
                alt: m.name,
                loading: "lazy",
                width: 640,
                height: 800,
                className: "h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "#",
                "aria-label": `${m.name} on LinkedIn`,
                className: "absolute top-4 right-4 h-9 w-9 rounded-full glass-dark flex items-center justify-center text-white hover:bg-white/20",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-5 text-white", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs uppercase tracking-wider text-gold", children: [
                m.years,
                " experience"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 font-display text-xl font-semibold", children: m.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/75", children: m.role })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex items-center justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: m.spec }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "brand", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#book", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "h-4 w-4" }),
              " Book"
            ] }) })
          ] })
        ]
      },
      m.name
    )) })
  ] }) });
}
const items = [
  { icon: Wind, title: "Anxiety Management", desc: "Cognitive tools to quiet the noise." },
  { icon: Heart, title: "Stress Management", desc: "Regulate, restore, and rebuild balance." },
  { icon: Users, title: "Relationship Counseling", desc: "Repair, deepen, or reset what matters." },
  { icon: Baby, title: "Child Counseling", desc: "Safe space for big feelings, age 6–17." },
  { icon: UserCheck, title: "Parenting Guidance", desc: "Modern parenting, grounded in research." },
  { icon: Sparkles, title: "Confidence Coaching", desc: "Voice, presence, and unshakable self-trust." },
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
          "Life is more than a job title. ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "We tend to all of it." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-white/70 leading-relaxed max-w-md", children: "Healing isn't linear and neither is growth. Our integrated wellness practice treats you as a whole person — mind, work, relationships, and meaning." })
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
const reviews = [
  { name: "Priya R.", role: "Student · Now at MIT", quote: "TQGC's assessments helped me find a direction I'd never considered. The mentorship through SOPs and interviews was world-class.", rating: 5 },
  { name: "Marcus L.", role: "Senior PM, Singapore", quote: "I came in burnt-out and confused. Six months later I have a pivot plan, a coach, and my anxiety is finally manageable.", rating: 5 },
  { name: "Anita & Vikram", role: "Parents", quote: "Our daughter went from quiet and lost to engaged and confident. The child counseling team changed our household.", rating: 5 },
  { name: "Sara K.", role: "Founder, Dubai", quote: "Executive coaching with TQGC is the highest-ROI investment I've made in myself. Calm, clear, and incredibly senior.", rating: 5 },
  { name: "Aarav T.", role: "Class 12 · Bound for Toronto", quote: "They didn't sell me a country — they helped me discover the right one. Scholarship secured.", rating: 5 },
  { name: "Dr. Ifeoma O.", role: "International Client", quote: "Truly globally-minded. They understood my cross-cultural goals without judgment.", rating: 5 }
];
function Stories() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "stories", className: "relative py-24 lg:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary font-semibold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-primary/40" }),
        " Success Stories"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-4xl lg:text-5xl font-bold tracking-tight", children: [
        "Real people. ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-brand", children: "Real transformations." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 inline-flex items-center gap-2 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex", children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-gold text-gold" }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "4.9 / 5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "· 1,800+ verified reviews" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5", children: reviews.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.figure,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-40px" },
        transition: { duration: 0.4, delay: i % 3 * 0.07 },
        className: "rounded-3xl bg-card border border-border p-6 hover:shadow-glow hover:-translate-y-1 transition-all",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "h-7 w-7 text-primary/40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "mt-3 text-sm leading-relaxed", children: [
            '"',
            r.quote,
            '"'
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-5 flex items-center justify-between border-t border-border pt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm", children: r.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: r.role })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex", children: Array.from({ length: r.rating }).map((_, i2) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3.5 w-3.5 fill-gold text-gold" }, i2)) })
          ] })
        ]
      },
      r.name
    )) })
  ] }) });
}
const suggestions = [
  "Which career is best for me?",
  "Which country should I study in?",
  "What skills should I learn in 2026?",
  "How can I overcome career confusion?"
];
function AIAssistant() {
  const [active, setActive] = reactExports.useState(suggestions[0]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 lg:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[2rem] lg:rounded-[2.5rem] bg-navy text-white p-8 lg:p-14 overflow-hidden relative shadow-elevated", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-aurora opacity-60" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid lg:grid-cols-2 gap-10 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold font-semibold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
          " New · TQGC AI"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-4xl lg:text-5xl font-bold tracking-tight text-balance", children: [
          "Ask anything. ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Get clarity in seconds." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-white/70 leading-relaxed max-w-md", children: "A private AI companion trained on a decade of TQGC counseling sessions, career data, and global admissions intelligence." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex flex-wrap gap-2", children: suggestions.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setActive(s),
            className: `text-xs px-3 py-2 rounded-full border transition-all ${active === s ? "bg-gold text-navy-deep border-gold" : "border-white/15 text-white/80 hover:bg-white/10"}`,
            children: s
          },
          s
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.3 },
          className: "glass-dark rounded-3xl p-5 shadow-elevated",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 pb-3 border-b border-white/10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-gold animate-pulse" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-white/70", children: "TQGC AI · Online" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-5 space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-[80%] rounded-2xl rounded-tr-sm bg-primary/40 px-4 py-2.5 text-sm", children: active }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-8 w-8 rounded-full bg-gold/20 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "h-4 w-4 text-gold" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-[85%] rounded-2xl rounded-tl-sm bg-white/10 px-4 py-2.5 text-sm text-white/90 leading-relaxed", children: "Great question. Based on millions of career paths I'd start with a 12-min psychometric profile — it narrows your direction with 92% accuracy. Want me to set one up?" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "form",
              {
                onSubmit: (e) => e.preventDefault(),
                className: "flex gap-2 pt-3 border-t border-white/10",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      className: "flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2.5 text-sm placeholder:text-white/40 focus:outline-none focus:border-gold/50",
                      placeholder: "Ask TQGC AI…"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "submit",
                      className: "h-10 w-10 rounded-full bg-[var(--gradient-gold)] text-navy-deep flex items-center justify-center shadow-gold hover:brightness-110",
                      "aria-label": "Send",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" })
                    }
                  )
                ]
              }
            )
          ]
        },
        active
      )
    ] })
  ] }) }) });
}
const services = [
  "Career Counseling (Student)",
  "Career Counseling (Professional)",
  "Psychological Counseling",
  "Study Abroad Guidance",
  "Life Coaching & Wellness",
  "Corporate Training"
];
const ages = ["Under 18", "18–24", "25–34", "35–44", "45+"];
const modes = [
  { id: "online", label: "Online Chat", icon: Globe },
  { id: "video", label: "Video Call", icon: Video },
  { id: "person", label: "In-Person", icon: Building }
];
function Booking() {
  const [step, setStep] = reactExports.useState(0);
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    mobile: "",
    country: "",
    age: "",
    service: "",
    mode: ""
  });
  const update = (k, v) => setForm((s) => ({ ...s, [k]: v }));
  const stepValid = [
    !!(form.name && form.email.includes("@") && form.mobile.length >= 7),
    !!(form.country && form.age),
    !!(form.service && form.mode)
  ];
  const submit = () => {
    toast.success("Consultation request received", {
      description: "Our team will reach out within 24 hours."
    });
    setStep(3);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "book", className: "relative py-24 lg:py-32 bg-secondary/40 border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary font-semibold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-primary/40" }),
        " Free First Session"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-4xl lg:text-5xl font-bold tracking-tight text-balance", children: [
        "Book your ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-brand", children: "complimentary consultation" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "No card required. 30 minutes. Zero pressure." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto rounded-3xl bg-card border border-border p-6 lg:p-10 shadow-elevated", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mb-8", children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `h-1.5 flex-1 rounded-full transition-colors ${i <= step ? "bg-primary" : "bg-border"}`
        },
        i
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { mode: "wait", children: [
        step === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, x: 10 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -10 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold mb-1", children: "Tell us about you" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-6", children: "Step 1 of 3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full name", value: form.name, onChange: (v) => update("name", v), placeholder: "Jane Doe" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", type: "email", value: form.email, onChange: (v) => update("email", v), placeholder: "you@example.com" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Mobile", value: form.mobile, onChange: (v) => update("mobile", v), placeholder: "+91 98xxxxxx" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Country", value: form.country, onChange: (v) => update("country", v), placeholder: "India" })
          ] })
        ] }, "s0"),
        step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, x: 10 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -10 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold mb-1", children: "A little context" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-6", children: "Step 2 of 3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-medium uppercase tracking-wider text-muted-foreground", children: "Age group" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 flex flex-wrap gap-2", children: ages.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { active: form.age === a, onClick: () => update("age", a), children: a }, a)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Country / region", value: form.country, onChange: (v) => update("country", v), placeholder: "Where are you based?" }) })
        ] }, "s1"),
        step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, x: 10 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -10 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold mb-1", children: "What are you exploring?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-6", children: "Step 3 of 3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-medium uppercase tracking-wider text-muted-foreground", children: "Service" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 flex flex-wrap gap-2", children: services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(Chip, { active: form.service === s, onClick: () => update("service", s), children: s }, s)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-medium uppercase tracking-wider text-muted-foreground", children: "Preferred mode" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 grid grid-cols-3 gap-2", children: modes.map((m) => {
              const sel = form.mode === m.id;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => update("mode", m.id),
                  className: `rounded-2xl border p-4 text-center transition-all ${sel ? "border-primary bg-primary/10 -translate-y-0.5 shadow-glow" : "border-border hover:border-primary/40"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(m.icon, { className: `h-5 w-5 mx-auto ${sel ? "text-primary" : "text-muted-foreground"}` }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-xs font-medium", children: m.label })
                  ]
                },
                m.id
              );
            }) })
          ] })
        ] }, "s2"),
        step === 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, className: "text-center py-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-16 w-16 rounded-full bg-primary/10 text-primary items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-8 w-8" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "mt-5 font-display text-2xl font-semibold", children: [
            "You're booked, ",
            form.name.split(" ")[0] || "friend",
            " ✨"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: "A senior advisor will reach out within 24 hours to confirm your slot." })
        ] }, "s3")
      ] }),
      step < 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "ghost",
            disabled: step === 0,
            onClick: () => setStep((s) => Math.max(0, s - 1)),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4" }),
              " Back"
            ]
          }
        ),
        step < 2 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "brand",
            size: "lg",
            disabled: !stepValid[step],
            onClick: () => setStep((s) => s + 1),
            children: [
              "Continue ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" })
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "hero", size: "lg", disabled: !stepValid[2], onClick: submit, children: [
          "Confirm Booking ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" })
        ] })
      ] })
    ] })
  ] }) });
}
function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    label && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium uppercase tracking-wider text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        value,
        onChange: (e) => onChange(e.target.value),
        placeholder,
        className: "mt-2 w-full h-11 rounded-xl border border-border bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
      }
    )
  ] });
}
function Chip({ active, onClick, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      onClick,
      className: `text-sm rounded-full px-4 py-2 border transition-all ${active ? "bg-primary text-primary-foreground border-primary shadow-glow" : "border-border hover:border-primary/40"}`,
      children
    }
  );
}
function Contact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "relative py-24 lg:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-10 items-stretch", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary font-semibold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-primary/40" }),
        " Get in Touch"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-4xl lg:text-5xl font-bold tracking-tight text-balance", children: [
        "We're here. ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-brand", children: "Reach out, anytime." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground max-w-md", children: "Prefer a real conversation? Pick whichever channel feels right. We respond within 24 hours." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid sm:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ContactCard, { icon: Phone, title: "Call", value: "+91 98xxx xxxxx", href: "tel:+919800000000" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ContactCard, { icon: MessageCircle, title: "WhatsApp", value: "Start chat", href: "https://wa.me/919800000000" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ContactCard, { icon: Mail, title: "Email", value: "hello@tqgc.global", href: "mailto:hello@tqgc.global" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ContactCard, { icon: MapPin, title: "Visit", value: "Bengaluru · Remote · Global" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex items-center gap-3", children: [Instagram, Linkedin, Youtube, Facebook].map((I, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "#",
          "aria-label": "Social link",
          className: "h-10 w-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(I, { className: "h-4 w-4" })
        },
        i
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero", size: "xl", asChild: true, className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://wa.me/919800000000", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-5 w-5" }),
        " Chat on WhatsApp"
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-3xl overflow-hidden border border-border shadow-elevated min-h-[420px] bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "iframe",
      {
        title: "TQGC location",
        src: "https://www.google.com/maps?q=Bengaluru&output=embed",
        className: "w-full h-full min-h-[420px] border-0",
        loading: "lazy",
        referrerPolicy: "no-referrer-when-downgrade"
      }
    ) })
  ] }) }) });
}
function ContactCard({
  icon: Icon,
  title,
  value,
  href
}) {
  const inner = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground uppercase tracking-wider", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: value })
    ] })
  ] });
  const cls = "flex items-center gap-3 p-4 rounded-2xl bg-card border border-border hover:border-primary/40 transition-colors";
  return href ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href, className: cls, children: inner }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cls, children: inner });
}
const cols = [
  {
    title: "Services",
    items: ["Career Counseling", "Psychological Counseling", "Study Abroad", "Life Coaching", "Corporate Training", "Psychometric Tests"]
  },
  {
    title: "Resources",
    items: ["Career Blog", "Mental Health Articles", "Study Abroad Guides", "Psychology Library", "Workshops", "Newsletter"]
  },
  {
    title: "Company",
    items: ["About", "Experts", "Stories", "Press", "Careers", "Contact"]
  }
];
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative bg-navy-deep text-white pt-20 pb-10 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-aurora opacity-30" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 lg:px-8 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1.4fr_repeat(3,1fr)_1.4fr] gap-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-10 w-10 rounded-xl bg-[var(--gradient-gold)] flex items-center justify-center shadow-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "h-5 w-5 text-navy-deep", strokeWidth: 2.5 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl font-bold", children: "TQGC" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-sm text-white/65 leading-relaxed max-w-sm", children: "The Quest Guidance Center — a global practice for career discovery, psychological wellness, and life transformation." })
        ] }),
        cols.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-gold font-semibold", children: c.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-3", children: c.items.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "text-sm text-white/70 hover:text-white transition-colors", children: i }) }, i)) })
        ] }, c.title)),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-gold font-semibold", children: "Newsletter" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-sm text-white/65", children: "Insights on mind, career & global living. Monthly. No spam." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => e.preventDefault(), className: "mt-4 flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                placeholder: "you@example.com",
                className: "flex-1 h-11 rounded-full bg-white/8 border border-white/15 px-4 text-sm placeholder:text-white/40 focus:outline-none focus:border-gold/60"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "h-11 px-5 rounded-full bg-[var(--gradient-gold)] text-navy-deep text-sm font-semibold shadow-gold hover:brightness-110", children: "Subscribe" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/55", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " The Quest Guidance Center. All rights reserved."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-white", children: "Privacy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-white", children: "Terms" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-white", children: "Cookies" })
        ] })
      ] })
    ] })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Counters, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Services, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(WhyChoose, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Journey, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Global, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Experts, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Wellness, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stories, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AIAssistant, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Booking, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { position: "top-center", richColors: true })
  ] });
}
export {
  Index as component
};
