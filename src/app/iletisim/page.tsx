import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim | Doliva",
  description: "Doliva ile iletişime geçin. Lezzet dolu dünyamıza dair sorularınız için buradayız.",
};

export default function IletisimPage() {
  const address = "Sokullu Mehmetpaşa Mah. Ahmet Haşim Cad. No:25/A Dikmen - Çankaya, Ankara";
  const mapQuery = encodeURIComponent(address);
  
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#30261D] py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-6xl text-white mb-6 tracking-tight">İletişim</h1>
          <p className="text-[#ddbd53] text-sm md:text-base uppercase tracking-[0.3em] font-medium max-w-2xl mx-auto opacity-90">
            Sizinle Tanışmak İçin Sabırsızlanıyoruz
          </p>
        </div>
      </section>

      <main className="max-w-[1400px] mx-auto px-4 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">
          
          {/* Sol Kolon: İletişim Bilgileri */}
          <div className="space-y-12">
            <div>
              <h2 className="font-serif text-3xl text-[#1c1c1c] mb-8">Bize Ulaşın</h2>
              <div className="space-y-8">
                
                {/* İletişim Kişisi */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#f8f5f0] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#ddbd53]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Yetkili</h4>
                    <p className="text-[#1c1c1c] font-medium">Levent Mirza</p>
                  </div>
                </div>

                {/* Telefon & WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#f8f5f0] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#ddbd53]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Telefon & WhatsApp</h4>
                    <a href="tel:+905323801519" className="text-[#1c1c1c] font-medium block hover:text-[#ddbd53] transition-colors">0532 380 15 19</a>
                  </div>
                </div>

                {/* E-posta */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#f8f5f0] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#ddbd53]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">E-posta</h4>
                    <a href="mailto:dolivacikolata@gmail.com" className="text-[#1c1c1c] font-medium block hover:text-[#ddbd53] transition-colors">dolivacikolata@gmail.com</a>
                  </div>
                </div>

                {/* Adres */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#f8f5f0] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#ddbd53]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Adres</h4>
                    <p className="text-[#1c1c1c] font-medium leading-relaxed max-w-sm">
                      Sokullu Mehmetpaşa Mah. Ahmet Haşim Cad. No:25/A Dikmen - Çankaya, Ankara
                    </p>
                  </div>
                </div>

              </div>
              
              <div className="mt-12 pt-8 border-t border-gray-100 italic text-sm text-gray-400">
                Doliva bir LMG Grup markasıdır.
              </div>
            </div>
          </div>

          {/* Sağ Kolon: İletişim Formu */}
          <div className="bg-[#fcfaf7] p-8 md:p-12 rounded-sm border border-gray-100 shadow-sm">
            <h3 className="font-serif text-2xl text-[#1c1c1c] mb-8">Mesaj Gönderin</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Ad Soyad</label>
                  <input type="text" className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#ddbd53] transition-colors" placeholder="Adınız" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">E-posta</label>
                  <input type="email" className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#ddbd53] transition-colors" placeholder="E-posta adresiniz" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Konu</label>
                <input type="text" className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#ddbd53] transition-colors" placeholder="Konu" />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Mesajınız</label>
                <textarea rows={5} className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#ddbd53] transition-colors resize-none" placeholder="Size nasıl yardımcı olabiliriz?"></textarea>
              </div>
              <button type="submit" className="w-full bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] py-4 hover:bg-[#ddbd53] hover:text-black transition-all duration-300">
                GÖNDER
              </button>
            </form>
          </div>

        </div>

        {/* Harita Bölümü */}
        <div className="mt-24 h-[450px] w-full grayscale-[0.5] hover:grayscale-0 transition-all duration-[1.5s] border border-gray-200">
          <iframe
            src={`https://maps.google.com/maps?q=${mapQuery}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            title="Doliva Konum"
          ></iframe>
        </div>
      </main>
    </div>
  );
}
