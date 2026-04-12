const BANNER_PATH =
  "/11.png";

export function HeroBanner() {
  return (
    <>
      {/* BANNER */}
      <section className="w-full bg-black">
        <img
          src={BANNER_PATH}
          alt="Tanıtım görseli"
          className="w-full h-auto object-cover"
        />
      </section>

      {/* INFO BAR (SABİT - HAREKETSİZ) */}
      <div className="w-full bg-white border-gray-200 py-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 px-4 text-sm font-medium text-gray-700">

          <div className="flex items-center gap-3">
            <img
              src="/email.png"
              alt="icon"
              className="w-7 h-7"
            />
            <span className="text-center sm:text-left">
              Kişiye Özel Ücretsiz Hediye Notu
            </span>
          </div>

          <div className="flex items-center gap-3">
            <img
              src="/debit-card.png"
              alt="icon"
              className="w-9 h-10"
            />
            <span className="text-center sm:text-left">
              Kapıda Ödeme İmkanı
            </span>
          </div>

          <div className="flex items-center gap-3">
            <img
              src="/booking.png"
              alt="icon"
              className="w-8 h-8"
            />
            <span className="text-center sm:text-left">
              Sadece Ankara İçi Sipariş
            </span>
          </div>

        </div>
      </div>
    </>
  );
}