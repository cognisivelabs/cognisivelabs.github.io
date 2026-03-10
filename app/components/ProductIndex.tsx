'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const products = [
    {
        name: 'QuickForm',
        description: 'Conversational data engine for adaptive dialogues. Transform simple inputs into intelligent, schema-driven conversational flows.',
        href: '/products/quickform',
        status: 'In Development',
        focus: 'Schema-Driven Logic',
        capabilities: [
            'Dynamic branching',
            'Context-aware validation',
            'Instant UI generation'
        ]
    },
    {
        name: 'ZenDraw',
        description: 'Spatial-thinking instrument for infinite-canvas diagramming. A specialized environment for mapping complex mental models.',
        href: '/products/zendraw',
        status: 'In Development',
        focus: 'Vector Architecture',
        capabilities: [
            'Zero-latency ink engine',
            'Layered object mapping',
            'Real-time persistence'
        ]
    },
    {
        name: 'Whoosturn',
        description: 'Household relationship management powered by the @cognisive/social-equilibrium game theory engine. A mathematically perfect, impartial third party for fair task allocation.',
        href: '/products/whoosturn',
        status: 'In Development',
        focus: 'Applied Game Theory',
        capabilities: [
            'EFX Equality Thresholds',
            'Market-Equilibrium Subsidies',
            'TEF1 Cumulative Fairness'
        ]
    },
    {
        name: 'VerveNote',
        description: 'Minimalist thought laboratory for deep focus. Designed to eliminate digital noise and foster psychological flow during research.',
        href: '/products/vervenote',
        status: 'In Development',
        focus: 'FlowMode Engine',
        capabilities: [
            'Noise-elimination UI',
            'Semantic organization',
            'Adaptive focus modes'
        ]
    }
];

export default function ProductIndex() {
    return (
        <section id="products" className="pt-48 pb-20 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-16 md:space-y-32"
            >
                <div className="space-y-4 max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-serif text-neutral-900 dark:text-neutral-100">
                        Software Instruments
                    </h2>
                    <p className="text-lg text-neutral-500 dark:text-neutral-400 font-light leading-relaxed">
                        The following stack represents our core commercial pipeline. <strong className="text-indigo-600 dark:text-indigo-400 font-normal hover:text-indigo-500 transition-colors">Please note: All products are currently in active development. No public versions have been released yet.</strong>
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-y-24 md:gap-y-32">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.name}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                        >
                            <Link href={product.href} className="block group">
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                                    {/* Product Identity */}
                                    <div className="lg:col-span-5 space-y-6">
                                        <div className="flex items-center space-x-4">
                                            <span className="text-xs font-mono uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/30 px-2 py-1 rounded">
                                                {product.status}
                                            </span>
                                        </div>
                                        <h3 className="text-4xl md:text-6xl font-serif text-neutral-900 dark:text-neutral-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors tracking-tighter">
                                            {product.name}
                                        </h3>
                                        <p className="text-xl text-neutral-500 dark:text-neutral-400 font-light leading-relaxed max-w-xl">
                                            {product.description}
                                        </p>
                                    </div>

                                    {/* Technical Specs */}
                                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-12 pt-4 lg:pt-0">
                                        <div className="space-y-4">
                                            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400">Technical Focus</h4>
                                            <p className="text-2xl font-serif text-neutral-900 dark:text-neutral-100">
                                                {product.focus}
                                            </p>
                                        </div>
                                        <div className="space-y-4">
                                            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400">Capabilities</h4>
                                            <ul className="space-y-3">
                                                {product.capabilities.map(cap => (
                                                    <li key={cap} className="text-neutral-500 dark:text-neutral-400 font-light flex items-center">
                                                        <span className="w-1.5 h-1.5 bg-neutral-200 dark:bg-neutral-800 rounded-full mr-3" />
                                                        {cap}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {index !== products.length - 1 && (
                                    <div className="mt-12 h-px w-full bg-neutral-100 dark:bg-neutral-900 group-hover:bg-indigo-600/30 transition-all duration-700" />
                                )}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
