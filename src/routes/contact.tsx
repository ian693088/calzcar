import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { InquiryForm } from "@/components/InquiryForm";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Talk to a dealer — Calzcar AutoHub" },
    { name: "description", content: "Questions about a vehicle, financing or imports? Contact Calzcar AutoHub on Kiambu Road, Kenya." },
    { property: "og:title", content: "Talk to a dealer — Calzcar AutoHub" },
    { property: "og:description", content: "Questions about a vehicle, financing or imports? We respond within hours." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Contact,
});

const info = [
  ["Visit us", "Along Kiambu Road, Kenya"],
  ["Call us", "+254 742 064560"],
  ["Email us", "csimiyu465@gmail.com"],
  ["Opening hours", "Mon–Sat: 8am – 6pm · Sunday: By appointment"],
];

function Contact() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Contact" title="Let's find your next car">Questions about a vehicle, financing or imports? Reach out — we respond within hours.</PageHero>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:px-6 lg:grid-cols-[1fr_1.4fr] xl:px-8">
        <div className="space-y-4">
          {info.map(([t, v]) => (
            <div key={t} className="rounded-2xl border border-site-import-border bg-background p-5">
              <h3 className="font-bold">{t}</h3>
              <p className="text-sm text-site-import-muted-foreground">{v}</p>
            </div>
          ))}
          <iframe title="Map" className="h-64 w-full rounded-2xl border border-site-import-border" loading="lazy" src="https://www.openstreetmap.org/export/embed.html?bbox=36.82%2C-1.24%2C36.86%2C-1.20&layer=mapnik" />
        </div>
        <div className="rounded-2xl border border-site-import-border bg-background p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold">Send us a message</h2>
          <p className="mb-6 text-sm text-site-import-muted-foreground">Tell us what you're looking for and we'll get back to you with options.</p>
          <InquiryForm />
        </div>
      </div>
    </SiteLayout>
  );
}
