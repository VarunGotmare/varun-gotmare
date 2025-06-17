'use client';

import Image from 'next/image';
import { Open_Sans } from 'next/font/google';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
});

const baseExpertAreas = [
  { name: 'Git', icon: '/icons/git.svg' },
  { name: 'Flutter', icon: '/icons/flutter.svg' },
  { name: 'JavaScript', icon: '/icons/javascript.svg' },
  { name: 'Figma', icon: '/icons/figma.svg' },
  { name: 'Firebase', icon: '/icons/firebase.svg' },
];

export default function ExpertAreasCard() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  const expertAreas = [
    ...baseExpertAreas.slice(0, 2),
    {
      name: 'Next.js',
      icon: isDark ? '/icons/next-white.svg' : '/icons/next-black.svg',
    },
    ...baseExpertAreas.slice(2),
  ];

  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        <h2 className="text-2xl font-bold mb-6">My Expert Areas</h2>
        <div className="grid grid-cols-3 gap-6">
          {expertAreas.map((area) => (
            <div key={area.name} className="flex flex-col items-center text-center">
              <div className="bg-neutral-200 dark:bg-neutral-800 rounded-lg p-4 flex items-center justify-center w-20 mb-2">
                <Image
                  src={area.icon}
                  alt={`${area.name} icon`}
                  width={32}
                  height={32}
                />
              </div>
              <span className={`text-sm font-medium ${openSans.className}`}>
                {area.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
