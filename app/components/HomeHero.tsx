'use client';

import { motion } from 'framer-motion';

export default function HomeHero() {
    return (
        <section className="relative pt-40 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
            {/* Premium background element */}
            <div className="absolute top-0 right-0 -z-10 opacity-[0.03] dark:opacity-[0.07] pointer-events-none">
                <svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="300" cy="300" r="299.5" stroke="currentColor" strokeDasharray="4 4" />
                    <circle cx="300" cy="300" r="199.5" stroke="currentColor" />
                    <line x1="300" y1="0" x2="300" y2="600" stroke="currentColor" strokeWidth="0.5" />
                    <line x1="0" y1="300" x2="600" y2="300" stroke="currentColor" strokeWidth="0.5" />
                </svg>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8"
            >
                <div className="space-y-4">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-900 dark:text-neutral-100 block"
                    >
                        Digital Product Studio
                    </motion.span>
                    <h1 className="text-6xl sm:text-7xl md:text-9xl font-serif tracking-tighter text-neutral-900 dark:text-neutral-100 leading-[0.9]">
                        Engineering <br />
                        <span className="text-neutral-400 dark:text-neutral-600 italic">what&apos;s next</span>
                    </h1>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl md:text-2xl font-light text-neutral-500 dark:text-neutral-400 max-w-2xl leading-relaxed"
                >
                    We design and build intuitive software products that simplify complexity with precision and elegant simplicity for everyone.
                </motion.p>
            </motion.div>

        </section>
    );
}
