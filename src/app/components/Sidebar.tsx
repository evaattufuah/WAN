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
    <header className="h-16 flex items-center justify-between px-6">
      <div className="flex items-center space-x-3">
        <Image src={icon} alt="icons" width={18} height={4} />

        <span className="text-xl font-semibold text-gray-800">Dashboard</span>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-8">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
          >
            <span className="text-lg">{item.icon}</span>
            <span className="font-medium text-sm">{item.name}</span>
          </Link>
        ))}
      </nav>

      <div className="flex items-center space-x-4">
        <button className="p-2 text-gray-600 hover:text-red-500 transition-colors">
          🔔
        </button>
      </div>
    </header>
  );
};

export default Sidebar;
