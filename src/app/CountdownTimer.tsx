"use client";

import { useState, useEffect } from "react";
import s from "./sales.module.css";

const DURATION_MS = 24 * 60 * 60 * 1000; // 24 hours rolling

export default function CountdownTimer() {
  const [time, setTime] = useState({ h: "23", m: "59", s: "59" });

  useEffect(() => {
    let endTime = Number(localStorage.getItem("veluc_countdown_end") ?? "0");
    if (!endTime || endTime < Date.now()) {
      endTime = Date.now() + DURATION_MS;
      localStorage.setItem("veluc_countdown_end", String(endTime));
    }

    function tick() {
      const diff = Math.max(0, endTime - Date.now());
      if (diff === 0) {
        endTime = Date.now() + DURATION_MS;
        localStorage.setItem("veluc_countdown_end", String(endTime));
      }
      setTime({
        h: String(Math.floor(diff / 3_600_000)).padStart(2, "0"),
        m: String(Math.floor((diff % 3_600_000) / 60_000)).padStart(2, "0"),
        s: String(Math.floor((diff % 60_000) / 1_000)).padStart(2, "0"),
      });
    }

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={s.countdownWrap}>
      <p className={s.countdownLabel}>⏰ This discounted price expires in:</p>
      <div className={s.countdownBlocks}>
        <div className={s.countdownBlock}>
          <span className={s.countdownNum}>{time.h}</span>
          <span className={s.countdownUnit}>HRS</span>
        </div>
        <span className={s.countdownColon}>:</span>
        <div className={s.countdownBlock}>
          <span className={s.countdownNum}>{time.m}</span>
          <span className={s.countdownUnit}>MIN</span>
        </div>
        <span className={s.countdownColon}>:</span>
        <div className={s.countdownBlock}>
          <span className={s.countdownNum}>{time.s}</span>
          <span className={s.countdownUnit}>SEC</span>
        </div>
      </div>
    </div>
  );
}
