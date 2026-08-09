const items = [
  {
    name: "Aura Signature Espresso",
    desc: "A balanced blend of Colombian & Ethiopian beans with notes of cocoa and orange zest.",
    price: "$4.50",
  },
  {
    name: "Honey Lavender Latte",
    desc: "Espresso, steamed milk, local honey, and a whisper of lavender.",
    price: "$5.75",
  },
  {
    name: "Ethiopia Guji Pour-Over",
    desc: "Single-origin, hand-poured. Jasmine, stone fruit, and a bright citrus finish.",
    price: "$6.00",
  },
  {
    name: "Cold Brew Concentrate",
    desc: "Steeped for 18 hours. Smooth, low-acid, and naturally sweet.",
    price: "$4.75",
  },
  {
    name: "Cardamom Cortado",
    desc: "Equal parts espresso and warm milk, finished with a hint of cardamom.",
    price: "$5.25",
  },
  {
    name: "Vanilla Bean Cold Foam",
    desc: "Cold brew topped with house-made vanilla bean cold foam.",
    price: "$5.95",
  },
];

export default function Menu() {
  return (
    <section id="menu" className="bg-cream-dark py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-caramel">
            The Menu
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold text-espresso sm:text-5xl">
            Signature drinks
          </h2>
          <p className="mt-4 text-base leading-relaxed text-coffee-light">
            Rotating single-origin pour-overs available in-café — ask your
            barista what&apos;s on bar this week.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.name}
              className="group flex flex-col rounded-2xl border border-coffee/10 bg-cream p-6 transition-shadow hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-lg font-bold text-espresso">
                  {item.name}
                </h3>
                <span className="whitespace-nowrap font-display text-lg font-bold text-caramel">
                  {item.price}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-coffee-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href="#visit"
            className="rounded-full bg-espresso px-8 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-coffee"
          >
            View Full Menu In-Store
          </a>
        </div>
      </div>
    </section>
  );
}
