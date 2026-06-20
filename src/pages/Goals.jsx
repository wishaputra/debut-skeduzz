import { motion } from 'framer-motion';
import { Trophy, CheckCircle2, Lock, Flame, Play } from 'lucide-react';

const GOAL_CATEGORIES = [
    {
        title: "Sedikit pencapaian",
        description: "Something yang pengen di capai",
        icon: Play,
        glowColor: "rgba(226, 30, 44, 0.15)",
        borderColor: "border-vt-red/20",
        iconColor: "text-vt-red",
        goals: [
            { name: "Debut Stream", status: "completed", value: "Done" },
            { name: "First Game Walkthrough", status: "completed", value: "Done" },
            { name: "12-Hour Endurance Stream", status: "in-progress", value: "Active" },
            { name: "Karaoke Stream", status: "locked", value: "Locked" },
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
            <div className="flex items-center gap-4 mb-8">
                <Trophy className="text-vt-red w-10 h-10 drop-shadow-[0_0_15px_rgba(226,30,44,0.6)] animate-pulse" />
                <h1 className="text-4xl md:text-5xl font-black text-vt-white uppercase font-game tracking-tight text-center">
                    Goals Kehidupan
                </h1>
            </div>

            {/* Goals List (Wide Box) */}
            <div className="w-full max-w-3xl flex flex-col gap-6">
                {GOAL_CATEGORIES.map((category, idx) => {
                    const CategoryIcon = category.icon;
                    return (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -4, scale: 1.005 }}
                            className={`bg-vt-gray border ${category.borderColor} rounded-3xl p-8 flex flex-col shadow-2xl shadow-black/40 relative overflow-hidden transition-all duration-300`}
                            style={{
                                background: `radial-gradient(circle at 50% 0%, ${category.glowColor} 0%, rgba(24,24,28,0.5) 70%)`
                            }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className={`p-2.5 rounded-2xl bg-vt-black/60 border border-white/5 ${category.iconColor}`}>
                                    <CategoryIcon className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-vt-white font-game uppercase">{category.title}</h3>
                            </div>

                            <div className="flex flex-col gap-4">
                                {category.goals.map((goal, gIdx) => {
                                    const isCompleted = goal.status === 'completed';
                                    const isInProgress = goal.status === 'in-progress';
                                    const isLocked = goal.status === 'locked';

                                    return (
                                        <div
                                            key={gIdx}
                                            className={`flex items-center justify-between p-4 rounded-2xl border transition-colors ${isCompleted
                                                ? 'bg-vt-red/5 border-vt-red/10 text-stone-200'
                                                : isInProgress
                                                    ? 'bg-amber-500/5 border-amber-500/20 text-stone-200'
                                                    : 'bg-vt-black/40 border-white/5 text-stone-500'
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                {isCompleted && (
                                                    <CheckCircle2 className="w-5 h-5 text-vt-red shrink-0" />
                                                )}
                                                {isInProgress && (
                                                    <Flame className="w-5 h-5 text-amber-500 animate-pulse shrink-0" />
                                                )}
                                                {isLocked && (
                                                    <Lock className="w-5 h-5 text-stone-600 shrink-0" />
                                                )}
                                                <span className={`text-base font-medium ${isLocked ? 'line-through decoration-stone-800' : ''}`}>
                                                    {goal.name}
                                                </span>
                                            </div>
                                            <span className={`text-xs font-bold px-3 py-1 rounded-full border ${isCompleted
                                                ? 'bg-vt-red/10 border-vt-red/20 text-vt-red'
                                                : isInProgress
                                                    ? 'bg-amber-500/10 border-amber-500/20 text-amber-400'
                                                    : 'bg-stone-900 border-stone-800 text-stone-600'
                                                }`}>
                                                {goal.value}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </motion.div>
    );
}
