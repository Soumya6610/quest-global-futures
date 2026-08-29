import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const appCss = "/assets/styles-CAaopqCE.css";
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
  const router = useRouter();
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
            router.invalidate();
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
const Route$2 = createRootRouteWithContext()({
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
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("head", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "script",
        {
          dangerouslySetInnerHTML: {
            __html: `(function(){try{var k='tqgc-theme';var s=localStorage.getItem(k);var d=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches;var t=s==='light'||s==='dark'?s:(d?'dark':'light');document.documentElement.classList.toggle('dark',t==='dark');document.documentElement.style.colorScheme=t;}catch(e){}})();`
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$2.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const $$splitComponentImporter = () => import("./index-jxbOqfNR.mjs");
const pageTitle = "TQGC — Premium Career Counseling, Wellness & Study Abroad Guidance";
const pageDescription = "The Quest Guidance Center offers premium career counseling, psychological wellness, study abroad guidance, life coaching & global mentorship. Trusted by students, professionals & institutions worldwide.";
const ogDescription = "Empowering lives and transforming careers through professional counseling, psychological wellness, study abroad guidance, and global mentorship. Discover your potential with TQGC.";
const keywords = "Career Counseling, Study Abroad Consultant, Psychological Counseling, Mental Wellness, Life Coaching, Career Guidance, Professional Coaching, Student Counseling, Global Education Guidance, Psychometric Assessment, Executive Coaching, Personal Growth, Abroad Admission Consultant, Overseas Education, Mindfulness Coaching";
const Route$1 = createFileRoute()({
  head: () => ({
    meta: [
      {
        title: pageTitle
      },
      {
        name: "description",
        content: pageDescription
      },
      {
        name: "keywords",
        content: keywords
      },
      {
        name: "author",
        content: "The Quest Guidance Center"
      },
      {
        name: "robots",
        content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      },
      /* Open Graph */
      {
        property: "og:title",
        content: pageTitle
      },
      {
        property: "og:description",
        content: ogDescription
      },
      {
        property: "og:type",
        content: "website"
      },
      {
        property: "og:url",
        content: "/"
      },
      {
        property: "og:image",
        content: "/og-image.jpg"
      },
      {
        property: "og:image:alt",
        content: "The Quest Guidance Center — Premium Career & Wellness Consultancy"
      },
      {
        property: "og:image:width",
        content: "1200"
      },
      {
        property: "og:image:height",
        content: "630"
      },
      {
        property: "og:locale",
        content: "en_US"
      },
      /* Twitter Cards */
      {
        name: "twitter:title",
        content: pageTitle
      },
      {
        name: "twitter:description",
        content: ogDescription
      },
      {
        name: "twitter:image",
        content: "/og-image.jpg"
      },
      {
        name: "twitter:image:alt",
        content: "The Quest Guidance Center — Premium Career & Wellness Consultancy"
      }
    ],
    links: [{
      rel: "canonical",
      href: "/"
    }, {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [{
          "@type": "Organization",
          "@id": "/#organization",
          name: "The Quest Guidance Center",
          alternateName: "TQGC",
          url: "/",
          logo: "/og-image.jpg",
          description: "Premium career counseling, psychological wellness, study abroad guidance, life coaching & global mentorship.",
          sameAs: ["https://linkedin.com/company/tqgc", "https://instagram.com/tqgc", "https://twitter.com/TQGC"],
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "Customer Support",
            availableLanguage: ["English"]
          },
          areaServed: "Worldwide",
          knowsAbout: ["Career Counseling", "Psychological Wellness", "Study Abroad Guidance", "Life Coaching", "Executive Coaching", "Psychometric Assessment"]
        }, {
          "@type": "WebSite",
          "@id": "/#website",
          url: "/",
          name: "The Quest Guidance Center",
          publisher: {
            "@id": "/#organization"
          },
          inLanguage: "en-US",
          potentialAction: {
            "@type": "SearchAction",
            target: "/?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }, {
          "@type": "WebPage",
          "@id": "/#webpage",
          url: "/",
          name: pageTitle,
          description: pageDescription,
          isPartOf: {
            "@id": "/#website"
          },
          about: {
            "@id": "/#organization"
          },
          inLanguage: "en-US"
        }, {
          "@type": "FAQPage",
          mainEntity: [{
            "@type": "Question",
            name: "What services does TQGC offer?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "TQGC offers career counseling, psychological wellness services, study abroad guidance, life coaching, executive coaching, and psychometric assessments for students, professionals, and organizations worldwide."
            }
          }, {
            "@type": "Question",
            name: "Who can benefit from TQGC's programs?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Our programs are designed for school students, college students, working professionals, and organizations seeking career guidance, mental wellness support, and global education consulting."
            }
          }, {
            "@type": "Question",
            name: "Does TQGC provide study abroad guidance?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, TQGC provides comprehensive study abroad guidance including university selection, application support, visa assistance, and preparation for destinations such as the USA, UK, Canada, Australia, Germany, and more."
            }
          }]
        }]
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const BASE_URL = "";
const Route = createFileRoute()({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", changefreq: "weekly", priority: "1.0" }
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
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$2
});
const SitemapDotxmlRoute = Route.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$2
});
const rootRouteChildren = {
  IndexRoute,
  SitemapDotxmlRoute
};
const routeTree = Route$2._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
