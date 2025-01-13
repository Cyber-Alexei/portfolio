"use client";
import { spotlightProjects as projects } from "@/data";
import { useState, lazy, Suspense } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const ProjectCard = lazy(() => import("./elements/card"));

export default function Section2() {
  // State
  const [projectCardId, setProjectCardId] = useState<number>(0);

  // Functions
  const goRight = () => {
    if (projectCardId === projects.length - 1) {
      setProjectCardId(0);
      return;
    }
    setProjectCardId((prevState) => prevState + 1);
  };

  const goLeft = () => {
    if (projectCardId === 0) {
      setProjectCardId(projects.length - 1);
      return;
    }
    setProjectCardId((prevState) => prevState - 1);
  };

  // JSX
  return (
    <div className="relative h-[150vh] w-[100vw] bg-gray-100">
      <div className="w-full h-full max-w-[1450px">
        {/*TITLE*/}
        <div className="absolute top-0 w-full">
          <h2 className="text-center leading-none text-[22vw] w-full text-white">
            PROJECTS
          </h2>
        </div>
        {/*MAIN DIV*/}
        <div className="w-full h-full flex items-center">
          {/*IMAGE*/}
          <div className="z-10 sm:w-[700px] sm:h-[700px] md:w-[90%] md:h-[90%] absolute bg-[url(/images/branch1.png)] w-[800px] h-[800px] bg-contain bg-no-repeat bg-left"></div>
          {/*CONTENT DIV*/}
          <div className="flex items-center justify-center w-full h-full z-10">
            <div className="relative sm:w-[80%] md:w-[70%] lg:w-[770px] lg:h-[560px] w-[90%] h-[60%] bg-[rgba(240,240,240,0.5)] flex flex-col gap-6 items-center justify-center border border-solid border-[#8b9339]">
              {/*CARDS*/}
              <Suspense>
                <ProjectCard data={projects[projectCardId]} />
              </Suspense>
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
