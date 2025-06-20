"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { SparklesCore } from "@/components/ace/sparkles";
import { cn } from "@/lib/utils"; // remove if you're not using shadcn/ui utility

export const Cover = ({ children, className }) => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [beamPositions, setBeamPositions] = useState([]);

  useEffect(() => {
    if (ref.current) {
      const height = ref.current.clientHeight ?? 0;
      setContainerWidth(ref.current.clientWidth ?? 0);
      const numberOfBeams = Math.floor(height / 10);
      const positions = Array.from(
        { length: numberOfBeams },
        (_, i) => (i + 1) * (height / (numberOfBeams + 1))
      );
      setBeamPositions(positions);
    }
  }, [ref.current]);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative group/cover inline-block px-2 py-2 rounded-sm transition duration-200",
        "bg-transparent",
        className
      )}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 0.2 } }}
            className="absolute inset-0 w-full h-full overflow-hidden"
          >
            <motion.div
              animate={{ translateX: ["-50%", "0%"] }}
              transition={{
                translateX: {
                  duration: 10,
                  ease: "linear",
                  repeat: Infinity,
                },
              }}
              className="w-[200%] h-full flex"
            >
              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={500}
                className="w-full h-full"
                particleColor="#FFFFFF"
              />
              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={500}
                className="w-full h-full"
                particleColor="#FFFFFF"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {beamPositions.map((position, index) => (
        <Beam
          key={index}
          hovered={hovered}
          duration={Math.random() * 2 + 1}
          delay={Math.random() * 2 + 1}
          width={containerWidth}
          style={{ top: `${position}px` }}
        />
      ))}

      <motion.span
        key={String(hovered)}
        animate={{
          scale: hovered ? 0.8 : 1,
          x: hovered ? [0, -30, 30, -30, 30, 0] : 0,
          y: hovered ? [0, 30, -30, 30, -30, 0] : 0,
        }}
        exit={{ scale: 1, x: 0, y: 0 }}
        transition={{
          duration: 0.2,
          x: { duration: 0.2, repeat: Infinity, repeatType: "loop" },
          y: { duration: 0.2, repeat: Infinity, repeatType: "loop" },
          scale: { duration: 0.2 },
        }}
        className={cn(
          "relative z-20 inline-block transition duration-200",
          "text-neutral-900 dark:group-hover/cover:text-white dark:text-white"
        )}
      >
        {children}
      </motion.span>

      <CircleIcon className="absolute -right-[2px] -top-[2px]" />
      <CircleIcon className="absolute -bottom-[2px] -right-[2px]" delay={0.4} />
      <CircleIcon className="absolute -left-[2px] -top-[2px]" delay={0.8} />
      <CircleIcon className="absolute -bottom-[2px] -left-[2px]" delay={1.6} />
    </div>
  );
};

export const Beam = ({ className, delay, duration, hovered, width = 600, ...svgProps }) => {
  const id = useId();

  return (
    <motion.svg
      width={width}
      height="1"
      viewBox={`0 0 ${width} 1`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("absolute inset-x-0 w-full", className)}
      {...svgProps}
    >
      <motion.path d={`M0 0.5H${width}`} stroke={`url(#svgGradient-${id})`} />
      <defs>
        <motion.linearGradient
          id={`svgGradient-${id}`}
          key={String(hovered)}
          gradientUnits="userSpaceOnUse"
          initial={{ x1: "0%", x2: hovered ? "-10%" : "-5%", y1: 0, y2: 0 }}
          animate={{ x1: "110%", x2: hovered ? "100%" : "105%", y1: 0, y2: 0 }}
          transition={{
            duration: hovered ? 0.5 : duration ?? 2,
            ease: "linear",
            repeat: Infinity,
            delay: hovered ? Math.random() * 0.8 + 0.2 : 0,
            repeatDelay: hovered ? Math.random() * 1 + 1 : delay ?? 1,
          }}
        >
          <stop stopColor="#2EB9DF" stopOpacity="0" />
          <stop stopColor="#3b82f6" />
          <stop offset="1" stopColor="#3b82f6" stopOpacity="0" />
        </motion.linearGradient>
      </defs>
    </motion.svg>
  );
};

export const CircleIcon = ({ className, delay }) => {
  return (
    <div
      className={cn(
        "pointer-events-none animate-pulse h-2 w-2 rounded-full opacity-20 group-hover/cover:bg-white",
        "bg-neutral-600 dark:bg-white group-hover/cover:hidden",
        className
      )}
      style={{ animationDelay: delay ? `${delay}s` : "0s" }}
    />
  );
};
