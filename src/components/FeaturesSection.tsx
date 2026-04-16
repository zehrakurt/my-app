import React from "react";

const features = [
  {
    title: "El Yapımı Üretim",
    description: "Katkısız, el yapımı kaliteli kakao ile özenle hazırlanır.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
      </svg>
    )
  },
  {
    title: "Soğuk Zincir Teslimat",
    description: "Sıcak yaz günlerinde bile çikolatalarınız erimeden kapınızda.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    )
  },
  {
    title: "Özel Hediye Kutuları",
    description: "Sevdiklerinizi mutlu edecek zarif ve şık paketleme seçenekleri.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>
    )
  },
  {
    title: "Memnuniyet Garantisi",
    description: "%100 taze malzemeler ve müşteri odaklı kusursuz hizmet.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.514" />
      </svg>
    )
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-[#1c1c1c] mb-4 tracking-wide">Neden Bizi Tercih Etmelisiniz?</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Tutkuyla ürettiğimiz çikolatalarımızda kaliteden ve tazelikten asla ödün vermiyoruz.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center group cursor-pointer">
              <div className="w-20 h-20 rounded-full bg-[#ddbd53] flex items-center justify-center mb-6 shadow-[0_0_0_4px_rgba(221,189,83,0.2)] group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-medium text-[#1c1c1c] mb-3 uppercase tracking-wider">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
