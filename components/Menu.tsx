import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { site } from "@/content/site";

export function Menu() {
  const m = site.menu;
  return (
    <section className="section menu" id="menu">
      <div className="wrap">
        <Reveal className="sec-head center">
          <p className="eyebrow">{m.eyebrow}</p>
          <h2 className="display">{m.heading}</h2>
          <p className="lede">{m.lede}</p>
        </Reveal>
        <div className="menu-grid">
          {m.items.map((d, i) => (
            <Reveal key={d.name} as="article" className="dish" delay={(i % 3) * 0.08}>
              <div className="dish-ph">
                <Image src={d.image} alt={d.name} width={1000} height={750} />
              </div>
              <div className="dish-head">
                <h3>{d.name}</h3>
                <span className="dish-price">{d.price}</span>
              </div>
              <p>{d.desc}</p>
            </Reveal>
          ))}
        </div>
        <div className="menu-foot">
          <a href="#book" className="btn btn--ghost">Reserve a table <span className="arr">→</span></a>
        </div>
      </div>
    </section>
  );
}
