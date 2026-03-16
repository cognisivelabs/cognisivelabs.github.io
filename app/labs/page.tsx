'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const projects = [
  {
    slug: 'semantic-canvas',
    title: 'Semantic Canvas',
    description: 'An architectural blueprint for ZenDraw. AI-powered vector recognition that transforms rough sketches into intelligent, data-mapped objects.'
  }
];

export default function LabsPage() {
  return (
    <div className="pt-48 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-16 md:space-y-24"
      >

        <div className="grid grid-cols-1 gap-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link
                href={`/labs/${project.slug}`}
                className="block space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2">
                  <h3 className="text-3xl md:text-4xl font-serif text-neutral-900 dark:text-neutral-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 group-hover:text-neutral-600 transition-colors">
                    Architecture Preview
                  </span>
                </div>
                <p className="text-lg text-neutral-500 dark:text-neutral-400 font-light group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors max-w-2xl">
                  {project.description}
                </p>
                <div className="h-px w-0 group-hover:w-full bg-neutral-200 dark:bg-neutral-800 transition-all duration-700" />
              </Link>
            </motion.div>
          ))}
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