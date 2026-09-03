import e1 from "@/assets/expert-1.jpg";
import e2 from "@/assets/expert-2.jpg";
import e3 from "@/assets/expert-3.jpg";

export type ConsultationMode = "Video" | "Chat" | "In-person";

export const consultantCategories = [
  "Career & Education",
  "Study Abroad",
  "Mental Wellness",
  "Legal & Documentation",
  "Finance & Tax",
  "Business & Startup",
  "Technology & Digital",
  "Health & Nutrition",
  "Relationships & Family",
  "Real Estate & Property",
  "Design & Creative",
  "Leadership & Executive",
] as const;

export type ConsultationCategory = (typeof consultantCategories)[number];

export type ExpertReview = {
  id: string;
  author: string;
  city: string;
  rating: number;
  date: string;
  text: string;
  verified: boolean;
};

export type Expert = {
  id: string;
  name: string;
  title: string;
  category: ConsultationCategory;
  image: string;
  experience: number;
  languages: string[];
  location: string;
  modes: ConsultationMode[];
  price: number;
  duration: number;
  nextAvailable: string;
  specialties: string[];
  qualifications: string[];
  about: string;
  approach: string;
  rating: number;
  reviewCount: number;
  reviews: ExpertReview[];
};

// Frontend seed data only. Replace with Spring Boot API responses before launch.
export const experts: Expert[] = [
  {
    id: "anaya-krishnan",
    name: "Dr. Anaya Krishnan",
    title: "Clinical Psychology Consultant",
    category: "Mental Wellness",
    image: e1,
    experience: 14,
    languages: ["English", "Hindi", "Malayalam"],
    location: "Bengaluru",
    modes: ["Video", "In-person"],
    price: 1800,
    duration: 50,
    nextAvailable: "Today, 6:30 PM",
    specialties: ["Anxiety", "Stress", "Adolescent wellbeing", "CBT"],
    qualifications: ["M.Phil. Clinical Psychology", "RCI registration to be verified"],
    about:
      "Supports adults, adolescents and families with structured, evidence-informed conversations focused on practical progress.",
    approach:
      "Sessions begin with a careful assessment of your goals and context, followed by a collaborative plan with clear boundaries and follow-up steps.",
    rating: 4.9,
    reviewCount: 86,
    reviews: [
      {
        id: "anaya-review-1",
        author: "Priya S.",
        city: "Kochi",
        rating: 5,
        date: "18 Aug 2026",
        text: "She listened without rushing and gave me a practical way to work through the anxiety I was facing.",
        verified: true,
      },
      {
        id: "anaya-review-2",
        author: "Arjun N.",
        city: "Bengaluru",
        rating: 5,
        date: "02 Aug 2026",
        text: "The session felt structured, private and useful. The follow-up steps were especially clear.",
        verified: true,
      },
    ],
  },
  {
    id: "sarah-whitfield",
    name: "Sarah Whitfield",
    title: "International Education Mentor",
    category: "Study Abroad",
    image: e2,
    experience: 11,
    languages: ["English", "Hindi"],
    location: "New Delhi",
    modes: ["Video", "Chat"],
    price: 1499,
    duration: 45,
    nextAvailable: "Tomorrow, 11:00 AM",
    specialties: ["University shortlisting", "Applications", "SOP review", "Scholarships"],
    qualifications: ["M.Ed. International Education", "ICEF counsellor training"],
    about:
      "Helps students and families make informed international education decisions without pushing a particular country or institution.",
    approach:
      "Advice is organised around academic fit, affordability, career outcomes and application readiness, ending with a written next-step checklist.",
    rating: 4.8,
    reviewCount: 64,
    reviews: [
      {
        id: "sarah-review-1",
        author: "Mehak G.",
        city: "Chandigarh",
        rating: 5,
        date: "21 Aug 2026",
        text: "The university shortlist was realistic for my profile and budget. There was no pressure to choose one country.",
        verified: true,
      },
      {
        id: "sarah-review-2",
        author: "Rahul K.",
        city: "New Delhi",
        rating: 4,
        date: "29 Jul 2026",
        text: "Very helpful SOP feedback and a clear application timeline for the next three months.",
        verified: true,
      },
    ],
  },
  {
    id: "rohan-mehta",
    name: "Rohan Mehta",
    title: "Career Strategy Consultant",
    category: "Career & Education",
    image: e3,
    experience: 9,
    languages: ["English", "Hindi", "Marathi"],
    location: "Mumbai",
    modes: ["Video", "Chat", "In-person"],
    price: 1299,
    duration: 45,
    nextAvailable: "Today, 8:00 PM",
    specialties: ["Career transitions", "Early careers", "MBA decisions", "Technology roles"],
    qualifications: ["MBA, Human Resources", "Certified career services practitioner"],
    about:
      "Works with students and professionals who need a grounded decision framework for their next education or career move.",
    approach:
      "Consultations turn an unclear decision into a shortlist of realistic options, trade-offs and a time-bound action plan.",
    rating: 4.7,
    reviewCount: 51,
    reviews: [
      {
        id: "rohan-review-1",
        author: "Neha P.",
        city: "Pune",
        rating: 5,
        date: "24 Aug 2026",
        text: "Rohan helped me compare an MBA with a job switch using facts instead of generic motivation.",
        verified: true,
      },
      {
        id: "rohan-review-2",
        author: "Kunal M.",
        city: "Mumbai",
        rating: 4,
        date: "11 Aug 2026",
        text: "Good industry context and a useful action plan. I left the call knowing exactly what to research next.",
        verified: true,
      },
    ],
  },
  {
    id: "isha-verma",
    name: "Isha Verma",
    title: "Student Career Counsellor",
    category: "Career & Education",
    image: e1,
    experience: 8,
    languages: ["English", "Hindi"],
    location: "Jaipur",
    modes: ["Video", "Chat", "In-person"],
    price: 999,
    duration: 45,
    nextAvailable: "Tomorrow, 4:00 PM",
    specialties: ["Stream selection", "College planning", "Psychometric guidance"],
    qualifications: ["M.A. Psychology", "Certified career analyst"],
    about:
      "Works with school and undergraduate students to connect their interests, strengths and practical education options.",
    approach:
      "Sessions combine structured questions with a simple comparison framework that students can discuss with their families.",
    rating: 4.8,
    reviewCount: 39,
    reviews: [
      {
        id: "isha-review-1",
        author: "Sunita R.",
        city: "Jaipur",
        rating: 5,
        date: "15 Aug 2026",
        text: "My daughter felt heard, and we received balanced options instead of being pushed toward one stream.",
        verified: true,
      },
    ],
  },
  {
    id: "vivek-reddy",
    name: "Vivek Reddy",
    title: "International Admissions Consultant",
    category: "Study Abroad",
    image: e2,
    experience: 10,
    languages: ["English", "Hindi", "Telugu"],
    location: "Hyderabad",
    modes: ["Video", "Chat", "In-person"],
    price: 1399,
    duration: 50,
    nextAvailable: "Friday, 7:00 PM",
    specialties: ["US admissions", "Scholarships", "Profile building", "Visa readiness"],
    qualifications: ["M.S. Higher Education", "International admissions training"],
    about:
      "Supports students who want a transparent view of admission probability, cost and preparation gaps before applying abroad.",
    approach:
      "Each consultation produces a risk-aware shortlist and a milestone plan covering tests, documents and funding.",
    rating: 4.9,
    reviewCount: 72,
    reviews: [
      {
        id: "vivek-review-1",
        author: "Akhil D.",
        city: "Hyderabad",
        rating: 5,
        date: "20 Aug 2026",
        text: "The cost comparison and scholarship strategy made the decision much easier for my family.",
        verified: true,
      },
    ],
  },
  {
    id: "meera-kulkarni",
    name: "Meera Kulkarni",
    title: "Workplace Wellness Counsellor",
    category: "Mental Wellness",
    image: e3,
    experience: 12,
    languages: ["English", "Hindi", "Marathi"],
    location: "Pune",
    modes: ["Video", "In-person"],
    price: 1599,
    duration: 50,
    nextAvailable: "Today, 7:30 PM",
    specialties: ["Burnout", "Workplace stress", "Boundaries", "Life transitions"],
    qualifications: ["M.A. Counselling Psychology", "Trauma-informed practice training"],
    about:
      "Helps working professionals navigate burnout, difficult transitions and sustainable boundaries in a confidential setting.",
    approach:
      "Sessions focus on understanding patterns, stabilising immediate pressure and choosing small changes that can be sustained.",
    rating: 4.8,
    reviewCount: 58,
    reviews: [
      {
        id: "meera-review-1",
        author: "Siddharth B.",
        city: "Pune",
        rating: 5,
        date: "22 Aug 2026",
        text: "A calm, thoughtful conversation that helped me separate burnout from the career decision I was trying to make.",
        verified: true,
      },
    ],
  },
];

export const consultationCategories = ["All", ...consultantCategories] as const;

export const consultationCities = [
  "All cities",
  ...Array.from(new Set(experts.map((expert) => expert.location))).sort(),
];

export function getExpert(id: string) {
  return experts.find((expert) => expert.id === id);
}

export function formatInr(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}
