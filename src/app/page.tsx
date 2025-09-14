"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

// Icons from Lucide (you can keep using them)
import {
  ImageIcon,
  VideoIcon,
  Zap as RealtimeIcon,
  Sparkles as EnhancerIcon,
  EditIcon,
  Mic as VideoLipsyncIcon,
  Move as MotionTransferIcon,
  Cpu as TrainIcon,
} from "lucide-react";

// Import images
import icon from "@/app/assets/images/kicon.png";
import icon2 from "@/app/assets/images/mobbin.png";

// HeroBanner and FeatureCard are assumed to be imported or defined
// Since we're keeping it simple, I'll assume they're already available
// If they're components, make sure they're Client Components if interactive
import HeroBanner from "@/app/components/HeroBanner";
import FeatureCard from "@/app/components/FeatureCard";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const isDark = savedTheme === "dark" || (!savedTheme && prefersDark);

    if (isDark) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Navigation Items
  const navItems = [
    { name: "Home", href: "/", icon: "🏠" },
    { name: "Gallery", href: "/gallery", icon: "🖼️" },
    { name: "Support", href: "/support", icon: "💡" },
    { name: "Settings", href: "/settings", icon: "⚙️" },
  ];

  return (
    <main
      className={`container mx-auto px-4 py-4 shadow-lg rounded-lg transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <header className="h-16 flex items-center justify-between px-6 bg-transparent">
        {/* Logo & Title */}
        <div className="flex items-center space-x-3">
          <Image src={icon} alt="Krea AI logo" width={18} height={4} />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center space-x-1 transition-colors duration-200 
                   hover:text-blue-600 hover:dark:text-blue-300"
            >
              <span className="text-lg">{item.icon}</span>
              <span className="font-medium text-sm">{item.name}</span>
            </a>
          ))}
        </nav>

        {/* Notification Button */}
        <div className="flex items-center space-x-4">
          <button
            className="p-2 transition-colors duration-200 
                 hover:text-red-600 hover:dark:text-red-400"
          >
            🔔
          </button>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full focus:outline-none transition-colors ${
              isDarkMode
                ? "bg-gray-700 text-yellow-300"
                : "bg-gray-200 text-gray-800"
            }`}
            aria-label={
              isDarkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {isDarkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="5" strokeWidth="2" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* ====== Theme Toggle Button ====== */}

      {/* ====== Hero Section ====== */}
      <HeroBanner />

      {/* ====== Generate Section ====== */}
      <section className="mt-16">
        <h2
          className={`text-2xl font-bold mb-6 ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Generate
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={
              <ImageIcon className="w-8 h-8" style={{ color: "#FF6B6B" }} />
            }
            title="Image"
            desc="Generate images with custom styles in Flux and Ideogram."
            newTag={true}
          />
          <FeatureCard
            icon={<VideoIcon className="w-8 h-8 text-blue-600" />}
            title="Video"
            desc="Generate videos with Halus, Pika, Runway, Luma, and more."
            newTag={false}
          />
          <FeatureCard
            icon={<RealtimeIcon className="w-8 h-8 text-yellow-600" />}
            title="Realtime"
            desc="Realtime AI rendering on a canvas. Instant feedback loops."
            newTag={true}
          />
          <FeatureCard
            icon={<EnhancerIcon className="w-8 h-8 text-purple-600" />}
            title="Enhancer"
            desc="Upscale and enhance images and videos up to 22K."
            newTag={true}
          />
          <FeatureCard
            icon={<EditIcon className="w-8 h-8 text-green-600" />}
            title="Edit"
            desc="Add objects, change style, or expand photos and generations."
            newTag={true}
          />
          <FeatureCard
            icon={<VideoLipsyncIcon className="w-8 h-8 text-pink-600" />}
            title="Video Lip-sync"
            desc="Lip sync any video to any audio."
            newTag={true}
          />
          <FeatureCard
            icon={<MotionTransferIcon className="w-8 h-8 text-indigo-600" />}
            title="Motion Transfer"
            desc="Transfer motion to images and animate characters."
            newTag={true}
          />
          <FeatureCard
            icon={<TrainIcon className="w-8 h-8 text-orange-600" />}
            title="Train"
            desc="Teach Krea to replicate your style, products, or characters."
            newTag={false}
          />
        </div>

        <div className="flex justify-between mt-4 text-sm">
          <p
            className={`font-semibold ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            General
          </p>
          <p
            className={`font-semibold ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            logout
          </p>
        </div>
      </section>

      {/* ====== Footer ====== */}
      <footer
        className={`mt-4 pb-2 border-t pt-3 text-center text-sm transition-colors duration-300 ${
          isDarkMode
            ? "border-gray-700 text-white"
            : "border-gray-200 text-gray-600"
        }`}
      >
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center">
            <Image src={icon} alt="icons" width={18} height={4} />
            <span className="ml-2 font-semibold">Krea AI</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>curated by</span>
            <div className="flex items-center">
              <Image src={icon2} alt="Mobbin logo" width={18} height={4} />
              <span className="ml-2 font-semibold">Mobbin</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
