'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function WhoosturnPage() {
    const features = [
        { title: 'Strict Fairness (EFX Thresholds)', description: 'Mathematical guarantees that no partner will ever look at another\'s task list and feel they have a worse deal, eliminating the core of domestic resentment.' },
        { title: 'Market-Equilibrium Subsidies', description: 'When chores are indivisible and perfectly fair splits are impossible, the engine automatically issues Whoosturn Points to balance the scale and compensate for unfair loads.' },
        { title: 'Behavioral Dread Mapping', description: 'The algorithm learns individual thresholds (disutility scores), ensuring the person who minds a specific chore the least does it the most, maximizing household peace.' },
        { title: 'TEF1 Cumulative Memory', description: 'Transparent, historical auditing that guarantees fairness over time. If you took on a heavy load last week, the engine artificially raises your chore cost this week.' }
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
                        Whoosturn
                    </h1>
                    <p className="text-xl md:text-2xl font-light text-neutral-500 dark:text-neutral-400 max-w-2xl leading-relaxed">
                        Household relationship management powered by the @cognisive/social-equilibrium game theory engine.
                    </p>
                </div>

                {/* Core Value Prop */}
                <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
                    <p className="text-lg text-neutral-600 dark:text-neutral-300 font-light leading-relaxed">
                        Whoosturn is not a to-do list; it is a mathematically perfect, impartial third party designed for domestic harmony. By acting as a highly scalable commercial translation of peer-reviewed game theory metrics, Whoosturn replaces the cognitive friction of chore negotiation with a self-correcting system of mathematical equilibrium.
                    </p>
                    <Link
                        href="/labs/domestic-game-theory"
                        className="inline-flex items-center text-sm font-mono text-indigo-600 hover:text-indigo-500 transition-colors group"
                    >
                        View the underlying Engineering Blueprint
                        <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                </div>

                {/* Features Index */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-neutral-100 dark:border-neutral-800">
                    {features.map((feature, index) => (
                        <div key={index} className="space-y-2">
                            <h3 className="text-xl font-serif text-neutral-900 dark:text-neutral-100 italic">
                                {feature.title}
                            </h3>
                            <p className="text-neutral-500 dark:text-neutral-400 font-light leading-relaxed">
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
