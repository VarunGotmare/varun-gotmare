'use client';

import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'Bluehost',
    description: 'A Quillbot-style AI writing assistant.',
    image: '/projects/bluehost.png',
    github: 'https://github.com/varun-gotmare/bluehost',
  },
  {
    title: 'FastPrep AI',
    description: 'AI-powered JEE/NEET prep platform with mock tests.',
    image: '/projects/fastprep.png',
    github: 'https://github.com/varun-gotmare/fastprep-ai',
  },
];

export default function ProjectsCard() {
  return (
    <div className="flex flex-col h-full justify-between">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Projects</h2>
        <Link
          href="/projects"
          className="text-sm  hover:text-gray-600 transition"
        >
          See all
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {projects.map((project, idx) => (
          <Link
            href={project.github}
            key={idx}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-lg shadow-md border border-white/10 dark:border-white/20 bg-white/20 dark:bg-white/5 hover:scale-[1.01] transition-all"
          >
            {/* Image */}
            <div className="w-full aspect-[3/2] relative">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-all duration-300 group-hover:brightness-[0.4]"
              />
            </div>

            {/* Overlay Text on Hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-semibold text-sm bg-black/60 px-4 py-2 rounded">
                View on GitHub
              </span>
            </div>

            {/* Title + Desc */}
            <div className="p-3">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
