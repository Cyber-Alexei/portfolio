"use client";
import { certificationData } from "../types";

export const Certification: React.FC<{ data: certificationData }> = ({
  data,
}) => {
  return (
    <div
      onClick={() => (window.location.href = data.url)}
      key={data.id}
      className="p-4 sm:p-6 lg:p-10 cursor-pointer hover:shadow-lg transform hover:scale-110 border border-solid border-[#8b9339] transition-all duration-300 h-[50%] w-[80%] sm:h-[50%] sm:w-[70%] md:h-[50%] md:w-[65%] lg:h-[60%] lg:w-[65%] flex flex-col items-center justify-center gap-4 bg-white"
    >
      <div className="h-[70%] w-full flex items-center justify-center">
        <p className="text-[20px] sm:text-[24px] md:text-[27px] lg:text-[30px] text-center aboreto">
          {data.name}
        </p>
      </div>
      <div className="flex flex-col items-center h-[30%] w-full font-light">
        <p>On</p>
        <p>{data.institution}</p>
      </div>
    </div>
  );
};
