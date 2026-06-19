import { motion } from 'framer-motion';
import { Tv } from 'lucide-react';

const ANIMES = [
  { name: "Frieren", genre: "Fantasy, Adventure" },
  { name: "Jujutsu Kaisen", genre: "Action, Supernatural" },
  { name: "Bocchi the Rock!", genre: "Comedy, Music" },
  { name: "Attack on Titan", genre: "Action, Drama, Fantasy" },
  { name: "Demon Slayer", genre: "Action, Supernatural" },
  { name: "Mushoku Tensei", genre: "Adventure, Drama, Fantasy, Isekai" },
  { name: "Re:Zero Series", genre: "Psychological, Fantasy, Isekai" },
  { name: "Classroom of the Elite", genre: "Psychological, Drama, School" },
  { name: "Neon Genesis Evangelion", genre: "Mecha, Psychological, Sci-Fi" },
  { name: "MARRIAGETOXIN", genre: "Action, Comedy, Romance" },
  { name: "Kaguya-sama: Love is War", genre: "Comedy, Romance, School" },
  { name: "Oshi no Ko", genre: "Drama, Supernatural" },
  { name: "Chainsaw Man", genre: "Action, Supernatural, Horror" },
  { name: "Spy x Family", genre: "Action, Comedy, Family" },
];

export default function Anime() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen pt-12 pb-32 px-6 md:px-20 bg-vt-black flex flex-col items-center"
    >
      <div className="flex items-center gap-4 mb-12">
        <Tv className="text-vt-red w-10 h-10" />
        <h1 className="text-4xl md:text-5xl font-black text-vt-white uppercase font-game tracking-tight text-center">
          Anime List
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {ANIMES.map((anime, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -4, scale: 1.02 }}
            className="bg-vt-gray border border-white/5 rounded-3xl p-6 flex flex-col items-center justify-center text-center shadow-2xl shadow-black/40 relative overflow-hidden group min-h-[160px]"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-vt-red/0 to-vt-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h2 className="text-2xl font-bold text-vt-white mb-2 relative z-10">{anime.name}</h2>
            <p className="text-stone-400 font-medium relative z-10">{anime.genre}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
