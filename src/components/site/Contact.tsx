import { AlertTriangle, Headphones, LockKeyhole, Scale } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-secondary/35 py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Support and safety
            </div>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight">
              A consultation platform needs visible safeguards.
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              These support channels are represented in the frontend now. Real contact details,
              response targets and escalation owners must be assigned before launch.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              [Headphones, "General support", "Bookings, rescheduling and account access"],
              [Scale, "Grievance redressal", "Complaints, refunds and professional conduct"],
              [LockKeyhole, "Privacy requests", "Access, correction and deletion requests"],
              [
                AlertTriangle,
                "Emergency notice",
                "The platform is not an emergency or crisis service",
              ],
            ].map(([Icon, title, description]) => (
              <div key={title as string} className="rounded-2xl border border-border bg-card p-5">
                <Icon className="h-5 w-5 text-primary" />
                <h3 className="mt-3 font-display text-lg font-semibold">{title as string}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {description as string}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
