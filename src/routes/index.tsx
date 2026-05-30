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

const pageTitle = "TQGC — Premium Career Counseling, Wellness & Study Abroad Guidance";
const pageDescription =
  "The Quest Guidance Center offers premium career counseling, psychological wellness, study abroad guidance, life coaching & global mentorship. Trusted by students, professionals & institutions worldwide.";
const ogDescription =
  "Empowering lives and transforming careers through professional counseling, psychological wellness, study abroad guidance, and global mentorship. Discover your potential with TQGC.";
const keywords =
  "Career Counseling, Study Abroad Consultant, Psychological Counseling, Mental Wellness, Life Coaching, Career Guidance, Professional Coaching, Student Counseling, Global Education Guidance, Psychometric Assessment, Executive Coaching, Personal Growth, Abroad Admission Consultant, Overseas Education, Mindfulness Coaching";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      { name: "keywords", content: keywords },
      { name: "author", content: "The Quest Guidance Center" },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },

      /* Open Graph */
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: ogDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "/og-image.jpg" },
      { property: "og:image:alt", content: "The Quest Guidance Center — Premium Career & Wellness Consultancy" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:locale", content: "en_US" },

      /* Twitter Cards */
      { name: "twitter:title", content: pageTitle },
      { name: "twitter:description", content: ogDescription },
      { name: "twitter:image", content: "/og-image.jpg" },
      { name: "twitter:image:alt", content: "The Quest Guidance Center — Premium Career & Wellness Consultancy" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "/#organization",
              name: "The Quest Guidance Center",
              alternateName: "TQGC",
              url: "/",
              logo: "/og-image.jpg",
              description:
                "Premium career counseling, psychological wellness, study abroad guidance, life coaching & global mentorship.",
              sameAs: [
                "https://linkedin.com/company/tqgc",
                "https://instagram.com/tqgc",
                "https://twitter.com/TQGC",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Support",
                availableLanguage: ["English"],
              },
              areaServed: "Worldwide",
              knowsAbout: [
                "Career Counseling",
                "Psychological Wellness",
                "Study Abroad Guidance",
                "Life Coaching",
                "Executive Coaching",
                "Psychometric Assessment",
              ],
            },
            {
              "@type": "WebSite",
              "@id": "/#website",
              url: "/",
              name: "The Quest Guidance Center",
              publisher: { "@id": "/#organization" },
              inLanguage: "en-US",
              potentialAction: {
                "@type": "SearchAction",
                target: "/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            },
            {
              "@type": "WebPage",
              "@id": "/#webpage",
              url: "/",
              name: pageTitle,
              description: pageDescription,
              isPartOf: { "@id": "/#website" },
              about: { "@id": "/#organization" },
              inLanguage: "en-US",
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What services does TQGC offer?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "TQGC offers career counseling, psychological wellness services, study abroad guidance, life coaching, executive coaching, and psychometric assessments for students, professionals, and organizations worldwide.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Who can benefit from TQGC's programs?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Our programs are designed for school students, college students, working professionals, and organizations seeking career guidance, mental wellness support, and global education consulting.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does TQGC provide study abroad guidance?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, TQGC provides comprehensive study abroad guidance including university selection, application support, visa assistance, and preparation for destinations such as the USA, UK, Canada, Australia, Germany, and more.",
                  },
                },
              ],
            },
          ],
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
