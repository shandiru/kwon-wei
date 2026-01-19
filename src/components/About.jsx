export default function AboutUs() {
  return (
    <section className="relative py-20 bg-black overflow-hidden" id="about">

      {/* Side Decorative Images - Lowered opacity for black background */}
      <img
        src="https://www.benihanainternational.com/wp-content/themes/grilla/img/left-letters.svg"
        alt=""
        className="absolute left-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none hidden md:block invert"
      />
      <img
        src="https://www.benihanainternational.com/wp-content/themes/grilla/img/right-letters.svg"
        alt=""
        className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none hidden md:block invert"
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">

        {/* Flower Icon - Added 'invert' to make it pop on black if it's dark */}
        <img
          src="https://www.benihanainternational.com/wp-content/uploads/2025/07/flower.svg"
          alt=""
          className="mx-auto mb-10 w-24 md:w-32 brightness-200"
        />

        {/* Title - Changed to Gold/Yellow for contrast */}
        <h2 className="text-3xl md:text-[32px] font-extrabold leading-snug text-[#D4AF37] uppercase tracking-wide">
          Wong Kwei Chinese Restaurant – Ashby-de-la-Zouch
        </h2>

        {/* Description - Changed text to white/gray for readability */}
        <div className="mt-6 space-y-5 text-base md:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
          <p>
            At Wong Kwei Chinese Restaurant, we bring the authentic flavours of 
            Cantonese and Hong Kong–style cuisine to the heart of Ashby-de-la-Zouch. 
            Our menu is crafted using traditional techniques and fresh ingredients 
            to deliver rich, comforting dishes for every occasion.
          </p>
          <p>
            Whether you’re enjoying a relaxed lunch, a family dinner, or an evening 
            out with friends, Wong Kwei offers a warm atmosphere and a menu full 
            of classic favourites. From flavourful stir-fries to expertly prepared 
            specialties, every meal is made to be enjoyed.
          </p>
          
          {/* Highlighted Closing Line */}
          <p className="font-semibold text-[#D4AF37] pt-4">
            Step in, take a seat, and experience Chinese dining done right.
          </p>
        </div>

      </div>
    </section>
  );
}