import { Mail, Phone, MapPin, MessageCircle, Instagram, Linkedin, Youtube, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { LucideIcon } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary font-semibold">
              <span className="h-px w-8 bg-primary/40" /> Get in Touch
            </div>
            <h2 className="mt-4 font-display text-4xl lg:text-5xl font-bold tracking-tight text-balance">
              We're here. <span className="text-gradient-brand">Reach out, anytime.</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-md">
              Prefer a real conversation? Pick whichever channel feels right. We respond within 24 hours.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <ContactCard icon={Phone} title="Call" value="+91 98xxx xxxxx" href="tel:+919800000000" />
              <ContactCard icon={MessageCircle} title="WhatsApp" value="Start chat" href="https://wa.me/919800000000" />
              <ContactCard icon={Mail} title="Email" value="hello@tqgc.global" href="mailto:hello@tqgc.global" />
              <ContactCard icon={MapPin} title="Visit" value="Bengaluru · Remote · Global" />
            </div>

            <div className="mt-8 flex items-center gap-3">
              {[Instagram, Linkedin, Youtube, Facebook].map((I, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="h-10 w-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                >
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>

            <Button variant="hero" size="xl" asChild className="mt-8">
              <a href="https://wa.me/919800000000">
                <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
              </a>
            </Button>
          </div>

          <div className="rounded-3xl overflow-hidden border border-border shadow-elevated min-h-[420px] bg-muted">
            <iframe
              title="TQGC location"
              src="https://www.google.com/maps?q=Bengaluru&output=embed"
              className="w-full h-full min-h-[420px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  title,
  value,
  href,
}: {
  icon: LucideIcon;
  title: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <>
      <span className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <div className="text-xs text-muted-foreground uppercase tracking-wider">{title}</div>
        <div className="font-medium">{value}</div>
      </div>
    </>
  );
  const cls =
    "flex items-center gap-3 p-4 rounded-2xl bg-card border border-border hover:border-primary/40 transition-colors";
  return href ? (
    <a href={href} className={cls}>{inner}</a>
  ) : (
    <div className={cls}>{inner}</div>
  );
}