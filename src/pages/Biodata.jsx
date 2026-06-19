import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, X } from 'lucide-react';
import skeduzzGun from '../assets/SkeduzzGun.png';
import zetaImg from '../assets/zeta.png';
import cat1 from '../assets/cat1.png';
import cat2 from '../assets/cat2.png';
import cat3 from '../assets/cat3.png';
import cat4 from '../assets/cat4.png';
import cat5 from '../assets/cat5.png';

const LIKES = [
  { label: "Gaming", type: "link", path: "/gaming" },
  { label: "Anime", type: "link", path: "/anime" },
  { label: "Zeta", type: "modal", modalId: "zeta" },
  { label: "Makan & Minum", type: "modal", modalId: "food" },
  { label: "Cats", type: "modal", modalId: "cats" }
];
const DISLIKES = ["Pemerintah", "Kecoa"];

export default function Biodata() {
  const [activeModal, setActiveModal] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const renderModalContent = () => {
    if (activeModal === 'zeta') {
      return (
        <div className="flex flex-col items-center justify-center p-10 text-center">
          <Heart className="w-24 h-24 text-vt-red mb-6 animate-pulse drop-shadow-[0_0_20px_rgba(226,30,44,0.6)]" fill="currentColor" />
          <h2 className="text-3xl font-black text-vt-white mb-4 uppercase font-game">Zeta!</h2>
          <div className="w-64 h-72 bg-vt-black border border-white/10 rounded-3xl flex items-center justify-center overflow-hidden mb-6 shadow-2xl shadow-vt-red/10">
            <img src={zetaImg} alt="Zeta" className="w-full h-full object-cover object-top" />
          </div>
          <p className="text-vt-red font-medium text-xl uppercase tracking-widest">Zeta Best Girl!</p>
        </div>
      );
    }
    if (activeModal === 'food') {
      return (
        <div className="flex flex-col items-center justify-center p-10 text-center">
          <h2 className="text-3xl font-black text-vt-white mb-8 uppercase font-game">Makan & Minum</h2>
          <ul className="text-xl space-y-4 text-stone-300 font-medium w-full max-w-xs text-left">
            <li className="flex items-center gap-3"><span className="text-vt-red">🍽️</span> Nasi Padang</li>
            <li className="flex items-center gap-3"><span className="text-vt-red">🍝</span> Mie Goreng</li>
            <li className="flex items-center gap-3"><span className="text-vt-red">🍵</span> Matcha Latte</li>
            <li className="flex items-center gap-3"><span className="text-vt-red">🍵</span> Americano</li>
            <li className="flex items-center gap-3"><span className="text-vt-red">🍵</span> Cake</li>
            <li className="flex items-center gap-3"><span className="text-vt-red">🍵</span> Pudding</li>
            <li className="flex items-center gap-3"><span className="text-vt-red">💧</span> Air Putih (Stay Hydrated)</li>
          </ul>
        </div>
      );
    }
    if (activeModal === 'cats') {
      return (
        <div className="flex flex-col items-center justify-center p-8 md:p-10 text-center w-full">
          <h2 className="text-3xl font-black text-vt-white mb-6 uppercase font-game flex items-center justify-center gap-3 w-full">
            <span className="text-4xl drop-shadow-[0_0_15px_rgba(226,30,44,0.3)]">🐈</span>
            Meow!
          </h2>
          <div className="grid grid-cols-2 gap-3 mb-6 w-full max-w-sm">
            {[cat1, cat2, cat3, cat4, cat5].map((cat, i) => (
              <div key={i} onClick={() => setPreviewImage(cat)} className={`bg-vt-black border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-vt-red/10 cursor-pointer ${i === 0 ? 'col-span-2 h-48' : 'h-28'}`}>
                <img src={cat} alt={`Cat ${i + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
          <p className="text-stone-300 font-medium text-lg">Kucing itu lucu dan menggemaskan!</p>
        </div>
      );
    }
    return null;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen pt-12 pb-32 px-6 md:px-20 bg-vt-black flex flex-col items-center relative"
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
              <li><span className="text-vt-red font-semibold">Color:</span> #E11D48</li>
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
            <h2 className="text-xl font-black text-vt-red mb-6 uppercase font-game tracking-wider">+ LIKES</h2>
            <div className="flex flex-col gap-4">
              {LIKES.map((item, i) => {
                if (item.type === 'link') {
                  return (
                    <Link key={i} to={item.path}>
                      <motion.div whileHover={{ x: 5 }} className="text-xl font-medium text-stone-300 hover:text-vt-red flex items-center gap-3 cursor-pointer transition-colors">
                        <span className="text-vt-red/50 text-sm">▶</span> {item.label}
                      </motion.div>
                    </Link>
                  );
                }
                if (item.type === 'modal') {
                  return (
                    <motion.div key={i} whileHover={{ x: 5 }} onClick={() => setActiveModal(item.modalId)} className="text-xl font-medium text-stone-300 hover:text-vt-red flex items-center gap-3 cursor-pointer transition-colors">
                      <span className="text-vt-red/50 text-sm">▶</span> {item.label}
                    </motion.div>
                  );
                }
                return (
                  <div key={i} className="text-xl font-medium text-stone-300 flex items-center gap-3">
                    <span className="text-vt-red/50 text-sm">•</span> {item.label}
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="bg-vt-gray/50 border border-white/5 rounded-3xl p-8 flex-1 shadow-2xl shadow-black/30"
          >
            <h2 className="text-xl font-black text-vt-darkred mb-6 uppercase font-game tracking-wider">- DISLIKES</h2>
            <div className="flex flex-col gap-4">
              {DISLIKES.map((item, i) => (
                <div key={i} className="text-xl font-medium text-stone-400 flex items-center gap-3">
                  <span className="text-vt-darkred/50 text-sm">•</span> {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModal(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#1C1C21] border border-white/10 rounded-[2rem] shadow-2xl shadow-vt-red/5 max-w-md w-full relative overflow-hidden"
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-6 right-6 text-stone-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
              {renderModalContent()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Preview Overlay */}
      <AnimatePresence>
        {previewImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewImage(null)}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          >
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute top-6 right-6 text-stone-400 hover:text-white transition-colors z-[210] bg-black/50 p-2 rounded-full"
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={previewImage}
              alt="Preview"
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl shadow-black/80"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
