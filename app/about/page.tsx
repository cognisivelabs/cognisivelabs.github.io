'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <div className="pt-48 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-16 md:space-y-24"
            >
                <div className="space-y-12">

                    <div className="space-y-8 text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 font-light leading-relaxed max-w-3xl">
                        <p>
                            Cognisive is a digital product studio dedicated to engineering what&apos;s next.
                            We believe that the most powerful tools are those that simplify complexity
                            through precision and elegant design.
                        </p>

                        <p>
                            Our philosophy is centered on building resilient, high-performance
                            instruments that scale infinitely. We focus on the intersection of
                            technical excellence and intuitive user experience, ensuring our
                            products empower everyone, from individual creators to large-scale
                            operations.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-16 border-t border-neutral-100 dark:border-neutral-800">
                    <div className="space-y-4">
                        <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400">Our Studio</h3>
                        <p className="text-lg text-neutral-500 font-light">
                            Operating from the United Kingdom, we build a suite of high-performance
                            software including QuickForm, ZenDraw, and VerveNote.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400">CognisiveLabs</h3>
                        <p className="text-lg text-neutral-500 font-light">
                            Our R&D hub serves as a laboratory for experimentation, where
                            new architectural patterns and interaction models are incubated.
                        </p>
                    </div>
                </div>

                <div className="pt-12 text-sm font-mono uppercase tracking-[0.2em] text-neutral-400">
                    <Link href="/" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                        ← Back to Index
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
