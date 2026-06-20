import { motion } from 'framer-motion';

import dinoImg from '../assets/dino.png';
import skeduzzImg from '../assets/chibi2.png';

const CREDITS = [
  { role: "L2D Art & Rig", name: "Dino Tisoshi ", image: dinoImg },
  { role: "Char debut", name: "Dino Tisoshi", image: dinoImg },
  { role: "CSS / Web", name: "Skeduzz", image: skeduzzImg },
];

export default function Credit() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen pt-12 pb-32 px-6 md:px-20 bg-vt-black flex flex-col items-center justify-center"
    >
      <h1 className="text-4xl md:text-5xl font-black text-vt-red mb-4 uppercase font-game tracking-widest text-center">
        Special Thanks To
      </h1>
      <p className="text-stone-400 mb-12 text-center max-w-2xl text-lg">
        Terima kasih banyak kepada semua pihak yang telah membantu dalam project ini.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {CREDITS.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-vt-gray border border-white/5 rounded-3xl p-8 flex flex-col items-center justify-center shadow-2xl shadow-black/40 text-center"
          >
            {item.image && (
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 rounded-2xl object-cover mb-4 border-2 border-vt-red/30 shadow-md transition-transform duration-300 hover:scale-105"
              />
            )}
            <h2 className="text-lg font-bold text-vt-darkred mb-2 uppercase tracking-wider">{item.role}</h2>
            <p className="text-xl font-medium text-stone-200">{item.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
