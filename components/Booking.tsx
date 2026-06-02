"use client";
import { useState } from "react";
import Image from "next/image";
import { site } from "@/content/site";

export function Booking() {
  const [sent, setSent] = useState(false);
  const b = site.booking;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) { form.reportValidity(); return; }
    setSent(true);
  }

  return (
    <section className="section book" id="book">
      <div className="wrap">
        <div className="book-grid">
          <div className="book-intro">
            <div className="sec-head">
              <p className="eyebrow">{b.eyebrow}</p>
              <h2 className="display">{b.heading}</h2>
              <p className="lede">{b.lede}</p>
            </div>
            <form className="book-form" onSubmit={onSubmit} noValidate>
              <div className="field">
                <label htmlFor="f-name">Your name</label>
                <input id="f-name" name="name" type="text" placeholder="Jamie Rivers" autoComplete="name" required />
              </div>
              <div className="field">
                <label htmlFor="f-email">Email</label>
                <input id="f-email" name="email" type="email" placeholder="you@email.com" autoComplete="email" required />
              </div>
              <div className="field">
                <label htmlFor="f-date">Booking date (optional)</label>
                <input id="f-date" name="date" type="date" />
              </div>
              <div className="field">
                <label htmlFor="f-msg">Message</label>
                <textarea id="f-msg" name="message" rows={3} placeholder="Table for two, Saturday morning?" />
              </div>
              <button type="submit" className="btn">
                {sent ? "Sent ✓" : <>Send it through <span className="arr">→</span></>}
              </button>
              {sent && <p className="form-success show">✓ {b.successMessage}</p>}
              <p className="form-note">No account, no spam. Just a note to the counter.</p>
            </form>
          </div>
          <aside className="book-aside">
            <div className="book-figure">
              <Image src={b.image} alt="A corner table with morning light" width={900} height={1200} />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
