import { useState, type FormEvent } from "react";
import { supabase } from "@/integrations/supabase/client";
import { INTERESTS } from "@/lib/cars";

export const fieldClass =
  "w-full rounded-lg border border-site-import-border bg-background px-3.5 py-2.5 text-sm text-site-import-foreground outline-none focus:border-site-import-primary focus:ring-2 focus:ring-site-import-primary/20";

export function InquiryForm({ carId, carLabel }: { carId?: string; carLabel?: string }) {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [err, setErr] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const f = new FormData(form);
    setState("sending");
    const { error } = await supabase.from("inquiries").insert({
      full_name: String(f.get("full_name") ?? "").trim().slice(0, 120),
      phone: String(f.get("phone") ?? "").trim().slice(0, 40),
      email: String(f.get("email") ?? "").trim().slice(0, 200),
      interest: String(f.get("interest") ?? "Other"),
      message: String(f.get("message") ?? "").trim().slice(0, 3000),
      car_id: carId ?? null,
      car_label: carLabel ?? "",
    });
    if (error) {
      setErr("Sorry, we couldn't send your message. Please try again or call us.");
      setState("error");
      return;
    }
    form.reset();
    setState("sent");
  }

  if (state === "sent") {
    return (
      <div className="rounded-2xl border border-site-import-accent/40 bg-site-import-accent/10 p-6 text-center">
        <p className="text-lg font-bold text-site-import-foreground">Thank you — message received!</p>
        <p className="mt-1 text-sm text-site-import-muted-foreground">A dealer will reply to your email shortly.</p>
        <button onClick={() => setState("idle")} className="mt-4 text-sm font-semibold text-site-import-primary">Send another message</button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium">Full name<input name="full_name" required maxLength={120} className={fieldClass + " mt-1"} /></label>
        <label className="block text-sm font-medium">Phone<input name="phone" type="tel" maxLength={40} className={fieldClass + " mt-1"} /></label>
      </div>
      <label className="block text-sm font-medium">Email<input name="email" type="email" required maxLength={200} className={fieldClass + " mt-1"} /></label>
      <label className="block text-sm font-medium">I'm interested in
        <select name="interest" defaultValue={carLabel ? "Other" : "New Cars"} className={fieldClass + " mt-1"}>
          {INTERESTS.map((i) => <option key={i}>{i}</option>)}
        </select>
      </label>
      <label className="block text-sm font-medium">Message
        <textarea name="message" rows={5} maxLength={3000} defaultValue={carLabel ? `Hi, I'm interested in the ${carLabel}. Is it still available?` : ""} className={fieldClass + " mt-1"} />
      </label>
      {state === "error" && <p className="text-sm text-destructive">{err}</p>}
      <button disabled={state === "sending"} className="w-full rounded-lg bg-site-import-primary px-5 py-3 text-sm font-semibold text-site-import-primary-foreground transition hover:opacity-90 disabled:opacity-50">
        {state === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
