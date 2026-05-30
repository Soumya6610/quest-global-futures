import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Check, ChevronLeft, ChevronRight, Video, Building, Globe } from "lucide-react";
import { toast } from "sonner";

const services = [
  "Career Counseling (Student)",
  "Career Counseling (Professional)",
  "Psychological Counseling",
  "Study Abroad Guidance",
  "Life Coaching & Wellness",
  "Corporate Training",
];
const ages = ["Under 18", "18–24", "25–34", "35–44", "45+"];
const modes = [
  { id: "online", label: "Online Chat", icon: Globe },
  { id: "video", label: "Video Call", icon: Video },
  { id: "person", label: "In-Person", icon: Building },
];

export function Booking() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    country: "",
    age: "",
    service: "",
    mode: "",
  });
  const update = (k: keyof typeof form, v: string) => setForm((s) => ({ ...s, [k]: v }));

  const stepValid = [
    !!(form.name && form.email.includes("@") && form.mobile.length >= 7),
    !!(form.country && form.age),
    !!(form.service && form.mode),
  ];

  const submit = () => {
    toast.success("Consultation request received", {
      description: "Our team will reach out within 24 hours.",
    });
    setStep(3);
  };

  return (
    <section id="book" className="relative py-24 lg:py-32 bg-secondary/40 border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary font-semibold">
            <span className="h-px w-8 bg-primary/40" /> Free First Session
          </div>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            Book your <span className="text-gradient-brand">complimentary consultation</span>.
          </h2>
          <p className="mt-4 text-muted-foreground">No card required. 30 minutes. Zero pressure.</p>
        </div>

        <div className="max-w-2xl mx-auto rounded-3xl bg-card border border-border p-6 lg:p-10 shadow-elevated">
          <div className="flex items-center gap-2 mb-8">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`h-1.5 flex-1 rounded-full transition-colors ${
                  i <= step ? "bg-primary" : "bg-border"
                }`}
              />
            ))}
          </div>

          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div key="s0" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}>
                <h3 className="font-display text-xl font-semibold mb-1">Tell us about you</h3>
                <p className="text-sm text-muted-foreground mb-6">Step 1 of 3</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Full name" value={form.name} onChange={(v) => update("name", v)} placeholder="Jane Doe" />
                  <Field label="Email" type="email" value={form.email} onChange={(v) => update("email", v)} placeholder="you@example.com" />
                  <Field label="Mobile" value={form.mobile} onChange={(v) => update("mobile", v)} placeholder="+91 98xxxxxx" />
                  <Field label="Country" value={form.country} onChange={(v) => update("country", v)} placeholder="India" />
                </div>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div key="s1" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}>
                <h3 className="font-display text-xl font-semibold mb-1">A little context</h3>
                <p className="text-sm text-muted-foreground mb-6">Step 2 of 3</p>
                <div>
                  <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Age group</label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {ages.map((a) => (
                      <Chip key={a} active={form.age === a} onClick={() => update("age", a)}>{a}</Chip>
                    ))}
                  </div>
                </div>
                <div className="mt-6">
                  <Field label="Country / region" value={form.country} onChange={(v) => update("country", v)} placeholder="Where are you based?" />
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="s2" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}>
                <h3 className="font-display text-xl font-semibold mb-1">What are you exploring?</h3>
                <p className="text-sm text-muted-foreground mb-6">Step 3 of 3</p>
                <div>
                  <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Service</label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {services.map((s) => (
                      <Chip key={s} active={form.service === s} onClick={() => update("service", s)}>{s}</Chip>
                    ))}
                  </div>
                </div>
                <div className="mt-6">
                  <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Preferred mode</label>
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    {modes.map((m) => {
                      const sel = form.mode === m.id;
                      return (
                        <button
                          key={m.id}
                          onClick={() => update("mode", m.id)}
                          className={`rounded-2xl border p-4 text-center transition-all ${
                            sel
                              ? "border-primary bg-primary/10 -translate-y-0.5 shadow-glow"
                              : "border-border hover:border-primary/40"
                          }`}
                        >
                          <m.icon className={`h-5 w-5 mx-auto ${sel ? "text-primary" : "text-muted-foreground"}`} />
                          <div className="mt-2 text-xs font-medium">{m.label}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="s3" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
                <span className="inline-flex h-16 w-16 rounded-full bg-primary/10 text-primary items-center justify-center">
                  <Check className="h-8 w-8" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold">You're booked, {form.name.split(" ")[0] || "friend"} ✨</h3>
                <p className="mt-2 text-muted-foreground">A senior advisor will reach out within 24 hours to confirm your slot.</p>
              </motion.div>
            )}
          </AnimatePresence>

          {step < 3 && (
            <div className="mt-8 flex items-center justify-between gap-3">
              <Button
                variant="ghost"
                disabled={step === 0}
                onClick={() => setStep((s) => Math.max(0, s - 1))}
              >
                <ChevronLeft className="h-4 w-4" /> Back
              </Button>
              {step < 2 ? (
                <Button
                  variant="brand"
                  size="lg"
                  disabled={!stepValid[step]}
                  onClick={() => setStep((s) => s + 1)}
                >
                  Continue <ChevronRight className="h-4 w-4" />
                </Button>
              ) : (
                <Button variant="hero" size="lg" disabled={!stepValid[2]} onClick={submit}>
                  Confirm Booking <Check className="h-4 w-4" />
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <label className="block">
      {label && <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</span>}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full h-11 rounded-xl border border-border bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
      />
    </label>
  );
}

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`text-sm rounded-full px-4 py-2 border transition-all ${
        active
          ? "bg-primary text-primary-foreground border-primary shadow-glow"
          : "border-border hover:border-primary/40"
      }`}
    >
      {children}
    </button>
  );
}