import { Link, useLocation } from 'react-router-dom';
import { User, BookOpen, ImageIcon, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const NAV_ITEMS = [
  { path: '/intro', label: 'Intro', icon: User },
  { path: '/biodata', label: 'Bio', icon: Heart },
  { path: '/lore', label: 'Lore', icon: BookOpen },
  { path: '/charsheet', label: 'Gallery', icon: ImageIcon },
];

export default function Navigation() {
  const location = useLocation();

  if (location.pathname === '/') return null;

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-hud-bg border border-white/10 rounded-3xl p-2.5 flex gap-2.5 z-50 backdrop-blur-xl shadow-2xl shadow-black/80"
    >
      {NAV_ITEMS.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;
        return (
          <Link key={item.path} to={item.path}>
            <motion.div
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
              className={`py-2.5 px-4 rounded-2xl border transition-all duration-300 flex flex-col items-center gap-1 min-w-[76px]
                ${isActive 
                  ? 'bg-vt-red border-transparent text-white shadow-md shadow-vt-red/30' 
                  : 'bg-transparent border-transparent text-stone-400 hover:text-vt-red hover:bg-white/5'}`}
            >
              <Icon size={20} />
              <span className="text-[10px] font-bold uppercase tracking-widest">{item.label}</span>
            </motion.div>
          </Link>
        );
      })}
    </motion.nav>
  );
}


