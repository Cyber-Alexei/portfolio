"use client";
export const Spotlight = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center p-20">
      <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold">
        SPOTLIGHT
      </h2>
      <div className="flex flex-wrap justify-center w-full pt-20 pb-10 gap-10 text-2xl font-medium">
        <div className="flex items-center justify-center w-[48%] min-w-[300px]">
          <div
            onClick={() =>
              (window.location.href =
                "https://youtu.be/WXH_-Yl50jg?si=v_Wj_duNMhHstpRO")
            }
            className="cursor-pointer hover:scale-110 transition-transform duration-100 flex items-center justify-center w-[200px] h-[100px] bg-white rounded-sm"
          >
            <p className=" text-black">
              <span style={{ color: "#ffbf00" }}>W</span>asppet.dev
            </p>
          </div>
        </div>
        <div className="w-[48%] min-w-[300px] text-lg border-l border-l-white px-4">
          Plataforma completamente funcional inspirada en Stackoverflow.{" "}
          <br></br> Permite a los desarrolladores compartir soluciones en
          fragmentos de código. Los desarrolladores pueden crear artículos sobre
          un tema en particular, representar bloques de código de cualquier
          lenguaje o tecnología de programación, comentar dichos artículos,
          recibir notificaciones, buscar otros usuarios por su nombre de usuario
          o nombre personal y ver las soluciones que ha compartido con la
          comunidad de Wasppet.dev.
        </div>
      </div>
      <div className="flex flex-wrap justify-center w-full pt-10 pb-10 gap-10 text-2xl font-medium">
        <div className="flex items-center justify-center w-[48%] min-w-[300px]">
          <div
            onClick={() =>
              (window.location.href =
                "https://youtu.be/fKFRRqSiaXA?si=bvuyXSGrlUeJfcCg")
            }
            style={{ backgroundColor: "#c834ff" }}
            className="cursor-pointer hover:scale-110 transition-transform duration-100 flex items-center justify-center w-[200px] h-[100px] bg-white rounded-sm"
          >
            <p className="font-semibold">Servo</p>
          </div>
        </div>
        <div className="w-[48%] min-w-[300px] text-lg border-l border-l-white px-4">
          Integración con Google Calendar. <br></br> Una aplicación para RRHH
          que permite publicar múltiples horarios en diferentes fechas que el
          usuario puede seleccionar, y después de otorgar los permisos
          necesarios de Google Calendar a Servo, programar una reunión de Google
          Meets que se graba directamente en los calendarios de Google tanto del
          profesional de RRHH como del usuario.
        </div>
      </div>
    </div>
  );
};
