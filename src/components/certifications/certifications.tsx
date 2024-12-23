"use client";
import { certifications as c } from "@/data";
import { useRouter } from "next/navigation";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";

export const Certifications = () => {
  // Router
  const router = useRouter();
  // JSX
  return (
    <div className="flex flex-col items-center justify-center p-20 bg-white text-[#303030]">
      <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold">
        CERTIFICATIONS
      </h2>
      <p className="py-4">Haz clic para ver cada documento!</p>
      <div className="w-full flex flex-wrap gap-6 items-center justify-center pt-12 pb-10">
        {c &&
          c.map((item: { name: string; url: string }, i: number) => {
            return (
              <div
                onClick={() => router.push(item.url)}
                key={i}
                onMouseEnter={() => {
                  const iconsCollection: HTMLCollectionOf<Element> =
                    document.getElementsByClassName(`icon${i}`);
                  for (const item of iconsCollection) {
                    const itemElement = item as HTMLElement;
                    itemElement.style.fontSize = "60px";
                    itemElement.style.top = "-15px";
                    itemElement.style.left = "-10px";
                  }
                }}
                onMouseLeave={() => {
                  const iconsCollection: HTMLCollectionOf<Element> =
                    document.getElementsByClassName(`icon${i}`);
                  for (const item of iconsCollection) {
                    const itemElement = item as HTMLElement;
                    itemElement.style.fontSize = "40px";
                    itemElement.style.top = "0px";
                    itemElement.style.left = "-5px";
                  }
                }}
                className="relative border border-gray-400 shadow-2xl shadow-gray-400 hover:scale-110 duration-100 transition-transform cursor-pointer bg-white px-6 text-black flex items-center rounded-sm w-60 h-32"
              >
                <MilitaryTechIcon
                  className={`icon${i}`}
                  style={{
                    transition: "all 0.1s ease-in-out",
                    fontSize: "40px",
                    position: "absolute",
                    top: "0",
                    left: "-5px",
                    color: "#c6951b",
                  }}
                />
                <p className="text-center w-full font-['times'] text-lg font-semibold">
                  {item.name}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};
