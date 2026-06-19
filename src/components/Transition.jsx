import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef } from 'react';
import funnyFace from '../assets/funny-face.png';
import punchSound from '../assets/punch.mp3';

export default function Transition({ isVisible, onComplete }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (isVisible) {
      // Play the punch sound only when transition happens
      audioRef.current = new Audio(punchSound);
      audioRef.current.play().catch(e => console.log('Audio play failed:', e));

      const timer = setTimeout(() => {
        onComplete();
      }, 3000); // 3 seconds jumpscare duration (slower)
      return () => clearTimeout(timer);
    }
  }, [isVisible, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-vt-black overflow-hidden pointer-events-none"
        >
          <motion.img
            src={funnyFace}
            alt="Jumpscare Face"
            initial={{ scale: 0.1, rotate: -20 }}
            animate={{ 
              scale: [0.1, 5, 8], 
              rotate: [-20, 10, -5, 5, 0],
              filter: ['brightness(1)', 'brightness(1.5)', 'brightness(1)']
            }}
            transition={{ 
              duration: 2.5, 
              ease: "easeIn" 
            }}
            className="w-full h-full object-cover max-w-none"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
