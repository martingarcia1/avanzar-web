import { motion } from "framer-motion";
// Importamos las imágenes como recursos estáticos
import LoreImage from '@/assets/img/team/Lore.JPG';
import ContanzaImage from '@/assets/img/team/Conti.JPG';
import caroImage from '@/assets/img/team/Caro.JPG';
import RoImage from '@/assets/img/team/Ro.JPG';
import sergioImage from '@/assets/img/team/sergio.jpg';

const teamData = [
    {
        name: "Lorena Montenegro",
        role: "Directora del Estudio (C.P.N)",
        description: "Líder visionaria con amplia experiencia en contabilidad y gestión empresarial",
        img: LoreImage,
        icon: "👩‍💼"
    },
    {
        name: "Contanza Mansilla",
        role: "Estudio Contable",
        description: "Especialista en la gestión contable y secretaria administrativa en Avanzar Group",
        img: ContanzaImage,
        icon: "📊"
    },
    {
        name: "Rocio Mahafud",
        role: "Marketing Digital y Redes",
        description: "Especialista en estrategias digitales y gestión de redes sociales",
        img: RoImage,
        icon: "📱"
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
        <section className="pt-32 pb-24">
            <div className="container mx-auto px-4">
                {/* Encabezado de la sección */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-5xl font-bold mb-6 gradient-text">
                            Nuestro Equipo
                        </h2>
                        <p className="text-xl text-gray-300/90 max-w-2xl mx-auto leading-relaxed">
                            Un equipo multidisciplinario comprometido con el éxito de tu empresa
                        </p>
                    </motion.div>
                </div>

                {/* Scroll container */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto"
                >
                    {teamData.map((member, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div
                                key={member.name}
                                custom={index}
                                variants={itemVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false }}
                                className="w-full"
                            >
                                <div className={`flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} items-center glass-card overflow-hidden transition-all duration-500 hover:scale-[1.02] max-w-2xl mx-auto group`}>
                                    <div className="w-[300px] h-[450px] min-w-[300px] overflow-hidden flex-shrink-0 relative">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                                        <img
                                            src={member.img}
                                            alt={member.name}
                                            className="w-full h-full object-cover object-center filter grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                                            style={{
                                                width: '300px',
                                                height: '450px',
                                                objectFit: 'cover'
                                            }}
                                        />
                                    </div>
                                    <div className="md:w-1/2 p-8 text-center md:text-left space-y-4">
                                        <h3 className="text-2xl font-bold gradient-text mb-2">
                                            {member.name}
                                        </h3>
                                        <p className="text-lg font-medium mb-3 text-[#25A18E]">
                                            {member.role}
                                        </p>
                                        <p className="text-gray-300/90 leading-relaxed">
                                            {member.description}
                                        </p>
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ delay: 0.2 }}
                                            className="pt-4"
                                        >

                                        </motion.div>
                                    </div>
                                </div>

                            </motion.div>
                        );
                    })}

                </motion.div>

                {/* Llamada a la acción */}
                <div className="text-center mt-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        <p className="text-2xl text-gray-200/90 font-light">
                            ¿Listo para trabajar con nosotros?
                        </p>
                        <motion.button
                            className="btn-primary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Contáctanos
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Team;
