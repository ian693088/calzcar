import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { supabase } from "@/integrations/supabase/client";
import { fieldClass } from "@/components/InquiryForm";

export const Route = createFileRoute("/admin/login")({
  head: () => ({ meta: [
    { title: "Admin sign in — Calzcar AutoHub" },
    { name: "description", content: "Sign in to the Calzcar AutoHub admin dashboard." },
    { property: "og:title", content: "Admin sign in — Calzcar AutoHub" },
    { property: "og:description", content: "Admin dashboard sign in." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
    { name: "robots", content: "noindex" },
  ] }),
  component: AdminLogin,
});

function AdminLogin() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"in" | "up">("in");
  const [msg, setMsg] = useState("");
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const email = String(f.get("email"));
    const password = String(f.get("password"));
    setBusy(true);
    setMsg("");
    if (mode === "in") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      setBusy(false);
      if (error) return setMsg(error.message);
      navigate({ to: "/admin" });
    } else {
      const { error } = await supabase.auth.signUp({ email, password, options: { emailRedirectTo: `${window.location.origin}/admin/login` } });
      setBusy(false);
      if (error) return setMsg(error.message);
      setMsg("Check your email and click the confirmation link, then sign in here.");
      setMode("in");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-site-import-foreground px-4">
      <div className="w-full max-w-sm rounded-2xl bg-background p-8 shadow-2xl">
        <Link to="/" className="text-sm font-semibold text-site-import-primary">← Back to site</Link>
        <h1 className="mt-4 text-2xl font-extrabold">{mode === "in" ? "Admin sign in" : "Create admin account"}</h1>
        <p className="mb-6 text-sm text-site-import-muted-foreground">Calzcar AutoHub dashboard</p>
        <form onSubmit={onSubmit} className="space-y-4">
          <label className="block text-sm font-medium">Email<input name="email" type="email" required className={fieldClass + " mt-1"} /></label>
          <label className="block text-sm font-medium">Password<input name="password" type="password" required minLength={8} className={fieldClass + " mt-1"} /></label>
          {msg && <p className="text-sm text-site-import-muted-foreground">{msg}</p>}
          <button disabled={busy} className="w-full rounded-lg bg-site-import-primary py-3 text-sm font-semibold text-site-import-primary-foreground disabled:opacity-50">
            {busy ? "Please wait…" : mode === "in" ? "Sign in" : "Create account"}
          </button>
        </form>
        <button onClick={() => { setMode(mode === "in" ? "up" : "in"); setMsg(""); }} className="mt-4 w-full text-center text-xs text-site-import-muted-foreground">
          {mode === "in" ? "First time? Create the admin account" : "Already have an account? Sign in"}
        </button>
      </div>
    </div>
  );
}
