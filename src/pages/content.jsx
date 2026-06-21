import { motion } from 'framer-motion';
import { Lock, Play } from 'lucide-react';

const CONTENT_CATEGORIES = [
    {
        title: "Content Kedepannya",
        items: [
            { name: "Gaming" },
            { name: "Open Mabar (Valorant, Apex, dll)" },
            { name: "Curhatan Mingguan" },
            { name: "Vlog & RL Streams" },
            { name: "Repiew mainan" },
            { name: "Karaoke (mungkin)" },
        ]
    },
];

export default function Content() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen pt-12 pb-32 px-6 md:px-20 bg-vt-black flex flex-col items-center"
        >
            {/* Title */}
            <div className="flex flex-col items-center gap-2 mb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-black text-vt-white uppercase font-game tracking-tight">
                    <span className="text-vt-red">My</span> Content
                </h1>
            </div>

            {/* Content List */}
            <div className="w-full max-w-2xl flex flex-col gap-10">
                {CONTENT_CATEGORIES.map((category, idx) => {
                    return (
                        <div key={idx} className="flex flex-col">
                            {/* Category Header */}
                            <div className="flex items-center gap-3 mb-6 border-b border-white/[0.05] pb-3">
                                <span className="w-1 h-5 bg-vt-red rounded-full" />
                                <h3 className="text-lg font-bold text-vt-white uppercase font-game tracking-wider">
                                    {category.title}
                                </h3>
                                {category.description && (
                                    <span className="text-xs text-stone-500 font-mono ml-auto hidden sm:inline">
                                        // {category.description}
                                    </span>
                                )}
                            </div>

                            {/* Content Items */}
                            <div className="flex flex-col gap-2.5">
                                {category.items.map((item, iIdx) => {
                                    const isLocked = item.type === 'locked';
                                    const isVideo = item.type === 'video';

                                    return (
                                        <div
                                            key={iIdx}
                                            className="group flex items-center justify-between p-4 rounded-xl bg-vt-gray border border-white/[0.02] hover:border-vt-red/30 transition-all duration-300 cursor-pointer"
                                        >
                                            <div className="flex items-center gap-4">
                                                {/* Icon Indicator */}
                                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-vt-black border border-white/[0.05]">
                                                    {isVideo && (
                                                        <Play className="w-3.5 h-3.5 text-vt-red fill-vt-red ml-0.5 drop-shadow-[0_0_8px_rgba(226,30,44,0.6)]" />
                                                    )}
                                                    {isLocked && (
                                                        <Lock className="w-3.5 h-3.5 text-stone-600" />
                                                    )}
                                                </div>
                                                <span className={`text-base font-medium tracking-wide transition-colors ${isLocked
                                                    ? 'text-stone-600'
                                                    : 'text-stone-300 group-hover:text-vt-white'
                                                    }`}>
                                                    {item.name}
                                                </span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </motion.div>
    );
}