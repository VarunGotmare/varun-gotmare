'use client';

import Aurora from "@/components/Aurora";
import HeroGrid from "@/components/HeroGrid";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Home() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const auroraColors = isDark
    ? ["#3A29FF", "#FF94B4", "#FF3232"]
    : ["#ffc8dd", "#fcd5ce", "#bde0fe"];

  return (
    <div className="font-victor-mono text-2xl min-h-screen relative overflow-x-hidden overflow-y-auto scrollbar-hide">
      {/* Aurora background */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full min-w-[768px] min-h-[600px] mx-auto">
          <Aurora
            isDarkTheme={isDark}
            colorStops={auroraColors}
            blend={0.5}
            amplitude={1.0}
          />
        </div>
      </div>

      {/* Scrollable Hero Grid with top padding for floating nav */}
      <div className="w-full min-h-screen flex items-center justify-center px-4 pt-20 pb-10 z-10">
        <HeroGrid />
      </div>
    </div>
  );
}
