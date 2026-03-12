'use client';

import { motion } from 'framer-motion';

export default function HomeHero() {
    return (
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-12 2xl:px-24 mx-auto overflow-hidden flex-1 flex flex-col justify-center max-w-[120rem] w-full min-h-[105vh]">
            {/* Premium Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_100%_120%_at_50%_50%,#000_30%,transparent_100%)] -z-20 pointer-events-none"></div>

            {/* Premium background element */}
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 -z-10 w-[60vw] h-[60vw] min-w-[600px] min-h-[600px] opacity-[0.03] dark:opacity-[0.07] pointer-events-none">
                <svg width="100%" height="100%" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                className="space-y-6 md:space-y-10"
            >
                <div className="space-y-4">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-[clamp(0.75rem,1vw,1rem)] font-mono uppercase tracking-[0.3em] text-neutral-900 dark:text-neutral-100 block"
                    >
                        Digital Product Studio
                    </motion.span>
                    <h1 className="text-[clamp(3.75rem,8vw+1rem,12rem)] font-serif tracking-tighter text-neutral-900 dark:text-neutral-100 leading-[0.9]">
                        Engineering <br />
                        <span className="text-neutral-400 dark:text-neutral-600 italic">what&apos;s next</span>
                    </h1>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-[clamp(1.125rem,1.5vw+0.5rem,2.25rem)] font-light text-neutral-500 dark:text-neutral-400 max-w-2xl xl:max-w-4xl leading-relaxed"
                >
                    We design and build intuitive software products that simplify complexity with precision and elegant simplicity for everyone.
                </motion.p>
            </motion.div>

        </section>
    );
}
