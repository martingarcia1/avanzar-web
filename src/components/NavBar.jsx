import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const NavBar = () => {
    const location = useLocation();

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <nav className="glass-card backdrop-blur-lg border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            {/* Logo */}
                            <Link to="/" className="flex items-center">
                                <span className="text-2xl font-bold gradient-text">Avanzar</span>
                            </Link>
                        </div>

                        {/* Navigation Links */}
                        <div className="flex items-center space-x-8">
                            <NavLink to="/" active={location.pathname === "/"}>
                                Inicio
                            </NavLink>
                            <NavLink to="/team" active={location.pathname === "/team"}>
                                Equipo
                            </NavLink>
                            <NavLink to="/testimonials" active={location.pathname === "/testimonials"}>
                                Testimonios
                            </NavLink>
                            <NavLink to="/projects" active={location.pathname === "/projects"}>
                                Trabajos
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

const NavLink = ({ to, children, active }) => {
    return (
        <Link to={to} className="relative group">
            <span className={`text-sm font-medium transition-colors ${
                active ? "text-white" : "text-gray-300 hover:text-white"
            }`}>
                {children}
            </span>
            {active && (
                <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-teal-500 to-pink-500"
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                />
            )}
        </Link>
    );
};

export default NavBar;
