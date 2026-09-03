import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import {
  ArrowLeft,
  Check,
  LockKeyhole,
  MessageSquareText,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { useState } from "react";
import { ProductHeader } from "@/components/app/ProductHeader";
import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { saveFrontendUser } from "@/lib/platform-store";

export const Route = createFileRoute("/auth")({
  head: () => ({ meta: [{ title: "Log in or register | TQGC" }] }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState<0 | 1 | 2>(0);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);

  const normalizedPhone = phone.replace(/\D/g, "").slice(-10);

  const finish = () => {
    saveFrontendUser({
      id: `frontend-${Date.now()}`,
      name: name.trim(),
      phone: `+91${normalizedPhone}`,
      email: email.trim(),
    });
    navigate({ to: "/dashboard" });
  };

  return (
    <div className="min-h-screen bg-secondary/35">
      <ProductHeader />
      <main className="container mx-auto grid min-h-[calc(100vh-80px)] items-center gap-10 px-4 py-10 lg:grid-cols-2 lg:px-8">
        <section className="hidden lg:block">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
              <ShieldCheck className="h-3.5 w-3.5" /> Private one-to-one access
            </span>
            <h1 className="mt-5 font-display text-5xl font-bold leading-tight tracking-tight">
              One account for every consultation.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Use your Indian mobile number to manage bookings, private documents, invoices and
              follow-ups in one place.
            </p>
            <div className="mt-8 space-y-4">
              {[
                [Smartphone, "Passwordless mobile OTP login"],
                [LockKeyhole, "Your private information stays inside your account"],
                [MessageSquareText, "Booking updates by mobile and email"],
              ].map(([Icon, label]) => (
                <div
                  key={label as string}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 text-sm"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  {label as string}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-lg rounded-3xl border border-border bg-card p-6 shadow-elevated sm:p-9">
          <Link
            to="/experts"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Continue browsing
          </Link>

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
              <h2 className="mt-2 font-display text-3xl font-bold">Log in or create an account</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                We’ll use the same secure flow for new and returning users.
              </p>
              <label className="mt-7 block">
                <span className="text-sm font-medium">Mobile number</span>
                <div className="mt-2 flex h-12 overflow-hidden rounded-xl border border-border bg-background focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/15">
                  <span className="flex items-center border-r border-border px-4 text-sm font-semibold">
                    +91
                  </span>
                  <input
                    inputMode="numeric"
                    autoComplete="tel"
                    value={phone}
                    onChange={(event) =>
                      setPhone(event.target.value.replace(/\D/g, "").slice(0, 10))
                    }
                    placeholder="10-digit mobile number"
                    className="min-w-0 flex-1 bg-transparent px-4 text-sm outline-none"
                  />
                </div>
              </label>
              <Button
                variant="brand"
                size="xl"
                className="mt-6 w-full"
                disabled={normalizedPhone.length !== 10}
                onClick={() => setStep(1)}
              >
                Send OTP
              </Button>
              <p className="mt-4 text-center text-xs text-muted-foreground">
                Frontend preview: no SMS will be sent.
              </p>
            </div>
          )}

          {step === 1 && (
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Step 2 of 3
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold">Enter the verification code</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Use any six digits to preview the flow for +91 {normalizedPhone}.
              </p>
              <div className="mt-7 flex justify-center">
                <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                  <InputOTPGroup>
                    {Array.from({ length: 6 }).map((_, index) => (
                      <InputOTPSlot key={index} index={index} className="h-12 w-11 text-base" />
                    ))}
                  </InputOTPGroup>
                </InputOTP>
              </div>
              <Button
                variant="brand"
                size="xl"
                className="mt-7 w-full"
                disabled={otp.length !== 6}
                onClick={() => setStep(2)}
              >
                Verify mobile
              </Button>
              <button
                type="button"
                onClick={() => {
                  setOtp("");
                  setStep(0);
                }}
                className="mt-4 w-full text-center text-sm text-primary"
              >
                Change mobile number
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Step 3 of 3
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold">Complete your profile</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Only the essential details for confirmations and invoices.
              </p>
              <div className="mt-6 space-y-4">
                <label className="block text-sm font-medium">
                  Full name
                  <input
                    autoComplete="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Your full name"
                    className="mt-2 h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/15"
                  />
                </label>
                <label className="block text-sm font-medium">
                  Email address
                  <input
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@example.com"
                    className="mt-2 h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/15"
                  />
                </label>
                <label className="flex items-start gap-3 rounded-2xl border border-border p-4 text-sm leading-relaxed">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(event) => setConsent(event.target.checked)}
                    className="mt-1 h-4 w-4 accent-primary"
                  />
                  <span>
                    I agree to the platform terms and privacy notice. These documents will be
                    legally finalized before launch.
                  </span>
                </label>
              </div>
              <Button
                variant="hero"
                size="xl"
                className="mt-6 w-full"
                disabled={!name.trim() || !email.includes("@") || !consent}
                onClick={finish}
              >
                Create my account <Check className="h-4 w-4" />
              </Button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
