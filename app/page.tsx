import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Quote } from "@/components/Quote";
import { Reviews } from "@/components/Reviews";
import { Menu } from "@/components/Menu";
import { Booking } from "@/components/Booking";
import { Visit } from "@/components/Visit";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Quote />
        <Reviews />
        <Menu />
        <Booking />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
