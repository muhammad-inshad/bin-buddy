// Central site configuration.
// IMPORTANT: Replace whatsappNumber with your real WhatsApp Business number
// (country code + number, no spaces, no "+"), e.g. "919876543210".
export const siteConfig = {
  name: "Bin Buddy",
  tagline: "Smart bins. Cleaner spaces.",
  whatsappNumber: "917025034758",
  phoneDisplay: "+91 70250 34758",
  email: "minshad430@gmail.com",
  address: "Mankavu, Kozhikode, Kerala 673007",
  hours: "Mon – Sun, 9:00 AM – 9:00 PM",
  social: {
    instagram: "https://instagram.com/binbuddy",
    facebook: "https://facebook.com/binbuddy",
    twitter: "https://twitter.com/binbuddy",
  },
};

export function buildWhatsAppLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}
