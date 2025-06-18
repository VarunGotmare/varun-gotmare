'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Cover } from '@/components/ace/cover';
import projects from '@/data/projects';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Aurora from '@/components/Aurora';
import clsx from 'clsx';



export default function ProjectsPage() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = resolvedTheme === 'dark';

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const auroraColors = isDark
    ? ['#3A29FF', '#FF94B4', '#FF3232']
    : ['#ffc8dd', '#fcd5ce', '#bde0fe'];

  return (
    <div className="relative min-h-screen overflow-hidden font-victor-mono">
     {/* Aurora BG */}
<div
  className={clsx(
    'absolute inset-0 -z-10 pointer-events-none transition-opacity duration-500',
    isDark ? 'opacity-40' : 'opacity-100'
  )}
>
  <Aurora
    isDarkTheme={isDark}
    colorStops={auroraColors}
    blend={0.3}
    amplitude={0.6}
  />
</div>


      {/* Foreground Content */}
      <section className="relative z-10 mt-4 px-4 sm:px-6 py-12">
        <h1 className="text-5xl md:text-6xl font-bold mt-16 mb-10 text-center">
          <Cover>My Projects</Cover>
        </h1>

        <div className="mx-auto max-w-screen-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((proj, i) => (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group relative bg-white/20 dark:bg-black/30 border border-neutral-200 dark:border-neutral-800 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={proj.img}
                    alt={proj.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform group-hover:scale-105"
                  />
                </div>

                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-semibold">{proj.title}</h3>
                  <p className="text-sm text-muted-foreground">{proj.description}</p>
                </div>

                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                  <Link href={proj.link} target="_blank" rel="noopener noreferrer">
                    <span className="bg-rose-500 text-white text-sm px-4 py-2 rounded-md font-medium shadow hover:bg-rose-600 transition">
                      View on GitHub
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}