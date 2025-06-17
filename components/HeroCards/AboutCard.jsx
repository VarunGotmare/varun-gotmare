'use client';

import Image from 'next/image';
import { FaInstagram, FaGithub, FaLinkedin, FaSpotify } from 'react-icons/fa';


export default function AboutCard() {
  return (
    <div className="flex flex-col items-start justify-between text-left w-full h-full">
      {/* Profile Section */}
      <div className="flex flex-col items-start gap-3 w-full">
        <div className="w-full max-w-[366px] aspect-[4/5] relative rounded-xl overflow-hidden border border-white/30 shadow-lg">
          <Image
            src="/photos/profile.png"
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="text-4xl font-semibold mb-2 ">Hi, I'm <br></br><span className='italic text-rose-500'>Varun Gotmare</span></h2>
          <p className='text-sm leading-relaxed '>
            Creative and driven Computer Science student with a passion for building intuitive web experiences and leading impactful tech initiatives.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className=" w-full">
        <h3 className="text-3xl font-bold mb-4">
          Let’s<br></br> work together <span className="animate-waving-hand inline-block">👋</span>
        </h3>
        <div className="flex gap-4">
          <a
            href="#contact"
            className="inline-block px-6 py-2 rounded-lg text-base font-medium shadow-md transition hover:scale-105 bg-rose-200 dark:bg-rose-500 text-black dark:text-white"
          >
            Let’s Talk
          </a>
          <a
            href="https://varun-resume.tiiny.site"
            target="https://varun-resume.tiiny.site"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 rounded-lg text-base font-medium shadow-md transition hover:scale-105 bg-rose-200 dark:bg-rose-500 text-black dark:text-white"
          >
            Resume
          </a>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-6 mt-6 w-full">
        <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} className="hover:scale-110 transition" />
        </a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} className="hover:scale-110 transition" />
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} className="hover:scale-110 transition" />
        </a>
        <a href="https://spotify.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaSpotify size={24} className="hover:scale-110 transition" />
        </a>
      </div>
    </div>
  );
}
