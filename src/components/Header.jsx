import { useState } from 'react';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/skills', label: 'Skills' },
    { to: '/projects', label: 'Projects' }, 
   
];

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
   
    const navLinkVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: 0.2 + i * 0.1, duration: 0.5, type: 'spring' }
        }),
    };

    const headerVariants = {
        hidden: { opacity: 0, y: -40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, type: 'spring' } }
    };

    return (
        <motion.header
            className="bg-blue-100 shadow-md shadow-blue-200/60 py-3 px-2 sm:py-4 sm:px-4 md:py-5 md:px-8 flex justify-between items-center fixed w-full top-0 z-30 transition-all duration-300"
            style={{ boxShadow: '0 4px 16px 0 rgba(37, 99, 235, 0.13)' }}
            initial="hidden"
            animate="visible"
            variants={headerVariants}
        >
            <div className="flex items-center gap-3 sm:gap-4">
                <span className="bg-blue-600 rounded-lg w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-white font-bold text-xl sm:text-2xl shadow-md animate-bounce">
                    K
                </span>
                <h1 className="text-base sm:text-lg md:text-xl font-bold tracking-wide text-gray-800 hover:text-blue-600 whitespace-nowrap">
                    Kartik<span className="text-blue-600">'s Portfolio</span>
                </h1>
            </div>

            <nav className="hidden md:block">
                <ul className="flex gap-4 md:gap-8 items-center">
                    {navItems.map(({ to, label }, i) => (
                        <motion.li
                            key={to}
                            custom={i}
                            initial="hidden"
                            animate="visible"
                            variants={navLinkVariants}
                        >
                            <NavLink
                                to={to}
                                className={({ isActive }) =>
                                    `px-3 py-1.5 md:px-5 md:py-2 rounded-md font-medium text-sm md:text-base transition-all duration-200
                                    ${isActive
                                        ? 'bg-blue-600 text-white shadow scale-105'
                                        : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:scale-105'}`}
                            >
                                {label}
                            </NavLink>
                        </motion.li>
                    ))}
                </ul>
            </nav>

            <button
                className="md:hidden relative w-9 h-9 flex items-center justify-center focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                <span
                    className={`absolute left-2 right-2 h-1 bg-blue-700 rounded transition-all duration-300
                        ${menuOpen ? 'rotate-45 top-4' : 'top-2'}
                    `}
                ></span>
                <span
                    className={`absolute left-2 right-2 h-1 bg-blue-700 rounded transition-all duration-300
                        ${menuOpen ? 'opacity-0' : 'top-4'}
                    `}
                ></span>
                <span
                    className={`absolute left-2 right-2 h-1 bg-blue-700 rounded transition-all duration-300
                        ${menuOpen ? '-rotate-45 top-4' : 'top-6'}
                    `}
                ></span>
            </button>

            {menuOpen && (
                <motion.nav
                    className="md:hidden fixed inset-0 bg-white/95 flex flex-col items-center justify-center gap-8 z-40"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <button
                        className="absolute top-4 right-6 text-blue-600 text-3xl hover:scale-125 transition-transform duration-200"
                        onClick={() => setMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        &times;
                    </button>
                    <ul className="flex flex-col gap-6 text-lg">
                        {navItems.map(({ to, label }, i) => (
                            <motion.li
                                key={to}
                                custom={i}
                                initial="hidden"
                                animate="visible"
                                variants={navLinkVariants}
                            >
                                <NavLink
                                    to={to}
                                    className={({ isActive }) =>
                                        `block px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-200
                                        ${isActive
                                            ? 'bg-blue-600 text-white shadow scale-105'
                                            : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:scale-105'}`}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {label}
                                </NavLink>
                            </motion.li>
                        ))}
                    </ul>
                  
                </motion.nav>
            )}
        </motion.header>
    );
};

export default Header;
