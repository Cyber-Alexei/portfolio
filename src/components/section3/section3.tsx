"use client";
import { certifications as c } from "@/data";
import { Certification } from "./elements/certification";
import { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Section3() {
  // State
  const [certificationId, setCertificationId] = useState<number>(0);

  // Functions
  const goRight = () => {
    if (certificationId === c.length - 1) {
      setCertificationId(0);
      return;
    }
    setCertificationId((prevState) => prevState + 1);
  };

  const goLeft = () => {
    if (certificationId === 0) {
      setCertificationId(c.length - 1);
      return;
    }
    setCertificationId((prevState) => prevState - 1);
  };

  // JSX
  return (
    <div className="relative h-[150vh] w-[100vw]">
      <div className="w-full h-full max-w-[1450px]">
        {/*TITLE*/}
        <div className="absolute top-0 w-full">
          <h2 className="text-center leading-none text-[13vw] w-full text-gray-100">
            CERTIFICATIONS
          </h2>
        </div>
        {/*MAIN DIV*/}
        <div className="w-full h-full flex items-center">
          {/*IMAGE*/}
          <div className="sm:w-[600px] sm:h-[600px] md:w-[80%] md:h-[80%] absolute right-[-50px] bottom-0 bg-[url(/images/branch2-movil.png)] md:bg-[url(/images/branch2.png)] w-[550px] h-[550px] bg-contain bg-no-repeat bg-right"></div>
          {/*CONTENT DIV*/}
          <div className="absolute flex items-center justify-center w-full h-full z-10">
            <div className="relative sm:w-[80%] md:w-[70%] lg:w-[770px] lg:h-[560px] w-[90%] h-[60%] bg-[rgba(240,240,240,0.5)] flex flex-col gap-6 items-center justify-center border border-solid border-[#8b9339]">
              {/*CARDS*/}
              <Certification data={c[certificationId]} />
              <div className="flex gap-20">
                <div
                  onClick={() => goLeft()}
                  className="flex items-center p-1 justify-center z-20 cursor-pointer text-white bg-[#8b9339] rounded-md"
                >
                  <ArrowBackIosNewIcon />
                </div>
                <div
                  onClick={() => goRight()}
                  className="flex items-center p-1 justify-center z-20 cursor-pointer text-white bg-[#8b9339] rounded-md"
                >
                  <ArrowForwardIosIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
