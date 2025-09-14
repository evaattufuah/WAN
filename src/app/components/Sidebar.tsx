"use client";

import Link from "next/link";
import Image from "next/image";
import icon from "@/app/assets/images/kicon.png";

const Sidebar = () => {
  const navItems = [
    { name: "Home", href: "/", icon: "🏠" },
    { name: "Gallery", href: "/gallery", icon: "🖼️" },
    { name: "Support", href: "/support", icon: "💡" },
    { name: "Settings", href: "/settings", icon: "⚙️" },
  ];

  return (
    <header className="h-16 flex items-center justify-between px-6 bg-transparent">
      {/* Logo & Title */}
      <div className="flex items-center space-x-3">
        <Image src={icon} alt="Krea AI logo" width={18} height={4} />
        <span className="text-xl font-semibold dark:text-white text-gray-900">
          Krea AI
        </span>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-8">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center space-x-1 
                       dark:text-white text-gray-900 
                       hover:dark:text-blue-300 hover:text-blue-600 
                       transition-colors duration-200"
          >
            <span className="text-lg">{item.icon}</span>
            <span className="font-medium text-sm">{item.name}</span>
          </Link>
        ))}
      </nav>

      {/* Notification Button */}
      <div className="flex items-center space-x-4">
        <button
          className="p-2 
                           dark:text-white text-gray-900 
                           hover:dark:text-red-400 hover:text-red-600 
                           transition-colors duration-200"
        >
          🔔
        </button>
      </div>
    </header>
  );
};

export default Sidebar;
