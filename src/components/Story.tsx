export default function Story() {
  return (
    <section id="story" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <p className="text-sm font-semibold uppercase tracking-widest text-caramel">
            Our Story
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-espresso sm:text-5xl">
            From the farm to your favorite mug.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-coffee-light">
            Aura Coffee started in 2019 with one roaster, one storefront, and a
            simple belief: exceptional coffee comes from honest
            relationships. Today we work directly with smallholder farms
            across Ethiopia, Colombia, and Guatemala — paying above
            fair-trade prices and roasting each lot to highlight what makes
            it unique.
          </p>
          <p className="mt-4 text-base leading-relaxed text-coffee-light">
            Every bag is roasted within 48 hours of your order, and every cup
            poured in our café is pulled with the same care we&apos;d want in
            our own kitchen.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">
            {[
              { label: "Direct Trade", value: "Since 2019" },
              { label: "Roasted Weekly", value: "Small Batch" },
              { label: "Cups Poured", value: "1M+" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-coffee/10 bg-white/60 p-4"
              >
                <p className="font-display text-lg font-bold text-espresso">
                  {item.value}
                </p>
                <p className="mt-1 text-xs text-coffee-light">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-coffee-light via-coffee to-espresso shadow-xl">
            <div className="absolute inset-0 flex items-center justify-center p-10">
              <BeanPattern />
            </div>
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-cream/95 p-5 shadow-lg">
              <p className="font-display text-base font-bold text-espresso">
                &ldquo;Consistency is the whole game.&rdquo;
              </p>
              <p className="mt-1 text-xs text-coffee-light">
                Marisol Reyes, Head Roaster
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BeanPattern() {
  const beans = Array.from({ length: 18 });
  return (
    <div className="grid grid-cols-4 gap-6 opacity-80">
      {beans.map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 40 60"
          className="h-10 w-7 text-cream"
          style={{ transform: `rotate(${(i * 37) % 360}deg)` }}
        >
          <ellipse
            cx="20"
            cy="30"
            rx="18"
            ry="28"
            fill="currentColor"
            opacity="0.18"
          />
          <path
            d="M20 4c6 10 6 42 0 52"
            stroke="currentColor"
            strokeWidth="2.5"
            opacity="0.4"
          />
        </svg>
      ))}
    </div>
  );
}
