// app/layout.js
import { Open_Sans, Victor_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ModeToggle from "@/components/ThemeToggle";
import Navbar from "@/components/Navbar";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const victorMono = Victor_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-victor-mono',
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export const metadata = {
  title: "My Portfolio",
  description: "Welcome to my portfolio site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${openSans.variable} ${victorMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen">
            {/* 🌓 Theme toggle in top-right */}
            <div className="absolute top-4 right-4 z-50 mt-2 mr-1 ml-1">
              <ModeToggle />
            </div>

            {/* 🧭 Centered top navbar */}
            <Navbar />

            {/* Page content */}
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
