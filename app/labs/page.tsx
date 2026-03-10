'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const projects = [
  {
    slug: 'semantic-canvas',
    title: 'Semantic Canvas',
    description: 'An architectural blueprint for ZenDraw. AI-powered vector recognition that transforms rough sketches into intelligent, data-mapped objects.'
  },
  {
    slug: 'flow-mode',
    title: 'FlowMode',
    description: 'The minimalist writing engine for VerveNote. An adaptive interface that eliminates digital noise to foster deep psychological flow.'
  },
  {
    slug: 'conversational-ratio',
    title: 'The Conversational Ratio',
    description: 'An applied data-science implementation detailing how the tone and structure of forms impact user safety and completion rates.'
  },
  {
    slug: 'domestic-game-theory',
    title: 'Domestic Game Theory',
    description: 'The foundation of Whoosturn. Applying behavioral economic models to household task distribution to optimize for fairness and social harmony.'
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
        <div className="space-y-4 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-serif text-neutral-900 dark:text-neutral-100">
            Engineering Blueprints
          </h2>
          <p className="text-lg text-neutral-500 dark:text-neutral-400 font-light leading-relaxed">
            The mathematical foundation of our software architecture. <strong className="text-indigo-600 dark:text-indigo-400 font-normal hover:text-indigo-500 transition-colors">Please note: Cognisive does not conduct primary R&D. These labs represent applied engineering translations of existing, peer-reviewed academic research.</strong>
          </p>
        </div>

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
                <div className="flex justify-between items-baseline">
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