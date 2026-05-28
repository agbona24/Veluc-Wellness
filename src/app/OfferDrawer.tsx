"use client";

import { useState, useEffect } from "react";
import s from "./sales.module.css";

const CHECKOUT_URL = "https://selar.com/442894izk7";

export default function OfferDrawer() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("veluc_drawer_dismissed") === "1") return;
    const t = setTimeout(() => setShow(true), 75000);
    return () => clearTimeout(t);
  }, []);

  function dismiss() {
    setDismissed(true);
    setShow(false);
    sessionStorage.setItem("veluc_drawer_dismissed", "1");
  }

  if (dismissed || !show) return null;

  return (
    <div className={s.offerDrawer}>
      <button className={s.offerDrawerClose} onClick={dismiss} aria-label="Close">✕</button>
      <div className={s.offerDrawerInner}>
        <div className={s.offerDrawerLeft}>
          <p className={s.offerDrawerTitle}>The 21-Day Postpartum Belly Flatten Guide</p>
          <p className={s.offerDrawerSub}>Lose 2kg+ in 21 days — still eating rice &amp; swallow. 143 of 200 spots taken.</p>
        </div>
        <div className={s.offerDrawerRight}>
          <span className={s.offerDrawerStrike}>₦25,000</span>
          <span className={s.offerDrawerPrice}>₦9,800</span>
          <a href={CHECKOUT_URL} className={s.offerDrawerBtn}>Get Access →</a>
        </div>
      </div>
    </div>
  );
}
