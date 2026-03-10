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
    const isPaper = project.isPaper;

    return (
        <div className={`pt-40 pb-20 px-4 sm:px-6 lg:px-8 mx-auto ${isPaper ? 'max-w-3xl' : 'max-w-5xl'}`}>
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
                        <h1 className={`${isPaper ? 'text-5xl md:text-7xl mb-4' : 'text-6xl md:text-8xl'} font-serif tracking-tight text-neutral-900 dark:text-neutral-100 leading-tight`}>
                            {project.title}
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-neutral-500 dark:text-neutral-400 max-w-2xl leading-relaxed italic font-serif">
                            {project.subtitle}
                        </p>
                    </div>

                    {isPaper && (
                        <div className="pt-8 flex items-center space-x-6 text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 border-t border-neutral-100 dark:border-neutral-800">
                            <span>Engineering Blueprint</span>
                            <span>Project: Whoosturn Core</span>
                            <span>Status: In Development</span>
                        </div>
                    )}
                </div>

                {/* Overview / Abstract */}
                <div className="prose prose-neutral dark:prose-invert max-w-none pt-12 border-t border-neutral-100 dark:border-neutral-800">
                    {isPaper && (
                        <span className="text-xs font-mono uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400 block mb-4">Blueprint Overview</span>
                    )}
                    <p className={`${isPaper ? 'text-lg font-serif italic leading-relaxed text-neutral-700 dark:text-neutral-300' : 'text-lg md:text-xl font-light text-neutral-600 dark:text-neutral-200'} leading-relaxed`}>
                        {project.overview}
                    </p>
                </div>

                {/* Deep Dive Grid / Paper Sections */}
                <div className={isPaper ? 'space-y-20' : 'grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 md:gap-y-24'}>
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {project.details.map((detail: any, index: number) => (
                        <div key={index} className="space-y-6">
                            <div className="flex items-baseline space-x-4">
                                {isPaper && (
                                    <span className="text-sm font-mono text-neutral-300 dark:text-neutral-700">0{index + 1}</span>
                                )}
                                <h3 className={`${isPaper ? 'text-3xl' : 'text-2xl'} font-serif text-neutral-900 dark:text-neutral-100`}>
                                    {detail.title}
                                </h3>
                            </div>
                            <div className={`${isPaper ? 'font-serif text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-4' : 'font-light text-neutral-500 dark:text-neutral-400 leading-relaxed'}`}>
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
                        {isPaper ? 'Discuss Integration' : 'Discuss Research Collaboration'}
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
