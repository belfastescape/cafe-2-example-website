import { Reveal } from "@/components/Reveal";
import { site } from "@/content/site";

export function Visit() {
  const v = site.visit;
  return (
    <section className="section visit" id="visit">
      <div className="wrap">
        <Reveal className="sec-head">
          <p className="eyebrow">Find us</p>
          <h2 className="display">{v.heading}</h2>
        </Reveal>
        <div className="visit-grid">
          <div className="hours-block">
            <h3>Hours</h3>
            <dl>
              {v.hours.map((h) => (
                <div key={h.day} style={{ display: "contents" }}>
                  <dt>{h.day}</dt><dd>{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="find">
            <h3>Find us</h3>
            <ul className="find-list">
              <li>{v.address[0]}</li>
              <li className="sub">{v.address[1]}</li>
            </ul>
            <div className="find-contact">
              <a href={`tel:${v.phone.replace(/\s/g, "")}`}>{v.phone}</a>
              <a href={`mailto:${v.email}`}>{v.email}</a>
            </div>
            <div className="map" aria-label="Map location">
              <div className="map-pin">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
                </svg>
                <span>You&apos;ll find us here</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
