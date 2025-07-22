import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import EquipoImage from '@/assets/img/team/Team.JPG';

const Banner = () => {
    return (
        <div className="relative h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden" 
            style={{ 
                backgroundImage: `url(${EquipoImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                height: '100vh',
                width: '100%'
            }}>
            
            {/* Capa oscura con blur */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/90 to-black/85 backdrop-blur-[Spx] z-5" />

            {/* Contenido */}
            <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-8 py-30 gap-16">

                {/* Texto principal */}
                <motion.div
                    className="text-center md:text-left max-w-xl"
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                        Impulsa tu empresa con{" "}
                        <span className="text-teal-400">Avanzar Group</span>
                    </h1>

                    <p className="text-lg text-gray-300 mb-8">
                        Somos tu socio estratégico en contabilidad y desarrollo digital. Llevamos tu negocio al siguiente nivel con soluciones innovadoras.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            to="/contact"
                            className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-6 py-3 rounded-full text-sm font-medium shadow-md hover:scale-105 transition"
                        >
                            Comienza Ahora
                        </Link>
                        <Link
                            to="/team"
                            className="bg-white text-teal-600 px-6 py-3 rounded-full text-sm font-semibold border border-white/20 hover:bg-white/90 transition hover:scale-105"
                        >
                            Conoce al Equipo
                        </Link>
                    </div>
                </motion.div>

                {/* Imagen decorativa con tamaño personalizado
                <motion.div
                    className="w-64 h-64 md:w-80 md:h-80 bg-white/10 rounded-full overflow-hidden shadow-lg border-4 border-white/20 backdrop-blur-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <img
                        src={EquipoImage}
                        alt="Nuestro equipo"
                        className="w-full h-full object-cover"
                    />
                </motion.div> */}
            </div>
        </div>
    );
};

export default Banner;
