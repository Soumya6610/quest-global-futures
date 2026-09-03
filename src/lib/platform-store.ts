import type { ConsultationCategory } from "@/data/experts";

export type FrontendUser = {
  id: string;
  name: string;
  phone: string;
  email: string;
};

export type FrontendBooking = {
  id: string;
  expertId: string;
  expertName: string;
  expertTitle: string;
  date: string;
  time: string;
  mode: string;
  amount: number;
  concern: string;
  status: "Confirmed";
};

export type FrontendConsultantApplication = {
  id: string;
  name: string;
  phone: string;
  email: string;
  title: string;
  category: ConsultationCategory;
  experience: number;
  city: string;
  languages: string[];
  modes: string[];
  fee: number;
  qualifications: string;
  bio: string;
  submittedAt: string;
  status: "Under review";
};

const USER_KEY = "tqgc_frontend_user";
const BOOKINGS_KEY = "tqgc_frontend_bookings";
const CONSULTANT_APPLICATION_KEY = "tqgc_frontend_consultant_application";
const STORE_EVENT = "tqgc-store-change";

function read<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const value = window.localStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : fallback;
  } catch {
    return fallback;
  }
}

function write<T>(key: string, value: T) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, JSON.stringify(value));
  window.dispatchEvent(new Event(STORE_EVENT));
}

export function getFrontendUser() {
  return read<FrontendUser | null>(USER_KEY, null);
}

export function saveFrontendUser(user: FrontendUser) {
  write(USER_KEY, user);
}

export function clearFrontendUser() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(USER_KEY);
  window.dispatchEvent(new Event(STORE_EVENT));
}

export function getFrontendBookings() {
  return read<FrontendBooking[]>(BOOKINGS_KEY, []);
}

export function saveFrontendBooking(booking: FrontendBooking) {
  write(BOOKINGS_KEY, [booking, ...getFrontendBookings()]);
}

export function getConsultantApplication() {
  return read<FrontendConsultantApplication | null>(CONSULTANT_APPLICATION_KEY, null);
}

export function saveConsultantApplication(application: FrontendConsultantApplication) {
  write(CONSULTANT_APPLICATION_KEY, application);
}

export function subscribeToPlatformStore(callback: () => void) {
  if (typeof window === "undefined") return () => undefined;
  window.addEventListener(STORE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(STORE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

// This module is the temporary frontend boundary. Replace its functions with
// authenticated Spring Boot API calls without changing the page components.
