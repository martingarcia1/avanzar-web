import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">


          <div className="flex items-center">
            <a href="#inicio" className="flex items-center">
              <img
                src="\img\Diseno_sin_titulo_28-fotor-20250822162630.png"
                alt="Logo"
                className="h-20 w-38 mr-2 -mt-1"
              />
            </a>


            <div className="hidden md:flex ml-20 space-x-6">
              <a href="#inicio" className="flex items-center text-white hover:text-white">
                Inicio
              </a>
              <a href="#equipo" className="flex items-center text-white hover:text-white">
                Equipo
              </a>

              <a href="#servicios" className="flex items-center text-white hover:text-white">
                Servicios
              </a>

              <a href="#sponsors" className="flex items-center text-white hover:text-white">
                Sponsors
              </a>

              <a href="#contacto" className="flex items-center text-white hover:text-white">
                Contacto
              </a>
            </div>
          </div>


          <div className="md:hidden flex items-center">

            <input type="checkbox" id="menu-toggle" className="hidden peer" />
            <label
              htmlFor="menu-toggle"
              className="cursor-pointer text-rose-600 hover:text-rose-600 "
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>


            <div className="absolute top-16 left-0 w-full bg-black shadow-md hidden peer-checked:flex flex-col space-y-2 px-4 py-3">
              <a href="#inicio" className="text-white flex items-center  py-2 border-b border-rose-600"> Inicio</a>
              <a href="#equipo" className="text-white flex items-center  py-2 border-b border-rose-600"> Equipo</a>
              <a href="#servicios" className="text-white flex items-center  py-2 border-b border-rose-600">Servicios</a>
              <a href="#comentarios" className="text-white flex items-center   py-2 border-b border-rose-600">Comentarios</a>
              <a href="#contacto" className="text-white flex items-center  py-2">Contacto</a>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
