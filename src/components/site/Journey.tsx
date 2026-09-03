import { motion } from "motion/react";
import { CalendarCheck2, Search, ShieldCheck, UserRoundCheck } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Describe what you need",
    description:
      "Choose a category or search by the concern, decision, language or format that matters to you.",
  },
  {
    icon: UserRoundCheck,
    number: "02",
    title: "Compare expert profiles",
    description:
      "Review experience, approach, qualifications, fees, languages and available consultation modes.",
  },
  {
    icon: CalendarCheck2,
    number: "03",
    title: "Choose a private slot",
    description:
      "Log in with mobile OTP, share a short intake note and select an available time in IST.",
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "Consult and follow up",
    description:
      "Join the session from your dashboard and keep confirmations, invoices and follow-ups together.",
  },
];

export function Journey() {
  return (
    <section id="how-it-works" className="relative bg-navy py-20 text-white lg:py-28">
      <div className="absolute inset-0 bg-aurora opacity-35" />
      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            How it works
          </div>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight lg:text-5xl">
            From uncertainty to a confirmed conversation.
          </h2>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className="rounded-3xl glass-dark p-6"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <step.icon className="h-5 w-5" />
                </span>
                <span className="font-display text-2xl font-bold text-white/20">{step.number}</span>
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{step.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
