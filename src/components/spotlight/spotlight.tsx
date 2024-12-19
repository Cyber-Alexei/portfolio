"use client";
export const Spotlight = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center p-20">
      <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold">
        SPOTLIGHT
      </h2>
      <div className="flex flex-wrap justify-center w-full pt-20 pb-10 gap-10 text-2xl font-medium">
        <div className="flex flex-col items-center justify-center w-[48%] min-w-[300px]">
          <p className="py-2">Haz clic!</p>
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
          <br></br>
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
        <div className="flex flex-col items-center justify-center w-[48%] min-w-[300px]">
          <p className="py-2">Haz clic!</p>
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
          Integración con Google Calendar. <br></br>
          <br></br> Una aplicación para RRHH que permite publicar múltiples
          horarios en diferentes fechas que el usuario puede seleccionar, y
          después de otorgar los permisos necesarios de Google Calendar a Servo,
          programar una reunión de Google Meets que se graba directamente en los
          calendarios de Google tanto del profesional de RRHH como del usuario.
        </div>
      </div>
      <div className="flex flex-wrap justify-center w-full pt-20 pb-10 gap-10 text-2xl font-medium">
        <div className="flex flex-col items-center justify-center w-[48%] min-w-[300px]">
          <p className="py-2">Haz clic!</p>
          <div
            onClick={() =>
              (window.location.href =
                "https://youtu.be/CsxyHiOVZIQ?si=D50G2gx-0YvzYvGg")
            }
            className="cursor-pointer hover:scale-110 transition-transform duration-100 flex items-center justify-center w-[200px] h-[100px] bg-white rounded-sm"
          >
            <p className=" text-blue-800 text-center font-medium">
              Evento boda
            </p>
          </div>
        </div>
        <div className="w-[48%] min-w-[300px] text-lg border-l border-l-white px-4">
          Invitación a una boda, recorrido de tres fases. <br></br>
          <br></br> 1 - El invitado es llevado a una página dinámicamente, con
          el id de un usuario de la base de datos como parámetro de URL, esta
          pagina muestra al usuario personalizado toda la informacion sobre el
          evento. Hay un formulario que solicita al usuario su asistencia y la
          asistencia de su pareja, luego se preguntan todas sus alergias y las
          alergias de su pareja también (si es el caso). <br></br>
          <br></br> 2 - Cuando se envía el formulario, el usuario es redirigido
          a una mini tienda electrónica con un catálogo de regalos para la boda
          (mesa de regalos) donde el invitado podrá comprar un regalo para la
          pareja. <br></br>
          <br></br> 3 - Por último, el usuario es redirigido a un pequeño
          formulario con diferentes tipos de preguntas y entradas, una vez que
          se envía el formulario, el usuario recibe una tarjeta con los
          resultados correctos e incorrectos.
        </div>
      </div>
    </div>
  );
};
