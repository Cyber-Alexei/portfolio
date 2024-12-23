"use client";
import { useEffect, useRef } from "react";
export const Banner: React.FC = (): JSX.Element => {
  // Ref
  const myNameH1 = useRef<HTMLHeadingElement>(null);
  const portFolio = useRef<HTMLParagraphElement>(null);

  // Effect
  useEffect(() => {
    if (!myNameH1.current) return;
    myNameH1.current.className = myNameH1.current.className.replace(
      "tracking-[50px]",
      "tracking-[5px] sm:tracking-[10px]",
    );
    if (!portFolio.current) return;
    portFolio.current.className = portFolio.current.className
      .replace("tracking-[30px]", "tracking-[20px]")
      .replace("sm:tracking-[60px]", "sm:tracking-[40px]")
      .replace("md:tracking-[80px]", "md:tracking-[60px]")
      .replace("lg:tracking-[100px]", "lg:tracking-[80px]");
  }, []);

  // JSX
  return (
    <div className="flex flex-col items-center justify-center h-[100vh] bg-[url('/images/green-piece.jpg')] bg-cover bg-center">
      <h1
        ref={myNameH1}
        className="transition-all duration-[2500ms] text-[50px] sm:text-[60px] md:text-8xl font-semibold whitespace-nowrap tracking-[50px]"
      >
        Alexei Torres
      </h1>
      <p
        ref={portFolio}
        className="text-lg text-center font-semibold tracking-[30px] sm:text-2xl sm:tracking-[60px] md:text-4xl md:tracking-[80px] lg:tracking-[100px]"
      >
        PORTFOLIO
      </p>
    </div>
  );
};
