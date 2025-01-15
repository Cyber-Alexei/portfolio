"use client";
import Image from "next/image";
import { projectCardData } from "../types";
import { Suspense, lazy } from "react";
const AdsClickIcon = lazy(() => import("@mui/icons-material/AdsClick"));

const ProjectCard: React.FC<{ data: projectCardData }> = ({ data }) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex items-center justify-center sm:w-[80%] md:w-[70%] lg:w-[770px] lg:h-[560px] w-[90%] h-[60%]">
        <div
          onClick={() => {
            if (data.name === "Wasppet.dev") {
              window.location.href =
                "https://alexei-torres-wasppet.netlify.app";
            }
            if (data.name === "Servo") {
              window.location.href = "https://alexei-torres-servo.netlify.app";
            }
          }}
          key={data.index}
          className="bg-white pb-4 cursor-pointer hover:shadow-lg transform hover:scale-95 transition-all duration-300 h-[50%] w-[80%] sm:h-[50%] sm:w-[70%] md:h-[50%] md:w-[65%] lg:h-[60%] lg:w-[65%] flex flex-col items-center justify-between"
        >
          {/*LOGO*/}
          <div className="relative flex items-center justify-center w-full h-[80%] hover:scale-[1.20] transform duration-300">
            <Image
              style={{ objectFit: "contain" }}
              alt="logo image"
              src={data.logoPath}
              fill={true}
              priority={true}
            />
          </div>
          {/*CLICK ICON*/}
          <Suspense>
            <AdsClickIcon
              className="text-[#8b9339] bottom-[100px] right-10 absolute animate-ping"
              sx={{ fontSize: "20px" }}
            />
          </Suspense>
          {/*TITLE*/}
          <div className="text-[10dvw] sm:text-[7dvw] md:text-[6dvw] lg:text-[70px] flex items-center justify-center w-full h-[15%] pb-2">
            <p style={data.styles.titleCss}>{data.styles.title}</p>
            {data.styles.title2 ? (
              <p style={data.styles.title2Css}>{data.styles.title2}</p>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
