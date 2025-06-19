import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-300 dark:border-neutral-700 px-6 py-12 font-victor-mono bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 items-center text-center sm:text-left">
        {/* Left: Socials */}
        <div className="space-y-3">
          <h4 className="font-medium uppercase tracking-wide text-xs text-neutral-500 dark:text-neutral-400">
            Connect
          </h4>
          <div className="flex flex-col gap-2 text-base">
            <Link
              href="https://github.com/VarunGotmare"
              className="hover:underline flex gap-2 items-center"
              target="_blank"
            >
              <FaGithub className="text-xl" /> @VarunGotmare
            </Link>
            <Link
              href="https://linkedin.com/in/varungotmare"
              className="hover:underline flex gap-2 items-center"
              target="_blank"
            >
              <FaLinkedin className="text-xl" /> @varungotmare
            </Link>
            <Link
              href="https://instagram.com/yourusername"
              className="hover:underline flex gap-2 items-center"
              target="_blank"
            >
              <FaInstagram className="text-xl" /> @yourusername
            </Link>
            <Link
              href="mailto:varun@example.com"
              className="hover:underline flex gap-2 items-center"
            >
              <FaEnvelope className="text-xl" /> varun@example.com
            </Link>
          </div>
        </div>

        {/* Center: Quote + CTA */}
        <div className="text-center sm:mx-auto space-y-4">
          <h2 className="text-xl italic font-medium opacity-90">
            “I do all of that and a lot more.”
          </h2>
          <Link
            href="#contact"
            className="inline-block mt-2 px-5 py-2 border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black text-sm font-medium rounded-md transition"
          >
            Work with me
          </Link>
        </div>

        {/* Right: Location */}
        <div className="space-y-3 sm:text-right">
          <h4 className="font-medium uppercase tracking-wide text-xs text-neutral-500 dark:text-neutral-400">
            Currently At
          </h4>
          <p>Nagpur, India</p>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            21.1458° N, 79.0882° E
          </p>
        </div>
      </div>
    </footer>
  );
}
