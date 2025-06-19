'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { cn } from '@/lib/utils'; // fallback for className merging

export default function ProfileCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={cn(
        "relative w-full max-w-xs sm:max-w-sm p-[2px] rounded-2xl transition-transform duration-300",
        "bg-gradient-to-r from-pink-500 via-blue-500 to-violet-500",
        "hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
      )}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ rotateX: 5, rotateY: -5, scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
    >
      <div className="rounded-2xl bg-white dark:bg-neutral-950 w-full h-full px-4 pt-4 pb-6 text-center relative z-10 min-h-[380px]">
        {/* 🔲 Rectangular Image */}
        <div className="w-full aspect-[4/5] relative rounded-xl overflow-hidden border-2 border-white dark:border-neutral-800 shadow-lg mb-4">
          <Image
            src="/photos/profile.png"
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>

        {/* 🧑 Name & Tagline */}
        <h2 className="text-xl font-semibold dark:text-white text-neutral-900">Varun Gotmare</h2>
        <p className="text-sm mt-1 text-neutral-500 dark:text-neutral-400">Creative Dev & Full Stack Builder</p>
      </div>

      {/* 🌈 Iridescent glow effect on hover */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 rounded-2xl z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-pink-500 via-indigo-500 to-purple-500 opacity-30 blur-2xl"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: 'linear',
            }}
          />
        </motion.div>
      )}
    </motion.div>
  );
}
