import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState, type FormEvent } from "react";
import { supabase } from "@/integrations/supabase/client";
import { fieldClass } from "@/components/InquiryForm";
import { CATEGORIES, carTitle, formatKES, type Inquiry } from "@/lib/cars";

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({ meta: [
    { title: "Admin dashboard — Calzcar AutoHub" },
    { name: "description", content: "Manage cars and customer enquiries." },
    { property: "og:title", content: "Admin dashboard — Calzcar AutoHub" },
    { property: "og:description", content: "Manage cars and customer enquiries." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
    { name: "robots", content: "noindex" },
  ] }),
  component: Admin,
});

function Admin() {
  const { user } = Route.useRouteContext();
  const qc = useQueryClient();
  const navigate = useNavigate();
  const [tab, setTab] = useState<"inq" | "cars">("inq");

  const { data: isAdmin, isLoading } = useQuery({
    queryKey: ["is-admin", user.id],
    queryFn: async () => {
      const { data } = await supabase.from("user_roles").select("role").eq("user_id", user.id).eq("role", "admin").maybeSingle();
      return !!data;
    },
  });

  async function signOut() {
    await qc.cancelQueries();
    qc.clear();
    await supabase.auth.signOut();
    navigate({ to: "/admin/login", replace: true });
  }

  return (
    <div className="min-h-screen bg-site-import-background text-site-import-foreground">
      <header className="border-b border-site-import-border bg-background">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          <div>
            <Link to="/" className="text-lg font-extrabold">Calzcar AutoHub</Link>
            <p className="text-xs text-site-import-muted-foreground">Admin · {user.email}</p>
          </div>
          <button onClick={signOut} className="rounded-lg border border-site-import-border px-4 py-2 text-sm font-semibold">Sign out</button>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-8 md:px-6">
        {isLoading ? <p>Loading…</p> : !isAdmin ? (
          <p className="rounded-xl border border-site-import-border bg-background p-6">This account doesn't have admin access.</p>
        ) : (
          <>
            <Stats />
            <div className="mt-8 flex gap-2">
              {([["inq", "Enquiries"], ["cars", "Cars"]] as const).map(([k, l]) => (
                <button key={k} onClick={() => setTab(k)} className={`rounded-full px-5 py-2 text-sm font-semibold ${tab === k ? "bg-site-import-primary text-site-import-primary-foreground" : "border border-site-import-border bg-background"}`}>{l}</button>
              ))}
            </div>
            <div className="mt-6">{tab === "inq" ? <Inquiries /> : <Cars />}</div>
          </>
        )}
      </main>
    </div>
  );
}

