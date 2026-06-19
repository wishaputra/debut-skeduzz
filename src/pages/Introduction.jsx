import { motion } from 'framer-motion';
import avatar from '../assets/vtuber_avatar.png';

export default function Introduction() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen pt-12 pb-32 px-6 md:px-20 flex flex-col md:flex-row items-center justify-center gap-16 bg-vt-black"
    >
      <motion.div
        className="w-full md:w-1/2 flex justify-center"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 80 }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-vt-red/20 rounded-full blur-3xl opacity-70 animate-pulse"></div>
          <motion.img
            src={avatar}
            alt="VTuber Avatar"
            className="w-80 md:w-[460px] h-auto object-contain relative z-10 drop-shadow-[0_15px_35px_rgba(226,30,44,0.25)]"
            animate={{ y: [-8, 8, -8] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <span className="text-vt-red font-bold text-xs tracking-[0.25em] mb-4 uppercase block">
          Etmin Sudah Tiba
        </span>
        <h1 className="text-5xl md:text-6xl font-black text-vt-white mb-6 leading-tight uppercase font-game">
          Welcome to <br />
          <span className="text-vt-red">My Debut Stream!</span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 font-medium max-w-lg mx-auto md:mx-0 leading-relaxed">
          Gweh adalah anuan
        </p>
      </motion.div>
    </motion.div>
  );
}

