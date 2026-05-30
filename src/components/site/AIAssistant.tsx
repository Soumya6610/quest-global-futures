import { useState } from "react";
import { motion } from "motion/react";
import { Sparkles, Send, Bot } from "lucide-react";

const suggestions = [
  "Which career is best for me?",
  "Which country should I study in?",
  "What skills should I learn in 2026?",
  "How can I overcome career confusion?",
];

export function AIAssistant() {
  const [active, setActive] = useState(suggestions[0]);

  return (
    <section className="relative py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="rounded-[2rem] lg:rounded-[2.5rem] bg-navy text-white p-8 lg:p-14 overflow-hidden relative shadow-elevated">
          <div className="absolute inset-0 bg-aurora opacity-60" />
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold font-semibold">
                <Sparkles className="h-3.5 w-3.5" /> New · TQGC AI
              </div>
              <h2 className="mt-4 font-display text-4xl lg:text-5xl font-bold tracking-tight text-balance">
                Ask anything. <span className="text-gradient-gold">Get clarity in seconds.</span>
              </h2>
              <p className="mt-5 text-white/70 leading-relaxed max-w-md">
                A private AI companion trained on a decade of TQGC counseling sessions, career data, and global admissions intelligence.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => setActive(s)}
                    className={`text-xs px-3 py-2 rounded-full border transition-all ${
                      active === s
                        ? "bg-gold text-navy-deep border-gold"
                        : "border-white/15 text-white/80 hover:bg-white/10"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="glass-dark rounded-3xl p-5 shadow-elevated"
            >
              <div className="flex items-center gap-2 pb-3 border-b border-white/10">
                <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
                <span className="text-xs text-white/70">TQGC AI · Online</span>
              </div>
              <div className="py-5 space-y-4">
                <div className="flex justify-end">
                  <p className="max-w-[80%] rounded-2xl rounded-tr-sm bg-primary/40 px-4 py-2.5 text-sm">{active}</p>
                </div>
                <div className="flex gap-2 items-start">
                  <span className="h-8 w-8 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                    <Bot className="h-4 w-4 text-gold" />
                  </span>
                  <p className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white/10 px-4 py-2.5 text-sm text-white/90 leading-relaxed">
                    Great question. Based on millions of career paths I'd start with a 12-min psychometric profile — it narrows your direction with 92% accuracy. Want me to set one up?
                  </p>
                </div>
              </div>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex gap-2 pt-3 border-t border-white/10"
              >
                <input
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2.5 text-sm placeholder:text-white/40 focus:outline-none focus:border-gold/50"
                  placeholder="Ask TQGC AI…"
                />
                <button
                  type="submit"
                  className="h-10 w-10 rounded-full bg-[var(--gradient-gold)] text-navy-deep flex items-center justify-center shadow-gold hover:brightness-110"
                  aria-label="Send"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}