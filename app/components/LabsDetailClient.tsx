'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import 'katex/dist/katex.min.css';

interface LabsDetailClientProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    project: any;
}

export default function LabsDetailClient({ project }: LabsDetailClientProps) {
    return (
        <div className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 mx-auto max-w-5xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-16 md:space-y-24"
            >
                {/* Header */}
                <div className="space-y-6">
                    <Link
                        href="/labs"
                        className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 hover:text-indigo-600 transition-colors mb-8 block"
                    >
                        ← Back to Labs
                    </Link>
                    <div className="space-y-2">
                        <h1 className="text-6xl md:text-8xl font-serif tracking-tight text-neutral-900 dark:text-neutral-100 leading-tight">
                            {project.title}
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-neutral-500 dark:text-neutral-400 max-w-2xl leading-relaxed italic font-serif">
                            {project.subtitle}
                        </p>
                    </div>


                </div>

                {/* Overview / Abstract */}
                <div className="prose prose-neutral dark:prose-invert max-w-none pt-12 border-t border-neutral-100 dark:border-neutral-800">
                    <p className="text-lg md:text-xl font-light text-neutral-600 dark:text-neutral-200 leading-relaxed">
                        {project.overview}
                    </p>
                </div>

                {/* Deep Dive Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 md:gap-y-24">
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {project.details.map((detail: any, index: number) => (
                        <div key={index} className="space-y-6">
                            <h3 className="text-2xl font-serif text-neutral-900 dark:text-neutral-100">
                                {detail.title}
                            </h3>
                            <div className="font-light text-neutral-500 dark:text-neutral-400 leading-relaxed">
                                {typeof detail.content === 'string' ? (
                                    <p>{detail.content}</p>
                                ) : (
                                    detail.content
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Link */}
                <div className="pt-20 border-t border-neutral-100 dark:border-neutral-800">
                    <Link
                        href="/contact"
                        className="inline-block text-sm uppercase tracking-[0.2em] font-mono text-neutral-400 hover:text-indigo-600 transition-colors border-b border-neutral-200 dark:border-neutral-800 pb-1"
                    >
                        Discuss Research Collaboration
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
