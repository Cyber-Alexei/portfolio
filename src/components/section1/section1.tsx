import Image from "next/image";
import { Suspense } from "react";

export default function Section1() {
  return (
    <div className="relative h-[100vh] w-[100vw]">
      <div className="w-full h-full max-w-[1450px]">
        {/*NAME CAROUSEL*/}
        <div className="nameCarouselAnimation flex leading-none text-[300px] whitespace-nowrap text-gray-200">
          <p className="w-[820px] flex-shrink-0 flex-grow-0 items-center justify-center text-center">
            Alexei
          </p>
          <p className="w-[820px] flex-shrink-0 flex-grow-0 items-center justify-center text-center">
            Alexei
          </p>
          <p className="w-[820px] flex-shrink-0 flex-grow-0 items-center justify-center text-center">
            Alexei
          </p>
          <p className="w-[820px] flex-shrink-0 flex-grow-0 items-center justify-center text-center">
            Alexei
          </p>
          <p className="w-[820px] flex-shrink-0 flex-grow-0 items-center justify-center text-center">
            Alexei
          </p>
          <p className="w-[820px] flex-shrink-0 flex-grow-0 items-center justify-center text-center">
            Alexei
          </p>
          <p className="w-[820px] flex-shrink-0 flex-grow-0 items-center justify-center text-center">
            Alexei
          </p>
          <p className="w-[820px] flex-shrink-0 flex-grow-0 items-center justify-center text-center">
            Alexei
          </p>
          <p className="w-[820px] flex-shrink-0 flex-grow-0 items-center justify-center text-center">
            Alexei
          </p>
          <p className="w-[820px] flex-shrink-0 flex-grow-0 items-center justify-center text-center">
            Alexei
          </p>
          <p className="w-[820px] flex-shrink-0 flex-grow-0 items-center justify-center text-center">
            Alexei
          </p>
          <p className="w-[820px] flex-shrink-0 flex-grow-0 items-center justify-center text-center">
            Alexei
          </p>
          <p className="w-[820px] flex-shrink-0 flex-grow-0 items-center justify-center text-center">
            Alexei
          </p>
          <p className="w-[820px] flex-shrink-0 flex-grow-0 items-center justify-center text-center">
            Alexei
          </p>
          <p className="w-[820px] flex-shrink-0 flex-grow-0 items-center justify-center text-center">
            Alexei
          </p>
          <p className="w-[820px] flex-shrink-0 flex-grow-0 items-center justify-center text-center">
            Alexei
          </p>
        </div>
        {/*DATA AND IMAGE*/}
        <div className="md:flex-row absolute top-0 w-full h-full flex flex-col flex-nowrap items-center justify-center">
          <div className="z-20 lg:w-[600px] lg:h-[600px] w-[100%] h-[50%] flex flex-col justify-center items-center gap-4 pt-[150px]">
            <div className="bg-[rgba(255,255,255,0.6)] p-4 rounded-sm">
              <h1 className="aboreto text-[30px]">Alexei Torres</h1>
              <h2 className="font-light text-xl">
                Fullstack developer specialized in frontend
              </h2>
              <p className="font-light">
                Responsive web application development
              </p>
            </div>
          </div>
          <div className="relative lg:w-[600px] lg:h-[600px] w-[100%] h-[100%]">
            <Suspense>
              <Image
                className="absolute"
                alt="tree"
                src="/images/tree.png"
                fill={true}
                style={{ objectFit: "contain", objectPosition: "center" }}
                priority={true}
                unoptimized={false}
              />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
