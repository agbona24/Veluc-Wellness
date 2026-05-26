"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import s from "./tools.module.css";

type NavItem = { href: string; label: string; icon: string };
type NavGroup = { section: string; items: NavItem[] };

const navGroups: NavGroup[] = [
  {
    section: "",
    items: [
      { href: "/tools",               label: "Home",          icon: "🏠" },
    ],
  },
  {
    section: "Daily Tools",
    items: [
      { href: "/tools/guide",         label: "Guide",         icon: "📗" },
      { href: "/tools/tracker",       label: "Tracker",       icon: "📊" },
      { href: "/tools/checklist",     label: "Habits",        icon: "✅" },
      { href: "/tools/habit-tracker", label: "Habit Grid",    icon: "📋" },
      { href: "/tools/journal",       label: "Journal",       icon: "✏️" },
      { href: "/tools/shopping-list", label: "Shopping",      icon: "🛒" },
      { href: "/tools/planner",       label: "Planner",       icon: "📓" },
    ],
  },
  {
    section: "Food & Nutrition",
    items: [
      { href: "/tools/nutrition",     label: "Nutrition",     icon: "🥗" },
      { href: "/tools/food-swaps",    label: "Food Swaps",    icon: "🍲" },
      { href: "/tools/bloat-foods",   label: "Bloat Foods",   icon: "🚨" },
      { href: "/tools/drinks",        label: "Drinks",        icon: "🥤" },
      { href: "/tools/parties",       label: "Parties",       icon: "🎉" },
      { href: "/tools/event-recovery",label: "After Events",  icon: "🔄" },
    ],
  },
  {
    section: "Fitness & Confidence",
    items: [
      { href: "/tools/workout",       label: "Workout",       icon: "🏃" },
      { href: "/tools/debloat",       label: "48H Debloat",   icon: "⚡" },
      { href: "/tools/affirmations",  label: "Affirmations",  icon: "💛" },
    ],
  },
  {
    section: "Support",
    items: [
      { href: "/tools/help",          label: "Help & Tour",   icon: "❓" },
    ],
  },
];

// Flat list for active-state lookups
const allNavItems: NavItem[] = navGroups.flatMap((g) => g.items);

// Bottom tab bar — fixed 5 primary tools
const bottomTabs: NavItem[] = [
  { href: "/tools",               label: "Home",    icon: "⌂" },
  { href: "/tools/guide",         label: "Guide",   icon: "▣" },
  { href: "/tools/tracker",       label: "Tracker", icon: "↗" },
  { href: "/tools/checklist",     label: "Habits",  icon: "✓" },
  { href: "/tools/journal",       label: "Journal", icon: "✎" },
];

const pageTitles: Record<string, string> = {
  "/tools":                "Dashboard",
  "/tools/guide":          "21-Day Guide",
  "/tools/tracker":        "Belly Tracker",
  "/tools/checklist":      "Daily Habits",
  "/tools/habit-tracker":  "Daily Habit Tracker",
  "/tools/shopping-list":  "Shopping List",
  "/tools/journal":        "My Journal",
  "/tools/planner":        "21-Day Planner",
  "/tools/nutrition":      "Nutrition Guide",
  "/tools/workout":        "Workout Guide",
  "/tools/food-swaps":     "Food Swap Guide",
  "/tools/parties":        "Party Eating Guide",
  "/tools/debloat":        "48-Hour Debloat Reset",
  "/tools/drinks":         "Drink Recipes",
  "/tools/bloat-foods":    "Bloat Foods Guide",
  "/tools/event-recovery": "Event Recovery",
  "/tools/affirmations":   "Affirmation Cards",
  "/tools/help":           "Help & Tour",
};


export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("veluc_sidebar_collapsed");
    if (saved === "1") setCollapsed(true);
  }, []);

  function toggleSidebar() {
    const next = !collapsed;
    setCollapsed(next);
    localStorage.setItem("veluc_sidebar_collapsed", next ? "1" : "0");
  }

  const pageTitle = pageTitles[pathname] ?? "Veluc Wellness";

  return (
    <div className={s.appShell}>
      {/* ── Desktop sidebar ── */}
      <aside className={`${s.sidebar} ${collapsed ? s.sidebarCollapsed : ""}`}>
        <div className={s.sidebarTop}>
          <div className={s.sidebarBrand}>
            <span className={s.sidebarBrandIcon}>🌿</span>
            {!collapsed && <span className={s.sidebarBrandName}>Veluc Wellness</span>}
          </div>
        </div>

        <nav className={s.sidebarNav}>
          {navGroups.map((group) => (
            <div key={group.section || "top"}>
              {group.section && !collapsed && (
                <span className={s.sidebarSectionLabel}>{group.section}</span>
              )}
              {group.section && collapsed && <div className={s.sidebarDivider} />}
              {group.items.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`${s.sidebarNavItem} ${active ? s.sidebarNavItemActive : ""}`}
                    title={collapsed ? item.label : undefined}
                  >
                    <span className={s.sidebarNavIcon}>{item.icon}</span>
                    {!collapsed && <span className={s.sidebarNavLabel}>{item.label}</span>}
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>

        <div className={s.sidebarBottom}>
          <Link href="/tools/profile" className={s.sidebarProfileLink} title="Edit profile">
            <span>👤</span>
            {!collapsed && <span>Edit Profile</span>}
          </Link>
          <button className={s.sidebarToggleBtn} onClick={toggleSidebar}>
            {collapsed ? "→" : <><span>←</span><span>Collapse</span></>}
          </button>
        </div>
      </aside>

      {/* ── Main area ── */}
      <div className={s.appMain}>
        {/* Mobile top bar */}
        <header className={s.appTopBar}>
          <span className={s.appTopBarBrand}>🌿</span>
          <span className={s.appTopBarTitle}>{pageTitle}</span>
          <Link href="/tools/profile" className={s.appTopBarProfile} title="Edit profile">👤</Link>
        </header>

        {/* Scrollable content */}
        <div className={s.appContent}>
          {children}
        </div>

        {/* Mobile bottom tab bar — 5 main daily tools */}
        <nav className={s.bottomNav}>
          {bottomTabs.map((tab) => {
            const active = pathname === tab.href;
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`${s.bottomTab} ${active ? s.bottomTabActive : ""}`}
              >
                <span className={s.bottomTabIcon}>{tab.icon}</span>
                <span className={s.bottomTabLabel}>{tab.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
