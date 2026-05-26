import type { Metadata } from "next";
import AccessGuard from "./AccessGuard";
import AppShell from "./AppShell";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  return (
    <AccessGuard>
      <AppShell>{children}</AppShell>
    </AccessGuard>
  );
}
