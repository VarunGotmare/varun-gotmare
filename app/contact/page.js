'use client';

import { useState, useEffect } from 'react';
import Aurora from '@/components/Aurora';
import { useTheme } from 'next-themes';
import clsx from 'clsx';
import { FlipWords } from '@/components/ace/flip-words'; // 👈 Install from Aceternity UI

export default function ContactPage() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  const auroraColors = isDark
    ? ['#3A29FF', '#FF94B4', '#FF3232']
    : ['#ffc8dd', '#fcd5ce', '#bde0fe'];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('Message sent!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (err) {
      setStatus('Something went wrong.');
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden font-victor-mono">
      {/* Aurora BG */}
      <div
        className={clsx(
          'absolute inset-0 -z-10 pointer-events-none transition-opacity duration-500',
          isDark ? 'opacity-40' : 'opacity-90'
        )}
      >
        <Aurora
          isDarkTheme={isDark}
          colorStops={auroraColors}
          blend={0.3}
          amplitude={0.6}
        />
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-20 flex flex-col items-center">
        {/* ✨ Animated Header */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4 text-center dark:text-white text-neutral-900">
          <FlipWords
            words={['Let\'s Talk', 'Reach Out', 'Drop a Line', 'Say Hello']}
          />
        </h1>

        {/* 📩 Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full backdrop-blur-md rounded-2xl p-6 sm:p-8 border dark:border-white/10 border-black/10 bg-white/60 dark:bg-neutral-900/50 shadow-xl transition"
        >
          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="p-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-black/20 text-black dark:text-white placeholder:text-neutral-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="p-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-black/20 text-black dark:text-white placeholder:text-neutral-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="p-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-black/20 text-black dark:text-white placeholder:text-neutral-500"
            />
            <button
              type="submit"
              className="bg-black dark:bg-white text-white dark:text-black font-medium py-2 px-6 rounded-lg hover:scale-[1.03] transition"
            >
              Send Message
            </button>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">{status}</p>
          </div>
        </form>
      </div>
    </div>
  );
}
