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
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TQGC — Career Counseling, Wellness & Study Abroad Guidance" },
      {
        name: "description",
        content:
          "The Quest Guidance Center: premium career counseling, psychological wellness, study abroad guidance, life coaching & global mentorship.",
      },
      { property: "og:title", content: "TQGC — Empowering Lives. Transforming Careers." },
      {
        property: "og:description",
        content:
          "Professional career counseling, psychological wellness, study abroad guidance, life coaching & global mentorship.",
      },
      { property: "og:type", content: "website" },
      { name: "keywords", content: "Career Counseling, Study Abroad Consultant, Psychological Counseling, Mental Wellness, Life Coaching, Career Guidance, Professional Coaching, Student Counseling, Global Education Guidance, Psychometric Assessment" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "The Quest Guidance Center",
          alternateName: "TQGC",
          url: "/",
          description:
            "Premium career counseling, psychological wellness, study abroad guidance, life coaching & global mentorship.",
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
        <Journey />
        <Global />
        <Experts />
        <Wellness />
        <Stories />
        <AIAssistant />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-center" richColors />
    </>
  );
}
