import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

const GOAL_CATEGORIES = [
    {
        title: "Sedikit pencapaian",
        description: "Something yang pengen di capai",
        goals: [
            { name: "Menjadi Streamer" },
            { name: "Punya usaha sendiri" },
            { name: "Jadi game dev" },
            { name: "Collab sama bang tara" },
        ]
    },
];

export default function Goals() {
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
                    Goals Kehidupan
                </h1>
                <p className="text-sm font-medium text-stone-500 uppercase tracking-widest font-mono">
                    // Target & Milestones
                </p>
            </div>

            {/* Goals List */}
            <div className="w-full max-w-2xl flex flex-col gap-10">
                {GOAL_CATEGORIES.map((category, idx) => {
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

                            {/* Goals Items */}
                            <div className="flex flex-col gap-2.5">
                                {category.goals.map((goal, gIdx) => {
                                    const isCompleted = goal.status === 'completed';
                                    const isInProgress = goal.status === 'in-progress';
                                    const isLocked = goal.status === 'locked';

                                    return (
                                        <div
                                            key={gIdx}
                                            className="group flex items-center justify-between p-4 rounded-xl bg-vt-gray border border-white/[0.02] hover:border-vt-red/30 transition-all duration-300"
                                        >
                                            <div className="flex items-center gap-4">
                                                {/* Status Indicator */}
                                                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-vt-black border border-white/[0.05]">
                                                    {isCompleted && (
                                                        <span className="w-2 h-2 rounded-full bg-vt-red shadow-[0_0_8px_rgba(226,30,44,0.6)]" />
                                                    )}
                                                    {isInProgress && (
                                                        <span className="relative flex h-2 w-2">
                                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-vt-red opacity-75"></span>
                                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-vt-red"></span>
                                                        </span>
                                                    )}
                                                    {isLocked && (
                                                        <Lock className="w-3 h-3 text-stone-600" />
                                                    )}
                                                </div>
                                                <span className={`text-base font-medium tracking-wide transition-colors ${isLocked
                                                        ? 'text-stone-600 line-through decoration-stone-800'
                                                        : 'text-stone-300 group-hover:text-vt-white'
                                                    }`}>
                                                    {goal.name}
                                                </span>
                                            </div>

                                            {/* Status Badge */}
                                            {goal.value && (
                                                <span className={`text-xs font-mono font-bold tracking-widest uppercase px-3 py-1 rounded border transition-all ${isCompleted
                                                        ? 'bg-vt-red/10 border-vt-red/20 text-vt-red'
                                                        : isInProgress
                                                            ? 'bg-vt-red border-vt-red text-white shadow-[0_0_15px_rgba(226,30,44,0.3)] animate-pulse'
                                                            : 'bg-stone-900 border-stone-800/40 text-stone-600'
                                                    }`}>
                                                    {goal.value}
                                                </span>
                                            )}
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

