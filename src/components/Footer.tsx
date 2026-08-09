const social = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "TikTok", href: "https://tiktok.com" },
  { label: "Twitter", href: "https://twitter.com" },
];

export default function Footer() {
  return (
    <footer className="bg-espresso py-14 text-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-xl font-bold">
            Aura <span className="text-caramel">Coffee</span>
          </p>
          <p className="mt-1 text-sm text-cream/60">
            Small-batch roasted. Brewed with intention.
          </p>
        </div>

        <ul className="flex gap-6">
          {social.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-cream/70 transition-colors hover:text-gold"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-xs text-cream/50">
          © {new Date().getFullYear()} Aura Coffee. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
