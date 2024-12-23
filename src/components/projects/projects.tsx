"use client";
import { udemyProjects, freeCodeCampProjects } from "@/data";

export const Projects = () => {
  // JSX
  return (
    <div>
      <div className="flex flex-col items-center justify-center px-20 pt-20 text-white bg-white">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-[#303030]">
          MORE PROJECTS
        </h2>
        <p className="text-[#303030] py-4">Haz clic para ver cada proyecto</p>
        <div className="flex flex-wrap items-center justify-center gap-10 pt-12">
          {udemyProjects &&
            udemyProjects.map(
              (item: { name: string; url: string }, i: number) => (
                <div
                  key={i}
                  className="card"
                  onClick={() => (window.location.href = `${item.url}`)}
                >
                  <div className="face front custom-text-shadow">
                    <p>{item.name}</p>
                  </div>
                  <div className="face back custom-text-shadow">
                    <p>Clic para ver!</p>
                  </div>
                </div>
              ),
            )}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center px-20 pt-20 pb-28 text-white bg-white">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-[#303030]">
          TAKE A LOOK AT MY CODE
        </h2>
        <p className="text-[#303030] py-4">
          Haz clic para ver cada proyecto, te redireccionará a Codepen
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 pt-12">
          {freeCodeCampProjects &&
            freeCodeCampProjects.map(
              (item: { name: string; url: string }, i: number) => (
                <div
                  key={i}
                  className="bg-[#303030] w-60 h-32 rounded-md flex items-center justify-center hover:animate-pulse cursor-pointer"
                >
                  <p className="text-xl custom-text-shadow">{item.name}</p>
                </div>
              ),
            )}
        </div>
      </div>
    </div>
  );
};
