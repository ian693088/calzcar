import type { CSSProperties } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { FeaturedCars } from "@/components/CarCard";
import heroUrus from "@/assets/hero-urus.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Calzcar AutoHub — Premium Cars, Imports & Credit" },
    { name: "description", content: "New, second-hand and imported cars along Kiambu Road, Kenya. Flexible car credit and servicing." },
    { property: "og:title", content: "Calzcar AutoHub — Premium Cars, Imports & Credit" },
    { property: "og:description", content: "New, second-hand and imported cars along Kiambu Road, Kenya." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

function Index() {
  return (<SiteLayout>
              <div className="opacity-100 [animation:0.4s_ease-out_0s_1_normal_both_running_fadeIn]">
                <section className="bg-ink-950 text-white bg-[rgb(19_22_31/1)] text-[rgb(255_255_255/1)] overflow-hidden relative">
                  <div className="inset-0 absolute">
                    <img className="block h-full max-w-full object-cover opacity-60 align-middle w-full" src={heroUrus} alt="Lamborghini Urus at Calzcar AutoHub" width={1920} height={1088} />
                    <div className="from-ink-950 via-ink-950/85 to-ink-950/40 inset-0 absolute [background-image:linear-gradient(to_right,var(--tw-gradient-stops))]" />
                  </div>
                  <div className="items-center grid grid-cols-1 ml-auto mr-auto max-w-7xl min-h-[88vh] relative w-full z-10 py-20 px-4 md:py-20 md:px-6 xl:py-28 xl:px-8">
                    <div className="max-w-2xl opacity-100 translate-y-0 [animation:0.5s_ease-out_0s_1_normal_both_running_fadeUp]">
                      <span className="text-brand-300 backdrop-blur items-center bg-[#2f7bff26] rounded-[9999px] text-[rgb(142_194_255/1)] inline-flex text-[0.75rem] font-semibold gap-1 leading-4 py-0.5 px-2.5 [backdrop-filter:var(--tw-backdrop-blur)]"><svg className="block h-3.5 align-middle w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" /><path d="M20 3v4" /><path d="M22 5h-4" /><path d="M4 17v2" /><path d="M5 18H3" /></svg> Premium auto dealer</span>
                      <h1 className="font-[family-name:Sora,Inter,ui-sans-serif,system-ui,sans-serif] font-extrabold m-0 mt-5! text-[36px] tracking-[-0.9px] leading-[39.6px] md:text-[48px] md:tracking-[-1.2px] md:leading-12 xl:text-[60px] xl:tracking-[-1.5px] xl:leading-[60px]">Drive the car <br /><span className="from-brand-400 to-accent-400 bg-clip-text text-transparent [background-image:linear-gradient(to_right,var(--tw-gradient-stops))]">you've always wanted</span></h1>
                      <p className="text-ink-200 text-[rgb(213_217_226/1)] text-[1.125rem] leading-relaxed m-0 mt-5! max-w-xl">New cars, quality second-hand vehicles, premium imports and flexible credit plans — all in one place at Calzcar AutoHub.</p>
                      <div className="flex flex-wrap gap-3 mt-8">
                        <a className="btn-accent items-center bg-[rgb(255_122_18/1)] rounded-[0.5rem] shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] text-[rgb(255_255_255/1)] inline-flex text-[0.875rem] font-semibold gap-2 justify-center leading-5 py-2.5 px-5 duration-200 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] [text-decoration:inherit] active:bg-[rgb(199_69_8/1)] disabled:opacity-50 disabled:pointer-events-none focus-visible:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus:outline-transparent focus:outline-solid focus:outline-2 focus:outline-offset-2 hover:bg-[rgb(240_94_6/1)] hover:shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)]" href="/inventory">Browse Inventory <svg className="block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
                        <a className="btn text-white items-center bg-[#ffffff0d] border-site-import-card! rounded-[0.5rem] border! text-[rgb(255_255_255/1)] inline-flex text-[0.875rem] font-semibold gap-2 justify-center leading-5 py-2.5 px-5 duration-200 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] [text-decoration:inherit] disabled:opacity-50 disabled:pointer-events-none focus-visible:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus:outline-transparent focus:outline-solid focus:outline-2 focus:outline-offset-2 hover:bg-[#ffffff1a]" href="/contact">Talk to a dealer</a>
                      </div>
                      <div className="grid gap-6 grid-cols-2 mt-12 max-w-lg sm:grid-cols-4">
                        <div>
                          <p className="text-white text-[rgb(255_255_255/1)] font-[family-name:Sora,Inter,ui-sans-serif,system-ui,sans-serif] text-[1.5rem] font-extrabold leading-8 m-0">500+</p>
                          <p className="text-ink-400 text-site-import-muted-foreground text-[0.75rem] leading-4 m-0 mt-0.5!">Cars delivered</p>
                        </div>
                        <div>
                          <p className="text-white text-[rgb(255_255_255/1)] font-[family-name:Sora,Inter,ui-sans-serif,system-ui,sans-serif] text-[1.5rem] font-extrabold leading-8 m-0">12+</p>
                          <p className="text-ink-400 text-site-import-muted-foreground text-[0.75rem] leading-4 m-0 mt-0.5!">Years in business</p>
                        </div>
                        <div>
                          <p className="text-white text-[rgb(255_255_255/1)] font-[family-name:Sora,Inter,ui-sans-serif,system-ui,sans-serif] text-[1.5rem] font-extrabold leading-8 m-0">98%</p>
                          <p className="text-ink-400 text-site-import-muted-foreground text-[0.75rem] leading-4 m-0 mt-0.5!">Happy clients</p>
                        </div>
                        <div>
                          <p className="text-white text-[rgb(255_255_255/1)] font-[family-name:Sora,Inter,ui-sans-serif,system-ui,sans-serif] text-[1.5rem] font-extrabold leading-8 m-0">24/7</p>
                          <p className="text-ink-400 text-site-import-muted-foreground text-[0.75rem] leading-4 m-0 mt-0.5!">Support</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="ml-auto mr-auto max-w-7xl w-full py-20 px-4 md:py-20 md:px-6 xl:py-20 xl:px-8">
                  <div className="ml-auto mr-auto max-w-2xl text-center">
                    <p className="eyebrow text-site-import-primary text-[0.875rem]! font-semibold! tracking-wider! leading-5! m-0 uppercase!">What we offer</p>
                    <h2 className="section-title text-site-import-foreground font-[family-name:Sora,Inter,ui-sans-serif,system-ui,sans-serif]! font-extrabold! m-0 mt-2! text-[30px]! tracking-[-0.75px]! leading-9! md:text-[36px]! md:tracking-[-0.9px]! md:leading-10!">One hub, every kind of car</h2>
                    <p className="text-ink-600 text-[rgb(81_92_118/1)] m-0 mt-4!">Whether you want brand-new, certified pre-owned, an imported gem, or a flexible credit plan — we've got you covered.</p>
                  </div>
                  <div className="grid gap-6 grid-cols-1 mt-12 lg:grid-cols-4 sm:grid-cols-2">
                    <div className="card group hover:-translate-y-1 hover:shadow-cardHover bg-[rgb(255_255_255/1)] border-[rgb(236_238_242/var(--tw-border-opacity,1))] rounded-[1rem]! border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] p-6 duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] [transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter] hover:shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] hover:transform-[translate(0,var(--tw-translate-y))_rotate(0)_skew(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]">
                      <div className="from-brand-500 to-brand-700 text-white shadow-md items-center rounded-[0.75rem] shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] text-[rgb(255_255_255/1)] inline-flex h-12 justify-center w-12 [background-image:linear-gradient(to_bottom_right,var(--tw-gradient-stops))]">
                        <svg className="block h-6 align-middle w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                          <circle cx="7" cy="17" r="2" />
                          <path d="M9 17h6" />
                          <circle cx="17" cy="17" r="2" />
                        </svg>
                      </div>
                      <h3 className="text-ink-900 text-site-import-foreground font-[family-name:Sora,Inter,ui-sans-serif,system-ui,sans-serif] text-[1.125rem] font-bold leading-7 m-0 mt-4!">New Cars</h3>
                      <p className="text-ink-600 text-[rgb(81_92_118/1)] text-[0.875rem] leading-relaxed m-0 mt-2!">Brand-new vehicles with full factory warranty and the latest tech.</p>
                      <a className="text-brand-600 hover:text-brand-700 items-center text-site-import-primary inline-flex text-[0.875rem] font-semibold gap-1 leading-5 mt-4 [text-decoration:inherit] hover:text-[rgb(22_73_180/1)]" href="/services">Learn more <svg className="block h-3.5 align-middle w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
                    </div>
                    <div className="card group hover:-translate-y-1 hover:shadow-cardHover bg-[rgb(255_255_255/1)] border-[rgb(236_238_242/var(--tw-border-opacity,1))] rounded-[1rem]! border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] p-6 duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] [transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter] hover:shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] hover:transform-[translate(0,var(--tw-translate-y))_rotate(0)_skew(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]">
                      <div className="from-ink-600 to-ink-800 text-white shadow-md items-center rounded-[0.75rem] shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] text-[rgb(255_255_255/1)] inline-flex h-12 justify-center w-12 [background-image:linear-gradient(to_bottom_right,var(--tw-gradient-stops))]">
                        <svg className="block h-6 align-middle w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      </div>
                      <h3 className="text-ink-900 text-site-import-foreground font-[family-name:Sora,Inter,ui-sans-serif,system-ui,sans-serif] text-[1.125rem] font-bold leading-7 m-0 mt-4!">Second-Hand</h3>
                      <p className="text-ink-600 text-[rgb(81_92_118/1)] text-[0.875rem] leading-relaxed m-0 mt-2!">Carefully inspected pre-owned cars you can trust.</p>
                      <a className="text-brand-600 hover:text-brand-700 items-center text-site-import-primary inline-flex text-[0.875rem] font-semibold gap-1 leading-5 mt-4 [text-decoration:inherit] hover:text-[rgb(22_73_180/1)]" href="/services">Learn more <svg className="block h-3.5 align-middle w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
                    </div>
                    <div className="card group hover:-translate-y-1 hover:shadow-cardHover bg-[rgb(255_255_255/1)] border-[rgb(236_238_242/var(--tw-border-opacity,1))] rounded-[1rem]! border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] p-6 duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] [transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter] hover:shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] hover:transform-[translate(0,var(--tw-translate-y))_rotate(0)_skew(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]">
                      <div className="from-accent-500 to-accent-700 text-white shadow-md items-center rounded-[0.75rem] shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] text-[rgb(255_255_255/1)] inline-flex h-12 justify-center w-12 [background-image:linear-gradient(to_bottom_right,var(--tw-gradient-stops))]">
                        <svg className="block h-6 align-middle w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                          <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
                          <path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17" />
                          <path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
                          <circle cx="12" cy="12" r="10" />
                        </svg>
                      </div>
                      <h3 className="text-ink-900 text-site-import-foreground font-[family-name:Sora,Inter,ui-sans-serif,system-ui,sans-serif] text-[1.125rem] font-bold leading-7 m-0 mt-4!">Imports</h3>
                      <p className="text-ink-600 text-[rgb(81_92_118/1)] text-[0.875rem] leading-relaxed m-0 mt-2!">Premium imported models, fully inspected and registered.</p>
                      <a className="text-brand-600 hover:text-brand-700 items-center text-site-import-primary inline-flex text-[0.875rem] font-semibold gap-1 leading-5 mt-4 [text-decoration:inherit] hover:text-[rgb(22_73_180/1)]" href="/services">Learn more <svg className="block h-3.5 align-middle w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
                    </div>
                    <div className="card group hover:-translate-y-1 hover:shadow-cardHover bg-[rgb(255_255_255/1)] border-[rgb(236_238_242/var(--tw-border-opacity,1))] rounded-[1rem]! border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] p-6 duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] [transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter] hover:shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] hover:transform-[translate(0,var(--tw-translate-y))_rotate(0)_skew(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]">
                      <div className="from-success-500 to-success-700 text-white shadow-md items-center rounded-[0.75rem] shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] text-[rgb(255_255_255/1)] inline-flex h-12 justify-center w-12 [background-image:linear-gradient(to_bottom_right,var(--tw-gradient-stops))]">
                        <svg className="block h-6 align-middle w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                          <rect x="2" y="6" rx="2" {...({ width: "20", height: "12" } as any)} />
                          <circle cx="12" cy="12" r="2" />
                          <path d="M6 12h.01M18 12h.01" />
                        </svg>
                      </div>
                      <h3 className="text-ink-900 text-site-import-foreground font-[family-name:Sora,Inter,ui-sans-serif,system-ui,sans-serif] text-[1.125rem] font-bold leading-7 m-0 mt-4!">On Credit</h3>
                      <p className="text-ink-600 text-[rgb(81_92_118/1)] text-[0.875rem] leading-relaxed m-0 mt-2!">Flexible monthly plans — drive away with a low deposit.</p>
                      <a className="text-brand-600 hover:text-brand-700 items-center text-site-import-primary inline-flex text-[0.875rem] font-semibold gap-1 leading-5 mt-4 [text-decoration:inherit] hover:text-[rgb(22_73_180/1)]" href="/services">Learn more <svg className="block h-3.5 align-middle w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
                    </div>
                  </div>
                </section>
                <section className="bg-[#eceef299] pb-20 pt-20">
                  <div className="ml-auto mr-auto max-w-7xl w-full py-0 px-4 md:py-0 md:px-6 xl:py-0 xl:px-8">
                    <div className="items-end flex gap-4 justify-between">
                      <div>
                        <p className="eyebrow text-site-import-primary text-[0.875rem]! font-semibold! tracking-wider! leading-5! m-0 uppercase!">Hand-picked</p>
                        <h2 className="section-title text-site-import-foreground font-[family-name:Sora,Inter,ui-sans-serif,system-ui,sans-serif]! font-extrabold! m-0 mt-2! text-[30px]! tracking-[-0.75px]! leading-9! md:text-[36px]! md:tracking-[-0.9px]! md:leading-10!">Featured vehicles</h2>
                      </div>
                      <a className="text-brand-600 hover:text-brand-700 items-center text-site-import-primary text-[0.875rem] font-semibold gap-1 leading-5 hidden [text-decoration:inherit] hover:text-[rgb(22_73_180/1)] md:flex" href="/inventory">View all <svg className="block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
                    </div>
                    <FeaturedCars />
                  </div>
                </section>
                <section className="ml-auto mr-auto max-w-7xl w-full py-20 px-4 md:py-20 md:px-6 xl:py-20 xl:px-8">
                  <div className="items-center grid gap-12 grid-cols-1 lg:grid-cols-2">
                    <div>
                      <p className="eyebrow text-site-import-primary text-[0.875rem]! font-semibold! tracking-wider! leading-5! m-0 uppercase!">Why Calzcar</p>
                      <h2 className="section-title text-site-import-foreground font-[family-name:Sora,Inter,ui-sans-serif,system-ui,sans-serif]! font-extrabold! m-0 mt-2! text-[30px]! tracking-[-0.75px]! leading-9! md:text-[36px]! md:tracking-[-0.9px]! md:leading-10!">A dealership that puts you first</h2>
                      <p className="text-ink-600 text-[rgb(81_92_118/1)] m-0 mt-4!">We combine a carefully curated inventory with honest advice, transparent pricing and flexible financing — so buying your next car feels easy.</p>
                      <ul className="space-y-4 list-none m-0 mt-6! p-0">
                        <li className="items-start flex gap-3">
                          <span className="text-success-600 items-center bg-[#10b98126] rounded-[9999px] text-[rgb(5_150_105/1)] inline-flex flex-none h-6 justify-center mt-0.5 w-6">
                            <svg className="block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                              <path d="m9 12 2 2 4-4" />
                            </svg>
                          </span>
                          <span className="text-ink-700 text-[rgb(66_75_96/1)]">Every car is inspected before it hits our floor</span>
                        </li>
                        <li className="items-start flex gap-3 mb-[calc(1rem_*_var(--tw-space-y-reverse))] mt-[calc(1rem_*_calc(1_-_var(--tw-space-y-reverse)))]">
                          <span className="text-success-600 items-center bg-[#10b98126] rounded-[9999px] text-[rgb(5_150_105/1)] inline-flex flex-none h-6 justify-center mt-0.5 w-6">
                            <svg className="block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                              <path d="m9 12 2 2 4-4" />
                            </svg>
                          </span>
                          <span className="text-ink-700 text-[rgb(66_75_96/1)]">Transparent pricing — no hidden fees</span>
                        </li>
                        <li className="items-start flex gap-3 mb-[calc(1rem_*_var(--tw-space-y-reverse))] mt-[calc(1rem_*_calc(1_-_var(--tw-space-y-reverse)))]">
                          <span className="text-success-600 items-center bg-[#10b98126] rounded-[9999px] text-[rgb(5_150_105/1)] inline-flex flex-none h-6 justify-center mt-0.5 w-6">
                            <svg className="block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                              <path d="m9 12 2 2 4-4" />
                            </svg>
                          </span>
                          <span className="text-ink-700 text-[rgb(66_75_96/1)]">Flexible credit plans tailored to your budget</span>
                        </li>
                        <li className="items-start flex gap-3 mb-[calc(1rem_*_var(--tw-space-y-reverse))] mt-[calc(1rem_*_calc(1_-_var(--tw-space-y-reverse)))]">
                          <span className="text-success-600 items-center bg-[#10b98126] rounded-[9999px] text-[rgb(5_150_105/1)] inline-flex flex-none h-6 justify-center mt-0.5 w-6">
                            <svg className="block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                              <path d="m9 12 2 2 4-4" />
                            </svg>
                          </span>
                          <span className="text-ink-700 text-[rgb(66_75_96/1)]">Full support with import paperwork &amp; registration</span>
                        </li>
                      </ul>
                      <a className="btn-primary items-center bg-site-import-primary rounded-[0.5rem] shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] text-[rgb(255_255_255/1)] inline-flex text-[0.875rem] font-semibold gap-2 justify-center leading-5 mt-8 py-2.5 px-5 duration-200 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] [text-decoration:inherit] active:bg-[rgb(23_63_144/1)] disabled:opacity-50 disabled:pointer-events-none focus-visible:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus:outline-transparent focus:outline-solid focus:outline-2 focus:outline-offset-2 hover:bg-[rgb(22_73_180/1)] hover:shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)]" href="/about">More about us <svg className="block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
                    </div>
                    <div className="grid gap-4 grid-cols-2">
                      <div className="card bg-[rgb(255_255_255/1)] border-[rgb(236_238_242/var(--tw-border-opacity,1))] rounded-[1rem]! border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] p-6 text-center">
                        <svg className="text-brand-600 text-site-import-primary block h-8 ml-auto mr-auto align-middle w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                          <path d="m9 12 2 2 4-4" />
                        </svg>
                        <h3 className="text-ink-900 text-site-import-foreground font-[family-name:Sora,Inter,ui-sans-serif,system-ui,sans-serif] font-bold m-0 mt-3! [font-size:inherit]">Inspected</h3>
                        <p className="text-ink-500 text-[rgb(102_115_144/1)] text-[0.875rem] leading-5 m-0 mt-1!">Every car checked</p>
                      </div>
                      <div className="card bg-[rgb(255_255_255/1)] border-[rgb(236_238_242/var(--tw-border-opacity,1))] rounded-[1rem]! border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] p-6 text-center">
                        <svg className="text-brand-600 text-site-import-primary block h-8 ml-auto mr-auto align-middle w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                          <rect x="2" y="6" rx="2" {...({ width: "20", height: "12" } as any)} />
                          <circle cx="12" cy="12" r="2" />
                          <path d="M6 12h.01M18 12h.01" />
                        </svg>
                        <h3 className="text-ink-900 text-site-import-foreground font-[family-name:Sora,Inter,ui-sans-serif,system-ui,sans-serif] font-bold m-0 mt-3! [font-size:inherit]">Financing</h3>
                        <p className="text-ink-500 text-[rgb(102_115_144/1)] text-[0.875rem] leading-5 m-0 mt-1!">Credit plans</p>
                      </div>
                      <div className="card bg-[rgb(255_255_255/1)] border-[rgb(236_238_242/var(--tw-border-opacity,1))] rounded-[1rem]! border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] p-6 text-center">
                        <svg className="text-brand-600 text-site-import-primary block h-8 ml-auto mr-auto align-middle w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                          <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
                          <path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17" />
                          <path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
                          <circle cx="12" cy="12" r="10" />
                        </svg>
                        <h3 className="text-ink-900 text-site-import-foreground font-[family-name:Sora,Inter,ui-sans-serif,system-ui,sans-serif] font-bold m-0 mt-3! [font-size:inherit]">Imports</h3>
                        <p className="text-ink-500 text-[rgb(102_115_144/1)] text-[0.875rem] leading-5 m-0 mt-1!">Worldwide sourcing</p>
                      </div>
                      <div className="card bg-[rgb(255_255_255/1)] border-[rgb(236_238_242/var(--tw-border-opacity,1))] rounded-[1rem]! border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] p-6 text-center">
                        <svg className="text-brand-600 text-site-import-primary block h-8 ml-auto mr-auto align-middle w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                          <circle cx="7" cy="17" r="2" />
                          <path d="M9 17h6" />
                          <circle cx="17" cy="17" r="2" />
                        </svg>
                        <h3 className="text-ink-900 text-site-import-foreground font-[family-name:Sora,Inter,ui-sans-serif,system-ui,sans-serif] font-bold m-0 mt-3! [font-size:inherit]">Wide range</h3>
                        <p className="text-ink-500 text-[rgb(102_115_144/1)] text-[0.875rem] leading-5 m-0 mt-1!">New &amp; used</p>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="bg-[#eceef299] pb-20 pt-20">
                  <div className="ml-auto mr-auto max-w-7xl w-full py-0 px-4 md:py-0 md:px-6 xl:py-0 xl:px-8">
                    <div className="items-end flex gap-4 justify-between">
                      <div>
                        <p className="eyebrow text-site-import-primary text-[0.875rem]! font-semibold! tracking-wider! leading-5! m-0 uppercase!">Just landed</p>
                        <h2 className="section-title text-site-import-foreground font-[family-name:Sora,Inter,ui-sans-serif,system-ui,sans-serif]! font-extrabold! m-0 mt-2! text-[30px]! tracking-[-0.75px]! leading-9! md:text-[36px]! md:tracking-[-0.9px]! md:leading-10!">Recent arrivals</h2>
                      </div>
                      <a className="text-brand-600 hover:text-brand-700 items-center text-site-import-primary text-[0.875rem] font-semibold gap-1 leading-5 hidden [text-decoration:inherit] hover:text-[rgb(22_73_180/1)] md:flex" href="/inventory">View all <svg className="block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
                    </div>
                    <div className="grid gap-6 grid-cols-1 mt-10 lg:grid-cols-4 sm:grid-cols-2">
                      <a className="group card hover:-translate-y-1 hover:shadow-cardHover bg-[rgb(255_255_255/1)] border-[rgb(236_238_242/var(--tw-border-opacity,1))] rounded-[1rem]! border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] overflow-hidden duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] text-site-import-foreground [text-decoration:inherit] hover:shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] hover:transform-[translate(0,var(--tw-translate-y))_rotate(0)_skew(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]" href="/car/7e4afb56-a090-4ff9-abe5-1e3b06987118">
                        <div className="bg-ink-100 aspect-[16/10] bg-site-import-border overflow-hidden relative">
                          <div className="text-ink-300 items-center text-[rgb(176_184_200/1)] flex h-full justify-center w-full">
                            <span className="text-[0.875rem] leading-5">No image</span>
                          </div>
                          <div className="flex gap-2 left-3 absolute top-3">
                            <span className="bg-brand-600 text-white items-center bg-site-import-primary rounded-[9999px] text-[rgb(255_255_255/1)] inline-flex text-[0.75rem] font-semibold gap-1 leading-4 py-0.5 px-2.5">New Cars</span>
                          </div>
                          <div className="absolute right-3 top-3">
                            <span className="text-success-700 items-center bg-[#10b9811a] rounded-[9999px] text-[rgb(4_120_87/1)] inline-flex text-[0.75rem] font-semibold gap-1 leading-4 py-0.5 px-2.5">available</span>
                          </div>
                        </div>
                        <div className="p-5">
                          <div className="items-start flex gap-3 justify-between">
                            <div>
                              <h3 className="text-ink-900 text-site-import-foreground font-[family-name:Sora,Inter,ui-sans-serif,system-ui,sans-serif] text-[1.125rem] font-bold leading-tight m-0">Subaru Forester</h3>
                              <p className="text-ink-500 text-[rgb(102_115_144/1)] text-[0.875rem] leading-5 m-0 mt-0.5!">2021 · Sedan</p>
                            </div>
                            <div className="text-right">
                              <p className="text-brand-700 text-[rgb(22_73_180/1)] font-[family-name:Sora,Inter,ui-sans-serif,system-ui,sans-serif] text-[1.125rem] font-extrabold leading-7 m-0">KES 2,000,000</p>
                            </div>
                          </div>
                          <div className="text-ink-600 text-[rgb(81_92_118/1)] grid text-[0.75rem] gap-2 grid-cols-2 leading-4 mt-4">
                            <span className="items-center inline-flex gap-1.5"><svg className="text-ink-400 text-site-import-muted-foreground block h-3.5 align-middle w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M8 2v4" /><path d="M16 2v4" /><rect x="3" y="4" rx="2" {...({ width: "18", height: "18" } as any)} /><path d="M3 10h18" /></svg> 2021</span>
                            <span className="items-center inline-flex gap-1.5"><svg className="text-ink-400 text-site-import-muted-foreground block h-3.5 align-middle w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="m12 14 4-4" /><path d="M3.34 19a10 10 0 1 1 17.32 0" /></svg> 17181</span>
                            <span className="items-center inline-flex gap-1.5"><svg className="text-ink-400 text-site-import-muted-foreground block h-3.5 align-middle w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 7h-9" /><path d="M14 17H5" /><circle cx="17" cy="17" r="3" /><circle cx="7" cy="7" r="3" /></svg> Automatic</span>
                            <span className="items-center inline-flex gap-1.5"><svg className="text-ink-400 text-site-import-muted-foreground block h-3.5 align-middle w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><line x1="3" x2="15" y1="22" y2="22" /><line x1="4" x2="14" y1="9" y2="9" /><path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" /><path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5" /></svg> Petrol</span>
                          </div>
                          <div className="border-ink-100 items-center border-[rgb(236_238_242/var(--tw-border-opacity,1))] border-t flex justify-between mt-4 pt-3">
                            <span className="text-ink-500 items-center text-[rgb(102_115_144/1)] inline-flex text-[0.75rem] font-medium gap-1 leading-4"><svg className="text-success-500 text-site-import-accent block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" /><path d="m9 12 2 2 4-4" /></svg> New</span>
                            <span className="text-brand-600 group-hover:text-brand-700 text-site-import-primary text-[0.875rem] font-semibold leading-5">View details →</span>
                          </div>
                        </div>
                      </a>
                      <a className="group card hover:-translate-y-1 hover:shadow-cardHover bg-[rgb(255_255_255/1)] border-[rgb(236_238_242/var(--tw-border-opacity,1))] rounded-[1rem]! border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] overflow-hidden duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] text-site-import-foreground [text-decoration:inherit] hover:shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] hover:transform-[translate(0,var(--tw-translate-y))_rotate(0)_skew(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]" href="/car/07652ee3-d1fd-41ed-a51d-efc075ede87f">
                        <div className="bg-ink-100 aspect-[16/10] bg-site-import-border overflow-hidden relative">
                          <img className="group-hover:scale-105 block h-full max-w-full object-cover duration-500 transition-transform ease-[cubic-bezier(0.4,0,0.2,1)] align-middle w-full" src="/site-assets/78a22f83d50f74e9.avif" alt="Toyota RAV4 Hybrid" {...({ loading: "lazy" } as any)} />
                          <div className="flex gap-2 left-3 absolute top-3">
                            <span className="bg-brand-600 text-white items-center bg-site-import-primary rounded-[9999px] text-[rgb(255_255_255/1)] inline-flex text-[0.75rem] font-semibold gap-1 leading-4 py-0.5 px-2.5">New Cars</span>
                          </div>
                          <div className="absolute right-3 top-3">
                            <span className="text-success-700 items-center bg-[#10b9811a] rounded-[9999px] text-[rgb(4_120_87/1)] inline-flex text-[0.75rem] font-semibold gap-1 leading-4 py-0.5 px-2.5">available</span>
                          </div>
                        </div>
                        <div className="p-5">
                          <div className="items-start flex gap-3 justify-between">
                            <div>
                              <h3 className="text-ink-900 text-site-import-foreground font-[family-name:Sora,Inter,ui-sans-serif,system-ui,sans-serif] text-[1.125rem] font-bold leading-tight m-0">Toyota RAV4 Hybrid</h3>
                              <p className="text-ink-500 text-[rgb(102_115_144/1)] text-[0.875rem] leading-5 m-0 mt-0.5!">2024 · SUV</p>
                            </div>
                            <div className="text-right">
                              <p className="text-brand-700 text-[rgb(22_73_180/1)] font-[family-name:Sora,Inter,ui-sans-serif,system-ui,sans-serif] text-[1.125rem] font-extrabold leading-7 m-0">$41,200</p>
                            </div>
                          </div>
                          <div className="text-ink-600 text-[rgb(81_92_118/1)] grid text-[0.75rem] gap-2 grid-cols-2 leading-4 mt-4">
                            <span className="items-center inline-flex gap-1.5"><svg className="text-ink-400 text-site-import-muted-foreground block h-3.5 align-middle w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M8 2v4" /><path d="M16 2v4" /><rect x="3" y="4" rx="2" {...({ width: "18", height: "18" } as any)} /><path d="M3 10h18" /></svg> 2024</span>
                            <span className="items-center inline-flex gap-1.5"><svg className="text-ink-400 text-site-import-muted-foreground block h-3.5 align-middle w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="m12 14 4-4" /><path d="M3.34 19a10 10 0 1 1 17.32 0" /></svg> 0 km</span>
                            <span className="items-center inline-flex gap-1.5"><svg className="text-ink-400 text-site-import-muted-foreground block h-3.5 align-middle w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 7h-9" /><path d="M14 17H5" /><circle cx="17" cy="17" r="3" /><circle cx="7" cy="7" r="3" /></svg> Automatic</span>
                            <span className="items-center inline-flex gap-1.5"><svg className="text-ink-400 text-site-import-muted-foreground block h-3.5 align-middle w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><line x1="3" x2="15" y1="22" y2="22" /><line x1="4" x2="14" y1="9" y2="9" /><path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" /><path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5" /></svg> Hybrid</span>
                          </div>
                          <div className="border-ink-100 items-center border-[rgb(236_238_242/var(--tw-border-opacity,1))] border-t flex justify-between mt-4 pt-3">
                            <span className="text-ink-500 items-center text-[rgb(102_115_144/1)] inline-flex text-[0.75rem] font-medium gap-1 leading-4"><svg className="text-success-500 text-site-import-accent block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" /><path d="m9 12 2 2 4-4" /></svg> New</span>
                            <span className="text-brand-600 group-hover:text-brand-700 text-site-import-primary text-[0.875rem] font-semibold leading-5">View details →</span>
                          </div>
                        </div>
                      </a>
                      <a className="group card hover:-translate-y-1 hover:shadow-cardHover bg-[rgb(255_255_255/1)] border-[rgb(236_238_242/var(--tw-border-opacity,1))] rounded-[1rem]! border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] overflow-hidden duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] text-site-import-foreground [text-decoration:inherit] hover:shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] hover:transform-[translate(0,var(--tw-translate-y))_rotate(0)_skew(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]" href="/car/bd5633e2-d538-48ed-913d-48efbb0a0bd2">
                        <div className="bg-ink-100 aspect-[16/10] bg-site-import-border overflow-hidden relative">
                          <img className="group-hover:scale-105 block h-full max-w-full object-cover duration-500 transition-transform ease-[cubic-bezier(0.4,0,0.2,1)] align-middle w-full" src="/site-assets/56743c6ac4f5a0ec.avif" alt="Ford Ranger Raptor" {...({ loading: "lazy" } as any)} />
                          <div className="flex gap-2 left-3 absolute top-3">
                            <span className="bg-ink-800 text-white items-center bg-[rgb(57_64_81/1)] rounded-[9999px] text-[rgb(255_255_255/1)] inline-flex text-[0.75rem] font-semibold gap-1 leading-4 py-0.5 px-2.5">Second-Hand</span>
                          </div>
                          <div className="absolute right-3 top-3">
                            <span className="text-success-700 items-center bg-[#10b9811a] rounded-[9999px] text-[rgb(4_120_87/1)] inline-flex text-[0.75rem] font-semibold gap-1 leading-4 py-0.5 px-2.5">available</span>
                          </div>
                        </div>
                        <div className="p-5">
                          <div className="items-start flex gap-3 justify-between">
                            <div>
                              <h3 className="text-ink-900 text-site-import-foreground font-[family-name:Sora,Inter,ui-sans-serif,system-ui,sans-serif] text-[1.125rem] font-bold leading-tight m-0">Ford Ranger Raptor</h3>
                              <p className="text-ink-500 text-[rgb(102_115_144/1)] text-[0.875rem] leading-5 m-0 mt-0.5!">2022 · Pickup</p>
                            </div>
                            <div className="text-right">
                              <p className="text-brand-700 text-[rgb(22_73_180/1)] font-[family-name:Sora,Inter,ui-sans-serif,system-ui,sans-serif] text-[1.125rem] font-extrabold leading-7 m-0">$38,900</p>
                            </div>
                          </div>
                          <div className="text-ink-600 text-[rgb(81_92_118/1)] grid text-[0.75rem] gap-2 grid-cols-2 leading-4 mt-4">
                            <span className="items-center inline-flex gap-1.5"><svg className="text-ink-400 text-site-import-muted-foreground block h-3.5 align-middle w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M8 2v4" /><path d="M16 2v4" /><rect x="3" y="4" rx="2" {...({ width: "18", height: "18" } as any)} /><path d="M3 10h18" /></svg> 2022</span>
                            <span className="items-center inline-flex gap-1.5"><svg className="text-ink-400 text-site-import-muted-foreground block h-3.5 align-middle w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="m12 14 4-4" /><path d="M3.34 19a10 10 0 1 1 17.32 0" /></svg> 18,500 km</span>
                            <span className="items-center inline-flex gap-1.5"><svg className="text-ink-400 text-site-import-muted-foreground block h-3.5 align-middle w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 7h-9" /><path d="M14 17H5" /><circle cx="17" cy="17" r="3" /><circle cx="7" cy="7" r="3" /></svg> Automatic</span>
                            <span className="items-center inline-flex gap-1.5"><svg className="text-ink-400 text-site-import-muted-foreground block h-3.5 align-middle w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><line x1="3" x2="15" y1="22" y2="22" /><line x1="4" x2="14" y1="9" y2="9" /><path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" /><path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5" /></svg> Petrol</span>
                          </div>
                          <div className="border-ink-100 items-center border-[rgb(236_238_242/var(--tw-border-opacity,1))] border-t flex justify-between mt-4 pt-3">
                            <span className="text-ink-500 items-center text-[rgb(102_115_144/1)] inline-flex text-[0.75rem] font-medium gap-1 leading-4"><svg className="text-success-500 text-site-import-accent block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" /><path d="m9 12 2 2 4-4" /></svg> Excellent</span>
                            <span className="text-brand-600 group-hover:text-brand-700 text-site-import-primary text-[0.875rem] font-semibold leading-5">View details →</span>
                          </div>
                        </div>
                      </a>
                      <a className="group card hover:-translate-y-1 hover:shadow-cardHover bg-[rgb(255_255_255/1)] border-[rgb(236_238_242/var(--tw-border-opacity,1))] rounded-[1rem]! border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] overflow-hidden duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] text-site-import-foreground [text-decoration:inherit] hover:shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] hover:transform-[translate(0,var(--tw-translate-y))_rotate(0)_skew(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]" href="/car/9c3903f0-356b-4946-a2f8-205a8c5ab029">
                        <div className="bg-ink-100 aspect-[16/10] bg-site-import-border overflow-hidden relative">
                          <img className="group-hover:scale-105 block h-full max-w-full object-cover duration-500 transition-transform ease-[cubic-bezier(0.4,0,0.2,1)] align-middle w-full" src="/site-assets/15ee65c2556a20ca.avif" alt="Mercedes-Benz E-Class 350" {...({ loading: "lazy" } as any)} />
                          <div className="flex gap-2 left-3 absolute top-3">
                            <span className="bg-brand-600 text-white items-center bg-site-import-primary rounded-[9999px] text-[rgb(255_255_255/1)] inline-flex text-[0.75rem] font-semibold gap-1 leading-4 py-0.5 px-2.5">New Cars</span>
                          </div>
                          <div className="absolute right-3 top-3">
                            <span className="text-success-700 items-center bg-[#10b9811a] rounded-[9999px] text-[rgb(4_120_87/1)] inline-flex text-[0.75rem] font-semibold gap-1 leading-4 py-0.5 px-2.5">available</span>
                          </div>
                        </div>
                        <div className="p-5">
                          <div className="items-start flex gap-3 justify-between">
                            <div>
                              <h3 className="text-ink-900 text-site-import-foreground font-[family-name:Sora,Inter,ui-sans-serif,system-ui,sans-serif] text-[1.125rem] font-bold leading-tight m-0">Mercedes-Benz E-Class 350</h3>
                              <p className="text-ink-500 text-[rgb(102_115_144/1)] text-[0.875rem] leading-5 m-0 mt-0.5!">2024 · Sedan</p>
                            </div>
                            <div className="text-right">
                              <p className="text-brand-700 text-[rgb(22_73_180/1)] font-[family-name:Sora,Inter,ui-sans-serif,system-ui,sans-serif] text-[1.125rem] font-extrabold leading-7 m-0">$58,500</p>
                            </div>
                          </div>
                          <div className="text-ink-600 text-[rgb(81_92_118/1)] grid text-[0.75rem] gap-2 grid-cols-2 leading-4 mt-4">
                            <span className="items-center inline-flex gap-1.5"><svg className="text-ink-400 text-site-import-muted-foreground block h-3.5 align-middle w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M8 2v4" /><path d="M16 2v4" /><rect x="3" y="4" rx="2" {...({ width: "18", height: "18" } as any)} /><path d="M3 10h18" /></svg> 2024</span>
                            <span className="items-center inline-flex gap-1.5"><svg className="text-ink-400 text-site-import-muted-foreground block h-3.5 align-middle w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="m12 14 4-4" /><path d="M3.34 19a10 10 0 1 1 17.32 0" /></svg> 0 km</span>
                            <span className="items-center inline-flex gap-1.5"><svg className="text-ink-400 text-site-import-muted-foreground block h-3.5 align-middle w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 7h-9" /><path d="M14 17H5" /><circle cx="17" cy="17" r="3" /><circle cx="7" cy="7" r="3" /></svg> Automatic</span>
                            <span className="items-center inline-flex gap-1.5"><svg className="text-ink-400 text-site-import-muted-foreground block h-3.5 align-middle w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><line x1="3" x2="15" y1="22" y2="22" /><line x1="4" x2="14" y1="9" y2="9" /><path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" /><path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5" /></svg> Petrol</span>
                          </div>
                          <div className="border-ink-100 items-center border-[rgb(236_238_242/var(--tw-border-opacity,1))] border-t flex justify-between mt-4 pt-3">
                            <span className="text-ink-500 items-center text-[rgb(102_115_144/1)] inline-flex text-[0.75rem] font-medium gap-1 leading-4"><svg className="text-success-500 text-site-import-accent block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" /><path d="m9 12 2 2 4-4" /></svg> New</span>
                            <span className="text-brand-600 group-hover:text-brand-700 text-site-import-primary text-[0.875rem] font-semibold leading-5">View details →</span>
                          </div>
                        </div>
                      </a>
                      <a className="group card hover:-translate-y-1 hover:shadow-cardHover bg-[rgb(255_255_255/1)] border-[rgb(236_238_242/var(--tw-border-opacity,1))] rounded-[1rem]! border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] overflow-hidden duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] text-site-import-foreground [text-decoration:inherit] hover:shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] hover:transform-[translate(0,var(--tw-translate-y))_rotate(0)_skew(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]" href="/car/43731a55-ad12-43eb-b941-62322bf08d99">
                        <div className="bg-ink-100 aspect-[16/10] bg-site-import-border overflow-hidden relative">
                          <img className="group-hover:scale-105 block h-full max-w-full object-cover duration-500 transition-transform ease-[cubic-bezier(0.4,0,0.2,1)] align-middle w-full" src="/site-assets/cd75b4e8cb67c432.avif" alt="Honda Civic Type R" {...({ loading: "lazy" } as any)} />
                          <div className="flex gap-2 left-3 absolute top-3">
                            <span className="bg-success-600 text-white items-center bg-[rgb(5_150_105/1)] rounded-[9999px] text-[rgb(255_255_255/1)] inline-flex text-[0.75rem] font-semibold gap-1 leading-4 py-0.5 px-2.5">On Credit</span>
                          </div>
                          <div className="absolute right-3 top-3">
                            <span className="text-success-700 items-center bg-[#10b9811a] rounded-[9999px] text-[rgb(4_120_87/1)] inline-flex text-[0.75rem] font-semibold gap-1 leading-4 py-0.5 px-2.5">available</span>
                          </div>
                        </div>
                        <div className="p-5">
                          <div className="items-start flex gap-3 justify-between">
                            <div>
                              <h3 className="text-ink-900 text-site-import-foreground font-[family-name:Sora,Inter,ui-sans-serif,system-ui,sans-serif] text-[1.125rem] font-bold leading-tight m-0">Honda Civic Type R</h3>
                              <p className="text-ink-500 text-[rgb(102_115_144/1)] text-[0.875rem] leading-5 m-0 mt-0.5!">2023 · Hatchback</p>
                            </div>
                            <div className="text-right">
                              <p className="text-brand-700 text-[rgb(22_73_180/1)] font-[family-name:Sora,Inter,ui-sans-serif,system-ui,sans-serif] text-[1.125rem] font-extrabold leading-7 m-0">$0</p>
                              <p className="text-success-600 text-[rgb(5_150_105/1)] text-[11px] font-medium m-0">credit available</p>
                            </div>
                          </div>
                          <div className="text-ink-600 text-[rgb(81_92_118/1)] grid text-[0.75rem] gap-2 grid-cols-2 leading-4 mt-4">
                            <span className="items-center inline-flex gap-1.5"><svg className="text-ink-400 text-site-import-muted-foreground block h-3.5 align-middle w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M8 2v4" /><path d="M16 2v4" /><rect x="3" y="4" rx="2" {...({ width: "18", height: "18" } as any)} /><path d="M3 10h18" /></svg> 2023</span>
                            <span className="items-center inline-flex gap-1.5"><svg className="text-ink-400 text-site-import-muted-foreground block h-3.5 align-middle w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="m12 14 4-4" /><path d="M3.34 19a10 10 0 1 1 17.32 0" /></svg> 1,200 km</span>
                            <span className="items-center inline-flex gap-1.5"><svg className="text-ink-400 text-site-import-muted-foreground block h-3.5 align-middle w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 7h-9" /><path d="M14 17H5" /><circle cx="17" cy="17" r="3" /><circle cx="7" cy="7" r="3" /></svg> Manual</span>
                            <span className="items-center inline-flex gap-1.5"><svg className="text-ink-400 text-site-import-muted-foreground block h-3.5 align-middle w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><line x1="3" x2="15" y1="22" y2="22" /><line x1="4" x2="14" y1="9" y2="9" /><path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" /><path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5" /></svg> Petrol</span>
                          </div>
                          <div className="border-ink-100 items-center border-[rgb(236_238_242/var(--tw-border-opacity,1))] border-t flex justify-between mt-4 pt-3">
                            <span className="text-ink-500 items-center text-[rgb(102_115_144/1)] inline-flex text-[0.75rem] font-medium gap-1 leading-4"><svg className="text-success-500 text-site-import-accent block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" /><path d="m9 12 2 2 4-4" /></svg> New</span>
                            <span className="text-brand-600 group-hover:text-brand-700 text-site-import-primary text-[0.875rem] font-semibold leading-5">View details →</span>
                          </div>
                        </div>
                      </a>
                      <a className="group card hover:-translate-y-1 hover:shadow-cardHover bg-[rgb(255_255_255/1)] border-[rgb(236_238_242/var(--tw-border-opacity,1))] rounded-[1rem]! border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] overflow-hidden duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] text-site-import-foreground [text-decoration:inherit] hover:shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] hover:transform-[translate(0,var(--tw-translate-y))_rotate(0)_skew(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]" href="/car/be677b05-ec5d-4e73-ad39-99dadfca975f">
                        <div className="bg-ink-100 aspect-[16/10] bg-site-import-border overflow-hidden relative">
                          <img className="group-hover:scale-105 block h-full max-w-full object-cover duration-500 transition-transform ease-[cubic-bezier(0.4,0,0.2,1)] align-middle w-full" src="/site-assets/469c418110a9cf6e.avif" alt="Audi Q7 55 TFSI" {...({ loading: "lazy" } as any)} />
                          <div className="flex gap-2 left-3 absolute top-3">
                            <span className="bg-ink-800 text-white items-center bg-[rgb(57_64_81/1)] rounded-[9999px] text-[rgb(255_255_255/1)] inline-flex text-[0.75rem] font-semibold gap-1 leading-4 py-0.5 px-2.5">Second-Hand</span>
                          </div>
                          <div className="absolute right-3 top-3">
                            <span className="text-success-700 items-center bg-[#10b9811a] rounded-[9999px] text-[rgb(4_120_87/1)] inline-flex text-[0.75rem] font-semibold gap-1 leading-4 py-0.5 px-2.5">available</span>
                          </div>
                        </div>
                        <div className="p-5">
                          <div className="items-start flex gap-3 justify-between">
                            <div>
                              <h3 className="text-ink-900 text-site-import-foreground font-[family-name:Sora,Inter,ui-sans-serif,system-ui,sans-serif] text-[1.125rem] font-bold leading-tight m-0">Audi Q7 55 TFSI</h3>
                              <p className="text-ink-500 text-[rgb(102_115_144/1)] text-[0.875rem] leading-5 m-0 mt-0.5!">2021 · SUV</p>
                            </div>
                            <div className="text-right">
                              <p className="text-brand-700 text-[rgb(22_73_180/1)] font-[family-name:Sora,Inter,ui-sans-serif,system-ui,sans-serif] text-[1.125rem] font-extrabold leading-7 m-0">$44,500</p>
                            </div>
                          </div>
                          <div className="text-ink-600 text-[rgb(81_92_118/1)] grid text-[0.75rem] gap-2 grid-cols-2 leading-4 mt-4">
                            <span className="items-center inline-flex gap-1.5"><svg className="text-ink-400 text-site-import-muted-foreground block h-3.5 align-middle w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M8 2v4" /><path d="M16 2v4" /><rect x="3" y="4" rx="2" {...({ width: "18", height: "18" } as any)} /><path d="M3 10h18" /></svg> 2021</span>
                            <span className="items-center inline-flex gap-1.5"><svg className="text-ink-400 text-site-import-muted-foreground block h-3.5 align-middle w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="m12 14 4-4" /><path d="M3.34 19a10 10 0 1 1 17.32 0" /></svg> 42,000 km</span>
                            <span className="items-center inline-flex gap-1.5"><svg className="text-ink-400 text-site-import-muted-foreground block h-3.5 align-middle w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 7h-9" /><path d="M14 17H5" /><circle cx="17" cy="17" r="3" /><circle cx="7" cy="7" r="3" /></svg> Automatic</span>
                            <span className="items-center inline-flex gap-1.5"><svg className="text-ink-400 text-site-import-muted-foreground block h-3.5 align-middle w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><line x1="3" x2="15" y1="22" y2="22" /><line x1="4" x2="14" y1="9" y2="9" /><path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" /><path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5" /></svg> Petrol</span>
                          </div>
                          <div className="border-ink-100 items-center border-[rgb(236_238_242/var(--tw-border-opacity,1))] border-t flex justify-between mt-4 pt-3">
                            <span className="text-ink-500 items-center text-[rgb(102_115_144/1)] inline-flex text-[0.75rem] font-medium gap-1 leading-4"><svg className="text-success-500 text-site-import-accent block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" /><path d="m9 12 2 2 4-4" /></svg> Good</span>
                            <span className="text-brand-600 group-hover:text-brand-700 text-site-import-primary text-[0.875rem] font-semibold leading-5">View details →</span>
                          </div>
                        </div>
                      </a>
                      <a className="group card hover:-translate-y-1 hover:shadow-cardHover bg-[rgb(255_255_255/1)] border-[rgb(236_238_242/var(--tw-border-opacity,1))] rounded-[1rem]! border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] overflow-hidden duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] text-site-import-foreground [text-decoration:inherit] hover:shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] hover:transform-[translate(0,var(--tw-translate-y))_rotate(0)_skew(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]" href="/car/239b68e4-6451-4901-acc6-78f56ccd11ed">
                        <div className="bg-ink-100 aspect-[16/10] bg-site-import-border overflow-hidden relative">
                          <img className="group-hover:scale-105 block h-full max-w-full object-cover duration-500 transition-transform ease-[cubic-bezier(0.4,0,0.2,1)] align-middle w-full" src="/site-assets/131a8c82e95ebd08.avif" alt="BMW M4 Competition" {...({ loading: "lazy" } as any)} />
                          <div className="flex gap-2 left-3 absolute top-3">
                            <span className="bg-accent-500 text-white items-center bg-[rgb(255_122_18/1)] rounded-[9999px] text-[rgb(255_255_255/1)] inline-flex text-[0.75rem] font-semibold gap-1 leading-4 py-0.5 px-2.5">Imports</span>
                          </div>
                          <div className="absolute right-3 top-3">
                            <span className="text-success-700 items-center bg-[#10b9811a] rounded-[9999px] text-[rgb(4_120_87/1)] inline-flex text-[0.75rem] font-semibold gap-1 leading-4 py-0.5 px-2.5">available</span>
                          </div>
                        </div>
                        <div className="p-5">
                          <div className="items-start flex gap-3 justify-between">
                            <div>
                              <h3 className="text-ink-900 text-site-import-foreground font-[family-name:Sora,Inter,ui-sans-serif,system-ui,sans-serif] text-[1.125rem] font-bold leading-tight m-0">BMW M4 Competition</h3>
                              <p className="text-ink-500 text-[rgb(102_115_144/1)] text-[0.875rem] leading-5 m-0 mt-0.5!">2023 · Coupe</p>
                            </div>
                            <div className="text-right">
                              <p className="text-brand-700 text-[rgb(22_73_180/1)] font-[family-name:Sora,Inter,ui-sans-serif,system-ui,sans-serif] text-[1.125rem] font-extrabold leading-7 m-0">$89,750</p>
                            </div>
                          </div>
                          <div className="text-ink-600 text-[rgb(81_92_118/1)] grid text-[0.75rem] gap-2 grid-cols-2 leading-4 mt-4">
                            <span className="items-center inline-flex gap-1.5"><svg className="text-ink-400 text-site-import-muted-foreground block h-3.5 align-middle w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M8 2v4" /><path d="M16 2v4" /><rect x="3" y="4" rx="2" {...({ width: "18", height: "18" } as any)} /><path d="M3 10h18" /></svg> 2023</span>
                            <span className="items-center inline-flex gap-1.5"><svg className="text-ink-400 text-site-import-muted-foreground block h-3.5 align-middle w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="m12 14 4-4" /><path d="M3.34 19a10 10 0 1 1 17.32 0" /></svg> 5,200 km</span>
                            <span className="items-center inline-flex gap-1.5"><svg className="text-ink-400 text-site-import-muted-foreground block h-3.5 align-middle w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 7h-9" /><path d="M14 17H5" /><circle cx="17" cy="17" r="3" /><circle cx="7" cy="7" r="3" /></svg> Automatic</span>
                            <span className="items-center inline-flex gap-1.5"><svg className="text-ink-400 text-site-import-muted-foreground block h-3.5 align-middle w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><line x1="3" x2="15" y1="22" y2="22" /><line x1="4" x2="14" y1="9" y2="9" /><path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" /><path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5" /></svg> Petrol</span>
                          </div>
                          <div className="border-ink-100 items-center border-[rgb(236_238_242/var(--tw-border-opacity,1))] border-t flex justify-between mt-4 pt-3">
                            <span className="text-ink-500 items-center text-[rgb(102_115_144/1)] inline-flex text-[0.75rem] font-medium gap-1 leading-4"><svg className="text-success-500 text-site-import-accent block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" /><path d="m9 12 2 2 4-4" /></svg> New</span>
                            <span className="text-brand-600 group-hover:text-brand-700 text-site-import-primary text-[0.875rem] font-semibold leading-5">View details →</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </section>
                <section className="ml-auto mr-auto max-w-7xl w-full py-20 px-4 md:py-20 md:px-6 xl:py-20 xl:px-8">
                  <div className="ml-auto mr-auto max-w-2xl text-center">
                    <p className="eyebrow text-site-import-primary text-[0.875rem]! font-semibold! tracking-wider! leading-5! m-0 uppercase!">Customer stories</p>
                    <h2 className="section-title text-site-import-foreground font-[family-name:Sora,Inter,ui-sans-serif,system-ui,sans-serif]! font-extrabold! m-0 mt-2! text-[30px]! tracking-[-0.75px]! leading-9! md:text-[36px]! md:tracking-[-0.9px]! md:leading-10!">Trusted by happy drivers</h2>
                  </div>
                  <div className="grid gap-6 grid-cols-1 mt-12 md:grid-cols-3">
                    <div className="card bg-[rgb(255_255_255/1)] border-[rgb(236_238_242/var(--tw-border-opacity,1))] rounded-[1rem]! border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] p-6">
                      <svg className="text-brand-200 text-[rgb(188_218_255/1)] block h-8 align-middle w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                        <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                        <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                      </svg>
                      <p className="text-ink-700 text-[rgb(66_75_96/1)] m-0 mt-4!">Bought my SUV on credit — the process was smooth and the team was incredibly transparent. Highly recommended.</p>
                      <div className="border-ink-100 border-[rgb(236_238_242/var(--tw-border-opacity,1))] border-t mt-5 pt-4">
                        <p className="text-ink-900 text-site-import-foreground font-semibold m-0">Daniel M.</p>
                        <p className="text-ink-500 text-[rgb(102_115_144/1)] text-[0.875rem] leading-5 m-0">Business Owner</p>
                      </div>
                    </div>
                    <div className="card bg-[rgb(255_255_255/1)] border-[rgb(236_238_242/var(--tw-border-opacity,1))] rounded-[1rem]! border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] p-6">
                      <svg className="text-brand-200 text-[rgb(188_218_255/1)] block h-8 align-middle w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                        <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                        <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                      </svg>
                      <p className="text-ink-700 text-[rgb(66_75_96/1)] m-0 mt-4!">I was nervous about buying a used car, but Calzcar gave me a fully inspected vehicle with a clear history.</p>
                      <div className="border-ink-100 border-[rgb(236_238_242/var(--tw-border-opacity,1))] border-t mt-5 pt-4">
                        <p className="text-ink-900 text-site-import-foreground font-semibold m-0">Sarah K.</p>
                        <p className="text-ink-500 text-[rgb(102_115_144/1)] text-[0.875rem] leading-5 m-0">First-time buyer</p>
                      </div>
                    </div>
                    <div className="card bg-[rgb(255_255_255/1)] border-[rgb(236_238_242/var(--tw-border-opacity,1))] rounded-[1rem]! border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] p-6">
                      <svg className="text-brand-200 text-[rgb(188_218_255/1)] block h-8 align-middle w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                        <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                        <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                      </svg>
                      <p className="text-ink-700 text-[rgb(66_75_96/1)] m-0 mt-4!">They imported my dream BMW M4. Handled everything from inspection to registration. Top-notch service.</p>
                      <div className="border-ink-100 border-[rgb(236_238_242/var(--tw-border-opacity,1))] border-t mt-5 pt-4">
                        <p className="text-ink-900 text-site-import-foreground font-semibold m-0">James O.</p>
                        <p className="text-ink-500 text-[rgb(102_115_144/1)] text-[0.875rem] leading-5 m-0">Car enthusiast</p>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="ml-auto mr-auto max-w-7xl w-full pt-0 pr-4 pb-4 pl-4 md:pt-0 md:pr-6 md:pb-4 md:pl-6 xl:pt-0 xl:pr-8 xl:pb-4 xl:pl-8">
                  <div className="from-brand-700 via-brand-800 to-ink-900 text-white rounded-[1.5rem] text-[rgb(255_255_255/1)] overflow-hidden text-center py-14 px-8 [background-image:linear-gradient(to_bottom_right,var(--tw-gradient-stops))] md:py-14 md:px-16">
                    <h2 className="font-[family-name:Sora,Inter,ui-sans-serif,system-ui,sans-serif] font-extrabold m-0 text-[30px] leading-9 md:text-[36px] md:leading-10">Ready to find your next car?</h2>
                    <p className="text-brand-100 text-[rgb(217_234_255/1)] m-0 ml-auto! mr-auto! mt-3! max-w-xl">Browse our latest inventory or talk to our team — we'll help you drive away happy.</p>
                    <div className="flex flex-wrap gap-3 justify-center mt-7">
                      <a className="btn-accent items-center bg-[rgb(255_122_18/1)] rounded-[0.5rem] shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] text-[rgb(255_255_255/1)] inline-flex text-[0.875rem] font-semibold gap-2 justify-center leading-5 py-2.5 px-5 duration-200 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] [text-decoration:inherit] active:bg-[rgb(199_69_8/1)] disabled:opacity-50 disabled:pointer-events-none focus-visible:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus:outline-transparent focus:outline-solid focus:outline-2 focus:outline-offset-2 hover:bg-[rgb(240_94_6/1)] hover:shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)]" href="/inventory">Browse inventory <svg className="block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
                      <a className="btn text-white items-center bg-[#ffffff0d] border-site-import-card! rounded-[0.5rem] border! text-[rgb(255_255_255/1)] inline-flex text-[0.875rem] font-semibold gap-2 justify-center leading-5 py-2.5 px-5 duration-200 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] [text-decoration:inherit] disabled:opacity-50 disabled:pointer-events-none focus-visible:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus:outline-transparent focus:outline-solid focus:outline-2 focus:outline-offset-2 hover:bg-[#ffffff1a]" href="/contact">Contact us</a>
                    </div>
                  </div>
                </section>
              </div>
  </SiteLayout>);
}
