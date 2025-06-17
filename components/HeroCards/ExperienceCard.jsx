'use client';

import { useEffect, useState } from 'react';
import { FaBriefcase, FaUsers, FaRobot, FaCamera } from 'react-icons/fa';

const experiences = [
  {
    year: 'Oct 2024',
    role: 'Freelance Social Media Manager',
    place: 'Breakfast Story Cafe',
    icon: <FaCamera className="text-pink-400" />,
  },
  {
    year: 'Mar 2024 - Present',
    role: 'Freelance Discord Bot Developer',
    place: '',
    icon: <FaRobot className="text-purple-400" />,
  },
  {
    year: 'June 2023 - Present',
    role: 'Core Member',
    place: 'Department Forum',
    icon: <FaUsers className="text-blue-400" />,
  },
  {
    year: 'Aug 2022 - Present',
    role: 'B.Tech CSE (Cyber Security)',
    place: 'G.H. Raisoni College',
    icon: <FaBriefcase className="text-green-400" />,
  },
];

export default function ExperienceTimelineCard() {
  const [paused, setPaused] = useState(false);

  return (
    <div
      className="overflow-hidden h-full w-full relative flex flex-col"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <h2 className="text-2xl font-bold mb-4 shrink-0">Work Experience</h2>

      <div className="relative flex-1 overflow-hidden">
        <div
          className={`absolute top-0 flex flex-col gap-6 animate-scroll-timeline ${
            paused ? 'paused' : ''
          }`}
        >
          {[...experiences, ...experiences].map((exp, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 opacity-90 hover:opacity-100 transition"
            >
              <div className="text-2xl">{exp.icon}</div>
              <div>
                <h4 className="text-sm font-semibold">{exp.role}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">{exp.place}</p>
                <p className="text-xs text-gray-400 dark:text-gray-500">{exp.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-scroll-timeline {
          animation: scrollUp 12s linear infinite;
        }

        .paused {
          animation-play-state: paused;
        }

        @keyframes scrollUp {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(-50%);
          }
        }
      `}</style>
    </div>
  );
}
