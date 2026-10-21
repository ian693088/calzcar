import { useState, type ReactNode } from "react";
import logoAsset from "@/assets/calzcar-logo.png.asset.json";
import capturedCSS from "../styles/site.css?inline";

export function SiteLayout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (<><style>{capturedCSS.replace(/(<\/|<)(s)(tyle)/gi, (_, prefix, letter, rest) => prefix + (letter === "s" ? "\\73 " : "\\53 ") + rest)}</style>
      <div className="bg-site-import-background text-site-import-foreground selection:bg-[#2f7bff33]! selection:text-[rgb(23_58_115/1)]">
          <div className="flex flex-col min-h-screen">
            <header className="border-ink-100 backdrop-blur-md bg-[#ffffffe6] border-b border-[rgb(236_238_242/var(--tw-border-opacity,1))] sticky top-0 z-50 [backdrop-filter:var(--tw-backdrop-blur)]">
              <div className="items-center flex h-16 justify-between ml-auto mr-auto max-w-7xl w-full py-0 px-4 md:py-0 md:px-6 xl:py-0 xl:px-8">
                <a className="items-center flex gap-2.5 text-site-import-foreground [text-decoration:inherit]" href="/">
                  <img src={logoAsset.url} alt="Calzcar AutoHub logo" className="h-11 w-11 rounded-lg object-cover shadow-md" />
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
                <button aria-label="Open menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} className="text-ink-700 hover:bg-ink-100 items-center bg-none rounded-[0.5rem] text-[rgb(66_75_96/1)] cursor-pointer text-[100%] justify-center m-0 p-2 normal-case bg-transparent flex [appearance:button] [font-family:inherit] [font-feature-settings:inherit] [font-variation-settings:inherit] [font-weight:inherit] [letter-spacing:inherit] [line-height:inherit] hover:bg-site-import-border md:hidden" aria-label="Toggle menu">
                  <svg className="block h-5 align-middle w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                    <line x1="4" x2="20" y1="12" y2="12" />
                    <line x1="4" x2="20" y1="6" y2="6" />
                    <line x1="4" x2="20" y1="18" y2="18" />
                  </svg>
                </button>
              </div>
              {menuOpen && (
                <nav className="flex flex-col gap-1 border-t border-site-import-border bg-background px-4 py-3 md:hidden">
                  {[["/", "Home"], ["/inventory", "Inventory"], ["/services", "Services"], ["/about", "About"], ["/contact", "Contact"], ["/admin/login", "Admin"]].map(([href, label]) => (
                    <a key={href} href={href} onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-3 text-base font-medium text-site-import-foreground hover:bg-site-import-border">{label}</a>
                  ))}
                </nav>
              )}
            </header>
            <main className="flex-1">{children}</main>
            <footer className="border-ink-800 bg-ink-950 text-ink-300 bg-[rgb(19_22_31/1)] border-[rgb(57_64_81/var(--tw-border-opacity,1))] border-t text-[rgb(176_184_200/1)] mt-24">
              <div className="grid gap-10 grid-cols-1 ml-auto mr-auto max-w-7xl w-full py-14 px-4 lg:grid-cols-4 md:py-14 md:px-6 sm:grid-cols-2 xl:py-14 xl:px-8">
                <div>
                  <div className={"[&_*]:!text-white"}>
                    <a className="items-center text-[rgb(255_255_255/1)]! flex gap-2.5 [text-decoration:inherit]" href="/">
                      <img src={logoAsset.url} alt="Calzcar AutoHub logo" className="h-11 w-11 rounded-lg object-cover shadow-md" />
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
      <a href="https://wa.me/254742064560?text=Hi%20Calzcar%20AutoHub%2C%20I%27m%20interested%20in%20a%20car" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-site-import-accent text-site-import-primary-foreground shadow-lg transition-transform hover:scale-110">
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1s-.5-.1-.7.1-.8 1-1 1.2-.4.2-.7.1a8 8 0 0 1-4-3.5c-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6a1.2 1.2 0 0 0-.8.4 3.5 3.5 0 0 0-1.1 2.6 6 6 0 0 0 1.3 3.2 13.7 13.7 0 0 0 5.3 4.6c2 .8 2.7.9 3.7.8a3.1 3.1 0 0 0 2-1.4 2.5 2.5 0 0 0 .2-1.4c-.1-.2-.3-.3-.6-.4zM12 21.8a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8zM12 0a12 12 0 0 0-10.3 18L0 24l6.2-1.6A12 12 0 1 0 12 0z"/></svg>
      </a>
  </>);
}
