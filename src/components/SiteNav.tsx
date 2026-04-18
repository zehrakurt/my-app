"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Anasayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/urunler", label: "Ürünler" },
  { href: "/iletisim", label: "İletişim" },
] as const;

function IconHamburger({ className }: { className?: string }) {
  return (
    <svg aria-hidden fill="none" width={24} height={24} viewBox="0 0 24 24" className={className}>
      <path d="M1 19h22M1 12h22M1 5h22" stroke="currentColor" strokeWidth={1.5} strokeLinecap="square" />
    </svg>
  );
}

function IconClose({ className }: { className?: string }) {
  return (
    <svg aria-hidden fill="none" width={16} height={16} viewBox="0 0 16 16" className={className}>
      <path d="m1 1 14 14M1 15 15 1" stroke="currentColor" strokeWidth={1.5} />
    </svg>
  );
}

function IconPin({ className }: { className?: string }) {
  return (
    <svg aria-hidden width={22} height={22} viewBox="0 0 24 24" fillRule="evenodd" clipRule="evenodd" className={className}>
      <path d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602" fill="none" stroke={gold} strokeWidth={1} />
    </svg>
  );
}

function IconWhatsApp({ className }: { className?: string }) {
  return (
    <svg aria-hidden fill="currentColor" width={24} height={24} viewBox="0 0 24 24" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg aria-hidden fill="none" width={24} height={24} viewBox="0 0 24 24" className={className}>
      <path d="M12 16.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z" stroke="currentColor" strokeWidth={1.5} strokeMiterlimit={10} />
      <path d="M17.374 3H6.626C4.624 3 3 4.624 3 6.626v10.748C3 19.376 4.624 21 6.626 21h10.748c2.002 0 3.626-1.624 3.626-3.626V6.626C21 4.624 19.376 3 17.374 3Z" stroke="currentColor" strokeWidth={1.5} strokeMiterlimit={10} />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function IconSearch({ className }: { className?: string }) {
  return (
    <svg aria-hidden fill="none" width={24} height={24} viewBox="0 0 24 24" className={className}>
      <path d="M10.364 3a7.364 7.364 0 1 0 0 14.727 7.364 7.364 0 0 0 0-14.727Z" stroke="currentColor" strokeWidth={1.5} strokeMiterlimit={10} />
      <path d="M15.857 15.858 21 21.001" stroke="currentColor" strokeWidth={1.5} strokeMiterlimit={10} strokeLinecap="round" />
    </svg>
  );
}

function IconHome({ className }: { className?: string }) {
  return (
    <svg aria-hidden width={24} height={24} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9.5Z" stroke="currentColor" strokeWidth={1.25} strokeLinejoin="round" />
    </svg>
  );
}

const gold = "#cfb56a";
const navBg = "#030303";
const navBgElevated = "#0a0a0a";
const iconBtn = "flex h-10 w-10 items-center justify-center text-[#e8e4dc] transition-colors hover:text-[#ddbd53]";

export function SiteNav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <div className="sticky top-0 z-50">
      <aside className="border-b border-black/10 bg-[#ddbd53] px-4 py-2.5 text-center text-[0.8125rem] leading-snug text-black shadow-sm" aria-label="Duyurular">
        <p className="font-semibold tracking-wide">ANKARA İÇİ TESLİMAT ÜCRETSİZDİR.</p>
      </aside>

      <header className="border-b-2 border-white shadow-sm" style={{ backgroundColor: navBg }}>
        <div className="mx-auto max-w-7xl px-4 py-4 md:px-6">
          {/* Top Layer: Interaction & Logo */}
          <div className="grid grid-cols-3 items-center">
            {/* Left Icons */}
            <div className="flex items-center gap-2">
              <button type="button" className={`${iconBtn} lg:hidden`} onClick={() => setMenuOpen(true)}>
                <IconHamburger />
              </button>
              <Link href="/" className={`${iconBtn} lg:hidden`} aria-label="Anasayfa">
                <IconHome />
              </Link>
              <div className="hidden lg:block">
                <Link href="/iletisim" className="group flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-[#e8e4dc] transition-colors hover:text-[#ddbd53]">
                  <IconPin />
                  <span>Mağazalar</span>
                </Link>
              </div>
            </div>

            {/* Center: Hero Logo */}
            <div className="flex justify-center">
              <Link href="/" className="inline-block transition-transform duration-500 hover:scale-[1.02]">
                <img 
                  src="/logo_ultra.png" 
                  alt="Doliva Logo" 
                  className="h-24 sm:h-32 md:h-44 w-auto object-contain"
                  style={{ mixBlendMode: 'screen', clipPath: 'inset(5%)' }}
                />
              </Link>
            </div>

            {/* Right Icons */}
            <div className="flex items-center justify-end gap-1 sm:gap-2">
              <a href="https://wa.me/905323801519" target="_blank" rel="noopener noreferrer" className={iconBtn} aria-label="WhatsApp">
                <IconWhatsApp />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className={iconBtn} aria-label="Instagram">
                <IconInstagram />
              </a>
              <Link href="/urunler" className={iconBtn} aria-label="Ara">
                <IconSearch />
              </Link>
            </div>
          </div>

          {/* Bottom Layer: Main Navigation */}
          <nav className="mt-4 hidden justify-center gap-8 border-t border-white/10 pt-4 lg:flex xl:gap-14" aria-label="Birincil gezinti">
            {navLinks.map(({ href, label }) => {
              const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  className={`border-b-2 pb-1 text-xs font-semibold uppercase tracking-[0.2em] transition-colors xl:text-sm text-[#ddbd53] ${active ? "border-[#ddbd53]" : "border-transparent hover:border-[#ddbd53]/60"}`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <button type="button" className="absolute inset-0 bg-black/55 backdrop-blur-[2px]" onClick={() => setMenuOpen(false)} />
          <div className="absolute inset-y-0 left-0 flex w-[min(100%,20rem)] flex-col shadow-xl" style={{ backgroundColor: navBgElevated }}>
            <div className="flex h-16 items-center justify-between border-b border-white/[0.08] px-4">
              <span className="text-sm font-semibold uppercase tracking-wider text-[#ddbd53]">Menü</span>
              <button type="button" className="flex h-10 w-10 items-center justify-center text-[#e8e4dc]" onClick={() => setMenuOpen(false)}>
                <IconClose />
              </button>
            </div>
            <ul className="flex flex-1 flex-col divide-y divide-white/[0.06] p-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="block px-3 py-4 text-base font-medium uppercase tracking-wide text-[#f5f2ec] hover:text-[#ddbd53] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/iletisim" className="flex items-center gap-2 px-3 py-4 text-base font-medium uppercase tracking-wide text-[#f5f2ec] hover:text-[#ddbd53]">
                  <IconPin className="shrink-0" />
                  Mağazalar
                </Link>
              </li>
            </ul>
            <div className="border-t border-white/[0.06] p-6 space-y-4">
              <a href="https://wa.me/905323801519" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm font-medium text-[#f5f2ec] hover:text-[#ddbd53]">
                <IconWhatsApp className="text-[#ddbd53]" />
                WhatsApp Sipariş
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm font-medium text-[#f5f2ec] hover:text-[#ddbd53]">
                <IconInstagram className="text-[#ddbd53]" />
                Instagram'da Keşfet
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
