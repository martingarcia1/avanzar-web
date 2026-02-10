import React from 'react'

const Equipo = () => {
  return (
    <section className="bg-whitw py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-black text-center mb-12">
          <span className="underline decoration-teal-800">Nuestro</span>{" "}
          <span className="underline decoration-rose-600">equipo</span>
        </h2>
        <h3 className="text-center text-xl italic font-serif text-teal-800 mb-10">
          "En Avanzar creemos que un gran equipo es la clave para <span className="text-rose-600">transformar ideas en logros y desafíos en oportunidades."</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-gradient-to-r from-rose-600 to-teal-800 rounded-2xl p-[6px] hover:scale-105 transform transition-transform duration-300">
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <img
                src="/img/Lore.webp"
                alt="María López"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Lorena Montenegro</h3>
              <p className="text-gray-500">Directora del Estudio (CPN)</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-rose-600 to-teal-800 rounded-2xl p-[6px] hover:scale-105 transform transition-transform duration-300">
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <img
                src="/img/Ro.webp"
                alt="María López"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Rocio Mahafud</h3>
              <p className="text-gray-500">Marketing Digital y Redes</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-rose-600 to-teal-800 rounded-2xl p-[6px] hover:scale-105 transform transition-transform duration-300">
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <img
                src="/img/Conti.webp"
                alt="María López"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Cosntanza Mansilla</h3>
              <p className="text-gray-500">Diseñadora Gráfica</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-rose-600 to-teal-800 rounded-2xl p-[6px] hover:scale-105 transform transition-transform duration-300">
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <img
                src="/img/Sergio.webp"
                alt="María López"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Sergio Martín García</h3>
              <p className="text-gray-500">Programador</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Equipo;



