export const site = {
  name: "Little Nook",
  tagline: "The kind of place that you will want to come back to.",
  metaDescription:
    "Slow coffee and the best banana bread you've had this year. Open from 7.30, every day.",

  nav: [
    { label: "About", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Reviews", href: "#reviews" },
    { label: "Opening Times", href: "#visit" },
  ],

  hero: {
    eyebrow: "Open daily · 7.30 — late",
    heading: "The kind of place that you will want to come back to.",
    sub: "Slow coffee and the best banana bread you've had this year. Open from 7.30, every day.",
    primaryCta: { label: "See the menu", href: "#menu" },
    ghostCta: { label: "Find us today", href: "#visit" },
    image: "/images/hero.jpg",
  },

  about: {
    quote:
      "We opened Little Nook to be the kind of place we missed — somewhere warm, where the bread is real, the coffee is strong and nobody is in a rush.",
    cite: "Mira & Tom, owners",
  },

  reviews: [
    { stars: 5, quote: "The best flat white I've had outside Melbourne. I come back every single morning and they always remember my name.", name: "Sarah M.", sub: "Regular since 2023" },
    { stars: 5, quote: "We had our anniversary breakfast here. The almond croissants were still warm. Everything was just right.", name: "James & Priya", sub: "First visit, not the last" },
    { stars: 5, quote: "Tucked away but absolutely worth finding. Quiet enough to read, good enough to stay for hours.", name: "Oliver T.", sub: "Writer, works from the corner table" },
    { stars: 5, quote: "Brought my mum here on her birthday. She said it was the nicest breakfast she'd had in years. We'll be back.", name: "Donna K.", sub: "Visiting from Edinburgh" },
  ],

  menu: {
    eyebrow: "Sample menu",
    heading: "A few favourites",
    lede: "A taste of what we love to make. Come in to see what's on today.",
    items: [
      { name: "Garden Toast", price: "£12", desc: "Smashed avocado, soft herbs, lemon zest on sourdough.", image: "/images/garden-toast.jpg" },
      { name: "Little Nook Bowl", price: "£16", desc: "Turmeric rice, roast pumpkin, tahini, pickled onion.", image: "/images/bowl.jpg" },
      { name: "Slow Coffee", price: "£5", desc: "Single origin, brewed by hand. Ask what's on today.", image: "/images/coffee.jpg" },
      { name: "Almond Croissant", price: "£6", desc: "Twice-baked, golden, dusted heavy with sugar.", image: "/images/croissant.jpg" },
      { name: "Olive & Feta Loaf", price: "£8", desc: "Warm, salty, generous slab. Best with butter.", image: "/images/loaf.jpg" },
      { name: "Banana Bread", price: "£7", desc: "Brown butter, walnut, a little flaky salt on top.", image: "/images/banana-bread.jpg" },
    ],
  },

  booking: {
    eyebrow: "Say hello",
    heading: "Reserve a table, ask us anything.",
    lede: "We'll get back the same day. For groups of six or more, drop the date and we'll sort the rest.",
    successMessage: "Thanks — we'll be in touch the same day.",
    image: "/images/corner-table.jpg",
  },

  visit: {
    heading: "Open from 7.30, every day.",
    hours: [
      { day: "Mon — Fri", time: "7.30 — 4.00" },
      { day: "Saturday", time: "8.00 — 5.00" },
      { day: "Sunday", time: "8.30 — 3.00" },
    ],
    address: ["14 Little Nook Lane", "Newtown, London E1 7QX"],
    phone: "020 7946 0101",
    email: "hello@littlenook.test",
    geo: { lat: 51.52, lng: -0.07 },
  },

  footer: {
    meta: "Little Nook Cafe · 14 Little Nook Lane · est. 2023",
    copyright: "© 2026 Little Nook Cafe. All sunny things welcome.",
  },
} as const;

export type Site = typeof site;
