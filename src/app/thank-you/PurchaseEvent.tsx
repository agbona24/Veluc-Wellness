"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export default function PurchaseEvent() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Purchase", {
        value: 9800,
        currency: "NGN",
        content_name: "21-Day Postpartum Belly Flatten Guide",
        content_type: "product",
      });
    }
  }, []);

  return null;
}
