import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import {
  ArrowLeft,
  BadgeCheck,
  CalendarDays,
  Check,
  Clock3,
  CreditCard,
  Info,
  LockKeyhole,
  MessageSquareText,
  Quote,
  ShieldCheck,
  Smartphone,
  Star,
  Video,
} from "lucide-react";
import { useMemo, useState } from "react";
import { ProductHeader } from "@/components/app/ProductHeader";
import { Button } from "@/components/ui/button";
import { formatInr, getExpert } from "@/data/experts";
import { usePlatformUser } from "@/hooks/use-platform-user";
import { saveFrontendBooking } from "@/lib/platform-store";

export const Route = createFileRoute("/book/$expertId")({
  loader: ({ params }) => {
    const expert = getExpert(params.expertId);
    if (!expert) throw notFound();
    return expert;
  },
  head: ({ loaderData }) => ({
    meta: [{ title: `Book ${loaderData?.name ?? "consultation"} | TQGC` }],
  }),
  component: BookingPage,
});

const timeSlots = ["10:00 AM", "11:30 AM", "2:00 PM", "4:30 PM", "6:30 PM", "8:00 PM"];

function getDates() {
  return Array.from({ length: 5 }).map((_, index) => {
    const date = new Date();
    date.setDate(date.getDate() + index + 1);
    return {
      value: date.toISOString().slice(0, 10),
      day: new Intl.DateTimeFormat("en-IN", { weekday: "short" }).format(date),
      date: new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "short" }).format(date),
    };
  });
}

