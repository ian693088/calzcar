import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { CarCard } from "@/components/CarCard";
import { fieldClass } from "@/components/InquiryForm";
import { CATEGORIES, carTitle } from "@/lib/cars";

export const Route = createFileRoute("/inventory")({
  head: () => ({ meta: [
    { title: "Inventory — Calzcar AutoHub" },
    { name: "description", content: "Browse new, second-hand, imported and credit-eligible cars at Calzcar AutoHub, Kiambu Road." },
    { property: "og:title", content: "Inventory — Calzcar AutoHub" },
    { property: "og:description", content: "Browse new, second-hand, imported and credit-eligible cars." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Inventory,
});

function Inventory() {
  const [cat, setCat] = useState<string>("All");
  const [q, setQ] = useState("");
  const { data = [], isLoading } = useQuery({
    queryKey: ["cars", "all"],
    queryFn: async () => {
      const { data, error } = await supabase.from("cars").select("*").order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });
  const list = useMemo(() => data.filter((c) =>
    (cat === "All" || c.category === cat || (cat === "On Credit" && c.credit_available)) &&
    (!q || `${carTitle(c)} ${c.year} ${c.body_type}`.toLowerCase().includes(q.toLowerCase()))
  ), [data, cat, q]);

  return (
    <SiteLayout>
      <PageHero eyebrow="Our inventory" title="Find your next car">Browse our full range of new, second-hand, imported and credit-eligible vehicles.</PageHero>
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 xl:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {["All", ...CATEGORIES].map((c) => (
              <button key={c} onClick={() => setCat(c)} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${cat === c ? "bg-site-import-primary text-site-import-primary-foreground" : "border border-site-import-border bg-background text-site-import-foreground hover:border-site-import-primary"}`}>{c}</button>
            ))}
          </div>
          <input placeholder="Search make, model, year…" value={q} onChange={(e) => setQ(e.target.value)} className={fieldClass + " md:max-w-xs"} />
        </div>
        <p className="mt-6 text-sm text-site-import-muted-foreground">{isLoading ? "Loading…" : `${list.length} vehicles available`}</p>
        <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((c) => <CarCard key={c.id} car={c} />)}
        </div>
      </div>
    </SiteLayout>
  );
}
