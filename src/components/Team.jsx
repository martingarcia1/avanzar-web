import { motion } from "framer-motion";
// Importamos las imágenes como recursos estáticos
import caroImage from '@/assets/img/team/Caro.JPG';
import LoreImage from '@/assets/img/team/Lore.JPG';
import RoImage from '@/assets/img/team/Ro.JPG';
import sergioImage from '@/assets/img/team/sergio.jpg';

const teamData = [
    {
        name: "Lorena Montenegro",
        role: "Directora del Estudio (C.P.N)",
        description: "Líder visionaria con amplia experiencia en contabilidad y gestión empresarial",
        img: LoreImage,
    },
    {
        name: "Rocio Mahafud",
        role: "Marketing Digital y Redes",
        description: "Especialista en estrategias digitales y gestión de redes sociales",
        img: RoImage,
    },
    {
        name: "Carolina Moyano",
        role: "Diseñadora Gráfica",
        description: "Creativa experta en diseño visual y comunicación efectiva",
        img: caroImage,
        icon: "🎨"
    },
    {
        name: "Sergio Martin Garcia",
        role: "Programador",
        description: "Desarrollador de soluciones tecnológicas innovadoras",
        img: sergioImage,
        icon: "💻"
    }
];

const Team = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.9,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.6,
            },
        },
    };

    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
                {/* Encabezado de la sección */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-pink-600 bg-clip-text text-transparent">
                        Nuestro Equipo
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Un equipo multidisciplinario comprometido con el éxito de tu empresa
                    </p>
                </div>

                {/* Scroll container */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto"
                >
                    {teamData.map((member, index) => (
                        <motion.div
                            key={member.name}
                            custom={index}
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
                        >
                            {/* Imagen del miembro */}
                            <div className="w-full h-80 overflow-hidden">
                                {member.img ? (
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="w-full h-full object-cover object-center filter grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-teal-500 to-pink-500 flex items-center justify-center text-6xl text-white">
                                        {member.icon}
                                    </div>
                                )}
                            </div>
                            
                            {/* Información del miembro */}
                            <div className="p-6 text-center">
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-pink-600 bg-clip-text text-transparent mb-2">
                                    {member.name}
                                </h3>
                                <p className="text-lg text-teal-600 font-medium mb-3">
                                    {member.role}
                                </p>
                                <p className="text-gray-600">
                                    {member.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Llamada a la acción */}
                <div className="text-center mt-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <p className="text-lg text-gray-600 mb-6">
                            ¿Listo para trabajar con nosotros?
                        </p>
                        <button className="bg-teal-600 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105">
                            Contáctanos
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Team;
