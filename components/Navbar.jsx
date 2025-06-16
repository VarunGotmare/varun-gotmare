'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const navItems = [
  { name: 'home', href: '/' },
  { name: 'projects', href: '/projects' },
  { name: 'about', href: '/about' },
  { name: 'contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex gap-2 rounded-full px-4 py-3 shadow-md backdrop-blur-sm border border-gray-500 dark:border-white font-victor-mono bg-transparent">
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={clsx(
              'rounded-full px-4 py-1.5 text-sm transition-all duration-300',
              isActive
                ? 'italic font-semibold text-black dark:text-white shadow-[0_0_10px_rgba(0,0,0,0.3)] dark:shadow-[0_0_8px_rgba(255,255,255,0.4),0_0_16px_rgba(255,255,255,0.3)]'
                : 'text-gray-800 dark:text-gray-100 '
            )}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}
