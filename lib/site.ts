export const SITE = {
  name: "Rental Motor Anda",
  tagline: "Sewa motor mudah, cepat, dan terpercaya di Rental Motor Anda",
  whatsapp: "6281234567890",
  whatsappDisplay: "+62 812-3456-7890",
  email: "halo@balimotorent.com",
  address: "Jl. Sunset Road No. 88, Kuta, Badung, Bali 80361",
  hours: "Setiap hari · 07.00 – 22.00 WITA",
  mapsEmbed: "https://www.google.com/maps?q=Sunset+Road+Kuta+Bali&output=embed",
  mapsLink: "https://maps.google.com/?q=Sunset+Road+Kuta+Bali",
};

export const waLink = (text: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
