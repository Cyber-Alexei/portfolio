"use client";
import { useState } from "react";

export const Technologies = (): JSX.Element => {
  // State
  const [technologies] = useState<string[]>([
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Tailwind.css",
    "Redux",
    "Python",
    "Django",
    "Django - REST",
    "Express.js",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Tailwind.css",
    "Redux",
    "Python",
    "Django",
    "Django - REST",
    "Express.js",
  ]);

  // JSX
  return (
    <div className="flex flex-col items-center justify-center py-20 bg-white">
      <h2
        style={{ color: "#303030" }}
        className="text-xl sm:text-2xl md:text-4xl font-semibold"
      >
        STACK
      </h2>

      <div className="w-full overflow-hidden">
        <div
          id="carousel"
          className="scrolling-animation flex whitespace-nowrap pb-10 pt-5"
        >
          {technologies.map((tech: string, index: number) => {
            return (
              <p
                key={index}
                className="flex text-gray-500 items-end justify-center w-[200px] h-[100px] flex-shrink-0 font-bold text-3xl"
              >
                {tech}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};
