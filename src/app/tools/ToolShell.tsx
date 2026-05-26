"use client";

import Link from "next/link";
import s from "./tools.module.css";

export default function ToolShell({
  emoji,
  title,
  sub,
  children,
}: {
  emoji: string;
  title: string;
  sub: string;
  children: React.ReactNode;
}) {
  return (
    <div className={s.shell}>
      <nav className={s.topBar}>
        <Link href="/tools" className={s.topBarBack}>
          ← Dashboard
        </Link>
        <span className={s.topBarTitle}>Veluc Wellness Tools</span>
      </nav>
      <div className={s.page}>
        <span className={s.pageEmoji}>{emoji}</span>
        <h1 className={s.pageTitle}>{title}</h1>
        <p className={s.pageSub}>{sub}</p>
        {children}
      </div>
    </div>
  );
}
