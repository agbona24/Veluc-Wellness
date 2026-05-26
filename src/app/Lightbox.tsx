"use client";

import { useState, useEffect } from "react";
import s from "./sales.module.css";

export default function Lightbox() {
  const [src, setSrc] = useState<string | null>(null);
  const [alt, setAlt] = useState("");

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const el = (e.target as HTMLElement).closest("[data-lightbox]");
      if (!el) return;
      const img = el.tagName === "IMG"
        ? (el as HTMLImageElement)
        : el.querySelector("img");
      if (img) {
        setSrc((img as HTMLImageElement).src);
        setAlt((img as HTMLImageElement).alt || "");
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setSrc(null);
    }
    if (src) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", onKey);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [src]);

  if (!src) return null;

  return (
    <div className={s.lightboxOverlay} onClick={() => setSrc(null)}>
      <button className={s.lightboxClose} onClick={() => setSrc(null)} aria-label="Close">✕</button>
      <img
        src={src}
        alt={alt}
        className={s.lightboxImg}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}
