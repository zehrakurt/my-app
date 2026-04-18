import React from "react";
import Link from "next/link";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#030303] pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left mb-12">
          
          {/* Logo & About */}
          <div className="flex flex-col items-center md:items-start">
            <Link 
              href="/"
              className="mb-4 inline-block"
            >
              <h2 
                className="text-3xl font-serif italic text-[#ddbd53] tracking-[0.05em]" 
                style={{ fontFamily: "'Playfair Display', 'Georgia', serif", textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
              >
                Doliva
              </h2>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              %100 el yapımı, katkısız ve taze malzemelerle hazırlanan premium çikolata deneyimi.
            </p>
          </div>

          {/* Hızlı Bağlantılar */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-[#cfb56a] font-semibold tracking-wider uppercase text-sm mb-6">Kurumsal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/hakkimizda" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/urunler" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Ürünlerimiz
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-gray-300 hover:text-white transition-colors text-sm">
                  İletişim & Mağazalar
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-[#cfb56a] font-semibold tracking-wider uppercase text-sm mb-6">Müşteri Hizmetleri</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a href="mailto:dolivacikolata@gmail.com" className="hover:text-white transition-colors">
                  dolivacikolata@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+905323801519" className="hover:text-white transition-colors">
                  0532 380 15 19
                </a>
              </li>
              <li className="pt-4">
                <a 
                  href="https://wa.me/905323801519" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-block border border-[#cfb56a] text-[#cfb56a] px-6 py-2 rounded uppercase tracking-wider text-xs font-semibold hover:bg-[#cfb56a] hover:text-black transition-all"
                >
                  WhatsApp Destek
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>&copy; {currentYear} Doliva Premium Çikolata. Tüm hakları saklıdır. <span className="ml-2 opacity-60">LMG Grup markasıdır.</span></p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Gizlilik Politikası</Link>
            <Link href="#" className="hover:text-white transition-colors">Mesafeli Satış Sözleşmesi</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
