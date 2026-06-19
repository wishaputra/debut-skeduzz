import { motion } from 'framer-motion';

import skeduzzGun from '../assets/SkeduzzGun.png';

const LIKES = ["gaming", "anime", "FPS", "Zeta", "Mint", "Cats"];
const DISLIKES = ["Pemerintah"];

export default function Biodata() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen pt-12 pb-32 px-6 md:px-20 bg-vt-black flex flex-col items-center"
    >
      <h1 className="text-4xl md:text-5xl font-black text-vt-white mb-12 uppercase font-game tracking-tight">
        Sedikit Biodata
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
        {/* Basic Info & Stats */}
        <div className="bg-vt-gray border border-white/5 rounded-3xl pt-8 px-8 flex flex-col items-center justify-between shadow-2xl shadow-black/40 relative overflow-hidden">
          <div className="w-full relative z-10">
            <h2 className="text-2xl font-bold text-vt-white mb-6 border-b border-white/5 pb-3 uppercase font-game">Base Info</h2>
            <ul className="text-lg space-y-4 mb-8 text-stone-300 font-medium">
              <li><span className="text-vt-red font-semibold">Name:</span> Skeduzz</li>
              <li><span className="text-vt-red font-semibold">Height:</span> 175cm (Fun Sized)</li>
              <li><span className="text-vt-red font-semibold">Birthday:</span> 7 March</li>
              <li><span className="text-vt-red font-semibold">Languages:</span> EN/ID</li>
              <li><span className="text-vt-red font-semibold">Color:</span> #AC1D2B</li>
            </ul>
          </div>

          <motion.img
            src={skeduzzGun}
            alt="Skeduzz with Gun"
            initial={{ y: 150 }}
            whileInView={{ y: 10 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.4, delay: 0.2 }}
            className="w-56 md:w-64 drop-shadow-[0_12px_24px_rgba(226,30,44,0.15)] mt-auto"
          />
        </div>

        {/* Likes / Dislikes */}
        <div className="flex flex-col gap-6">
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-vt-gray border border-white/5 rounded-3xl p-8 flex-1 shadow-2xl shadow-black/30"
          >
            <h2 className="text-xl font-black text-vt-red mb-4 uppercase font-game tracking-wider">+ LIKES</h2>
            <ul className="text-lg space-y-2 font-medium list-disc list-inside text-stone-300">
              {LIKES.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="bg-vt-gray/50 border border-white/5 rounded-3xl p-8 flex-1 shadow-2xl shadow-black/30"
          >
            <h2 className="text-xl font-black text-vt-darkred mb-4 uppercase font-game tracking-wider">- DISLIKES</h2>
            <ul className="text-lg space-y-2 font-medium list-disc list-inside text-stone-400">
              {DISLIKES.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
