import React from "react";

export function FeatureCard({
    icon,
    title,
    description,
    className,
  }: {
    icon: React.ReactElement;
    title: string;
    description: string;
    className?: string;
  }) {
    return (
      <div
        className={`bg-background/80 backdrop-blur-sm p-6 rounded-lg shadow-md text-center transition-all ${className}`}
      >
        <div className="mb-4 flex justify-center">{icon}</div>
        <h4 className="text-xl font-semibold mb-2 text-foreground dark:text-blue-50">
          {title}
        </h4>
        <p className="text-muted-foreground dark:text-blue-200">{description}</p>
      </div>
    );
  }
  