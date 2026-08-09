const locations = [
  {
    name: "Riverside Roastery",
    address: "214 Elm Street, Riverside, CA",
    hours: "Mon–Fri 6:30am–6pm · Sat–Sun 7am–5pm",
  },
  {
    name: "Downtown Café",
    address: "88 Market Avenue, Downtown",
    hours: "Daily 6am–7pm",
  },
];

export default function Visit() {
  return (
    <section id="visit" className="bg-cream-dark py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-caramel">
            Visit Us
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold text-espresso sm:text-5xl">
            Stop by for a cup
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-coffee-light">
            Grab a seat, meet the roasters, or pick up a fresh bag of beans.
            We&apos;d love to pour for you in person.
          </p>

          <div className="mt-10 space-y-6">
            {locations.map((loc) => (
              <div
                key={loc.name}
                className="rounded-2xl border border-coffee/10 bg-cream p-6"
              >
                <h3 className="font-display text-lg font-bold text-espresso">
                  {loc.name}
                </h3>
                <p className="mt-2 text-sm text-coffee-light">
                  {loc.address}
                </p>
                <p className="mt-1 text-sm text-coffee-light">{loc.hours}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          id="contact"
          className="rounded-[2rem] border border-coffee/10 bg-cream p-8 shadow-sm"
        >
          <h3 className="font-display text-2xl font-bold text-espresso">
            Get in touch
          </h3>
          <p className="mt-2 text-sm text-coffee-light">
            Questions about wholesale, catering, or subscriptions? Send us a
            note.
          </p>

          <form className="mt-8 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="text-xs font-semibold uppercase tracking-wide text-coffee-light"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Jane Doe"
                  className="mt-2 w-full rounded-xl border border-coffee/15 bg-white px-4 py-2.5 text-sm text-espresso placeholder:text-coffee-light/60 focus:border-caramel focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-xs font-semibold uppercase tracking-wide text-coffee-light"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="jane@example.com"
                  className="mt-2 w-full rounded-xl border border-coffee/15 bg-white px-4 py-2.5 text-sm text-espresso placeholder:text-coffee-light/60 focus:border-caramel focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="text-xs font-semibold uppercase tracking-wide text-coffee-light"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="How can we help?"
                className="mt-2 w-full rounded-xl border border-coffee/15 bg-white px-4 py-2.5 text-sm text-espresso placeholder:text-coffee-light/60 focus:border-caramel focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-espresso px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-coffee"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
