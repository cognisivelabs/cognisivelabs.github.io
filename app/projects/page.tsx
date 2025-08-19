'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiDatabase, FiGithub, FiExternalLink, FiLock } from 'react-icons/fi';

const projects = [
  {
    id: 'memgres',
    title: 'MemGres',
    description: 'Fast, in-memory relational database with native JSONB — built for unit testing and prototyping.',
    longDescription: 'MemGres is designed to replace H2 when you need JSONB support. Perfect for testing PostgreSQL applications with JSON operations, offering H2-compatible SQL with full PostgreSQL JSONB extensions.',
    icon: FiDatabase,
    gradient: 'from-blue-500 to-cyan-500',
    tags: ['Database', 'JSONB', 'Testing', 'Java', 'PostgreSQL'],
    status: 'Phase 3.3 - 540+ Tests Passing',
    features: [
      'Zero external dependencies',
      'Full PostgreSQL JSONB JSON operators',
      'Window Functions & Recursive CTEs',
      'Testing framework integrations (JUnit 5, TestNG)',
      'High performance (< 100ms startup, < 1ms queries)',
      'ACID transactions with four isolation levels',
    ],
    isPrivate: false,
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-24">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6">
              Our <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              Innovative solutions designed to transform how consulting companies operate. 
              Each project is crafted with precision, focusing on real-world impact and usability.
            </p>
          </motion.div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-shrink-0">
                      <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${project.gradient} text-white`}>
                        <project.icon size={32} />
                      </div>
                    </div>

                    <div className="flex-grow">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
                          <div className="flex items-center gap-3 mb-4">
                            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                              {project.status}
                            </span>
                            {project.isPrivate && (
                              <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400">
                                <FiLock size={12} />
                                Private (Coming Soon)
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-4">
                        {project.description}
                      </p>

                      <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                        {project.longDescription}
                      </p>

                      <div className="mb-6">
                        <h3 className="font-semibold mb-3">Key Features</h3>
                        <ul className="grid md:grid-cols-2 gap-2">
                          {project.features.map((feature) => (
                            <li key={feature} className="flex items-start">
                              <span className="text-primary mr-2 mt-1">•</span>
                              <span className="text-neutral-600 dark:text-neutral-400">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-sm rounded-lg bg-neutral-100 dark:bg-neutral-800"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-4">
                        <Link
                          href={`/projects/${project.id}`}
                          className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                        >
                          Learn More
                          <FiExternalLink className="ml-2" />
                        </Link>
                        <a
                          href={`https://github.com/cognisivelabs/${project.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                        >
                          <FiGithub className="mr-2" />
                          View on GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-20 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent-teal/10 border border-primary/20"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">More Projects Coming Soon</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6 max-w-2xl mx-auto">
                We&apos;re constantly working on new solutions to help consulting companies thrive. 
                Stay tuned for more innovative projects from CognisiveLabs.
              </p>
              <a
                href="https://github.com/cognisivelabs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
              >
                <FiGithub className="mr-2" />
                Follow us on GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}