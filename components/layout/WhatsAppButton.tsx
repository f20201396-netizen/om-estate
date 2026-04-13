"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WA_NUMBER = "919810071925"; // Replace with actual number

export default function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${WA_NUMBER}?text=Hello%2C%20I%27m%20interested%20in%20a%20property%20at%20OM%20Estate%20Faridabad.`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 300 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-2xl"
      style={{ boxShadow: "0 0 0 0 rgba(37, 211, 102, 0.5)" }}
    >
      <span
        className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30"
        style={{ animationDuration: "2s" }}
      />
      <MessageCircle size={26} fill="white" color="white" />
    </motion.a>
  );
}
