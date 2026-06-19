import { motion } from 'framer-motion';
import charSheet from '../assets/char_sheet.png';

export default function CharSheet() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen pt-12 pb-32 px-6 md:px-20 bg-vt-black flex flex-col items-center"
    >
      <h1 className="text-4xl md:text-5xl font-black text-vt-white mb-8 uppercase font-game tracking-tight">
        Gallery & Assets
      </h1>

      <div className="bg-vt-gray border border-white/5 p-4 rounded-3xl shadow-2xl shadow-black/60 transition-all duration-300 hover:shadow-rose-950/20 max-w-4xl w-full">
        <motion.img 
          src={charSheet} 
          alt="Character Sheet" 
          className="w-full h-auto object-cover rounded-2xl"
          initial={{ filter: 'grayscale(100%)' }}
          whileHover={{ filter: 'grayscale(0%)' }}
          transition={{ duration: 0.4 }}
        />
      </div>
      
      <p className="mt-8 text-sm font-bold tracking-widest text-vt-red bg-vt-red/10 px-6 py-3 border border-vt-red/20 rounded-full uppercase">
        Hover gambar untuk melihat warna asli!
      </p>
    </motion.div>
  );
}

