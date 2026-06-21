import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Kamu bisa edit link dan handle-nya di sini
const SOCIAL_LINKS = [
    {
        name: "YouTube",
        url: "https://www.youtube.com/@skeduzz",
        handle: "@skeduzz",
        color: "text-red-500",
        bg: "hover:bg-red-500/10 hover:border-red-500/50",

    },
    {
        name: "X (Twitter)",
        url: "https://x.com/NotSkeduzz",
        handle: "@NotSkeduzz",
        color: "text-stone-200",
        bg: "hover:bg-stone-500/10 hover:border-stone-500/50",

    },
    {
        name: "Instagram",
        url: "https://instagram.com/yourhandle",
        handle: "@NotSkeduzz",
        color: "text-pink-500",
        bg: "hover:bg-pink-500/10 hover:border-pink-500/50",

    },
    {
        name: "TikTok",
        url: "https://tiktok.com/@yourhandle",
        handle: "@Skeduzz",
        color: "text-cyan-400",
        bg: "hover:bg-cyan-500/10 hover:border-cyan-500/50",

    }
];

export default function Social() {
    const [showThankYou, setShowThankYou] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen pt-12 pb-32 px-6 md:px-20 bg-vt-black flex flex-col items-center justify-center"
        >
            <h1 className="text-4xl md:text-5xl font-black text-vt-white mb-4 uppercase font-game tracking-widest text-center">
                Social <span className="text-vt-red">Media</span>
            </h1>
            <p className="text-stone-400 mb-12 text-center max-w-2xl text-lg">

            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
                {SOCIAL_LINKS.map((social, i) => (
                    <motion.a
                        key={i}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5, scale: 1.02 }}
                        className={`bg-vt-gray border border-white/5 rounded-3xl p-6 flex items-center gap-6 shadow-2xl shadow-black/40 transition-colors duration-300 ${social.bg}`}
                    >
                        <div className={`text-3xl flex items-center justify-center min-w-[4rem] h-16 rounded-2xl bg-vt-black border border-white/5 shadow-inner ${social.color}`}>
                            {social.icon}
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-xl font-bold text-vt-white mb-1 tracking-wider font-game uppercase">{social.name}</h2>
                            <p className="text-lg font-medium text-stone-400">{social.handle}</p>
                        </div>
                    </motion.a>
                ))}
            </div>

            <motion.button
                onClick={() => setShowThankYou(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-16 px-12 py-4 bg-vt-red text-white font-game uppercase tracking-widest text-xl rounded-full shadow-[0_0_20px_rgba(226,30,44,0.4)] hover:shadow-[0_0_30px_rgba(226,30,44,0.8)] transition-all"
            >
                Finish
            </motion.button>

            <AnimatePresence>
                {showThankYou && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black/90 backdrop-blur-md p-6 cursor-pointer"
                        onClick={() => setShowThankYou(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, y: 30 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 30 }}
                            transition={{ type: "spring", bounce: 0.5 }}
                            className="text-center"
                        >
                            <h2 className="text-6xl md:text-8xl font-black text-vt-red uppercase font-game mb-6 tracking-widest drop-shadow-[0_0_40px_rgba(226,30,44,0.6)]">
                                Thank You!
                            </h2>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
