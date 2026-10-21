import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About us — Calzcar AutoHub" },
    { name: "description", content: "Calzcar AutoHub is a premium car dealer along Kiambu Road, Kenya." },
    { property: "og:title", content: "About us — Calzcar AutoHub" },
    { property: "og:description", content: "A premium car dealer along Kiambu Road, Kenya." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <PageHero eyebrow="About us" title="Drive your next chapter" />
      <div className="mx-auto max-w-3xl space-y-5 px-4 py-12 leading-relaxed text-site-import-foreground/80 md:px-6">
        <p>Calzcar AutoHub is a premium car dealer along Kiambu Road, Kenya. We help you find the right car — new, second-hand or imported — and make owning it easier with flexible credit plans and servicing.</p>
        <p>Every car we sell is checked carefully, and our team is happy to answer questions, arrange test drives and walk you through financing.</p>
        <Link to="/contact" className="inline-block rounded-lg bg-site-import-primary px-5 py-3 text-sm font-semibold text-site-import-primary-foreground">Talk to a dealer</Link>
      </div>
    </SiteLayout>
  );
}
