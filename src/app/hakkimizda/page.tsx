import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: "Şirketimiz ve ekibimiz hakkında bilgi.",
};

export default function HakkimizdaPage() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-50 dark:bg-black">
      <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Hakkımızda
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Biz, kullanıcılarımıza değer sunmaya odaklanan bir ekibiz. Amacımız;
          kaliteli ürün ve hizmetlerle güvenilir bir deneyim sağlamak.
        </p>
        <section className="mt-12 space-y-4 text-zinc-700 dark:text-zinc-300">
          <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-50">
            Misyonumuz
          </h2>
          <p className="max-w-2xl leading-7">
            İhtiyaçlara uygun çözümler üretmek ve sürekli gelişen teknolojiyle
            birlikte sizlere en iyi hizmeti sunmak.
          </p>
          <h2 className="pt-6 text-xl font-medium text-zinc-900 dark:text-zinc-50">
            Vizyonumuz
          </h2>
          <p className="max-w-2xl leading-7">
            Sektörde örnek gösterilen, yenilikçi ve sürdürülebilir bir marka
            olmak.
          </p>
        </section>
      </main>
    </div>
  );
}
