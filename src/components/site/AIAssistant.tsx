import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Bot, SearchCheck, Sparkles } from "lucide-react";
import { useState } from "react";

const suggestions = [
  {
    question: "I am unsure about my career direction",
    category: "Career & Education",
    answer:
      "Start with career consultants who cover decision frameworks, transitions and education pathways.",
  },
  {
    question: "I need help shortlisting countries",
    category: "Study Abroad",
    answer:
      "Compare study-abroad experts by destination experience, affordability approach and application support.",
  },
  {
    question: "Work stress is affecting my decisions",
    category: "Mental Wellness",
    answer:
      "Look for appropriately qualified wellness professionals and compare their approach, language and format.",
  },
];

export function AIAssistant() {
  const [active, setActive] = useState(suggestions[0]);

  return (
    <section className="relative py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-navy p-8 text-white shadow-elevated lg:rounded-[2.5rem] lg:p-14">
          <div className="absolute inset-0 bg-aurora opacity-60" />
          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                <Sparkles className="h-3.5 w-3.5" /> Guided matching preview
              </div>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-balance lg:text-5xl">
                Not sure where to start?{" "}
                <span className="text-gradient-gold">Narrow the choice.</span>
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-white/70">
                Choose the statement closest to your situation. This frontend helper suggests a
                category; it does not replace professional advice.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion.question}
                    type="button"
                    onClick={() => setActive(suggestion)}
                    className={`rounded-full border px-3 py-2 text-xs transition-all ${active.question === suggestion.question ? "border-gold bg-gold text-navy-deep" : "border-white/15 text-white/80 hover:bg-white/10"}`}
                  >
                    {suggestion.question}
                  </button>
                ))}
              </div>
            </div>

            <motion.div
              key={active.question}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl glass-dark p-5 shadow-elevated"
            >
              <div className="flex items-center gap-2 border-b border-white/10 pb-3">
                <span className="h-2 w-2 animate-pulse rounded-full bg-gold" />
                <span className="text-xs text-white/70">
                  TQGC matching guide · Frontend preview
                </span>
              </div>
              <div className="space-y-4 py-5">
                <div className="flex justify-end">
                  <p className="max-w-[85%] rounded-2xl rounded-tr-sm bg-primary/40 px-4 py-2.5 text-sm">
                    {active.question}
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/20">
                    <Bot className="h-4 w-4 text-gold" />
                  </span>
                  <div className="max-w-[88%] rounded-2xl rounded-tl-sm bg-white/10 px-4 py-3">
                    <div className="text-xs font-semibold uppercase tracking-wider text-gold">
                      Suggested category · {active.category}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-white/90">{active.answer}</p>
                  </div>
                </div>
              </div>
              <Link
                to="/experts"
                className="flex h-11 items-center justify-center gap-2 rounded-full bg-[var(--gradient-gold)] text-sm font-semibold text-navy-deep shadow-gold"
              >
                <SearchCheck className="h-4 w-4" /> See matching experts{" "}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
