import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import charSheet from '../assets/char_sheet.png';

export default function CharSheet() {
  const [isOpen, setIsOpen] = useState(false);

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

      <div 
        className="bg-vt-gray border border-white/5 p-4 rounded-3xl shadow-2xl shadow-black/60 transition-all duration-300 hover:shadow-rose-950/20 max-w-4xl w-full cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <motion.img
          src={charSheet}
          alt="Character Sheet"
          className="w-full h-auto object-cover rounded-2xl"
          initial={{ filter: 'grayscale(100%)' }}
          whileHover={{ filter: 'grayscale(0%)' }}
          transition={{ duration: 0.4 }}
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[100] p-4 bg-black/90 backdrop-blur-md overflow-y-auto flex justify-center items-start custom-scrollbar"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="fixed top-4 right-4 md:top-8 md:right-8 p-3 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full transition-colors z-[102]"
            >
              <X className="w-6 h-6 md:w-8 md:h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl mt-16 md:mt-20 mb-16"
            >
              <img 
                src={charSheet} 
                alt="Character Sheet Full" 
                className="w-full h-auto rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
