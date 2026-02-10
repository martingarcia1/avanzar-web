import React from 'react';

const Inicio = () => {
  return (
    <div className="bg-white">
   <img
  src="\img\Fondo Zoom Coorporativo color rojo y blanco.png"
  alt="Descripción de la imagen"
  className="w-full h-auto object-contain mt-10"
  loading="lazy"
/>

      <section id="sobre-nosotros" className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">


          <div>
            <h2 className="text-4xl font-extrabold text-teal-800 mb-6">
              Sobre <span className="text-rose-600">Nosotros</span>
            </h2>
            <p className="text-zinc-700 text-lg leading-relaxed mb-6">
            <span className="font-semibold">Avanzar Group</span>,es un estudio integral que combina contabilidad, administración, marketing digital y desarrollo tecnológico para potenciar a emprendedores, profesionales y empresas. Ofrecemos soluciones prácticas y personalizadas que permiten organizar, mejorar y escalar cada proyecto, adaptándonos a las necesidades reales del mercado actual.
            </p>
            <p className="text-zinc-700 text-lg leading-relaxed">
              Contamos con un equipo de profesionales altamente capacitados que
              combinan experiencia y creatividad para transformar ideas en realidades.
            </p>
          </div>

       
          <div className="flex justify-center">
  <video
    src="/img/AQNnFNXCIFiYZKY0J79xsepRHT11BtyEQSPo0N6cIBdOc3zIb13LEV3CJf4GBDYZ_Y9pxlVoClE1EThC_KVV3vse9Y-mEpaR.mp4"
    className="  w-full h-80 max-w-md"
    autoPlay
    loop
    muted
    controls
  />
</div>

        </div>
      </section>
    </div>

  );
};

export default Inicio;

