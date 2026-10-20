import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <section className="bg-site-import-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 xl:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-site-import-accent">{eyebrow}</p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight md:text-5xl">{title}</h1>
        {children && <div className="mt-3 max-w-2xl text-background/70">{children}</div>}
      </div>
    </section>
  );
}
