import { motion } from 'framer-motion';
import GameButton from '../components/GameButton';
import BouncingChibi from '../components/BouncingChibi';
import chibi1 from '../assets/chibi1.png';
import chibi2 from '../assets/chibi2.png';
import ayamskeduzz from '../assets/ayamskeduzz.png';
import scene1 from '../assets/Scene1.gif';

const BACKDROP_DURATIONS = [5.2, 4.8, 7.1, 9.3, 6.4, 8.2, 5.9, 7.5, 8.8, 6.1, 9.9, 4.3];

export default function SplashScreen({ onPlay }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: 'blur(8px)' }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col items-center justify-center bg-vt-black relative overflow-hidden"
    >
      {/* Organic Background Elements */}
      <div className="absolute inset-0 opacity-40 pointer-events-none flex flex-wrap gap-12 p-12 justify-center items-center">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 90, 180],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: BACKDROP_DURATIONS[i % BACKDROP_DURATIONS.length],
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-24 h-24 border border-vt-red/10 bg-vt-red/5 backdrop-blur-[2px]"
            style={{ borderRadius: i % 3 === 0 ? '40% 60% 70% 30% / 40% 50% 60% 50%' : '50%' }}
          />
        ))}
      </div>

      {/* Draggable Bouncing Chibis with Soft Shadows */}
      <BouncingChibi 
        src={chibi1} 
        alt="Chibi 1" 
        initialX={100} 
        initialY={100} 
        initialVelocityX={1.2} 
        initialVelocityY={1.0}
        shadowColor="rgba(226, 30, 44, 0.3)"
      />

      <BouncingChibi 
        src={chibi2} 
        alt="Chibi 2" 
        initialX={window.innerWidth > 800 ? 700 : 200} 
        initialY={350} 
        initialVelocityX={-1.0} 
        initialVelocityY={1.3}
        shadowColor="rgba(159, 18, 28, 0.3)"
      />

      <BouncingChibi 
        src={ayamskeduzz} 
        alt="Ayam Skeduzz" 
        initialX={window.innerWidth > 800 ? 400 : 150} 
        initialY={200} 
        initialVelocityX={1.5} 
        initialVelocityY={-1.1}
        shadowColor="rgba(255, 240, 0, 0.3)"
      />

      <BouncingChibi 
        src={scene1} 
        alt="Scene 1" 
        initialX={window.innerWidth > 800 ? 900 : 50} 
        initialY={450} 
        initialVelocityX={-1.3} 
        initialVelocityY={-0.9}
        shadowColor="rgba(0, 240, 255, 0.3)"
      />

      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="z-10 text-center mb-12 flex flex-col items-center"
      >
        <h1 className="text-7xl md:text-9xl font-black text-vt-white uppercase tracking-tight font-game">
          Skeduzz
        </h1>
        <span className="text-xl md:text-2xl font-semibold tracking-[0.4em] text-vt-red uppercase mt-1 px-4 py-1.5 border-y border-vt-red/20">
          D e b u t
        </span>
      </motion.div>

      <div className="z-10">
        <GameButton onClick={onPlay}>
          Click to Play
        </GameButton>
      </div>
    </motion.div>
  );
}

