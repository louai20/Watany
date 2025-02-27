"use client";

import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import Image from "next/image"; // Make sure you import Next.js's Image component

export function ComingSoonToast() {
  // Calculate the difference between now and March 12th
  const now = new Date();
  const targetDate = new Date("2025-03-12"); // Target date
  const timeDiff = targetDate.getTime() - now.getTime(); // Difference in milliseconds

  // Trigger toast if target date is in the future
  if (timeDiff > 0) {
    toast.custom((t) => (
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 1 }}
        style={{
          background: "#333",
          color: "#fff",
          direction: "rtl",
          fontSize: "18px",
          padding: "16px",
          textAlign: "center",
          borderRadius: "12px",
          maxWidth: "90%",
          margin: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px", // Space between the image and text
        }}
      >
        <Image
          src="/rocket-icon.png" // Replace with the path to your image
          alt="Rocket"
          width={40} // Adjust size of the image
          height={40}
          className="object-contain"
        />
        <div>
          <p>🚀 التطبيق قادم قريبًا!</p>
          <p>سيتم إطلاقه في 12 مارس</p>
        </div>
      </motion.div>
    ));
  }

  return null; // This component does not render anything visually
}
