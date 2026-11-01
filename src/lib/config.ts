// Central site configuration.
// IMPORTANT: Replace whatsappNumber with your real WhatsApp Business number
// (country code + number, no spaces, no "+"), e.g. "919876543210".
export const siteConfig = {
  name: "Bin Buddy",
  tagline: "Smart bins. Cleaner spaces.",
  whatsappNumber: "919999999999",
  phoneDisplay: "+91 99999 99999",
  email: "hello@binbuddy.in",
  address: "Near Mavoor Road Junction, Kozhikode, Kerala 673004",
  hours: "Mon – Sat, 8:00 AM – 7:00 PM",
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
