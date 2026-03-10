'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function QuickFormPage() {
    const features = [
        { title: 'Natural Flow', description: 'One question at a time. Human interaction by design.' },
        { title: 'Smart Logic', description: 'Conditional paths that feel intuitive, not robotic.' },
        { title: 'Instant Insights', description: 'Data visualization that tells a story from the first response.' },
        { title: 'Seamless Embedding', description: 'Integrate with your existing stack in seconds.' }
    ];

    return (
        <div className="max-w-4xl mx-auto px-6 pt-32 pb-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-12"
            >
                {/* Header */}
                <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                        <span className="text-xs font-mono uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/30 px-2 py-1 rounded">
                            In Development
                        </span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-serif tracking-tight text-neutral-900 dark:text-neutral-100">
                        QuickForm
                    </h1>
                    <p className="text-xl md:text-2xl font-light text-neutral-500 dark:text-neutral-400 max-w-2xl leading-relaxed">
                        Conversational data engine for schema-driven logic.
                    </p>
                </div>

                {/* Core Value Prop */}
                <div className="prose prose-neutral dark:prose-invert max-w-none">
                    <p className="text-lg text-neutral-600 dark:text-neutral-300 font-light leading-relaxed">
                        QuickForm reimagines the data collection experience as a dialogue.
                        By leveraging schema-driven logic, it transforms complex input requirements
                        into intuitive, one-question-at-a-time flows. It is a specialized
                        instrument for capturing high-fidelity data without user fatigue.
                    </p>
                </div>

                {/* Features Index */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-neutral-100 dark:border-neutral-800">
                    {features.map((feature, index) => (
                        <div key={index} className="space-y-2">
                            <h3 className="text-xl font-serif text-neutral-900 dark:text-neutral-100 italic">
                                {feature.title}
                            </h3>
                            <p className="text-neutral-500 dark:text-neutral-400 font-light">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="pt-20">
                    <Link
                        href="/contact"
                        className="inline-block text-sm uppercase tracking-[0.2em] font-mono text-neutral-400 hover:text-indigo-600 transition-colors border-b border-neutral-200 dark:border-neutral-800 pb-1"
                    >
                        Request Access
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
