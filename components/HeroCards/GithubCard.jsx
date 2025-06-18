'use client';

import GitHubCalendar from 'react-github-calendar';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function GitHubContributionsCard() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full h-full overflow-auto">
      <h2 className="text-xl font-bold mb-4">GitHub Contributions</h2>
      <GitHubCalendar
        username="VarunGotmare"
        colorScheme={resolvedTheme === 'dark' ? 'dark' : 'light'}
        blockSize={12}
        blockMargin={3}
        fontSize={14}
        style={{ width: '100%' }}
      />
    </div>
  );
}
