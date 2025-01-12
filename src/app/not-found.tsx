"use client";

export default function NotFound() {
  return (
    <div className="h-[100vh] w-[100vw]">
      <div className="relative flex flex-col h-full w-full items-center justify-center bg-[url(/images/404image.png)] bg-contain bg-no-repeat bg-center">
        <p
          style={{ textShadow: "0px 0px 10px black" }}
          className="text-[100px] sm:text-[150px] md:text-[200px] lg:text-[300px] text-white font-extrabold"
        >
          404
        </p>
        <button
          onClick={() => (window.location.href = "/")}
          className="absolute bottom-16 hover:bg-[#363F1F] bg-[#8b9339] transition-colors duration-200 text-white px-16 rounded-lg text-lg font-medium shadow shadow-black"
        >
          Ir al inicio
        </button>
      </div>
    </div>
  );
}
