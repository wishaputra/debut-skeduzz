import { motion } from 'framer-motion';

export default function Lore() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen pt-12 pb-32 px-6 md:px-20 bg-vt-black flex flex-col items-center"
    >
      <h1 className="text-4xl md:text-5xl font-black text-vt-white mb-8 uppercase font-game tracking-tight">
        Background
      </h1>

      <div className="bg-vt-gray border border-white/5 rounded-3xl p-8 md:p-12 w-full max-w-3xl shadow-2xl shadow-black/40 relative overflow-hidden">
        {/* Muted header tag */}
        <div className="hidden sm:block absolute top-6 left-8 text-vt-red font-bold text-xs tracking-[0.2em] uppercase opacity-80 font-game">
          Sedikit Penjelasan
        </div>

        <div className="prose prose-invert prose-stone text-stone-300 font-medium leading-relaxed">
          <p className="text-xl md:text-2xl text-stone-300 font-medium leading-relaxed">
            Manusia gabut ini bukanya ngerjain skripsi malah jadi vtuber untuk lari dari kenyataan.
          </p>

          <div className="mt-10 p-6 bg-black/20 border-l-4 border-vt-red rounded-r-2xl shadow-sm">
            <h3 className="text-sm text-vt-red font-bold mb-2 uppercase font-game tracking-[0.15em]">Moto hidup:</h3>
            <p className="text-vt-white text-lg md:text-xl font-bold italic">
              "Jalani Hidup Seplenger mungkin."
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

