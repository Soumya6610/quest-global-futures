import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  FileCheck2,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";
import { useEffect, useState } from "react";
import { ProductHeader } from "@/components/app/ProductHeader";
import { Button } from "@/components/ui/button";
import { consultantCategories, consultationCities } from "@/data/experts";
import {
  getConsultantApplication,
  saveConsultantApplication,
  type FrontendConsultantApplication,
} from "@/lib/platform-store";

export const Route = createFileRoute("/consultant/apply")({
  head: () => ({
    meta: [
      { title: "Register as a consultant | TQGC" },
      {
        name: "description",
        content: "Apply to offer verified one-to-one consultations through TQGC.",
      },
    ],
  }),
  component: ConsultantApplicationPage,
});

const modes = ["Video", "Chat", "In-person"];

function ConsultantApplicationPage() {
  const navigate = useNavigate();
  const [existing, setExisting] = useState<FrontendConsultantApplication | null>(null);
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] =
    useState<(typeof consultantCategories)[number]>("Career & Education");
  const [experience, setExperience] = useState("");
  const [city, setCity] = useState("");
  const [languages, setLanguages] = useState("English, Hindi");
  const [selectedModes, setSelectedModes] = useState<string[]>(["Video"]);
  const [fee, setFee] = useState("");
  const [qualifications, setQualifications] = useState("");
  const [bio, setBio] = useState("");
  const [consent, setConsent] = useState(false);

  useEffect(() => setExisting(getConsultantApplication()), []);

  const toggleMode = (mode: string) => {
    setSelectedModes((current) =>
      current.includes(mode) ? current.filter((item) => item !== mode) : [...current, mode],
    );
  };

  const submit = () => {
    const application: FrontendConsultantApplication = {
      id: `CONS-${Date.now().toString().slice(-8)}`,
      name: name.trim(),
      phone: `+91${phone.replace(/\D/g, "").slice(-10)}`,
      email: email.trim(),
      title: title.trim(),
      category,
      experience: Number(experience),
      city: city.trim(),
      languages: languages
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
      modes: selectedModes,
      fee: Number(fee),
      qualifications: qualifications.trim(),
      bio: bio.trim(),
      submittedAt: new Intl.DateTimeFormat("en-IN", { dateStyle: "medium" }).format(new Date()),
      status: "Under review",
    };
    saveConsultantApplication(application);
    setExisting(application);
    navigate({ to: "/consultant/dashboard" });
  };

  if (existing) {
    return (
      <div className="min-h-screen bg-secondary/35">
        <ProductHeader />
        <main className="container mx-auto flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-12">
          <div className="w-full max-w-xl rounded-3xl border border-border bg-card p-8 text-center shadow-elevated">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <FileCheck2 className="h-8 w-8" />
            </span>
            <h1 className="mt-5 font-display text-3xl font-bold">Application already submitted</h1>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {existing.name}, your consultant application is currently{" "}
              {existing.status.toLowerCase()}. Open the consultant dashboard to review your profile
              and verification checklist.
            </p>
            <Button variant="hero" size="xl" asChild className="mt-7 w-full">
              <Link to="/consultant/dashboard">Open consultant dashboard</Link>
            </Button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary/35">
      <ProductHeader />
      <main className="container mx-auto grid gap-10 px-4 py-10 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-14">
        <aside>
          <Link
            to="/experts"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Back to experts
          </Link>
          <div className="mt-10 max-w-lg lg:sticky lg:top-28">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
              <UserRoundCheck className="h-4 w-4" /> Consultant onboarding
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold tracking-tight lg:text-5xl">
              Offer your expertise through a trusted profile.
            </h1>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Consultants apply first. Credentials, professional registrations and identity must be
              reviewed by an administrator before a profile becomes publicly bookable.
            </p>
            <div className="mt-8 space-y-3">
              {[
                [FileCheck2, "Submit professional and service details"],
                [ShieldCheck, "Administrator verifies identity and credentials"],
                [BadgeCheck, "Approved profile receives a verified badge"],
                [Building2, "Set city, modes, availability and INR pricing"],
              ].map(([Icon, label], index) => (
                <div
                  key={label as string}
                  className="flex items-center gap-3 rounded-2xl bg-card p-4"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm">
                    <strong className="mr-2 text-muted-foreground">0{index + 1}</strong>
                    {label as string}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </aside>

        <section className="rounded-3xl border border-border bg-card p-6 shadow-elevated sm:p-9">
          <div className="flex gap-2">
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
              <h2 className="mt-2 font-display text-3xl font-bold">Identity and contact</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field
                  label="Full legal name"
                  value={name}
                  onChange={setName}
                  placeholder="As shown on ID"
                />
                <Field
                  label="Professional title"
                  value={title}
                  onChange={setTitle}
                  placeholder="Career counsellor"
                />
                <Field
                  label="Mobile number"
                  value={phone}
                  onChange={(value) => setPhone(value.replace(/\D/g, "").slice(0, 10))}
                  placeholder="10-digit Indian number"
                />
                <Field
                  label="Email address"
                  type="email"
                  value={email}
                  onChange={setEmail}
                  placeholder="you@example.com"
                />
              </div>
              <Button
                variant="brand"
                size="xl"
                className="mt-7 w-full"
                disabled={
                  !name.trim() || !title.trim() || phone.length !== 10 || !email.includes("@")
                }
                onClick={() => setStep(1)}
              >
                Continue <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          )}

          {step === 1 && (
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Step 2 of 3
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold">Practice information</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-medium">
                  Consultation category
                  <select
                    value={category}
                    onChange={(event) => setCategory(event.target.value as typeof category)}
                    className="mt-2 h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none focus:border-primary"
                  >
                    {consultantCategories.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </label>
                <Field
                  label="Years of experience"
                  type="number"
                  value={experience}
                  onChange={setExperience}
                  placeholder="5"
                />
                <label className="text-sm font-medium">
                  Primary city
                  <input
                    list="consultant-cities"
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                    placeholder="Bengaluru"
                    className="mt-2 h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none focus:border-primary"
                  />
                  <datalist id="consultant-cities">
                    {consultationCities.slice(1).map((item) => (
                      <option key={item} value={item} />
                    ))}
                  </datalist>
                </label>
                <Field
                  label="Languages (comma separated)"
                  value={languages}
                  onChange={setLanguages}
                  placeholder="English, Hindi"
                />
                <Field
                  label="Session fee in INR"
                  type="number"
                  value={fee}
                  onChange={setFee}
                  placeholder="1500"
                />
              </div>
              <div className="mt-5">
                <div className="text-sm font-medium">Consultation modes</div>
                <div className="mt-2 grid grid-cols-3 gap-2">
                  {modes.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => toggleMode(item)}
                      className={`rounded-xl border px-3 py-3 text-sm ${selectedModes.includes(item) ? "border-primary bg-primary/10 font-semibold text-primary" : "border-border"}`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mt-7 flex gap-3">
                <Button variant="outline" size="lg" onClick={() => setStep(0)}>
                  Back
                </Button>
                <Button
                  variant="brand"
                  size="lg"
                  className="flex-1"
                  disabled={
                    !experience ||
                    Number(experience) < 1 ||
                    !city.trim() ||
                    !fee ||
                    selectedModes.length === 0
                  }
                  onClick={() => setStep(2)}
                >
                  Continue
                </Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Step 3 of 3
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold">Credentials and profile</h2>
              <label className="mt-6 block text-sm font-medium">
                Qualifications and registrations
                <textarea
                  value={qualifications}
                  onChange={(event) => setQualifications(event.target.value)}
                  rows={4}
                  placeholder="Degrees, certifications, registration numbers and issuing bodies"
                  className="mt-2 w-full rounded-2xl border border-border bg-background p-4 text-sm outline-none focus:border-primary"
                />
              </label>
              <label className="mt-5 block text-sm font-medium">
                About your practice
                <textarea
                  value={bio}
                  onChange={(event) => setBio(event.target.value.slice(0, 600))}
                  rows={5}
                  placeholder="Who you help, your approach and what clients can expect"
                  className="mt-2 w-full rounded-2xl border border-border bg-background p-4 text-sm outline-none focus:border-primary"
                />
                <span className="mt-1 block text-right text-xs text-muted-foreground">
                  {bio.length}/600
                </span>
              </label>
              <div className="mt-5 rounded-2xl bg-gold/10 p-4 text-sm leading-relaxed">
                Document upload will be connected to secure Spring Boot storage. The backend must
                keep identity documents private and expose only verified public credentials.
              </div>
              <label className="mt-5 flex items-start gap-3 rounded-2xl border border-border p-4 text-sm leading-relaxed">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(event) => setConsent(event.target.checked)}
                  className="mt-1 h-4 w-4 accent-primary"
                />
                <span>
                  I confirm these details are accurate and consent to identity, qualification and
                  professional-registration verification.
                </span>
              </label>
              <div className="mt-7 flex gap-3">
                <Button variant="outline" size="lg" onClick={() => setStep(1)}>
                  Back
                </Button>
                <Button
                  variant="hero"
                  size="lg"
                  className="flex-1"
                  disabled={qualifications.trim().length < 10 || bio.trim().length < 40 || !consent}
                  onClick={submit}
                >
                  Submit application <Check className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
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
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="text-sm font-medium">
      {label}
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="mt-2 h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/15"
      />
    </label>
  );
}
