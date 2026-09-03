import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Counters } from "@/components/site/Counters";
import { Services } from "@/components/site/Services";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Journey } from "@/components/site/Journey";
import { Global } from "@/components/site/Global";
import { Experts } from "@/components/site/Experts";
import { Wellness } from "@/components/site/Wellness";
import { Stories } from "@/components/site/Stories";
import { AIAssistant } from "@/components/site/AIAssistant";
import { Booking } from "@/components/site/Booking";
import { Contact } from "@/components/site/Contact";
import { ProductFooter } from "@/components/app/ProductFooter";

const pageTitle = "TQGC — Private One-to-One Consultation in India";
const pageDescription =
  "Discover consultants for career decisions, study abroad planning and mental wellness. Compare expertise, language, fees and availability before booking.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      {
        name: "keywords",
        content:
          "online consultation India, career consultant, study abroad consultant, mental wellness consultation",
      },
      { name: "author", content: "The Quest Guidance Center" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og-image.jpg" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:title", content: pageTitle },
      { name: "twitter:description", content: pageDescription },
      { name: "twitter:image", content: "/og-image.jpg" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "The Quest Guidance Center",
          alternateName: "TQGC",
          url: "/",
          areaServed: "India",
          description: pageDescription,
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Counters />
        <Services />
        <WhyChoose />
        <Experts />
        <Journey />
        <Global />
        <Wellness />
        <Stories />
        <AIAssistant />
        <Booking />
        <Contact />
      </main>
      <ProductFooter />
      <Toaster position="top-center" richColors />
    </>
  );
}
