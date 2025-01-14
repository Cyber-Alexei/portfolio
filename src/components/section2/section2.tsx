"use client";
import { spotlightProjects as projects } from "@/data";
import { useState, lazy } from "react";
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
    <div className="relative flex items-center h-[150vh] w-[100vw] bg-gray-100">
      <div className="w-full h-full max-w-[1450px]">
        {/*TITLE*/}
        <div className="w-full absolute top-0">
          <h2 className="text-center leading-none text-[22vw] w-full text-white">
            PROJECTS
          </h2>
        </div>
        {/*IMAGE*/}
        <div className="absolute z-10 sm:w-[700px] sm:h-[700px] md:w-[90%] md:h-[90%] bg-[url(/images/branch1.png)] w-[800px] h-[800px] bg-contain bg-no-repeat bg-left"></div>
        {/*MAIN DIV*/}
        <div className="absolute z-20 top-0 h-full w-full flex items-center justify-center">
          {/*CONTENT DIV*/}
          <div
            style={{ translate: `${-100 * projectCardId}%` }}
            className="absolute flex w-full h-full z-10"
          >
            {/*CARDS*/}
            {projects &&
              projects.map((p) => (
                <div
                  key={p.index}
                  className="w-full h-full flex flex-shrink-0 flex-grow-0"
                >
                  <ProjectCard data={p} />
                </div>
              ))}
          </div>
          {/*CONTAINER SIMULATION*/}
          <div className="absolute bg-[rgba(240,240,240,0.5)] flex gap-6 items-center justify-center sm:w-[80%] md:w-[70%] lg:w-[770px] lg:h-[560px] w-[90%] h-[60%] border border-solid border-[#8b9339]">
            <div className="absolute bottom-0 py-10 flex gap-20">
              <div
                onClick={() => goLeft()}
                className="flex items-center p-1 justify-center z-20 cursor-pointer text-white bg-[#8b9339] rounded-md border border-solid border-[#363F1F]"
              >
                <ArrowBackIosNewIcon />
              </div>
              <div
                onClick={() => goRight()}
                className="flex items-center p-1 justify-center z-20 cursor-pointer text-white bg-[#8b9339] rounded-md border border-solid border-[#363F1F]"
              >
                <ArrowForwardIosIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
//
