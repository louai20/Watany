"use client";

import { useState } from "react";
import { FaTelegramPlane, FaTimes } from "react-icons/fa"; // Import Telegram and Exit (X) icons

const TelegramWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Floating button with the image as the widget */}
      <img
        src="/widget.svg" // Path to your SVG image in the public folder
        alt="Widget Icon"
        className="cursor-pointer w-16 h-16" // Set the size of the image as the widget button
        onClick={() => setIsOpen(!isOpen)} // Toggle popup visibility on click
      />

      {/* Popup chat box */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 mt-2 p-4 bg-white border rounded-lg shadow-md w-64 text-right animate__animated animate__fadeIn animate__faster">
          {/* Text at the top */}
          <p className="text-sm font-semibold text-gray-700 mb-3">
            :تحدث مع المساعد على تيليجرام
          </p>

          {/* Telegram chat link */}
          <a
            href="https://t.me/Watany_gov_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-2 text-blue-500 font-semibold hover:underline flex items-center"
          >
            <FaTelegramPlane className="mr-2" /> فتح دردشة تيليجرام
          </a>

          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          >
            <FaTimes size={18} />
          </button>
        </div>
      )}
    </div>
  );
};

export default TelegramWidget;
