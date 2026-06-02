import { Reveal } from "@/components/Reveal";
import { site } from "@/content/site";

export function Quote() {
  return (
    <section className="section quote" id="about">
      <div className="wrap">
        <Reveal as="blockquote">{site.about.quote}</Reveal>
        <Reveal as="cite" delay={0.08}>{site.about.cite}</Reveal>
      </div>
    </section>
  );
}
