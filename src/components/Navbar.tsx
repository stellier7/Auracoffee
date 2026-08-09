"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#menu", label: "Menu" },
  { href: "#story", label: "Our Story" },
  { href: "#process", label: "Process" },
  { href: "#visit", label: "Visit" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-cream/95 shadow-sm backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-display text-xl font-bold tracking-tight text-espresso"
        >
          Aura <span className="text-caramel">Coffee</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-coffee-light transition-colors hover:text-caramel"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#visit"
          className="hidden rounded-full bg-espresso px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-coffee md:inline-block"
        >
          Order Online
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-full text-espresso md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="h-6 w-6"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
              />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-coffee/10 bg-cream md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-coffee-light hover:bg-cream-dark hover:text-caramel"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-1">
              <a
                href="#visit"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-espresso px-4 py-2.5 text-center text-sm font-semibold text-cream"
              >
                Order Online
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
