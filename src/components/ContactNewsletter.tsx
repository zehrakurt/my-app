import React from 'react';

export function ContactNewsletter() {
  return (
    <section className="w-full bg-[#f8f6f3]">

      {/* 🔥 FIX: equal height system */}
      <div className="flex flex-col lg:flex-row gap-[10px] lg:h-[520px]">

        {/* SOL - IMAGE */}
        <div className="w-full lg:basis-[65%] h-[300px] lg:h-full">
          <img
            src="https://www.godiva.com.tr/cdn/shop/files/1500x800box.png?v=1740145632&width=1500"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* SAĞ - FORM */}
        <div className="w-full lg:basis-[35%] h-[300px] lg:h-full bg-[#d4af37] flex items-center justify-center">

          <div className="w-full max-w-[360px] px-6">

            <h2 className="text-[22px] font-serif uppercase tracking-[0.15em] text-black mb-4 text-center">
              BİZE ULAŞIN
            </h2>

            <p className="text-black/80 text-sm mb-8 text-center">
              Sorularınız için bizimle iletişime geçin.
            </p>

            <form className="space-y-5">

              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Adınız*"
                  className="w-1/2 border-b border-black/40 bg-transparent py-3 text-sm outline-none focus:border-black"
                />
                <input
                  type="text"
                  placeholder="Soyadınız*"
                  className="w-1/2 border-b border-black/40 bg-transparent py-3 text-sm outline-none focus:border-black"
                />
              </div>

              <input
                type="email"
                placeholder="E-postanız"
                className="w-full border-b border-black/40 bg-transparent py-3 text-sm outline-none focus:border-black"
              />

              <textarea
                placeholder="Mesajınız / Sorunuz"
                rows={4}
                className="w-full border-b border-black/40 bg-transparent py-3 text-sm outline-none focus:border-black resize-none"
              />

              <div className="flex items-start gap-2 text-xs text-black/80">
                <input type="checkbox" className="mt-1 accent-black" />
                <p>
                  Kişisel verileriniz{' '}
                  <span className="underline">Aydınlatma Metni</span> kapsamında işlenmektedir
                </p>
              </div>

              <button className="mt-4 bg-[#1c1c1c] text-white px-8 py-3 text-xs uppercase tracking-[0.2em] hover:bg-black transition">
                GÖNDER
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}