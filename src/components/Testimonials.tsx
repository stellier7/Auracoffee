const quotes = [
  {
    quote:
      "Hands down the best pour-over in the city. The staff genuinely care about every cup they make.",
    author: "Jordan M.",
    role: "Regular since 2021",
  },
  {
    quote:
      "Their beans transformed my morning routine. Subscribing was the easiest decision I've made this year.",
    author: "Priya S.",
    role: "Subscriber",
  },
  {
    quote:
      "You can taste the difference direct-trade sourcing makes. Aura's Ethiopia lot is unreal.",
    author: "Diego F.",
    role: "Home barista",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-caramel">
            What People Say
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold text-espresso sm:text-5xl">
            Loved by coffee people
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {quotes.map((item) => (
            <figure
              key={item.author}
              className="rounded-2xl border border-coffee/10 bg-cream-dark p-7"
            >
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6L10 1.5z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-coffee-light">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5">
                <p className="font-display text-sm font-bold text-espresso">
                  {item.author}
                </p>
                <p className="text-xs text-coffee-light">{item.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
