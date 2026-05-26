"use client";

import { useState, useEffect } from "react";
import s from "./sales.module.css";

const CHECKOUT_URL = "https://selar.com/442894izk7";

export default function ExitIntent() {
  const [show, setShow] = useState(false);
  const [fired, setFired] = useState(false);

  useEffect(() => {
    // Desktop: mouse leaves viewport from top
    function onMouseLeave(e: MouseEvent) {
      if (e.clientY <= 5 && !fired) {
        setShow(true);
        setFired(true);
      }
    }

    // Mobile: fast upward scroll (back gesture)
    let lastY = window.scrollY;
    let lastTime = Date.now();
    function onScroll() {
      const y = window.scrollY;
      const now = Date.now();
      const velocity = (lastY - y) / (now - lastTime); // px/ms
      if (velocity > 2 && y < 200 && !fired) {
        setShow(true);
        setFired(true);
      }
      lastY = y;
      lastTime = now;
    }

    document.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("scroll", onScroll);
    };
  }, [fired]);

  if (!show) return null;

  return (
    <div className={s.exitOverlay} onClick={() => setShow(false)}>
      <div className={s.exitModal} onClick={(e) => e.stopPropagation()}>
        <button className={s.exitClose} onClick={() => setShow(false)} aria-label="Close">✕</button>

        <div className={s.exitEmoji}>🪞</div>
        <h2 className={s.exitTitle}>
          Wait — are you sure you want to leave?
        </h2>
        <p className={s.exitBody}>
          You came to this page for a reason. Your belly hasn&apos;t changed
          yet — and closing this page won&apos;t change that.
        </p>
        <p className={s.exitBody}>
          <strong>247 Nigerian mothers</strong> almost left this page too.
          The ones who stayed? They are now fitting into clothes they haven&apos;t
          worn in over a year.
        </p>
        <div className={s.exitQuestion}>
          Are you ready to let this be the <em>last time</em> you feel this way?
        </div>

        <a href={CHECKOUT_URL} className={s.exitBtn}>
          ✅ Yes — I Want My Flat Belly
        </a>
        <button className={s.exitDismiss} onClick={() => setShow(false)}>
          No thanks, I&apos;ll stay the same
        </button>
      </div>
    </div>
  );
}
