import Image from "next/image";
import { site } from "@/content/site";

export function Hero() {
  const h = site.hero;
  return (
    <section className="hero">
      <div className="hero-media">
        <Image
          src={h.image}
          alt="Sunlit cafe interior with a warm timber counter"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="hero-inner">
        <p className="eyebrow">{h.eyebrow}</p>
        <h1 className="display">{h.heading}</h1>
        <p className="hero-sub">{h.sub}</p>
        <div className="hero-actions">
          <a href={h.primaryCta.href} className="btn">{h.primaryCta.label} <span className="arr">→</span></a>
          <a href={h.ghostCta.href} className="btn btn--ghost">{h.ghostCta.label}</a>
        </div>
      </div>
      <div className="scroll-cue"><span>Scroll</span><i /></div>
    </section>
  );
}
