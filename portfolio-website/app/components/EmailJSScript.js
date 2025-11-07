"use client";

import Script from "next/script";

export default function EmailJSScript() {
  const fallbackPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

  const initializeEmailJs = () => {
    if (typeof window === "undefined") {
      return;
    }

    const config = window.EMAILJS_CONFIG || {};
    const publicKey = config.publicKey || fallbackPublicKey;

    if (!window.emailjs || typeof window.emailjs.init !== "function") {
      console.error("EmailJS library is unavailable after loading.");
      return;
    }

    if (!publicKey) {
      console.error(
        "EmailJS public key is missing. Set NEXT_PUBLIC_EMAILJS_PUBLIC_KEY or window.EMAILJS_CONFIG.publicKey."
      );
      return;
    }

    try {
      window.emailjs.init(publicKey);
    } catch (error) {
      console.error("Failed to initialize EmailJS:", error);
    }
  };

  return (
    <Script
      src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
      strategy="afterInteractive"
      onLoad={initializeEmailJs}
      onError={(error) => {
        console.error("Failed to load EmailJS script:", error);
      }}
    />
  );
}
