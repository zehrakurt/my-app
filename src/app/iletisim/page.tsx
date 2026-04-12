import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Bize ulaşın.",
};

export default function IletisimPage() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-50 dark:bg-black">
      <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          İletişim
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Sorularınız veya iş birliği teklifleriniz için bizimle iletişime
          geçebilirsiniz.
        </p>
        <dl className="mt-12 space-y-6 text-zinc-700 dark:text-zinc-300">
          <div>
            <dt className="text-sm font-medium text-zinc-500 dark:text-zinc-500">
              E-posta
            </dt>
            <dd className="mt-1">
              <a
                href="mailto:info@example.com"
                className="font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50"
              >
                info@example.com
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-zinc-500 dark:text-zinc-500">
              Telefon
            </dt>
            <dd className="mt-1 font-medium text-zinc-900 dark:text-zinc-50">
              +90 (212) 000 00 00
            </dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-zinc-500 dark:text-zinc-500">
              Adres
            </dt>
            <dd className="mt-1 max-w-md leading-7">
              Örnek Mah. İnovasyon Cad. No: 1, 34000 İstanbul
            </dd>
          </div>
        </dl>
      </main>
    </div>
  );
}