function useInquiries() {
  return useQuery({
    queryKey: ["inquiries"],
    queryFn: async () => {
      const { data, error } = await supabase.from("inquiries").select("*").order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });
}
function useCars() {
  return useQuery({
    queryKey: ["cars", "all"],
    queryFn: async () => {
      const { data, error } = await supabase.from("cars").select("*").order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });
}

function Stats() {
  const { data: inq = [] } = useInquiries();
  const { data: cars = [] } = useCars();
  const items = [
    ["New enquiries", inq.filter((i) => i.status === "new").length],
    ["Total enquiries", inq.length],
    ["Cars listed", cars.length],
    ["Cars available", cars.filter((c) => c.status === "available").length],
  ];
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {items.map(([l, v]) => (
        <div key={l} className="rounded-2xl border border-site-import-border bg-background p-5">
          <p className="text-xs text-site-import-muted-foreground">{l}</p>
          <p className="mt-1 text-3xl font-extrabold">{v}</p>
        </div>
      ))}
    </div>
  );
}

function replyLink(i: Inquiry) {
  const subject = `Re: Your enquiry at Calzcar AutoHub${i.car_label ? ` — ${i.car_label}` : ""}`;
  const body = `Hi ${i.full_name},\n\nThank you for contacting Calzcar AutoHub.\n\n\n\n---\nYour message:\n${i.message}\n\nCalzcar AutoHub · +254 742 064560`;
  return `mailto:${i.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function Inquiries() {
  const qc = useQueryClient();
  const { data = [], isLoading } = useInquiries();
  const [filter, setFilter] = useState<"all" | "new" | "replied">("all");
  const list = data.filter((i) => filter === "all" || i.status === filter);

  async function setStatus(id: string, status: string) {
    await supabase.from("inquiries").update({ status }).eq("id", id);
    qc.invalidateQueries({ queryKey: ["inquiries"] });
  }
  async function remove(id: string) {
    if (!confirm("Delete this enquiry?")) return;
    await supabase.from("inquiries").delete().eq("id", id);
    qc.invalidateQueries({ queryKey: ["inquiries"] });
  }

  return (
    <div>
      <div className="mb-4 flex gap-2 text-sm">
        {(["all", "new", "replied"] as const).map((f) => (
          <button key={f} onClick={() => setFilter(f)} className={`rounded-lg px-3 py-1.5 capitalize ${filter === f ? "bg-site-import-foreground text-background" : "bg-background border border-site-import-border"}`}>{f}</button>
        ))}
      </div>
      {isLoading && <p>Loading…</p>}
      {!isLoading && list.length === 0 && <p className="text-site-import-muted-foreground">No enquiries yet.</p>}
      <div className="space-y-4">
        {list.map((i) => (
          <div key={i.id} className="rounded-2xl border border-site-import-border bg-background p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="font-bold">{i.full_name} <span className={`ml-2 rounded-full px-2 py-0.5 text-xs font-semibold ${i.status === "new" ? "bg-site-import-primary text-site-import-primary-foreground" : "bg-site-import-accent/20 text-site-import-foreground"}`}>{i.status}</span></p>
                <p className="text-sm text-site-import-muted-foreground">{i.email}{i.phone && ` · ${i.phone}`}</p>
                <p className="text-xs text-site-import-muted-foreground">{new Date(i.created_at).toLocaleString()} · Interested in: {i.interest}{i.car_label && ` · ${i.car_label}`}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <a href={replyLink(i)} onClick={() => setStatus(i.id, "replied")} className="rounded-lg bg-site-import-primary px-4 py-2 text-sm font-semibold text-site-import-primary-foreground">Reply by email</a>
                {i.phone && <a href={`https://wa.me/${i.phone.replace(/\D/g, "").replace(/^0/, "254")}`} target="_blank" rel="noreferrer" className="rounded-lg bg-site-import-accent px-4 py-2 text-sm font-semibold text-site-import-primary-foreground">WhatsApp</a>}
                <button onClick={() => setStatus(i.id, i.status === "new" ? "replied" : "new")} className="rounded-lg border border-site-import-border px-3 py-2 text-sm">{i.status === "new" ? "Mark replied" : "Mark new"}</button>
                <button onClick={() => remove(i.id)} className="rounded-lg border border-site-import-border px-3 py-2 text-sm text-destructive">Delete</button>
              </div>
            </div>
            {i.message && <p className="mt-3 whitespace-pre-line rounded-lg bg-site-import-background p-3 text-sm">{i.message}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

function Cars() {
  const qc = useQueryClient();
  const { data = [] } = useCars();
  const [open, setOpen] = useState(false);

  async function update(id: string, patch: { status?: string; featured?: boolean }) {
    await supabase.from("cars").update(patch).eq("id", id);
    qc.invalidateQueries({ queryKey: ["cars"] });
  }
  async function remove(id: string) {
    if (!confirm("Delete this car?")) return;
    await supabase.from("cars").delete().eq("id", id);
    qc.invalidateQueries({ queryKey: ["cars"] });
  }

  return (
    <div>
      <button onClick={() => setOpen(!open)} className="rounded-lg bg-site-import-primary px-5 py-2.5 text-sm font-semibold text-site-import-primary-foreground">{open ? "Close" : "+ Add a car"}</button>
      {open && <AddCar onDone={() => setOpen(false)} />}
      <div className="mt-6 space-y-3">
        {data.map((c) => (
          <div key={c.id} className="flex flex-wrap items-center gap-4 rounded-2xl border border-site-import-border bg-background p-3">
            <div className="h-16 w-24 shrink-0 overflow-hidden rounded-lg bg-site-import-border">{c.images[0] && <img src={c.images[0]} alt="" className="h-full w-full object-cover" />}</div>
            <div className="min-w-40 flex-1">
              <p className="font-bold">{c.year} {carTitle(c)}</p>
              <p className="text-sm text-site-import-muted-foreground">{formatKES(c.price_kes)} · {c.category} · {c.images.length} photo(s)</p>
            </div>
            <select value={c.status} onChange={(e) => update(c.id, { status: e.target.value })} className={fieldClass + " w-auto"}>
              <option value="available">Available</option><option value="reserved">Reserved</option><option value="sold">Sold</option>
            </select>
            <label className="flex items-center gap-1 text-sm"><input type="checkbox" checked={c.featured} onChange={(e) => update(c.id, { featured: e.target.checked })} /> Featured</label>
            <button onClick={() => remove(c.id)} className="rounded-lg border border-site-import-border px-3 py-2 text-sm text-destructive">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function AddCar({ onDone }: { onDone: () => void }) {
  const qc = useQueryClient();
  const [files, setFiles] = useState<File[]>([]);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    setBusy(true);
    setMsg("Uploading photos…");
    const urls: string[] = [];
    for (const file of files) {
      const path = `${crypto.randomUUID()}-${file.name.replace(/[^a-zA-Z0-9.]/g, "_")}`;
      const up = await supabase.storage.from("car-images").upload(path, file, { contentType: file.type });
      if (up.error) { setBusy(false); return setMsg("Photo upload failed: " + up.error.message); }
      const signed = await supabase.storage.from("car-images").createSignedUrl(path, 60 * 60 * 24 * 365 * 20);
      if (signed.data) urls.push(signed.data.signedUrl);
    }
    const { error } = await supabase.from("cars").insert({
      make: String(f.get("make")), model: String(f.get("model")), year: Number(f.get("year")),
      body_type: String(f.get("body_type")), category: String(f.get("category")),
      price_kes: Number(f.get("price_kes") || 0), mileage_km: Number(f.get("mileage_km") || 0),
      transmission: String(f.get("transmission")), fuel: String(f.get("fuel")), condition: String(f.get("condition")),
      credit_available: f.get("credit") === "on", featured: f.get("featured") === "on",
      description: String(f.get("description") ?? ""), images: urls,
    });
    setBusy(false);
    if (error) return setMsg("Could not save car: " + error.message);
    qc.invalidateQueries({ queryKey: ["cars"] });
    onDone();
  }

  const input = (name: string, label: string, props: Record<string, unknown> = {}) => (
    <label className="block text-sm font-medium">{label}<input name={name} className={fieldClass + " mt-1"} {...props} /></label>
  );
  const select = (name: string, label: string, opts: readonly string[]) => (
    <label className="block text-sm font-medium">{label}<select name={name} className={fieldClass + " mt-1"}>{opts.map((o) => <option key={o}>{o}</option>)}</select></label>
  );

  return (
    <form onSubmit={onSubmit} className="mt-4 space-y-4 rounded-2xl border border-site-import-border bg-background p-6">
      <div>
        <p className="text-sm font-medium">Photos</p>
        <label className="mt-1 flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-site-import-border p-6 text-center hover:border-site-import-primary">
          <span className="font-semibold text-site-import-primary">Choose photos from gallery or files</span>
          <span className="text-xs text-site-import-muted-foreground">You can pick several. The first photo is the cover.</span>
          <input type="file" accept="image/*" multiple className="hidden" onChange={(e) => setFiles([...files, ...Array.from(e.target.files ?? [])])} />
        </label>
        {files.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {files.map((file, i) => (
              <div key={i} className="relative h-20 w-28 overflow-hidden rounded-lg">
                <img src={URL.createObjectURL(file)} alt="" className="h-full w-full object-cover" />
                <button type="button" onClick={() => setFiles(files.filter((_, j) => j !== i))} className="absolute right-1 top-1 rounded-full bg-background px-1.5 text-xs">✕</button>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {input("make", "Make", { required: true, placeholder: "Toyota" })}
        {input("model", "Model", { required: true, placeholder: "Land Cruiser V8" })}
        {input("year", "Year", { required: true, type: "number", defaultValue: new Date().getFullYear() })}
        {input("price_kes", "Price (KES)", { type: "number", placeholder: "0 = price on request" })}
        {input("mileage_km", "Mileage (km)", { type: "number", defaultValue: 0 })}
        {select("category", "Category", CATEGORIES)}
        {select("body_type", "Body type", ["SUV", "Sedan", "Hatchback", "Pickup", "Coupe", "Van", "Wagon"])}
        {select("transmission", "Transmission", ["Automatic", "Manual"])}
        {select("fuel", "Fuel", ["Petrol", "Diesel", "Hybrid", "Electric"])}
        {select("condition", "Condition", ["New", "Excellent", "Good", "Fair"])}
      </div>
      <label className="block text-sm font-medium">Description<textarea name="description" rows={3} className={fieldClass + " mt-1"} /></label>
      <div className="flex gap-6 text-sm">
        <label className="flex items-center gap-2"><input type="checkbox" name="credit" /> Credit available</label>
        <label className="flex items-center gap-2"><input type="checkbox" name="featured" /> Show on home page</label>
      </div>
      {msg && <p className="text-sm text-site-import-muted-foreground">{msg}</p>}
      <button disabled={busy} className="rounded-lg bg-site-import-primary px-6 py-3 text-sm font-semibold text-site-import-primary-foreground disabled:opacity-50">{busy ? "Saving…" : "Save car"}</button>
    </form>
  );
}
