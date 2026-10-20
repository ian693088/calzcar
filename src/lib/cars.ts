import type { Database } from "@/integrations/supabase/types";

export type Car = Database["public"]["Tables"]["cars"]["Row"];
export type Inquiry = Database["public"]["Tables"]["inquiries"]["Row"];

export const CATEGORIES = ["New Cars", "Second-Hand", "Imports", "On Credit"] as const;
export const INTERESTS = ["New Cars", "Second-Hand Cars", "Imports", "Cars on Credit", "Servicing", "Other"] as const;

export function carTitle(c: Pick<Car, "make" | "model">) {
  return `${c.make} ${c.model}`;
}

export function formatKES(n: number | string) {
  const v = Number(n);
  if (!v) return "Price on request";
  return "KES " + v.toLocaleString("en-KE");
}
