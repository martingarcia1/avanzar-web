import React from 'react';

const Contacto = () => {


  return (
    <div className="min-h-screen bg-white p-6">

      <h1 className="text-3xl font-bold text-black mb-8 text-center">
        <span className="underline decoration-teal-800">CONT</span>
        <span className="underline decoration-rose-600">ACTO</span>
      </h1>

      <div className="w-full max-w-6xl mx-auto grid gap-6 lg:grid-cols-2">

        <div className="bg-black rounded-2xl shadow-lg p-8">
          <h1 className="text-2xl font-bold text-teal-800 mb-6 text-center">
            Formulario <span className="text-rose-600">de Contacto</span>
          </h1>
          <form
            action="https://formsubmit.co/avanzar.group1@gmail.com"
            method="POST"
            className="space-y-4">

            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="http://localhost:5173/" />


            <div>
              <label className="block text-sm font-medium text-white">Nombre</label>
              <input
                type="text"
                name="nombre"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500 outline-none"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white">Apellido</label>
              <input
                type="text"
                name="apellido"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500 outline-none"
                placeholder="Tu apellido"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white">Mail</label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500 outline-none"
                placeholder="ejemplo@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white">Empresa*</label>
              <input
                type="text"
                name="empresa"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500 outline-none"
                placeholder="Nombre de la empresa"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white">Cargo*</label>
              <input
                type="text"
                name="cargo"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500 outline-none"
                placeholder="Tu cargo"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white">Consulta</label>
              <textarea
                name="consulta"
                rows={4}
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500 outline-none"
                placeholder="Escribe tu consulta aquí..."
              />
            </div>

            <div className="flex items-center gap-2 border border-gray-300 rounded-lg p-3">
              <input type="checkbox" required className="h-4 w-4" />
              <span className="text-sm text-white">No soy un robot</span>
            </div>

            <button
              type="submit"
              className="w-full bg-teal-800 text-white font-medium py-2 rounded-lg transition"
            >
              Enviar
            </button>
          </form>

        </div>


        <div className="bg-black rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-teal-800 mb-6 text-center">
            Nuestra <span className="text-rose-600">Ubicación</span>
          </h2>


          <div className="bg-teal-800 p-4 rounded-lg shadow-md text-center space-y-2">
            <p className="text-lg text-white flex items-center justify-center gap-2">
              📍 <span>Pcia. de Córdoba 714</span>
            </p>
            <p className="text-lg text-white">San Miguel de Tucumán, Tucumán</p>
            <p className="text-lg text-white">📞 (381) 602-4467</p>
          </div>

          <div className="mt-8 w-full h-[500px] rounded-xl overflow-hidden shadow-lg border border-gray-700">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.4277850736726!2d-65.20965312556473!3d-26.826342889598624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c16bf78ae1d%3A0x2c091e90f8407c7e!2sPcia%20de%20C%C3%B3rdoba%20714%2C%20T4000DGP%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1755311610569!5m2!1ses!2sar"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de ubicación"
            />
          </div>
        </div>


      </div>
    </div>

  );
};

export default Contacto;
