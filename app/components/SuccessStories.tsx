'use client';

import { motion } from 'framer-motion';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import Link from 'next/link';

const projects = [
    {
        client: 'Birmingham Council',
        title: 'Digital Transformation & Modernization',
        tag: 'Strategic Partnership',
        description: 'Modernizing critical public service infrastructure and digital delivery models for one of the UK’s largest local authorities.',
        icon: FiCheckCircle,
        color: 'indigo'
    }
];

export default function SuccessStories() {
    return (
        <section className="py-24 bg-neutral-50 dark:bg-neutral-900/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                            Success <span className="text-indigo-600">Stories.</span>
                        </h2>
                        <p className="text-xl text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                            Delivering high-stakes engineering solutions for government
                            and enterprise organizations across the UK.
                        </p>
                    </div>
                    <Link
                        href="/case-studies"
                        className="flex items-center text-indigo-600 font-bold hover:gap-3 transition-all gap-2 group"
                    >
                        Explore all Case Studies
                        <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.client}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 rounded-[2.5rem] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-indigo-500/30 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5"
                        >
                            <div className="flex flex-col h-full">
                                <div className="flex justify-between items-start mb-8">
                                    <div className="space-y-1">
                                        <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 px-3 py-1 rounded-full">
                                            {project.tag}
                                        </span>
                                        <h3 className="text-2xl font-bold pt-4">{project.client}</h3>
                                    </div>
                                    <div className="w-12 h-12 rounded-2xl bg-neutral-50 dark:bg-neutral-800 flex items-center justify-center text-indigo-600">
                                        <project.icon size={24} />
                                    </div>
                                </div>

                                <h4 className="text-lg font-medium mb-4 text-neutral-900 dark:text-white">
                                    {project.title}
                                </h4>

                                <p className="text-neutral-500 dark:text-neutral-400 font-light leading-relaxed mb-8 flex-1">
                                    {project.description}
                                </p>

                                <div className="pt-6 border-t border-neutral-100 dark:border-neutral-800 flex items-center text-neutral-400 text-xs font-mono uppercase tracking-wider">
                                    <div className="w-2 h-2 rounded-full bg-green-500 mr-3 animate-pulse" />
                                    Project Delivered
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
