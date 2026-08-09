const steps = [
  {
    number: "01",
    title: "Source",
    desc: "We travel to origin, cup with our partner farms, and pay well above fair-trade prices for lots we love.",
  },
  {
    number: "02",
    title: "Roast",
    desc: "Small batches, roasted weekly on our drum roaster and dialed in by hand for every single origin.",
  },
  {
    number: "03",
    title: "Brew",
    desc: "Dialed-in recipes for every method — espresso, pour-over, cold brew — tasted and adjusted daily.",
  },
  {
    number: "04",
    title: "Share",
    desc: "Poured for you in-café, or shipped fresh to your door within 48 hours of roasting.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-espresso py-24 text-cream sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            How We Work
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
            Bean to cup, done right
          </h2>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <span className="font-display text-5xl font-bold text-cream/10">
                {step.number}
              </span>
              <h3 className="mt-2 font-display text-xl font-bold text-cream">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/70">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
