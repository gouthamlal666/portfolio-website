import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

const PHONE_NUMBER = "+918590485146";
const WHATSAPP_LINK = "https://wa.me/918590485146";

export const FloatingContactButtons = () => {
  return (
    <div className="fixed right-4 bottom-6 sm:right-6 sm:bottom-8 z-50 flex flex-col gap-3">
      <motion.a
        href={`tel:${PHONE_NUMBER}`}
        aria-label="Call now"
        whileHover={{ y: -2, scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-14 h-14 rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow flex items-center justify-center"
      >
        <span className="absolute inset-0 rounded-2xl border border-primary-foreground/30 animate-ping" />
        <Phone size={22} className="relative z-10" />
      </motion.a>

      <motion.a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        whileHover={{ y: -2, scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 2.8, delay: 0.25, repeat: Infinity, ease: "easeInOut" }}
        className="w-14 h-14 rounded-2xl bg-[#25D366] text-white shadow-elevated flex items-center justify-center"
      >
        <MessageCircle size={22} />
      </motion.a>
    </div>
  );
};
