'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Aurora from '@/components/Aurora';
import Footer from '@/components/Footer';
import ProfileCard from '@/components/ProfileCard';

export default function AboutPage() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  const auroraColors = isDark
    ? ['#3A29FF', '#FF94B4', '#FF3232']
    : ['#ffc8dd', '#fcd5ce', '#bde0fe'];

  return (
    <div className="relative min-h-screen w-full font-victor-mono overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-40 dark:opacity-20">
        <Aurora
          isDarkTheme={isDark}
          colorStops={auroraColors}
          blend={0.3}
          amplitude={0.6}
        />
      </div>

      {/* Page Content */}
      <main className="flex flex-col px-4 pt-24 pb-20 max-w-6xl mx-auto space-y-12">
        {/* Top Section with ProfileCard and Intro */}
        <section className="flex flex-col md:flex-row gap-10">
          <div className="w-full max-w-xs shrink-0">
            <ProfileCard />
          </div>
          <div className="flex-1 flex flex-col justify-start">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Me</h1>
            <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Hey there! I'm Varun Gotmare — a passionate full-stack developer and creative technologist based in India. With a background that blends tech development, UI/UX design, hackathon hosting, and digital storytelling, I bring a unique blend of logic and creativity to every project I take on.
            </p>
          </div>
        </section>

        {/* Additional About Content Below */}
        <section className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed space-y-5">
          <p>
            My journey into tech started out of pure curiosity and a love for building things. Over time, that curiosity evolved into a purposeful drive — to create digital solutions that are not only functional but meaningful. Whether it's building full-stack web apps, mobile apps with Flutter, or designing intuitive user interfaces, I’m always fueled by the thrill of solving real-world problems through code.
          </p>
          <p>
            Every product I create is guided by one core idea — <strong>if it doesn’t solve a problem I’ve faced, it should solve one someone else cares deeply about</strong>. That’s why I focus on:
          </p>
          <ul className="list-disc ml-6">
            <li>Building with empathy and intention</li>
            <li>Designing with user experience at the center</li>
            <li>Delivering features that are both useful and delightful</li>
          </ul>
          <p>
            My multidisciplinary background allows me to wear multiple hats across the product cycle:
          </p>
          <ul className="list-disc ml-6">
            <li><strong>Web & App Development:</strong> React, Next.js, Flutter, Node.js, Firebase, and more</li>
            <li><strong>Product Thinking:</strong> Crafting meaningful, user-first solutions</li>
            <li><strong>UI/UX Design:</strong> Focused on clarity, accessibility, and flow</li>
            <li><strong>Project & Community Leadership:</strong> Hosting hackathons, leading college tech clubs</li>
            <li><strong>Version Control & Dev Tools:</strong> Git, Docker, VSCode, and CI/CD pipelines</li>
          </ul>
          <p>
            I believe great design is functional design. I care deeply about:
          </p>
          <ul className="list-disc ml-6">
            <li><strong>Performance First:</strong> Speed, responsiveness, and minimal friction</li>
            <li><strong>Clean Interfaces:</strong> Visually elegant and intuitive layouts</li>
            <li><strong>Accessibility:</strong> Everyone should feel welcome using the app</li>
            <li><strong>Details Matter:</strong> From micro-interactions to hover effects, I sweat the small stuff</li>
          </ul>
          <p>
            Whether you're a startup looking for a dev, a designer with a bold vision, or just someone who loves talking tech — I’m always up for new opportunities and collaborations.
          </p>
          <p>
            Thanks for stopping by my digital home. Let’s build something awesome together!
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
