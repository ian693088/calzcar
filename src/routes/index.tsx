import type { CSSProperties } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/site.css?inline";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Calzcar AutoHub — Premium Cars, Imports \u0026 Credit" }] }),
  component: Index,
});

function Index() {
  return (<><style>{capturedCSS.replace(/(<\/|<)(s)(tyle)/gi, (_, prefix, letter, rest) => prefix + (letter === "s" ? "\\73 " : "\\53 ") + rest)}</style>
    <>
      <div className="bg-site-import-background text-site-import-foreground selection:bg-[#2f7bff33]! selection:text-[rgb(23_58_115/1)]" data-site-import-document-lang="en">
        <div id="root">
          <div className="flex flex-col min-h-screen">
            <header className="border-ink-100 backdrop-blur-md bg-[#ffffffe6] border-b border-[rgb(236_238_242/var(--tw-border-opacity,1))] sticky top-0 z-50 [backdrop-filter:var(--tw-backdrop-blur)]">
              <div className="items-center flex h-16 justify-between ml-auto mr-auto max-w-7xl w-full py-0 px-4 md:py-0 md:px-6 xl:py-0 xl:px-8">
                <a className="items-center flex gap-2.5 text-site-import-foreground [text-decoration:inherit]" href="/">
                  <span className="from-brand-500 to-brand-700 text-white shadow-md items-center rounded-[0.75rem] shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] text-[rgb(255_255_255/1)] inline-flex h-9 justify-center relative w-9 [background-image:linear-gradient(to_bottom_right,var(--tw-gradient-stops))]">
                    <svg className="block h-5 align-middle w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11" />
                      <path d="M3 11h18v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H6v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />
                      <circle cx="7.5" cy="14.5" r="1" />
                      <circle cx="16.5" cy="14.5" r="1" />
                    </svg>
                  </span>
                  <span className="text-ink-900 text-site-import-foreground font-[family-name:Sora,Inter,ui-sans-serif,system-ui,sans-serif] text-[1.125rem] font-extrabold tracking-tight leading-7">Calzcar<span className="text-brand-500 text-[rgb(47_123_255/1)]">AutoHub</span></span>
                </a>
                <nav className="items-center gap-1 hidden md:flex">
                  <a className="bg-brand-50 text-brand-700 bg-[rgb(238_246_255/1)] rounded-[0.5rem] text-[rgb(22_73_180/1)] text-[0.875rem] font-medium leading-5 pb-2 pl-3.5 pr-3.5 pt-2 duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] [text-decoration:inherit] [transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter]" href="/">Home</a>
                  <a className="text-ink-600 hover:bg-ink-100 hover:text-ink-900 rounded-[0.5rem] text-[rgb(81_92_118/1)] text-[0.875rem] font-medium leading-5 pb-2 pl-3.5 pr-3.5 pt-2 duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] [text-decoration:inherit] [transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter] hover:bg-site-import-border hover:text-site-import-foreground" href="/inventory">Inventory</a>
                  <a className="text-ink-600 hover:bg-ink-100 hover:text-ink-900 rounded-[0.5rem] text-[rgb(81_92_118/1)] text-[0.875rem] font-medium leading-5 pb-2 pl-3.5 pr-3.5 pt-2 duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] [text-decoration:inherit] [transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter] hover:bg-site-import-border hover:text-site-import-foreground" href="/services">Services</a>
                  <a className="text-ink-600 hover:bg-ink-100 hover:text-ink-900 rounded-[0.5rem] text-[rgb(81_92_118/1)] text-[0.875rem] font-medium leading-5 pb-2 pl-3.5 pr-3.5 pt-2 duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] [text-decoration:inherit] [transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter] hover:bg-site-import-border hover:text-site-import-foreground" href="/about">About</a>
                  <a className="text-ink-600 hover:bg-ink-100 hover:text-ink-900 rounded-[0.5rem] text-[rgb(81_92_118/1)] text-[0.875rem] font-medium leading-5 pb-2 pl-3.5 pr-3.5 pt-2 duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] [text-decoration:inherit] [transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter] hover:bg-site-import-border hover:text-site-import-foreground" href="/contact">Contact</a>
                </nav>
                <div className="items-center gap-2 hidden md:flex">
                  <a className="btn-primary items-center bg-site-import-primary rounded-[0.5rem] shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] text-[rgb(255_255_255/1)] text-[0.875rem] font-semibold gap-2 justify-center leading-5 py-2.5 px-5 duration-200 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] inline-flex [text-decoration:inherit] active:bg-[rgb(23_63_144/1)] disabled:opacity-50 disabled:pointer-events-none focus-visible:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus:outline-transparent focus:outline-solid focus:outline-2 focus:outline-offset-2 hover:bg-[rgb(22_73_180/1)] hover:shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] md:flex" href="/admin/login"><svg className="block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg> Admin</a>
                </div>
                <button className="text-ink-700 hover:bg-ink-100 items-center bg-none rounded-[0.5rem] text-[rgb(66_75_96/1)] cursor-pointer text-[100%] justify-center m-0 p-2 normal-case bg-transparent flex [appearance:button] [font-family:inherit] [font-feature-settings:inherit] [font-variation-settings:inherit] [font-weight:inherit] [letter-spacing:inherit] [line-height:inherit] hover:bg-site-import-border md:hidden" aria-label="Toggle menu">
                  <svg className="block h-5 align-middle w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                    <line x1="4" x2="20" y1="12" y2="12" />
                    <line x1="4" x2="20" y1="6" y2="6" />
                    <line x1="4" x2="20" y1="18" y2="18" />
                  </svg>
                </button>
              </div>
            </header>
            <main className="flex-1">
              <div className="opacity-100 [animation:0.4s_ease-out_0s_1_normal_both_running_fadeIn]">
                <section className="bg-ink-950 text-white bg-[rgb(19_22_31/1)] text-[rgb(255_255_255/1)] overflow-hidden relative">
                  <div className="inset-0 absolute">
                    <img className="block h-full max-w-full object-cover opacity-40 align-middle w-full" src="/site-assets/78a22f83d50f74e9.avif" alt="" />
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
                    <div className="grid gap-6 grid-cols-1 mt-10 lg:grid-cols-3 sm:grid-cols-2">
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
            </main>
            <footer className="border-ink-800 bg-ink-950 text-ink-300 bg-[rgb(19_22_31/1)] border-[rgb(57_64_81/var(--tw-border-opacity,1))] border-t text-[rgb(176_184_200/1)] mt-24">
              <div className="grid gap-10 grid-cols-1 ml-auto mr-auto max-w-7xl w-full py-14 px-4 lg:grid-cols-4 md:py-14 md:px-6 sm:grid-cols-2 xl:py-14 xl:px-8">
                <div>
                  <div className={"[&_*]:!text-white"}>
                    <a className="items-center text-[rgb(255_255_255/1)]! flex gap-2.5 [text-decoration:inherit]" href="/">
                      <span className="from-brand-500 to-brand-700 text-white shadow-md items-center rounded-[0.75rem] shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] text-[rgb(255_255_255/1)]! inline-flex h-9 justify-center relative w-9 [background-image:linear-gradient(to_bottom_right,var(--tw-gradient-stops))]">
                        <svg className="text-[rgb(255_255_255/1)]! block h-5 align-middle w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path className="text-[rgb(255_255_255/1)]!" d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11" />
                          <path className="text-[rgb(255_255_255/1)]!" d="M3 11h18v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H6v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />
                          <circle className="text-[rgb(255_255_255/1)]!" cx="7.5" cy="14.5" r="1" />
                          <circle className="text-[rgb(255_255_255/1)]!" cx="16.5" cy="14.5" r="1" />
                        </svg>
                      </span>
                      <span className="text-white text-[rgb(255_255_255/1)]! font-[family-name:Sora,Inter,ui-sans-serif,system-ui,sans-serif] text-[1.125rem] font-extrabold tracking-tight leading-7">Calzcar<span className="text-brand-500 text-[rgb(255_255_255/1)]!">AutoHub</span></span>
                    </a>
                  </div>
                  <p className="text-ink-400 text-site-import-muted-foreground text-[0.875rem] leading-relaxed m-0 mt-4! max-w-xs">Your trusted partner for new cars, quality second-hand vehicles, premium imports and flexible credit plans.</p>
                  <div className="flex gap-3 mt-5">
                    <a className="bg-ink-800 text-ink-300 hover:bg-brand-600 hover:text-white items-center bg-[rgb(57_64_81/1)] rounded-[0.5rem] text-[rgb(176_184_200/1)] inline-flex h-9 justify-center duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] w-9 [text-decoration:inherit] [transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter] hover:bg-site-import-primary hover:text-[rgb(255_255_255/1)]" href="#">
                      <svg className="block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </a>
                    <a className="bg-ink-800 text-ink-300 hover:bg-brand-600 hover:text-white items-center bg-[rgb(57_64_81/1)] rounded-[0.5rem] text-[rgb(176_184_200/1)] inline-flex h-9 justify-center duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] w-9 [text-decoration:inherit] [transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter] hover:bg-site-import-primary hover:text-[rgb(255_255_255/1)]" href="#">
                      <svg className="block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                        <rect x="2" y="2" rx="5" ry="5" {...({ width: "20", height: "20" } as any)} />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    </a>
                    <a className="bg-ink-800 text-ink-300 hover:bg-brand-600 hover:text-white items-center bg-[rgb(57_64_81/1)] rounded-[0.5rem] text-[rgb(176_184_200/1)] inline-flex h-9 justify-center duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] w-9 [text-decoration:inherit] [transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter] hover:bg-site-import-primary hover:text-[rgb(255_255_255/1)]" href="#">
                      <svg className="block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div>
                  <h4 className="text-white text-[rgb(255_255_255/1)] font-[family-name:Sora,Inter,ui-sans-serif,system-ui,sans-serif] text-[0.875rem] font-bold tracking-wider leading-5 m-0 uppercase">Explore</h4>
                  <ul className="space-y-2.5 text-[0.875rem] leading-5 list-none m-0 mt-4! p-0">
                    <li>
                      <a className="text-ink-400 hover:text-white text-site-import-muted-foreground duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] [text-decoration:inherit] [transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter] hover:text-[rgb(255_255_255/1)]" href="/inventory">Inventory</a>
                    </li>
                    <li className="mb-[calc(.625rem_*_var(--tw-space-y-reverse))] mt-[calc(.625rem_*_calc(1_-_var(--tw-space-y-reverse)))]">
                      <a className="text-ink-400 hover:text-white text-site-import-muted-foreground duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] [text-decoration:inherit] [transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter] hover:text-[rgb(255_255_255/1)]" href="/inventory?category=new">New Cars</a>
                    </li>
                    <li className="mb-[calc(.625rem_*_var(--tw-space-y-reverse))] mt-[calc(.625rem_*_calc(1_-_var(--tw-space-y-reverse)))]">
                      <a className="text-ink-400 hover:text-white text-site-import-muted-foreground duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] [text-decoration:inherit] [transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter] hover:text-[rgb(255_255_255/1)]" href="/inventory?category=used">Second-Hand</a>
                    </li>
                    <li className="mb-[calc(.625rem_*_var(--tw-space-y-reverse))] mt-[calc(.625rem_*_calc(1_-_var(--tw-space-y-reverse)))]">
                      <a className="text-ink-400 hover:text-white text-site-import-muted-foreground duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] [text-decoration:inherit] [transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter] hover:text-[rgb(255_255_255/1)]" href="/inventory?category=import">Imports</a>
                    </li>
                    <li className="mb-[calc(.625rem_*_var(--tw-space-y-reverse))] mt-[calc(.625rem_*_calc(1_-_var(--tw-space-y-reverse)))]">
                      <a className="text-ink-400 hover:text-white text-site-import-muted-foreground duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] [text-decoration:inherit] [transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter] hover:text-[rgb(255_255_255/1)]" href="/inventory?category=credit">On Credit</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white text-[rgb(255_255_255/1)] font-[family-name:Sora,Inter,ui-sans-serif,system-ui,sans-serif] text-[0.875rem] font-bold tracking-wider leading-5 m-0 uppercase">Company</h4>
                  <ul className="space-y-2.5 text-[0.875rem] leading-5 list-none m-0 mt-4! p-0">
                    <li>
                      <a className="text-ink-400 hover:text-white text-site-import-muted-foreground duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] [text-decoration:inherit] [transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter] hover:text-[rgb(255_255_255/1)]" href="/about">About Us</a>
                    </li>
                    <li className="mb-[calc(.625rem_*_var(--tw-space-y-reverse))] mt-[calc(.625rem_*_calc(1_-_var(--tw-space-y-reverse)))]">
                      <a className="text-ink-400 hover:text-white text-site-import-muted-foreground duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] [text-decoration:inherit] [transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter] hover:text-[rgb(255_255_255/1)]" href="/services">Services</a>
                    </li>
                    <li className="mb-[calc(.625rem_*_var(--tw-space-y-reverse))] mt-[calc(.625rem_*_calc(1_-_var(--tw-space-y-reverse)))]">
                      <a className="text-ink-400 hover:text-white text-site-import-muted-foreground duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] [text-decoration:inherit] [transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter] hover:text-[rgb(255_255_255/1)]" href="/contact">Contact</a>
                    </li>
                    <li className="mb-[calc(.625rem_*_var(--tw-space-y-reverse))] mt-[calc(.625rem_*_calc(1_-_var(--tw-space-y-reverse)))]">
                      <a className="text-ink-400 hover:text-white text-site-import-muted-foreground duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] [text-decoration:inherit] [transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter] hover:text-[rgb(255_255_255/1)]" href="/admin/login">Admin Login</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white text-[rgb(255_255_255/1)] font-[family-name:Sora,Inter,ui-sans-serif,system-ui,sans-serif] text-[0.875rem] font-bold tracking-wider leading-5 m-0 uppercase">Get in touch</h4>
                  <ul className="space-y-3 text-[0.875rem] leading-5 list-none m-0 mt-4! p-0">
                    <li className="items-start flex gap-2.5">
                      <svg className="text-brand-400 text-[rgb(89_159_255/1)] block h-4 mt-0.5 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span className="text-ink-400 text-site-import-muted-foreground">Along Kiambu Road, Kenya</span>
                    </li>
                    <li className="items-center flex gap-2.5 mb-[calc(.75rem_*_var(--tw-space-y-reverse))] mt-[calc(.75rem_*_calc(1_-_var(--tw-space-y-reverse)))]">
                      <svg className="text-brand-400 text-[rgb(89_159_255/1)] block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <a className="text-ink-400 hover:text-white text-site-import-muted-foreground [text-decoration:inherit] hover:text-[rgb(255_255_255/1)]" href="tel:+254742064560">+254 742 064560</a>
                    </li>
                    <li className="items-center flex gap-2.5 mb-[calc(.75rem_*_var(--tw-space-y-reverse))] mt-[calc(.75rem_*_calc(1_-_var(--tw-space-y-reverse)))]">
                      <svg className="text-brand-400 text-[rgb(89_159_255/1)] block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                        <rect x="2" y="4" rx="2" {...({ width: "20", height: "16" } as any)} />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      <a className="text-ink-400 hover:text-white text-site-import-muted-foreground [text-decoration:inherit] hover:text-[rgb(255_255_255/1)]" href="mailto:csimiyu465@gmail.com">csimiyu465@gmail.com</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border-ink-800 border-[rgb(57_64_81/var(--tw-border-opacity,1))] border-t">
                <div className="text-ink-500 items-center text-[rgb(102_115_144/1)] flex text-[0.75rem] gap-2 justify-between leading-4 ml-auto mr-auto max-w-7xl w-full flex-col py-5 px-4 md:flex-row md:py-5 md:px-6 xl:py-5 xl:px-8">
                  <p className="m-0">© 2026 Calzcar AutoHub. All rights reserved.</p>
                  <p className="m-0">Built for drivers who expect more.</p>
                </div>
              </div>
            </footer>
          </div>
        </div>
        <div className="lov-shadow-0 bottom-4 fixed right-4 z-2147483647">
          <div className="text-black [-webkit-box-reflect:initial] [-webkit-font-smoothing:initial] [-webkit-line-clamp:initial] [-webkit-locale:initial] [-webkit-mask-box-image:initial] [-webkit-rtl-ordering:initial] [-webkit-tap-highlight-color:initial] [-webkit-text-combine:initial] [-webkit-text-decorations-in-effect:initial] [-webkit-text-fill-color:initial] [-webkit-text-security:initial] [-webkit-text-stroke:initial] [-webkit-user-drag:initial] [accent-color:initial] [alignment-baseline:initial] [anchor-name:initial] [anchor-scope:initial] [animation:initial] [animation-composition:initial] [animation-trigger:initial] [app-region:initial] [appearance:initial] [aspect-ratio:initial] [backdrop-filter:initial] [backface-visibility:initial] [background:initial] [background-blend-mode:initial]! [baseline-shift:initial] [baseline-source:initial] [block-size:initial] [border:initial]! [border-collapse:initial] [border-end-end-radius:initial]! [border-end-start-radius:initial]! [border-inline:initial]! [border-radius:initial] [border-shape:initial] [border-spacing:initial] [border-start-end-radius:initial]! [border-start-start-radius:initial]! [box-decoration-break:initial] [box-shadow:initial] [box-sizing:initial]! [break-after:initial] [break-before:initial] [break-inside:initial] [buffered-rendering:initial] [caption-side:initial] [caret-animation:initial] [caret-color:initial] [caret-shape:initial] [clear:initial] [clip:initial] [clip-path:initial] [clip-rule:initial] [color-interpolation:initial] [color-interpolation-filters:initial] [color-rendering:initial] [color-scheme:initial] [column-fill:initial] [column-span:initial] [columns:initial] [contain:initial] [contain-intrinsic-block-size:initial] [contain-intrinsic-inline-size:initial] [contain-intrinsic-size:initial] [container:initial] [content:initial] [content-visibility:initial] [corner-block-end-shape:initial] [corner-block-start-shape:initial] [corner-shape:initial] [counter-increment:initial] [counter-reset:initial] [counter-set:initial] [cursor:initial] [cx:initial] [cy:initial] [d:initial] [dominant-baseline:initial] [dynamic-range-limit:initial] [empty-cells:initial] [field-sizing:initial] [fill:initial] [fill-opacity:initial] [fill-rule:initial] [filter:initial] [flex:initial] [flex-flow:initial] [flex-line-count:initial] [float:initial] [flood-color:initial] [flood-opacity:initial] [font:initial] [font-palette:initial] [font-synthesis:initial] [forced-color-adjust:initial] [frame-sizing:initial] [gap:initial] [grid:initial] [grid-area:initial] [height:initial] [hyphenate-character:initial] [hyphenate-limit-chars:initial] [hyphens:initial] [image-orientation:initial] [image-rendering:initial] [initial-letter:initial] [inline-size:initial] [inset:initial] [inset-block:initial]! [inset-inline:initial]! [interactivity:initial] [interest-delay:initial] [interpolate-size:initial] [isolation:initial] [letter-spacing:initial] [lighting-color:initial] [line-break:initial] [list-style:initial] [margin:initial] [margin-inline:initial]! [margin-trim:initial] [marker:initial] [mask:initial] [mask-type:initial] [math-depth:initial] [math-shift:initial] [math-style:initial] [max-block-size:initial] [max-height:initial] [max-inline-size:initial] [max-width:initial] [min-block-size:initial] [min-height:initial] [min-inline-size:initial] [min-width:initial] [mix-blend-mode:initial] [object-fit:initial] [object-position:initial] [object-view-box:initial] [offset:initial] [opacity:initial] [order:initial] [orphans:initial] [outline:initial] [outline-offset:initial] [overflow:initial] [overflow-anchor:initial] [overflow-block:initial] [overflow-clip-margin:initial] [overflow-inline:initial] [overflow-wrap:initial] [overlay:initial] [overscroll-behavior:initial] [overscroll-behavior-block:initial] [overscroll-behavior-inline:initial] [padding:initial] [padding-inline:initial]! [page:initial] [page-margin-safety:initial] [page-orientation:initial] [paint-order:initial] [perspective:initial] [perspective-origin:initial] [place-content:initial] [place-items:initial] [place-self:initial] [pointer-events:initial] [position:initial] [position-anchor:initial] [position-area:initial] [position-try:initial] [position-visibility:initial] [print-color-adjust:initial] [quotes:initial] [r:initial] [reading-flow:initial] [reading-order:initial] [resize:initial] [rotate:initial] [ruby-align:initial] [ruby-overhang:initial] [ruby-position:initial] [rule:initial] [rule-break:initial] [rule-inset:initial] [rule-overlap:initial] [rule-visibility-items:initial] [rx:initial] [ry:initial] [scale:initial] [scroll-axis-lock:initial] [scroll-behavior:initial] [scroll-initial-target:initial] [scroll-margin:initial] [scroll-margin-block:initial] [scroll-margin-inline:initial] [scroll-marker-group:initial] [scroll-padding:initial] [scroll-padding-block:initial] [scroll-padding-inline:initial] [scroll-snap-align:initial] [scroll-snap-stop:initial] [scroll-snap-type:initial] [scroll-target-group:initial] [scroll-timeline:initial] [scrollbar-color:initial] [scrollbar-gutter:initial] [scrollbar-width:initial] [shape-image-threshold:initial] [shape-margin:initial] [shape-outside:initial] [shape-rendering:initial] [size:initial] [speak:initial] [stop-color:initial] [stop-opacity:initial] [stroke:initial] [stroke-dasharray:initial] [stroke-dashoffset:initial] [stroke-linecap:initial] [stroke-linejoin:initial] [stroke-miterlimit:initial] [stroke-opacity:initial] [stroke-width:initial] [tab-size:initial] [table-layout:initial] [text-align:initial] [text-align-last:initial] [text-anchor:initial] [text-autospace:initial] [text-box:initial] [text-combine-upright:initial] [text-decoration:initial] [text-decoration-skip-ink:initial] [text-decoration-skip-spaces:initial] [text-emphasis:initial] [text-emphasis-position:initial] [text-fit:initial] [text-indent:initial] [text-justify:initial] [text-orientation:initial] [text-overflow:initial] [text-rendering:initial] [text-shadow:initial] [text-size-adjust:initial] [text-spacing-trim:initial] [text-transform:initial] [text-underline-offset:initial] [text-underline-position:initial] [text-wrap:initial] [timeline-scope:initial] [timeline-trigger:initial] [touch-action:initial] [transform:initial] [transform-box:initial] [transform-origin:initial] [transform-style:initial] [transition:initial] [translate:initial] [trigger-scope:initial] [user-select:initial] [vector-effect:initial] [vertical-align:initial] [view-timeline:initial] [view-transition-class:initial] [view-transition-group:initial] [view-transition-name:initial] [view-transition-scope:initial] [visibility:initial] [white-space-collapse:initial] [widows:initial] [width:initial] [will-change:initial] [window-drag:initial] [word-break:initial] [word-spacing:initial] [writing-mode:initial] [x:initial] [y:initial] [z-index:initial] [zoom:initial]" style={{ display: "initial" } as unknown as CSSProperties} data-ce-shadow-root="lov-shadow-0">
            <div className="items-stretch bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-white border! border-solid! border-[#e1f2ff]! rounded-[8px] shadow-[rgba(0,_0,_0,_0.1)_0px_4px_6px_-1px,_rgba(0,_0,_0,_0.06)_0px_2px_4px_-1px] overflow-hidden [scale:0.8]" style={{ display: "flex" } as unknown as CSSProperties} data-ce-shadow-root="lov-shadow-0">
              <a className="items-center rounded-[9999px] cursor-pointer font-[family-name:SchibstedGrotesk-NjBkMDQwOTZj] text-[16px] font-semibold gap-1 leading-4 pt-2 pr-4 pb-2 pl-3 [color:inherit] [text-decoration:inherit]" style={{ display: "flex" } as unknown as CSSProperties} data-ce-shadow-root="lov-shadow-0" href="https://bolt.new" target="_blank">
                <svg className="block h-6 pr-1 align-middle w-6" data-ce-shadow-root="lov-shadow-0">
                  <g className="[mix-blend-mode:difference]" data-ce-shadow-root="lov-shadow-0">
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.3276 19.9235C11.8345 19.9235 10.3686 19.3808 9.52704 18.2141L9.23021 19.5901L3.75 22.5L4.34161 19.5901L8.33258 1.5H13.219L11.8074 7.87631C12.9475 6.62818 14.0063 6.16692 15.3636 6.16692C18.2954 6.16692 20.25 8.09338 20.25 11.6207C20.25 15.2566 17.9968 19.9235 13.3276 19.9235ZM15.2007 12.6518C15.2007 14.334 14.0062 15.6093 12.4589 15.6093C11.5902 15.6093 10.8029 15.2837 10.2871 14.7139L11.0473 11.3765C11.6173 10.8067 12.2689 10.4811 13.029 10.4811C14.1963 10.4811 15.2007 11.3494 15.2007 12.6518Z" fill="white" data-ce-shadow-root="lov-shadow-0" />
                  </g>
                </svg>
                <span data-ce-shadow-root="lov-shadow-0">Made in Bolt</span>
              </a>
              <button className="dismiss items-center self-stretch bg-transparent bg-none cursor-pointer flex-none justify-center leading-0 m-0 p-0 normal-case w-10 [appearance:button] [border-color:currentcolor_currentcolor_currentcolor_rgb(225,_242,_255)]! [border-image:none] [border-style:none_none_none_solid]! [border-width:medium_medium_medium_1px]! [color:inherit] [font-family:inherit] [font-feature-settings:inherit] [font-kerning:inherit] [font-language-override:inherit] [font-optical-sizing:inherit] [font-size:inherit] [font-size-adjust:inherit] [font-stretch:inherit] [font-style:inherit] [font-variant:inherit] [font-variation-settings:inherit] [font-weight:inherit] [letter-spacing:inherit]" style={{ display: "flex" } as unknown as CSSProperties} type="button" aria-label="Hide the Made in Bolt badge" data-ce-shadow-root="lov-shadow-0">
                <svg className="block h-4 align-middle w-4" viewBox="0 0 16 16" data-ce-shadow-root="lov-shadow-0">
                  <path d="M4 4 L12 12 M12 4 L4 12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" fill="none" data-ce-shadow-root="lov-shadow-0" />
                </svg>
              </button>
            </div>
            <div className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-background border! border-solid! border-[#0000001a]! rounded-[6px] bottom-11 shadow-[rgba(0,_0,_0,_0.1)_0px_1px_3px_0px,_rgba(0,_0,_0,_0.06)_0px_1px_2px_0px] font-[family-name:SchibstedGrotesk-NjBkMDQwOTZj] text-[13px] font-medium py-1.5 px-2 absolute right-0 w-[230px]" style={{ display: "none" } as unknown as CSSProperties} data-ce-shadow-root="lov-shadow-0">
            <p className="mt-0 mr-0 mb-[7px] ml-0 p-0" data-ce-shadow-root="lov-shadow-0">
              Your users will see this badge.
            </p>
            Upgrade to <a className="text-[#1488fc] font-bold [text-decoration:inherit]" data-ce-shadow-root="lov-shadow-0" href="https://bolt.new/pricing" target="_blank">Pro</a> to remove it.<div className="border-l-[6px] border-solid border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-site-import-background -bottom-1.5 h-0 absolute right-[70px] w-0 z-2" data-ce-shadow-root="lov-shadow-0" /><div className="border-l-[7px] border-solid border-l-transparent border-r-[7px] border-r-transparent border-t-[7px] border-t-[#0000001a] bottom-[-7px] h-0 absolute right-[69px] w-0 z-1" data-ce-shadow-root="lov-shadow-0" /></div>
          </div>
        </div>
      </div>
    </>
  </>);
}
