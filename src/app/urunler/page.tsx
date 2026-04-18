import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ürünlerimiz | Doliva",
  description: "Özel koleksiyon çikolatalarımızı keşfedin.",
};

const products = [
  {
    id: 1,
    name: "Klasik Sütlü Trüf",
    description: "En kaliteli Belçika çikolatası ve taze krema ile hazırlanan, ağızda eriyen klasik lezzet.",
    image: "/44444.png",
  },
  {
    id: 2,
    name: "Bitter & Ahududu Pralin",
    description: "Yoğun bitter çikolata ve taze ahududu dolgusunun mükemmel uyumu.",
    image: "/222.jpeg",
  },
  {
    id: 3,
    name: "Deniz Tuzlu Karamel",
    description: "Elde hazırlanan karamel ve hafif deniz tuzu taneleriyle zenginleştirilmiş özel tablet.",
    image: "/111.png",
  }
];

export default function UrunlerPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Simple Header */}
      <section className="py-16 md:py-14 border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-[#1c1c1c] tracking-tight">Ürünlerimiz</h1>
          <div className="w-16 h-1 bg-[#ddbd53] mx-auto mt-6"></div>
        </div>
      </section>

      {/* Products Grid */}
      <main className="max-w-[1400px] mx-auto px-4 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden mb-6 bg-gray-50 border border-gray-100 shadow-sm rounded-sm">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Product Info */}
              <div className="text-center">
                <h2 className="font-medium text-sm md:text-base text-[#1c1c1c] mb-2 group-hover:text-[#ddbd53] transition-colors leading-snug">
                  {product.name}
                </h2>
                <p className="text-gray-500 text-[13px] leading-relaxed max-w-[200px] mx-auto">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
