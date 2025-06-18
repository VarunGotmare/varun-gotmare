'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import AboutCard from './HeroCards/AboutCard';
import ExpertAreasCard from './HeroCards/ExpertCard';
import ExperienceTimelineCard from './HeroCards/ExperienceCard';
import ProjectsCard from './HeroCards/ProjectsCard';
import GitHubCard from './HeroCards/GithubCard';

export default function HeroGrid() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  const glassBox = clsx(
    'rounded-2xl backdrop-blur-md h-full w-full p-5 shadow-lg border transition-all duration-300',
    isDark
      ? 'bg-black/40 border-white/20 text-white'
      : 'bg-white/60 border-black/10 text-black'
  );

  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-5 w-[75%]  max-w-screen-xl auto-rows-fr">
      {/* About Card */}
      <div className={clsx(glassBox, 'col-span-1 row-span-3')}>
        <AboutCard />
      </div>

      {/* Expert Areas */}
      <div className={clsx(glassBox, 'col-span-1')}>
        <ExpertAreasCard />
      </div>

      {/* Projects Card */}
      <div className={clsx(glassBox, 'col-span-1 row-span-2')}>
        <ProjectsCard />
      </div>

      {/* Experience Timeline */}
      <div className={clsx(glassBox, 'col-span-1')}>
        <ExperienceTimelineCard />
      </div>

      {/* GitHub Contributions (placeholder) */}
      <div className={clsx(glassBox, 'col-span-2 ')}>
        <GitHubCard />
      </div>
    </div>
  );
}
