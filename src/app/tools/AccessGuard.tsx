"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AccessGuard({ children }: { children: React.ReactNode }) {
  const [allowed, setAllowed] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (
      process.env.NODE_ENV === "development" ||
      localStorage.getItem("veluc_buyer") === "1"
    ) {
      setAllowed(true);
    } else {
      router.replace("/");
    }
  }, [router]);

  if (!allowed) return null;
  return <>{children}</>;
}
