import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  newTag?: boolean;
}

export default function FeatureCard({
  icon,
  title,
  desc,
  newTag,
}: FeatureCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition cursor-pointer group">
      <div className="flex items-center mb-3">
        <div className="text-blue-600 mr-3">{icon}</div>
        <h3 className="font-semibold text-gray-800">{title}</h3>
        {newTag && (
          <span className="ml-auto bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
            Open
          </span>
        )}
      </div>
      <p className="text-sm text-gray-600 mb-4">{desc}</p>
      
    </div>
    
  );
}
