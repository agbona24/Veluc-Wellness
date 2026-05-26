"use client";

import { useEffect, useState } from "react";
import s from "../tools.module.css";

type Item = { id: string; label: string; note?: string };
type Section = { title: string; items: Item[]; avoid?: boolean };

const sections: Section[] = [
  {
    title: "🥩 Proteins",
    items: [
      { id: "p1", label: "Chicken (drumsticks or breast)", note: "At least 6 pieces" },
      { id: "p2", label: "Fresh catfish", note: "2–3 medium fish" },
      { id: "p3", label: "Stockfish / panla (dried)", note: "For soups" },
      { id: "p4", label: "Eggs", note: "At least 1 tray (30 eggs)" },
      { id: "p5", label: "Ponmo (cow skin)", note: "Occasional — not every meal" },
      { id: "p6", label: "Crayfish (ground)", note: "For soups" },
    ],
  },
  {
    title: "🍲 Soups & Ingredients",
    items: [
      { id: "s1", label: "Egusi (ground melon seeds)" },
      { id: "s2", label: "Bitter leaf (ofe onugbu) — fresh or dried" },
      { id: "s3", label: "Okra (fresh or dried, ground)" },
      { id: "s4", label: "Ogbono seeds" },
      { id: "s5", label: "Palm oil", note: "Small quantity" },
      { id: "s6", label: "Seasoning cubes", note: "Reduce where you can" },
      { id: "s7", label: "Ugu leaves (pumpkin leaves)", note: "Fresh" },
    ],
  },
  {
    title: "🥦 Vegetables",
    items: [
      { id: "v1", label: "Spinach (fresh)" },
      { id: "v2", label: "Cucumber", note: "Great for snacking between windows" },
      { id: "v3", label: "Garden egg (African eggplant)" },
      { id: "v4", label: "Tomatoes (fresh)" },
      { id: "v5", label: "Onions" },
      { id: "v6", label: "Tatashe + scotch bonnet pepper" },
    ],
  },
  {
    title: "🍊 Fruits",
    items: [
      { id: "f1", label: "Pawpaw (papaya)", note: "Anti-bloating — eat in the morning" },
      { id: "f2", label: "Bananas", note: "1 bunch" },
      { id: "f3", label: "Oranges", note: "6–10 pieces" },
      { id: "f4", label: "Watermelon", note: "Occasional, in portions" },
    ],
  },
  {
    title: "🍚 Carbs (eat at the RIGHT times only)",
    items: [
      { id: "c1", label: "Rice (long grain or parboiled)", note: "Main meal window only" },
      { id: "c2", label: "Garri (for eba)", note: "Small wraps" },
      { id: "c3", label: "Yam", note: "Small portions, main window only" },
      { id: "c4", label: "Sweet potato", note: "Good for breakfast window" },
      { id: "c5", label: "Plantain (ripe)", note: "Light dinner or main window" },
      { id: "c6", label: "Oatmeal", note: "Best breakfast option" },
    ],
  },
  {
    title: "🌙 Nighttime Reset Drink",
    items: [
      { id: "d1", label: "Fresh ginger root", note: "Or ginger powder" },
      { id: "d2", label: "Cinnamon (ground)", note: "A small tin lasts weeks" },
      { id: "d3", label: "Lemons or limes", note: "Optional but helpful" },
    ],
  },
  {
    title: "🚫 Avoid / Reduce These",
    avoid: true,
    items: [
      { id: "a1", label: "Carbonated soft drinks (Coke, Fanta, Sprite, Pepsi)", note: "Major bloat trigger" },
      { id: "a2", label: "Instant noodles as a main meal", note: "Occasional is okay — not daily" },
      { id: "a3", label: "Flat tummy teas / slimming sachets", note: "They damage your digestion" },
      { id: "a4", label: "Fried chin-chin / puff-puff as daily snacks" },
      { id: "a5", label: "Sweetened Milo / Ovaltine with 3+ spoons of sugar" },
    ],
  },
];

const buyIds = sections.filter((s) => !s.avoid).flatMap((sec) => sec.items.map((i) => i.id));
const STORAGE_KEY = "veluc_shopping";

export default function ShoppingListPage() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) setChecked(JSON.parse(raw));
  }, []);

  function toggle(id: string) {
    const next = { ...checked, [id]: !checked[id] };
    setChecked(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }

  function clear() {
    setChecked({});
    localStorage.removeItem(STORAGE_KEY);
  }

  const stocked = buyIds.filter((id) => checked[id]).length;

  return (
    <div className={s.page}>
        <div className={s.shopHeader}>
          <p className={s.shopHeaderTitle}>Anti-Bloating Shopping List 🛒</p>
          <p className={s.shopHeaderSub}>{stocked} of {buyIds.length} items stocked. Tick what you already have at home.</p>
        </div>

        <span className={s.progressLabel}>{stocked} of {buyIds.length} stocked</span>
        <div className={s.progressWrap}>
          <div className={s.progressBar} style={{ width: `${(stocked / buyIds.length) * 100}%` }} />
        </div>
        <span className={s.progressSub}>&nbsp;</span>

        {sections.map((sec) => (
          <div key={sec.title} className={`${s.shopSectionCard} ${sec.avoid ? s.avoidSection : ""}`}>
            <p className={s.shopSectionTitle}>{sec.title}</p>
            {sec.items.map((item) => (
              <div key={item.id} className={s.shopItem} onClick={() => toggle(item.id)}>
                <div className={`${s.shopBox} ${checked[item.id] ? s.shopBoxDone : ""}`}>
                  {checked[item.id] ? "✓" : ""}
                </div>
                <span className={`${s.shopLabel} ${checked[item.id] ? s.shopLabelDone : ""}`}>{item.label}</span>
                {item.note && <span className={s.shopNote}>{item.note}</span>}
              </div>
            ))}
          </div>
        ))}

        <button className={s.outlineBtn} onClick={clear}>Clear All Ticks</button>
    </div>
  );
}
