import React, { SVGProps } from "react";

export function DetailItem({
  icon,
  text,
  className,
}: {
  icon: React.ReactElement<SVGProps<SVGSVGElement>>; // Ensures icon is an SVG
  text: string;
  className?: string;
}) {
  return (
    <div
      className={`p-6 rounded-lg bg-background/80 backdrop-blur-sm shadow-md text-center transition-all 
                  hover:bg-accent/20 hover:shadow-[0_12px_40px_-4px_rgba(0,200,100,0.4)] relative ${className}`}
    >
      <div className="mb-4 flex justify-center">
        {React.cloneElement(icon, {
          className: `h-8 w-8 text-blue-500 dark:text-blue-300 ${icon.props.className || ""}`,
        })}
      </div>
      <p className="text-lg font-medium text-foreground dark:text-blue-50">{text}</p>
    </div>
  );
}
