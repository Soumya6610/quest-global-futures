import { Compass } from "lucide-react";

const cols = [
  {
    title: "Services",
    items: ["Career Counseling", "Psychological Counseling", "Study Abroad", "Life Coaching", "Corporate Training", "Psychometric Tests"],
  },
  {
    title: "Resources",
    items: ["Career Blog", "Mental Health Articles", "Study Abroad Guides", "Psychology Library", "Workshops", "Newsletter"],
  },
  {
    title: "Company",
    items: ["About", "Experts", "Stories", "Press", "Careers", "Contact"],
  },
];

export function Footer() {
  return (
    <footer className="relative bg-navy-deep text-white pt-20 pb-10 overflow-hidden">
      <div className="absolute inset-0 bg-aurora opacity-30" />
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-[1.4fr_repeat(3,1fr)_1.4fr] gap-10">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="h-10 w-10 rounded-xl bg-[var(--gradient-gold)] flex items-center justify-center shadow-gold">
                <Compass className="h-5 w-5 text-navy-deep" strokeWidth={2.5} />
              </span>
              <span className="font-display text-xl font-bold">TQGC</span>
            </a>
            <p className="mt-5 text-sm text-white/65 leading-relaxed max-w-sm">
              The Quest Guidance Center — a global practice for career discovery, psychological wellness, and life transformation.
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">{c.title}</div>
              <ul className="mt-5 space-y-3">
                {c.items.map((i) => (
                  <li key={i}>
                    <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Newsletter</div>
            <p className="mt-5 text-sm text-white/65">Insights on mind, career & global living. Monthly. No spam.</p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex gap-2">
              <input
                placeholder="you@example.com"
                className="flex-1 h-11 rounded-full bg-white/8 border border-white/15 px-4 text-sm placeholder:text-white/40 focus:outline-none focus:border-gold/60"
              />
              <button className="h-11 px-5 rounded-full bg-[var(--gradient-gold)] text-navy-deep text-sm font-semibold shadow-gold hover:brightness-110">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/55">
          <div>© {new Date().getFullYear()} The Quest Guidance Center. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}