function BookingPage() {
  const expert = Route.useLoaderData();
  const navigate = useNavigate();
  const { user, ready } = usePlatformUser();
  const dates = useMemo(getDates, []);
  const [step, setStep] = useState(0);
  const [date, setDate] = useState(dates[0].value);
  const [time, setTime] = useState("");
  const [mode, setMode] = useState(expert.modes[0]);
  const [concern, setConcern] = useState("");
  const [payment, setPayment] = useState("UPI");
  const [accepted, setAccepted] = useState(false);

  const confirm = () => {
    saveFrontendBooking({
      id: `TQGC-${Date.now().toString().slice(-8)}`,
      expertId: expert.id,
      expertName: expert.name,
      expertTitle: expert.title,
      date,
      time,
      mode,
      amount: expert.price,
      concern,
      status: "Confirmed",
    });
    setStep(3);
  };

  if (ready && !user) {
    return (
      <div className="min-h-screen bg-secondary/35">
        <ProductHeader />
        <main className="container mx-auto flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-12">
          <div className="max-w-lg rounded-3xl border border-border bg-card p-8 text-center shadow-elevated">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <LockKeyhole className="h-7 w-7" />
            </span>
            <h1 className="mt-5 font-display text-3xl font-bold">
              Log in before choosing a private slot
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Your account keeps consultation details, confirmations and future documents private.
            </p>
            <Button variant="hero" size="xl" asChild className="mt-7 w-full">
              <Link to="/auth">Log in or register</Link>
            </Button>
            <Link
              to="/experts/$expertId"
              params={{ expertId: expert.id }}
              className="mt-5 inline-flex text-sm text-primary"
            >
              Return to expert profile
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary/35">
      <ProductHeader />
      <main className="container mx-auto px-4 py-8 lg:px-8 lg:py-12">
        <Link
          to="/experts/$expertId"
          params={{ expertId: expert.id }}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Back to profile
        </Link>
        <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_340px]">
          <section className="rounded-3xl border border-border bg-card p-6 shadow-elevated sm:p-8">
            <div className="rounded-2xl border border-gold/25 bg-gold/10 p-4 text-sm">
              <div className="flex gap-2">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <p>
                  <strong>Frontend preview:</strong> slot confirmation and payment are simulated. No
                  money or message will be sent.
                </p>
              </div>
            </div>
            <div className="mt-7 flex gap-2">
              {[0, 1, 2].map((item) => (
                <span
                  key={item}
                  className={`h-1.5 flex-1 rounded-full ${item <= step ? "bg-primary" : "bg-border"}`}
                />
              ))}
            </div>

            {step === 0 && (
              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Step 1 of 3
                </p>
                <h1 className="mt-2 font-display text-3xl font-bold">Choose a time and format</h1>
                {expert.reviews[0] && (
                  <div className="mt-6 rounded-2xl border border-gold/25 bg-gold/8 p-4">
                    <div className="flex items-start gap-3">
                      <Quote className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                      <div>
                        <div className="flex items-center gap-2 text-sm font-semibold">
                          <Star className="h-4 w-4 fill-gold text-gold" /> {expert.rating}
                          <span className="font-normal text-muted-foreground">
                            from {expert.reviewCount} reviews
                          </span>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          “{expert.reviews[0].text}”
                        </p>
                        <div className="mt-2 flex items-center gap-1 text-xs text-primary">
                          <BadgeCheck className="h-3.5 w-3.5" /> {expert.reviews[0].author} ·
                          Verified booking
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="mt-7">
                  <div className="text-sm font-semibold">Consultation date</div>
                  <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-5">
                    {dates.map((item) => (
                      <button
                        key={item.value}
                        type="button"
                        onClick={() => setDate(item.value)}
                        className={`rounded-2xl border p-3 text-center ${date === item.value ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary/40"}`}
                      >
                        <div className="text-xs opacity-75">{item.day}</div>
                        <div className="mt-1 text-sm font-semibold">{item.date}</div>
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mt-6">
                  <div className="text-sm font-semibold">Available time · IST</div>
                  <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {timeSlots.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setTime(item)}
                        className={`rounded-xl border px-4 py-3 text-sm ${time === item ? "border-primary bg-primary/10 font-semibold text-primary" : "border-border hover:border-primary/40"}`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mt-6">
                  <div className="text-sm font-semibold">Consultation format</div>
                  <div className="mt-3 grid gap-2 sm:grid-cols-3">
                    {expert.modes.map((item) => {
                      const Icon =
                        item === "Video" ? Video : item === "Chat" ? MessageSquareText : Smartphone;
                      return (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setMode(item)}
                          className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm ${mode === item ? "border-primary bg-primary/10 font-semibold text-primary" : "border-border"}`}
                        >
                          <Icon className="h-4 w-4" />
                          {item}
                        </button>
                      );
                    })}
                  </div>
                </div>
                <Button
                  variant="brand"
                  size="xl"
                  className="mt-8 w-full"
                  disabled={!time}
                  onClick={() => setStep(1)}
                >
                  Continue to intake
                </Button>
              </div>
            )}

            {step === 1 && (
              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Step 2 of 3
                </p>
                <h1 className="mt-2 font-display text-3xl font-bold">
                  Help the consultant prepare
                </h1>
                <p className="mt-2 text-sm text-muted-foreground">
                  Share only what is necessary. Detailed or sensitive records can be handled after
                  the secure backend is connected.
                </p>
                <label className="mt-7 block text-sm font-semibold">
                  What would you like help with?
                  <textarea
                    value={concern}
                    onChange={(event) => setConcern(event.target.value.slice(0, 500))}
                    rows={6}
                    placeholder="Briefly describe the decision, concern or outcome you want from this session…"
                    className="mt-2 w-full resize-none rounded-2xl border border-border bg-background p-4 text-sm font-normal outline-none focus:border-primary focus:ring-2 focus:ring-primary/15"
                  />
                </label>
                <div className="mt-2 text-right text-xs text-muted-foreground">
                  {concern.length}/500
                </div>
                <div className="mt-6 flex gap-2 rounded-2xl bg-primary/8 p-4 text-sm leading-relaxed">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <p>
                    Do not enter emergency information, passwords, financial credentials or detailed
                    medical records in this preview.
                  </p>
                </div>
                <div className="mt-8 flex gap-3">
                  <Button variant="outline" size="lg" onClick={() => setStep(0)}>
                    Back
                  </Button>
                  <Button
                    variant="brand"
                    size="lg"
                    className="flex-1"
                    disabled={concern.trim().length < 20}
                    onClick={() => setStep(2)}
                  >
                    Review and payment
                  </Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Step 3 of 3
                </p>
                <h1 className="mt-2 font-display text-3xl font-bold">Choose a payment method</h1>
                <p className="mt-2 text-sm text-muted-foreground">
                  The live version will hand payment securely to an Indian payment gateway.
                </p>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {[
                    { id: "UPI", icon: Smartphone, detail: "Any UPI app" },
                    { id: "Card / net banking", icon: CreditCard, detail: "Gateway checkout" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setPayment(item.id)}
                      className={`flex items-center gap-3 rounded-2xl border p-4 text-left ${payment === item.id ? "border-primary bg-primary/8" : "border-border"}`}
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <item.icon className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold">{item.id}</span>
                        <span className="text-xs text-muted-foreground">{item.detail}</span>
                      </span>
                    </button>
                  ))}
                </div>
                <label className="mt-6 flex items-start gap-3 rounded-2xl border border-border p-4 text-sm leading-relaxed">
                  <input
                    type="checkbox"
                    checked={accepted}
                    onChange={(event) => setAccepted(event.target.checked)}
                    className="mt-1 h-4 w-4 accent-primary"
                  />
                  <span>
                    I understand the consultation scope and accept the cancellation, consent and
                    privacy terms. Final policy text will be connected before launch.
                  </span>
                </label>
                <div className="mt-8 flex gap-3">
                  <Button variant="outline" size="lg" onClick={() => setStep(1)}>
                    Back
                  </Button>
                  <Button
                    variant="hero"
                    size="lg"
                    className="flex-1"
                    disabled={!accepted}
                    onClick={confirm}
                  >
                    Confirm preview booking · {formatInr(expert.price)}
                  </Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="py-14 text-center">
                <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-9 w-9" />
                </span>
                <h1 className="mt-6 font-display text-3xl font-bold">
                  Your preview booking is confirmed
                </h1>
                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                  It has been saved in this browser so you can review the complete dashboard
                  experience.
                </p>
                <Button
                  variant="hero"
                  size="xl"
                  className="mt-7"
                  onClick={() => navigate({ to: "/dashboard" })}
                >
                  View my dashboard
                </Button>
              </div>
            )}
          </section>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl border border-border bg-card p-5">
              <div className="flex gap-4">
                <img src={expert.image} alt="" className="h-16 w-16 rounded-2xl object-cover" />
                <div>
                  <div className="font-display font-semibold">{expert.name}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{expert.title}</div>
                  <div className="mt-2 flex items-center gap-1.5 text-xs font-semibold">
                    <Star className="h-3.5 w-3.5 fill-gold text-gold" /> {expert.rating}
                    <span className="font-normal text-muted-foreground">
                      ({expert.reviewCount} reviews)
                    </span>
                  </div>
                </div>
              </div>
              <dl className="mt-5 space-y-3 border-t border-border pt-5 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="flex items-center gap-2 text-muted-foreground">
                    <Clock3 className="h-4 w-4" /> Duration
                  </dt>
                  <dd>{expert.duration} minutes</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="flex items-center gap-2 text-muted-foreground">
                    <CalendarDays className="h-4 w-4" /> Slot
                  </dt>
                  <dd className="text-right">{time || "Not selected"}</dd>
                </div>
                <div className="flex justify-between gap-4 border-t border-border pt-3 font-semibold">
                  <dt>Total</dt>
                  <dd>{formatInr(expert.price)}</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
