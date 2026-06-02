"use client";
import { useEffect, useState } from "react";
import { site } from "@/content/site";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`nav${scrolled ? " scrolled" : ""}`}>
        <a href="#top" className="brand">{site.name}</a>
        <nav>
          <ul className="nav-links">
            {site.nav.map((n) => (
              <li key={n.href}><a href={n.href}>{n.label}</a></li>
            ))}
          </ul>
        </nav>
        <a href="#book" className="nav-cta">Book a table</a>
        <button
          className="nav-burger"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="menuSheet"
          onClick={() => setOpen(true)}
        >
          <span /><span />
        </button>
      </header>

      <div id="menuSheet" className={`menu-sheet${open ? " open" : ""}`} aria-hidden={!open}>
        <div className="menu-sheet-top">
          <a href="#top" className="brand" onClick={() => setOpen(false)}>{site.name}</a>
          <button className="menu-close" aria-label="Close menu" onClick={() => setOpen(false)}>
            <span /><span />
          </button>
        </div>
        <nav className="menu-sheet-nav">
          {site.nav.map((n, i) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
              <span className="i">{String(i + 1).padStart(2, "0")}</span>{n.label}
            </a>
          ))}
        </nav>
        <div className="menu-sheet-foot">
          <a href="#book" className="btn" onClick={() => setOpen(false)}>
            Book a table <span className="arr">→</span>
          </a>
          <dl className="menu-sheet-meta">
            <dt>Open today</dt><dd>{site.visit.hours[0].time}</dd>
            <dt>Find us</dt><dd>{site.visit.address[0]}, {site.visit.address[1].split(",").pop()?.trim()}</dd>
          </dl>
        </div>
      </div>
    </>
  );
}
