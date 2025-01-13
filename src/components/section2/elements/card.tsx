import Image from "next/image";
import { projectCardData } from "../types";
import { Suspense } from "react";

const ProjectCard: React.FC<{ data: projectCardData }> = ({ data }) => {
  return (
    <div
      /*onClick={() => (window.location.href = data.path)}*/
      onClick={() => {
        if (data.name === "Wasppet.dev") {
          window.location.href = "https://alexei-torres-wasppet.netlify.app";
        }
        if (data.name === "Servo") {
          window.location.href = "https://alexei-torres-servo.netlify.app";
        }
      }}
      key={data.index}
      className="cursor-pointer hover:shadow-lg transform hover:scale-95 transition-all duration-300 h-[80%] w-[80%] sm:h-[70%] sm:w-[70%] md:h-[65%] md:w-[65%] flex flex-col items-center justify-between bg-white py-4"
    >
      {/*LOGO*/}
      <div className="flex items-center justify-center w-full h-[80%]">
        <div
          //style={{ backgroundImage: `url(${data.logoPath})` }}
          className="relative h-full w-full bg-contain bg-center bg-no-repeat hover:scale-125 transform duration-300"
        >
          <Suspense>
            <Image
              className="absolute"
              alt="project logo"
              src={`${data.logoPath}`}
              fill={true}
              quality={80}
              style={{ objectFit: "contain", objectPosition: "center" }}
              priority={true}
              unoptimized={false}
            />
          </Suspense>
        </div>
      </div>
      {/*TITLE*/}
      <div className="text-[10dvw] sm:text-[7dvw] md:text-[6dvw] lg:text-[70px] flex items-center justify-center w-full h-[15%]">
        <p style={data.styles.titleCss}>{data.styles.title}</p>
        {data.styles.title2 ? (
          <p style={data.styles.title2Css}>{data.styles.title2}</p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
