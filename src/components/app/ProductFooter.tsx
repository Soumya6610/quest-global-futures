import { Link } from "@tanstack/react-router";
import { ArrowRight, Compass, ShieldCheck } from "lucide-react";

const footerGroups = [
  {
    title: "Consultations",
    links: [
      { label: "Career & education", to: "/experts" },
      { label: "Study abroad", to: "/experts" },
      { label: "Mental wellness", to: "/experts" },
      { label: "Browse by city", to: "/experts" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "How it works", to: "/#how-it-works" },
      { label: "Client login", to: "/auth" },
      { label: "Client dashboard", to: "/dashboard" },
      { label: "Consultant registration", to: "/consultant/apply" },
    ],
  },
];

export function ProductFooter() {
  return (
    <footer className="relative overflow-hidden bg-navy-deep pb-9 pt-16 text-white">
      <div className="absolute inset-0 bg-aurora opacity-25" />
      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_repeat(2,0.75fr)_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--gradient-gold)] shadow-gold">
                <Compass className="h-5 w-5 text-navy-deep" />
              </span>
              <span className="font-display text-xl font-bold">TQGC</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              Private one-to-one guidance from professionals across India. Compare expertise,
              language, city, fees, formats and reviews before you book.
            </p>
            <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/65">
              <ShieldCheck className="h-4 w-4 text-gold" /> Frontend marketplace preview
            </span>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                {group.title}
              </div>
              <ul className="mt-5 space-y-3">
                {group.links.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="text-sm text-white/65 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              For consultants
            </div>
            <h2 className="mt-3 font-display text-xl font-bold">Bring your expertise to TQGC.</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Apply with your city, services, pricing and credentials. Public profiles require
              administrator approval.
            </p>
            <Link
              to="/consultant/apply"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white"
            >
              Register as a consultant <ArrowRight className="h-4 w-4 text-gold" />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} The Quest Guidance Center. All rights reserved.</div>
          <div>
            Privacy, terms, credential rules and grievance policy to be finalized before launch.
          </div>
        </div>
      </div>
    </footer>
  );
}
