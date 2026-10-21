import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [
    { title: "Services — Calzcar AutoHub" },
    { name: "description", content: "New cars, second-hand cars, imports, car credit and servicing at Calzcar AutoHub, Kiambu Road." },
    { property: "og:title", content: "Services — Calzcar AutoHub" },
    { property: "og:description", content: "New cars, second-hand cars, imports, car credit and servicing." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Services,
});

const services = [
  ["New Cars", "Brand-new vehicles from leading makes, ready to drive away."],
  ["Second-Hand Cars", "Carefully inspected, quality pre-owned cars at fair prices."],
  ["Imports", "We source and import the exact car you want, handling the paperwork."],
  ["Cars on Credit", "Flexible payment plans so you can drive now and pay over time."],
  ["Servicing", "Maintenance and repairs to keep your car in top condition."],
  ["Trade-Ins", "Swap your current car as part payment for your next one."],
];

function Services() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Services" title="Everything for your car, in one place" />
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:grid-cols-2 md:px-6 lg:grid-cols-3 xl:px-8">
        {services.map(([t, d]) => (
          <div key={t} className="rounded-2xl border border-site-import-border bg-background p-6">
            <h2 className="text-lg font-bold">{t}</h2>
            <p className="mt-2 text-sm text-site-import-muted-foreground">{d}</p>
            <Link to="/contact" className="mt-4 inline-block text-sm font-semibold text-site-import-primary">Talk to a dealer →</Link>
          </div>
        ))}
      </div>
    </SiteLayout>
  );
}
