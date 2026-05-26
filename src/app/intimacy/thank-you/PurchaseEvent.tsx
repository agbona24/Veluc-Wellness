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
        value: 12000,
        currency: "NGN",
        content_name: "Intimacy Reset",
        content_type: "product",
      });
    }
  }, []);

  return null;
}
