import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { U as notFound } from "../_libs/tanstack__router-core.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$9 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "The Quest Guidance Center" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@TQGC" }
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Poppins:wght@500;600;700;800&family=Inter:wght@300;400;500;600&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en-IN", className: "dark", suppressHydrationWarning: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$9.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const $$splitComponentImporter$7 = () => import("./index-CSFp7qun.mjs");
const pageTitle = "TQGC — Private One-to-One Consultation in India";
const pageDescription = "Discover consultants for career decisions, study abroad planning and mental wellness. Compare expertise, language, fees and availability before booking.";
const Route$8 = createFileRoute()({
  head: () => ({
    meta: [{
      title: pageTitle
    }, {
      name: "description",
      content: pageDescription
    }, {
      name: "keywords",
      content: "online consultation India, career consultant, study abroad consultant, mental wellness consultation"
    }, {
      name: "author",
      content: "The Quest Guidance Center"
    }, {
      name: "robots",
      content: "index, follow"
    }, {
      property: "og:title",
      content: pageTitle
    }, {
      property: "og:description",
      content: pageDescription
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:image",
      content: "/og-image.jpg"
    }, {
      property: "og:locale",
      content: "en_IN"
    }, {
      name: "twitter:title",
      content: pageTitle
    }, {
      name: "twitter:description",
      content: pageDescription
    }, {
      name: "twitter:image",
      content: "/og-image.jpg"
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }, {
      rel: "icon",
      type: "image/svg+xml",
      href: "/favicon.svg"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "The Quest Guidance Center",
        alternateName: "TQGC",
        url: "/",
        areaServed: "India",
        description: pageDescription
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./auth-j9Ca5mFi.mjs");
const Route$7 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Log in or register | TQGC"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./dashboard-CnOVLFgB.mjs");
const Route$6 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "My consultations | TQGC"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const BASE_URL = "";
const Route$5 = createFileRoute()({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/experts", changefreq: "daily", priority: "0.9" }
        ];
        const urls = entries.map(
          (e) => [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`
          ].filter(Boolean).join("\n")
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600"
          }
        });
      }
    }
  }
});
const e1 = "/assets/expert-1-CEDIzihE.jpg";
const e2 = "/assets/expert-2-C1POr4Kt.jpg";
const e3 = "/assets/expert-3-DHpyp5-S.jpg";
const consultantCategories = [
  "Career & Education",
  "Study Abroad",
  "Mental Wellness",
  "Legal & Documentation",
  "Finance & Tax",
  "Business & Startup",
  "Technology & Digital",
  "Health & Nutrition",
  "Relationships & Family",
  "Real Estate & Property",
  "Design & Creative",
  "Leadership & Executive"
];
const experts = [
  {
    id: "anaya-krishnan",
    name: "Dr. Anaya Krishnan",
    title: "Clinical Psychology Consultant",
    category: "Mental Wellness",
    image: e1,
    experience: 14,
    languages: ["English", "Hindi", "Malayalam"],
    location: "Bengaluru",
    modes: ["Video", "In-person"],
    price: 1800,
    duration: 50,
    nextAvailable: "Today, 6:30 PM",
    specialties: ["Anxiety", "Stress", "Adolescent wellbeing", "CBT"],
    qualifications: ["M.Phil. Clinical Psychology", "RCI registration to be verified"],
    about: "Supports adults, adolescents and families with structured, evidence-informed conversations focused on practical progress.",
    approach: "Sessions begin with a careful assessment of your goals and context, followed by a collaborative plan with clear boundaries and follow-up steps.",
    rating: 4.9,
    reviewCount: 86,
    reviews: [
      {
        id: "anaya-review-1",
        author: "Priya S.",
        city: "Kochi",
        rating: 5,
        date: "18 Aug 2026",
        text: "She listened without rushing and gave me a practical way to work through the anxiety I was facing.",
        verified: true
      },
      {
        id: "anaya-review-2",
        author: "Arjun N.",
        city: "Bengaluru",
        rating: 5,
        date: "02 Aug 2026",
        text: "The session felt structured, private and useful. The follow-up steps were especially clear.",
        verified: true
      }
    ]
  },
  {
    id: "sarah-whitfield",
    name: "Sarah Whitfield",
    title: "International Education Mentor",
    category: "Study Abroad",
    image: e2,
    experience: 11,
    languages: ["English", "Hindi"],
    location: "New Delhi",
    modes: ["Video", "Chat"],
    price: 1499,
    duration: 45,
    nextAvailable: "Tomorrow, 11:00 AM",
    specialties: ["University shortlisting", "Applications", "SOP review", "Scholarships"],
    qualifications: ["M.Ed. International Education", "ICEF counsellor training"],
    about: "Helps students and families make informed international education decisions without pushing a particular country or institution.",
    approach: "Advice is organised around academic fit, affordability, career outcomes and application readiness, ending with a written next-step checklist.",
    rating: 4.8,
    reviewCount: 64,
    reviews: [
      {
        id: "sarah-review-1",
        author: "Mehak G.",
        city: "Chandigarh",
        rating: 5,
        date: "21 Aug 2026",
        text: "The university shortlist was realistic for my profile and budget. There was no pressure to choose one country.",
        verified: true
      },
      {
        id: "sarah-review-2",
        author: "Rahul K.",
        city: "New Delhi",
        rating: 4,
        date: "29 Jul 2026",
        text: "Very helpful SOP feedback and a clear application timeline for the next three months.",
        verified: true
      }
    ]
  },
  {
    id: "rohan-mehta",
    name: "Rohan Mehta",
    title: "Career Strategy Consultant",
    category: "Career & Education",
    image: e3,
    experience: 9,
    languages: ["English", "Hindi", "Marathi"],
    location: "Mumbai",
    modes: ["Video", "Chat", "In-person"],
    price: 1299,
    duration: 45,
    nextAvailable: "Today, 8:00 PM",
    specialties: ["Career transitions", "Early careers", "MBA decisions", "Technology roles"],
    qualifications: ["MBA, Human Resources", "Certified career services practitioner"],
    about: "Works with students and professionals who need a grounded decision framework for their next education or career move.",
    approach: "Consultations turn an unclear decision into a shortlist of realistic options, trade-offs and a time-bound action plan.",
    rating: 4.7,
    reviewCount: 51,
    reviews: [
      {
        id: "rohan-review-1",
        author: "Neha P.",
        city: "Pune",
        rating: 5,
        date: "24 Aug 2026",
        text: "Rohan helped me compare an MBA with a job switch using facts instead of generic motivation.",
        verified: true
      },
      {
        id: "rohan-review-2",
        author: "Kunal M.",
        city: "Mumbai",
        rating: 4,
        date: "11 Aug 2026",
        text: "Good industry context and a useful action plan. I left the call knowing exactly what to research next.",
        verified: true
      }
    ]
  },
  {
    id: "isha-verma",
    name: "Isha Verma",
    title: "Student Career Counsellor",
    category: "Career & Education",
    image: e1,
    experience: 8,
    languages: ["English", "Hindi"],
    location: "Jaipur",
    modes: ["Video", "Chat", "In-person"],
    price: 999,
    duration: 45,
    nextAvailable: "Tomorrow, 4:00 PM",
    specialties: ["Stream selection", "College planning", "Psychometric guidance"],
    qualifications: ["M.A. Psychology", "Certified career analyst"],
    about: "Works with school and undergraduate students to connect their interests, strengths and practical education options.",
    approach: "Sessions combine structured questions with a simple comparison framework that students can discuss with their families.",
    rating: 4.8,
    reviewCount: 39,
    reviews: [
      {
        id: "isha-review-1",
        author: "Sunita R.",
        city: "Jaipur",
        rating: 5,
        date: "15 Aug 2026",
        text: "My daughter felt heard, and we received balanced options instead of being pushed toward one stream.",
        verified: true
      }
    ]
  },
  {
    id: "vivek-reddy",
    name: "Vivek Reddy",
    title: "International Admissions Consultant",
    category: "Study Abroad",
    image: e2,
    experience: 10,
    languages: ["English", "Hindi", "Telugu"],
    location: "Hyderabad",
    modes: ["Video", "Chat", "In-person"],
    price: 1399,
    duration: 50,
    nextAvailable: "Friday, 7:00 PM",
    specialties: ["US admissions", "Scholarships", "Profile building", "Visa readiness"],
    qualifications: ["M.S. Higher Education", "International admissions training"],
    about: "Supports students who want a transparent view of admission probability, cost and preparation gaps before applying abroad.",
    approach: "Each consultation produces a risk-aware shortlist and a milestone plan covering tests, documents and funding.",
    rating: 4.9,
    reviewCount: 72,
    reviews: [
      {
        id: "vivek-review-1",
        author: "Akhil D.",
        city: "Hyderabad",
        rating: 5,
        date: "20 Aug 2026",
        text: "The cost comparison and scholarship strategy made the decision much easier for my family.",
        verified: true
      }
    ]
  },
  {
    id: "meera-kulkarni",
    name: "Meera Kulkarni",
    title: "Workplace Wellness Counsellor",
    category: "Mental Wellness",
    image: e3,
    experience: 12,
    languages: ["English", "Hindi", "Marathi"],
    location: "Pune",
    modes: ["Video", "In-person"],
    price: 1599,
    duration: 50,
    nextAvailable: "Today, 7:30 PM",
    specialties: ["Burnout", "Workplace stress", "Boundaries", "Life transitions"],
    qualifications: ["M.A. Counselling Psychology", "Trauma-informed practice training"],
    about: "Helps working professionals navigate burnout, difficult transitions and sustainable boundaries in a confidential setting.",
    approach: "Sessions focus on understanding patterns, stabilising immediate pressure and choosing small changes that can be sustained.",
    rating: 4.8,
    reviewCount: 58,
    reviews: [
      {
        id: "meera-review-1",
        author: "Siddharth B.",
        city: "Pune",
        rating: 5,
        date: "22 Aug 2026",
        text: "A calm, thoughtful conversation that helped me separate burnout from the career decision I was trying to make.",
        verified: true
      }
    ]
  }
];
const consultationCategories = ["All", ...consultantCategories];
const consultationCities = [
  "All cities",
  ...Array.from(new Set(experts.map((expert) => expert.location))).sort()
];
function getExpert(id) {
  return experts.find((expert) => expert.id === id);
}
function formatInr(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(amount);
}
const $$splitComponentImporter$4 = () => import("../_expertId-C7sxlKon.mjs");
const Route$4 = createFileRoute()({
  loader: ({
    params
  }) => {
    const expert = getExpert(params.expertId);
    if (!expert) throw notFound();
    return expert;
  },
  head: ({
    loaderData
  }) => ({
    meta: [{
      title: `Book ${loaderData?.name ?? "consultation"} | TQGC`
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./apply-CmX7BfKe.mjs");
const Route$3 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Register as a consultant | TQGC"
    }, {
      name: "description",
      content: "Apply to offer verified one-to-one consultations through TQGC."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./dashboard-Fj3RcjDp.mjs");
const Route$2 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Consultant dashboard | TQGC"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./index-C77dIERs.mjs");
const Route$1 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Find a consultant in India | TQGC"
    }, {
      name: "description",
      content: "Browse one-to-one career, education, study abroad and mental wellness consultants."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("../_expertId-B8q8BHpX.mjs");
const Route = createFileRoute()({
  loader: ({
    params
  }) => {
    const expert = getExpert(params.expertId);
    if (!expert) throw notFound();
    return expert;
  },
  head: ({
    loaderData
  }) => ({
    meta: [{
      title: `${loaderData?.name ?? "Consultant"} | TQGC`
    }, {
      name: "description",
      content: loaderData?.about ?? "View consultant details and book a one-to-one session."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route$8.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$9
});
const AuthRoute = Route$7.update({
  id: "/auth",
  path: "/auth",
  getParentRoute: () => Route$9
});
const DashboardRoute = Route$6.update({
  id: "/dashboard",
  path: "/dashboard",
  getParentRoute: () => Route$9
});
const SitemapDotxmlRoute = Route$5.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$9
});
const BookExpertIdRoute = Route$4.update({
  id: "/book/$expertId",
  path: "/book/$expertId",
  getParentRoute: () => Route$9
});
const ConsultantApplyRoute = Route$3.update({
  id: "/consultant/apply",
  path: "/consultant/apply",
  getParentRoute: () => Route$9
});
const ConsultantDashboardRoute = Route$2.update({
  id: "/consultant/dashboard",
  path: "/consultant/dashboard",
  getParentRoute: () => Route$9
});
const ExpertsIndexRoute = Route$1.update({
  id: "/experts/",
  path: "/experts/",
  getParentRoute: () => Route$9
});
const ExpertsExpertIdRoute = Route.update({
  id: "/experts/$expertId",
  path: "/experts/$expertId",
  getParentRoute: () => Route$9
});
const rootRouteChildren = {
  IndexRoute,
  AuthRoute,
  DashboardRoute,
  SitemapDotxmlRoute,
  BookExpertIdRoute,
  ConsultantApplyRoute,
  ConsultantDashboardRoute,
  ExpertsExpertIdRoute,
  ExpertsIndexRoute
};
const routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route$4 as R,
  consultationCities as a,
  consultationCategories as b,
  consultantCategories as c,
  Route as d,
  experts as e,
  formatInr as f,
  router as r
};
