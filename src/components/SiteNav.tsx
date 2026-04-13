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
    <svg
      aria-hidden
      fill="none"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        d="M1 19h22M1 12h22M1 5h22"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="square"
      />
    </svg>
  );
}

function IconClose({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      fill="none"
      width={16}
      height={16}
      viewBox="0 0 16 16"
      className={className}
    >
      <path
        d="m1 1 14 14M1 15 15 1"
        stroke="currentColor"
        strokeWidth={1.5}
      />
    </svg>
  );
}

function IconPin({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      width={22}
      height={22}
      viewBox="0 0 24 24"
      fillRule="evenodd"
      clipRule="evenodd"
      className={className}
    >
      <path
        d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602"
        fill="none"
        stroke={gold}
        strokeWidth={1}
      />
    </svg>
  );
}

function IconAccount({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      fill="none"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        d="M16.125 8.75c-.184 2.478-2.063 4.5-4.125 4.5s-3.944-2.021-4.125-4.5c-.187-2.578 1.64-4.5 4.125-4.5 2.484 0 4.313 1.969 4.125 4.5Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.017 20.747C3.783 16.5 7.922 14.25 12 14.25s8.217 2.25 8.984 6.497"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeMiterlimit={10}
      />
    </svg>
  );
}

function IconSearch({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      fill="none"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        d="M10.364 3a7.364 7.364 0 1 0 0 14.727 7.364 7.364 0 0 0 0-14.727Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeMiterlimit={10}
      />
      <path
        d="M15.857 15.858 21 21.001"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconCart({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      fill="none"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        d="M4.75 8.25A.75.75 0 0 0 4 9L3 19.125c0 1.418 1.207 2.625 2.625 2.625h12.75c1.418 0 2.625-1.149 2.625-2.566L20 9a.75.75 0 0 0-.75-.75H4.75Zm2.75 0v-1.5a4.5 4.5 0 0 1 4.5-4.5v0a4.5 4.5 0 0 1 4.5 4.5v1.5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconWishlist({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      width={24}
      height={24}
      viewBox="-5 -5 30 30"
      fill="none"
      className={className}
    >
      <path
        d="M12.4869 22C12.2364 21.9968 11.9918 21.9232 11.7804 21.7875C8.18822 19.57 5.48518 17.3766 3.2783 14.8705C2.01853 13.5287 1.04215 11.942 0.408559 10.207C-0.730606 6.84675 0.5832 2.9211 3.46882 1.07256C4.78425 0.221399 6.35422 -0.134962 7.90363 0.0659208C9.45304 0.266804 10.8831 1.01212 11.9431 2.17126C12.1376 2.37977 12.3162 2.60031 12.4869 2.81685C12.7194 2.51694 12.97 2.2317 13.2371 1.96275C13.8816 1.32075 14.6473 0.816306 15.4888 0.479444C16.3303 0.142583 17.2302 -0.0198119 18.1351 0.00192686C19.0214 0.0266866 19.8936 0.23235 20.6992 0.606539C21.5048 0.980728 22.2271 1.51571 22.8227 2.17928C25.0693 4.63732 25.6012 7.62065 24.3072 10.8045C23.6255 12.404 22.6611 13.8647 21.4613 15.1151C19.3548 17.3836 16.9713 19.3724 14.3683 21.0336C14.019 21.2662 13.6578 21.4907 13.3006 21.7113L13.1934 21.7795C12.9825 21.9174 12.738 21.9937 12.4869 22Z"
        stroke="currentColor"
      />
    </svg>
  );
}

function IconHome({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      width={26}
      height={26}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9.5Z"
        stroke="currentColor"
        strokeWidth={1.25}
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Godiva scheme-3 benzeri: neredeyse saf siyah, vurgu #cfb56a */
const gold = "#cfb56a"; // Godiva gold
const navBg = "#030303"; // Onyx black
const navBgElevated = "#0a0a0a"; // Elevated black

const iconBtn =
  "flex h-10 w-10 items-center justify-center text-[#e8e4dc] transition-colors hover:text-[#d4af37]";

export function SiteNav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="sticky top-0 z-50">
      <aside
        className="border-b border-black/10 bg-[#d4af37] px-4 py-2.5 text-center text-[0.8125rem] leading-snug text-black shadow-sm sm:text-[0.9375rem]"
        aria-label="Duyurular"
      >
        <p className="font-semibold tracking-wide">
          ANKARA İÇİ TESLİMAT ÜCRETSİZDİR.
        </p>
      </aside>

      <header
        className="border-b-2 border-white shadow-sm"
        style={{ backgroundColor: navBg }}
      >
        <div className="mx-auto max-w-7xl px-4 py-3 md:px-6 md:py-4">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
            <div className="flex min-w-0 items-center gap-1 sm:gap-2">
              <button
                type="button"
                className={`${iconBtn} shrink-0 lg:hidden`}
                aria-expanded={menuOpen}
                aria-controls="mobile-drawer"
                onClick={() => setMenuOpen(true)}
              >
                <span className="sr-only">Menüyü aç</span>
                <IconHamburger />
              </button>

              <Link
                href="/"
                className={`${iconBtn} shrink-0 lg:hidden`}
                aria-label="Anasayfa"
              >
                <IconHome />
              </Link>

              <div className="hidden text-sm font-medium uppercase tracking-wide text-[#e8e4dc] lg:block">
                <Link
                  href="/iletisim"
                  className="group flex items-center gap-2 border-b border-transparent pb-0.5 transition-colors hover:border-[#d4af37] hover:text-[#d4af37]"
                >
                  <IconPin />
                  <span>Mağazalar</span>
                </Link>
              </div>
            </div>

            <div className="flex justify-center px-1">
              <Link
                href="/"
                className="flex items-center justify-center shrink-0"
              >
                <img 
                  src="/333.png" 
                  alt="Marka Logosu" 
                  className="h-12 sm:h-14 md:h-16 w-auto object-contain"
                />
              </Link>
            </div>

            <div className="flex min-w-0 items-center justify-end gap-0.5 sm:gap-1">
              <div className="mr-0.5 hidden shrink-0 items-center text-sm font-medium uppercase tracking-wide text-[#e8e4dc] md:flex lg:hidden">
                <Link
                  href="/iletisim"
                  className="flex items-center gap-1.5 transition-colors hover:text-[#d4af37]"
                  aria-label="Mağazalar"
                >
                  <IconPin />
                  <span className="sr-only sm:not-sr-only">Mağazalar</span>
                </Link>
              </div>

              <nav className="flex shrink-0 items-center" aria-label="Hızlı bağlantılar">
                <Link href="/iletisim" className={iconBtn} aria-label="Giriş yap">
                  <IconAccount />
                </Link>
                <Link href="/urunler" className={iconBtn} aria-label="Ara">
                  <IconSearch />
                </Link>
                <Link
                  href="/urunler"
                  className={`${iconBtn} relative`}
                  aria-label="Sepet"
                >
                  <IconCart />
                  <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#d4af37] px-1 text-[10px] font-bold text-[#030303]">
                    0
                  </span>
                </Link>
                <Link
                  href="/urunler"
                  className={`${iconBtn} relative`}
                  aria-label="Favoriler"
                >
                  <IconWishlist />
                  <span className="absolute -right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full border border-[#d4af37]/35 bg-[#030303] px-1 text-[10px] font-semibold text-[#d4af37]">
                    0
                  </span>
                </Link>
              </nav>
            </div>
          </div>

          <nav
            className="mt-3 hidden justify-center gap-8 pt-3 lg:flex xl:gap-12"
            aria-label="Birincil gezinti"
          >
            {navLinks.map(({ href, label }) => {
              const active =
                href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  className={`border-b-2 pb-1 text-xs font-semibold uppercase tracking-[0.14em] transition-colors xl:text-sm text-[#d4af37] ${active
                    ? "border-[#d4af37]"
                    : "border-transparent hover:border-[#d4af37]/60"
                    }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Mobil çekmece */}
      {menuOpen ? (
        <div className="fixed inset-0 z-[60] lg:hidden" id="mobile-drawer">
          <button
            type="button"
            className="absolute inset-0 bg-black/55 backdrop-blur-[2px]"
            aria-label="Menüyü kapat"
            onClick={() => setMenuOpen(false)}
          />
          <div
            className="absolute inset-y-0 left-0 flex w-[min(100%,20rem)] flex-col border-r border-white/[0.06] shadow-xl"
            style={{ backgroundColor: navBgElevated }}
          >
            <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-3">
              <span className="text-sm font-semibold uppercase tracking-wider text-[#d4af37]">
                Menü
              </span>
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center text-[#e8e4dc] hover:text-[#d4af37]"
                onClick={() => setMenuOpen(false)}
                aria-label="Kapat"
              >
                <IconClose />
              </button>
            </div>
            <ul className="flex flex-1 flex-col divide-y divide-white/[0.06] p-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="block px-3 py-4 text-base font-medium uppercase tracking-wide text-[#f5f2ec] hover:bg-white/[0.04] hover:text-[#d4af37]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/iletisim"
                  className="flex items-center gap-2 px-3 py-4 text-base font-medium uppercase tracking-wide text-[#f5f2ec] hover:bg-white/[0.04] hover:text-[#d4af37]"
                >
                  <IconPin className="shrink-0" />
                  Mağazalar
                </Link>
              </li>
            </ul>
            <div className="border-t border-white/[0.06] p-4">
              <Link
                href="/iletisim"
                className="flex items-center gap-2 text-sm text-[#c9c4ba] hover:text-[#d4af37]"
              >
                <IconAccount className="text-[#d4af37]" />
                Giriş yap
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
