'use client';

import Aurora from "@/components/Aurora";
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
    <div className="font-victor-mono italic text-center text-2xl min-h-screen relative flex items-center justify-center overflow-hidden">
      
      {/* Aurora canvas that fills the screen but keeps min dimensions */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="w-full h-full min-w-[768px] min-h-[600px] mx-auto">
          <Aurora
            isDarkTheme={isDark}
            colorStops={auroraColors}
            blend={0.5}
            amplitude={1.0}
          />
        </div>
      </div>

      <div className="z-10">
        AAAAAAAAAAAAAAAAAAAAAAAAAAAA
      </div>
    </div>
  );
}
