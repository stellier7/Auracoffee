export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-espresso pt-32 pb-24 text-cream sm:pt-40 sm:pb-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-caramel/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-1/3 h-80 w-80 rounded-full bg-gold/20 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold">
            Small-Batch Roastery &amp; Café
          </span>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
            Coffee, roasted with{" "}
            <span className="text-caramel">intention</span>.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-cream/80">
            We source directly from farms we trust, roast in small batches
            every week, and pour every cup like it&apos;s the only one that
            matters. Welcome to Aura Coffee.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#menu"
              className="rounded-full bg-caramel px-7 py-3.5 text-sm font-semibold text-espresso transition-transform hover:scale-[1.03] hover:bg-gold"
            >
              Explore the Menu
            </a>
            <a
              href="#visit"
              className="rounded-full border border-cream/30 px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:border-cream hover:bg-cream/10"
            >
              Find a Location
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-cream/10 pt-8 sm:max-w-md">
            {[
              { value: "12+", label: "Origin farms" },
              { value: "3", label: "Roast profiles" },
              { value: "100%", label: "Traceable sourcing" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-2xl font-bold text-cream">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs text-cream/60">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="relative rounded-[2.5rem] border border-cream/10 bg-gradient-to-br from-coffee to-espresso p-10 shadow-2xl">
            <CupIllustration />
          </div>
          <div className="absolute -bottom-6 -left-6 rounded-2xl border border-cream/10 bg-cream px-5 py-4 text-espresso shadow-xl">
            <p className="font-display text-lg font-bold">Ethiopia Guji</p>
            <p className="text-xs text-coffee-light">
              Notes of jasmine &amp; stone fruit
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CupIllustration() {
  return (
    <svg
      viewBox="0 0 240 240"
      className="mx-auto h-auto w-full max-w-xs text-cream"
      fill="none"
    >
      <g opacity="0.9">
        <path
          d="M92 30c-3 10 4 14 2 24"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          className="animate-pulse"
        />
        <path
          d="M120 26c-3 10 4 14 2 24"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          className="animate-pulse"
        />
        <path
          d="M148 30c-3 10 4 14 2 24"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          className="animate-pulse"
        />
      </g>
      <path
        d="M56 90h128l-10 88a20 20 0 0 1-20 18H86a20 20 0 0 1-20-18L56 90Z"
        fill="currentColor"
        opacity="0.12"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        d="M184 100h14a18 18 0 0 1 0 36h-10"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <ellipse cx="120" cy="92" rx="64" ry="8" fill="currentColor" opacity="0.35" />
      <rect x="70" y="200" width="100" height="10" rx="5" fill="currentColor" opacity="0.5" />
    </svg>
  );
}
