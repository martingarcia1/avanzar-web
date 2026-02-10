import React from 'react'

const Servicios = () => {
  return (
 
    <div className="min-h-screen bg-white flex flex-col items-center p-8">
  
   <h1 className="text-3xl font-bold text-black mb-8">
  <span className="underline decoration-teal-800">Nuestros</span>{" "}
  <span className="underline decoration-rose-600">Servicios</span>
</h1>


     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full">
 
        <div className="bg-zinc-900 rounded-2xl shadow-md p-6 text-center">
          <img
            src="\img\500199797_18228399289295758_8119955314644749688_n..jpg"
            alt="Diseño Web"
            className="w-full h-100 object-cover rounded-lg mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Servicios contables e impositivos</h2>
          <p className="text-gray-600">
            Creamos páginas web modernas, rápidas y adaptadas a tus necesidades.
          </p>
        </div>


        <div className="bg-zinc-900 rounded-2xl shadow-md p-6 text-center">
          <img
            src="\img\500385867_18228399580295758_2588500688133172512_n..jpg"
            alt="Marketing Digital"
            className="w-full h-100 object-cover rounded-lg mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Asesoramiento administrativo</h2>
          <p className="text-gray-600">
            Estrategias efectivas para aumentar tu presencia online y atraer clientes.
          </p>
        </div>

     
        <div className=" bg-zinc-900 rounded-2xl shadow-md p-6 text-center">
          <img
            src="/img/500319528_18228399928295758_545570555451750985_n..jpg"
            alt="Soporte Técnico"
            className="w-full h-100 object-cover rounded-lg mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Diseño de páginas web y software</h2>
          <p className="text-gray-600">
            Brindamos asistencia rápida y confiable para que tu negocio nunca se detenga.
          </p>
        </div>

     
        <div className="bg-zinc-900 rounded-2xl shadow-md p-6 text-center">
          <img
            src="\img\501118403_18228886432295758_1562333891269007241_n..jpg"
            alt="Consultoría"
            className="w-full h-100 object-cover rounded-lg mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Gestión de redes sociales</h2>
          <p className="text-gray-600">
            Te asesoramos para optimizar procesos y mejorar la productividad.
          </p>
        </div>

      
        <div className="bg-zinc-900 rounded-2xl shadow-md p-6 text-center">
          <img
            src=""
            alt="Redes Sociales"
            className="w-20 h-20 mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Gestión de Redes</h2>
          <p className="text-gray-600">
            Administramos tus perfiles sociales para mejorar tu visibilidad.
          </p>
        </div>

       
        <div className=" bg-zinc-900 rounded-2xl shadow-md p-6 text-center">
          <img
            src=""
            alt="SEO"
            className="w-20 h-20 mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-700 mb-2"> Desarrollo de software a medida</h2>
          <p className="text-gray-600">
            Posicionamos tu sitio en buscadores para atraer más clientes.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Servicios;