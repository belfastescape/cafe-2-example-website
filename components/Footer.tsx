import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <a href="#top" className="brand">{site.name}</a>
        <p className="meta">{site.footer.meta}</p>
        <p className="copy">{site.footer.copyright}</p>
      </div>
    </footer>
  );
}
