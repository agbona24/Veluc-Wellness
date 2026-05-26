"use client";

import { useState, useEffect } from "react";
import s from "./sales.module.css";

const EXPLORE_URL = "/tools";

export default function StickyBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 700);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed || !visible) return null;

  return (
    <div className={s.stickyBar}>
      <div className={s.stickyBarInner}>
        <div className={s.stickyBarInfo}>
          <span className={s.stickyBarTitle}>See exactly what you&apos;re getting</span>
          <span className={s.stickyBarPrice}>Try the bonus free — 60 seconds</span>
        </div>
        <a href={EXPLORE_URL} className={s.stickyBarBtn}>
          Explore the Guide →
        </a>
        <button className={s.stickyBarClose} onClick={() => setDismissed(true)} aria-label="Close">
          ✕
        </button>
      </div>
    </div>
  );
}
