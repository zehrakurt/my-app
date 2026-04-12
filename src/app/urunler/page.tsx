import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ürünler",
  description: "Ürün kataloğumuzu keşfedin.",
};

const products = [
  {
    name: "Temel Paket",
    description: "Bireysel kullanıcılar için temel özellikler ve destek.",
  },
  {
    name: "Profesyonel Paket",
    description: "Ekipler için gelişmiş araçlar ve öncelikli destek.",
  },
  {
    name: "Kurumsal",
    description: "Ölçeklenebilir altyapı ve özelleştirilmiş çözümler.",
  },
];

export default function UrunlerPage() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-50 dark:bg-black">
      <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Ürünler
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          İhtiyacınıza uygun paketleri inceleyin. Detaylı bilgi ve fiyat için
          iletişime geçebilirsiniz.
        </p>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <li
              key={product.name}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
            >
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                {product.name}
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {product.description}
              </p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
