import { motion } from 'framer-motion';
import { Gamepad2 } from 'lucide-react';



const STORY_GAMES = [
  { name: "Persona Series" },
  { name: "Baldurs Gate 3" },
  { name: "RE Series" },
];

const MULTIPLAYER_GAMES = [
  { name: "Valorant" },
  { name: "CS 2" },
  { name: "Minecraft" },
  { name: "Monster Hunter Series" },
  { name: "Forza Series" },
  { name: "Gamble With Your Friends" },
  { name: "Helldivers 2" },
  { name: "Super Battle Golf" },
  { name: "Peak" },
];

export default function Gaming() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen pt-12 pb-32 px-6 md:px-20 bg-vt-black flex flex-col items-center"
    >
      <div className="flex items-center gap-4 mb-12">
        <Gamepad2 className="text-vt-red w-10 h-10" />
        <h1 className="text-4xl md:text-5xl font-black text-vt-white uppercase font-game tracking-tight text-center">
          Game List
        </h1>
      </div>

      <div className="w-full max-w-6xl flex flex-col gap-12">

        {/* Story Section */}
        <div>
          <h2 className="text-3xl font-bold text-vt-red mb-6 uppercase border-b border-white/5 pb-2">
            Story & Single Player
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STORY_GAMES.map((game, i) => (
              <motion.div
                key={`story-${i}`}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-vt-gray border border-white/5 rounded-3xl p-6 flex flex-col items-center justify-center text-center shadow-2xl shadow-black/40 relative overflow-hidden group min-h-[120px]"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-vt-red/0 to-vt-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="text-xl font-bold text-vt-white relative z-10">{game.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>


        {/* Multiplayer Section */}
        <div>
          <h2 className="text-3xl font-bold text-vt-red mb-6 uppercase border-b border-white/5 pb-2">
            Multiplayer & Co-op
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MULTIPLAYER_GAMES.map((game, i) => (
              <motion.div
                key={`multi-${i}`}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-vt-gray border border-white/5 rounded-3xl p-6 flex flex-col items-center justify-center text-center shadow-2xl shadow-black/40 relative overflow-hidden group min-h-[120px]"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-vt-red/0 to-vt-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="text-xl font-bold text-vt-white relative z-10">{game.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>


      </div>
    </motion.div>
  );
}
