'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { motion as m, scale } from 'motion/react';


export default function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const isDark = resolvedTheme === 'dark';

    const sunPath = "M18 25C21.866 25 25 21.866 25 18C25 14.134 21.866 11 18 11C14.134 11 11 14.134 11 18C11 21.866 14.134 25 18 25Z";
    const moonPath = "M18 25C21.866 25 25 21.866 25 18C18.5702 20.2914 15.6511 16.9515 18 11C14.134 11 11 14.134 11 18C11 21.866 14.134 25 18 25Z";
    const raysVariants = {
        hidden: {
            strokeOpacity: 0,
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
            }
        },
        visible: {
            strokeOpacity: 1,
            transition: {
                staggerChildren: 0.05,
                
            }
        }
    }
    const rayVariant = {
        hidden: {
            pathLength: 0,
            opacity: 0,
            scale: 0.0,

        },
        visible: {
            pathLength: 1,
            opacity: 1,
            scale: 1.0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                pathLength : {duration: 0.3},
                opacity: { duration: 0.2 },
                scale: { duration: 0.2 },
            }
        }   
    }


    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const toggleTheme = () => {
        setTheme(isDark ? 'light' : 'dark');
    };

    return (
        <button className='' onClick={toggleTheme} >
            <m.svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <m.path initial={{ fillOpacity: 0, strokeOpacity: 0 }} animate={resolvedTheme === 'dark' ? {
                    fillOpacity: 0.35, strokeOpacity: 1, rotate: 0, stroke: "var(--color-white)", fill: "var(--color-white)", d: moonPath,rotate:360,scale:2,
                } : { fillOpacity: 0.35, strokeOpacity: 1, rotate: 0, stroke: "var(--color-black)", fill: "var(--color-black)",d: sunPath }} d={sunPath} />
                <m.g variants={raysVariants} initial="hidden" animate={resolvedTheme === "light" ? "visible" : "hidden"} className='stroke-2 stroke-black'>
                    <m.path variants={rayVariant} initial="hidden" animate={resolvedTheme === "light" ? "visible" : "hidden"} d="M18 1V4" />
                    <m.path variants={rayVariant} initial="hidden" animate={resolvedTheme === "light" ? "visible" : "hidden"} d="M18 32V35" />
                    <m.path variants={rayVariant} initial="hidden" animate={resolvedTheme === "light" ? "visible" : "hidden"} d="M6 6L8 8" />
                    <m.path variants={rayVariant} initial="hidden" animate={resolvedTheme === "light" ? "visible" : "hidden"} d="M28 28L30 30" />
                    <m.path variants={rayVariant} initial="hidden" animate={resolvedTheme === "light" ? "visible" : "hidden"} d="M1 18H4" />
                    <m.path variants={rayVariant} initial="hidden" animate={resolvedTheme === "light" ? "visible" : "hidden"} d="M32 18H35" />
                    <m.path variants={rayVariant} initial="hidden" animate={resolvedTheme === "light" ? "visible" : "hidden"} d="M8 28L6 30" />
                    <m.path variants={rayVariant} initial="hidden" animate={resolvedTheme === "light" ? "visible" : "hidden"} d="M30 6L28 8" />
                </m.g>
            </m.svg>


        </button>
    );
}



