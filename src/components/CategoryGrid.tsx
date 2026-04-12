import Link from 'next/link';

export function CategoryGrid() {
  return (
    <section className="py-10">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">

        {/* Tanıtım Yazısı */}
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-serif text-[#1c1c1c] mb-4 tracking-wide">Premium Seçimlerimizi Keşfedin</h2>
          <p className="text-gray-600 text-[15px] md:text-base leading-relaxed">
            Sevdiklerinizi mutlu etmenin en zarif yolu. Her bir detayında özen barındıran; özel günlerinize, kurumsal ihtiyaçlarınıza ve en tatlı anlarınıza eşlik edecek zengin koleksiyonlarımızı inceleyin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1.5rem] min-[1150px]:gap-[1.875rem]">

          {/* KART 1 */}
          <Link
            href="/pages/ozel-koleksiyonlar"
            className="block w-full h-[180px] min-[700px]:h-[400px] relative group overflow-hidden"
          >
            <img
              src="https://www.godiva.com.tr/cdn/shop/files/Ekran_goruntusu_2025-08-21_150918.jpg?v=1755778198&width=853"
              alt="Özel Koleksiyonlar"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.03]"
            />

            <div className="absolute inset-0 flex items-end justify-center p-6">
              <span className="bg-[#d4af37] text-black px-6 py-2 uppercase tracking-[0.2em] text-xs font-semibold transition-all duration-300 group-hover:bg-[#b8962e]">
                ÖZEL KOLEKSİYONLAR
              </span>
            </div>
          </Link>

          {/* KART 2 */}
          <Link
            href="/collections/toplu-alimlara-ozel-indirim-firsati"
            className="block w-full h-[180px] min-[700px]:h-[400px] relative group overflow-hidden"
          >
            <img
              src="https://www.godiva.com.tr/cdn/shop/files/Adsiz_tasarim_ea8bd0e3-d566-4af8-81c1-d391442c484a.png?v=1750078376&width=2490"
              alt="Kurumsallara Özel"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.03]"
            />

            <div className="absolute inset-0 flex items-end justify-center p-6">
              <span className="bg-[#d4af37] text-black px-6 py-2 uppercase tracking-[0.2em] text-xs font-semibold transition-all duration-300 group-hover:bg-[#b8962e]">
                KURUMSALLARA ÖZEL FIRSATLAR
              </span>
            </div>
          </Link>

          {/* KART 3 */}
          <Link
            href="/collections/taze-urunler"
            className="block w-full h-[180px] min-[700px]:h-[400px] relative group overflow-hidden"
          >
            <img
              src="/222.jpeg"
              alt="Yeni Ürünler"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.03]"
            />

            <div className="absolute inset-0 flex items-end justify-center p-6">
              <span className="bg-[#d4af37] text-black px-6 py-2 uppercase tracking-[0.2em] text-xs font-semibold transition-all duration-300 group-hover:bg-[#b8962e]">
                YENİ ÜRÜNLER
              </span>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}