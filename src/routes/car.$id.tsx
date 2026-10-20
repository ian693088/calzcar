import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { SiteLayout } from "@/components/SiteLayout";
import { InquiryForm } from "@/components/InquiryForm";
import { carTitle, formatKES } from "@/lib/cars";

export const Route = createFileRoute("/car/$id")({
  head: () => ({ meta: [
    { title: "Vehicle details — Calzcar AutoHub" },
    { name: "description", content: "Photos, specs and price for this vehicle at Calzcar AutoHub. Enquire with a dealer today." },
    { property: "og:title", content: "Vehicle details — Calzcar AutoHub" },
    { property: "og:description", content: "Photos, specs and price. Enquire with a dealer today." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: CarPage,
});

function CarPage() {
  const { id } = Route.useParams();
  const [active, setActive] = useState(0);
  const { data: car, isLoading } = useQuery({
    queryKey: ["car", id],
    queryFn: async () => {
      const { data, error } = await supabase.from("cars").select("*").eq("id", id).maybeSingle();
      if (error) throw error;
      return data;
    },
  });

  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 xl:px-8">
        <Link to="/inventory" className="text-sm font-semibold text-site-import-primary">← Back to inventory</Link>
        {isLoading && <p className="mt-8 text-site-import-muted-foreground">Loading…</p>}
        {!isLoading && !car && <p className="mt-8 text-site-import-muted-foreground">This vehicle is no longer listed.</p>}
        {car && (
          <div className="mt-6 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-site-import-border">
                {car.images[active] ? <img src={car.images[active]} alt={carTitle(car)} className="h-full w-full object-cover" /> : <div className="flex h-full items-center justify-center text-site-import-muted-foreground">No image</div>}
              </div>
              {car.images.length > 1 && (
                <div className="mt-3 flex gap-3 overflow-x-auto">
                  {car.images.map((src, i) => (
                    <button key={src} onClick={() => setActive(i)} className={`h-20 w-28 shrink-0 overflow-hidden rounded-lg border-2 ${i === active ? "border-site-import-primary" : "border-transparent"}`}>
                      <img src={src} alt="" className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
              <h1 className="mt-8 text-3xl font-extrabold">{carTitle(car)}</h1>
              <p className="text-site-import-muted-foreground">{car.year} · {car.body_type} · {car.category}</p>
              <p className="mt-3 text-3xl font-extrabold text-site-import-primary">{formatKES(car.price_kes)}</p>
              <dl className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {[["Mileage", `${car.mileage_km.toLocaleString()} km`], ["Transmission", car.transmission], ["Fuel", car.fuel], ["Condition", car.condition], ["Status", car.status], ["Credit", car.credit_available ? "Available" : "—"]].map(([k, v]) => (
                  <div key={k} className="rounded-xl border border-site-import-border bg-background p-4">
                    <dt className="text-xs text-site-import-muted-foreground">{k}</dt>
                    <dd className="font-semibold capitalize">{v}</dd>
                  </div>
                ))}
              </dl>
              {car.description && <p className="mt-6 whitespace-pre-line leading-relaxed text-site-import-foreground/80">{car.description}</p>}
            </div>
            <aside className="h-fit rounded-2xl border border-site-import-border bg-background p-6 shadow-sm lg:sticky lg:top-24">
              <h2 className="text-xl font-bold">Talk to a dealer</h2>
              <p className="mb-5 text-sm text-site-import-muted-foreground">Ask about this car, financing or a test drive.</p>
              <InquiryForm carId={car.id} carLabel={`${car.year} ${carTitle(car)}`} />
            </aside>
          </div>
        )}
      </div>
    </SiteLayout>
  );
}
