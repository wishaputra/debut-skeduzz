import { motion } from 'framer-motion';

export default function GameButton({ children, onClick, className = '' }) {
  return (
    <motion.button
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.96 }}
      className={`bg-vt-red hover:bg-vt-darkred text-white font-game text-xl py-4 px-10 rounded-full shadow-lg shadow-vt-red/15 transition-all duration-300 uppercase tracking-wider ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}

