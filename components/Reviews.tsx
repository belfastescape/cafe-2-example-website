import { Reveal } from "@/components/Reveal";
import { site } from "@/content/site";

function Star() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 18.6 6.1 20.2l1.2-6.6L2.5 9l6.6-.9L12 2z" />
    </svg>
  );
}

export function Reviews() {
  return (
    <section className="section reviews" id="reviews">
      <div className="wrap">
        <Reveal className="sec-head center">
          <p className="eyebrow">What people say</p>
          <h2 className="display">Words from our regulars.</h2>
          <p className="lede">We&apos;re not for everyone — but for some people, we&apos;re exactly what they needed.</p>
        </Reveal>
        <div className="review-grid">
          {site.reviews.map((r, i) => (
            <Reveal key={i} as="article" className="rev" delay={(i % 2) * 0.08}>
              <div className="stars" aria-label={`${r.stars} out of 5`}>
                {Array.from({ length: r.stars }).map((_, j) => <Star key={j} />)}
              </div>
              <p>{r.quote}</p>
              <div className="by"><b>{r.name}</b><span>{r.sub}</span></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
