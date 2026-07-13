import { MessageCircle } from "lucide-react";
import { SITE, waLink } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={waLink(`Halo ${SITE.name}, saya ingin menanyakan ketersediaan motor.`)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-medium text-whatsapp-foreground shadow-card transition hover:scale-105"
    >
      <MessageCircle className="size-5" />
      <span className="hidden sm:inline">Chat WhatsApp</span>
    </a>
  );
}
