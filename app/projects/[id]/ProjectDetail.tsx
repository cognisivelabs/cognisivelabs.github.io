'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowLeft, FiGithub, FiExternalLink, FiDatabase } from 'react-icons/fi';
import { notFound } from 'next/navigation';

const projectsData = {
  memgres: {
    id: 'memgres',
    title: 'MemGres',
    subtitle: 'Fast In-Memory Database with Native JSONB',
    description: 'A fast, in-memory relational database with native JSONB — built for unit testing and prototyping.',
    icon: FiDatabase,
    gradient: 'from-blue-500 to-cyan-500',
    status: 'Phase 3.3 - 540+ Tests Passing',
    isPrivate: false,
    overview: `MemGres is an in-memory relational database for Java applications, designed specifically for testing and prototyping. It provides H2-compatible SQL with PostgreSQL JSONB extensions, making it perfect for replacing H2 when you need JSONB support in your test suites.`,
    features: [
      {
        title: 'Zero Dependencies',
        description: 'No external dependencies required, making integration seamless',
      },
      {
        title: 'PostgreSQL JSONB Support',
        description: 'Full PostgreSQL JSONB JSON operators for complex JSON queries',
      },
      {
        title: 'Advanced SQL Features',
        description: 'Window Functions, Recursive Common Table Expressions, and Set Operations',
      },
      {
        title: 'Testing Framework Integration',
        description: 'Native support for JUnit 5, TestNG, and Spring Test frameworks',
      },
      {
        title: 'High Performance',
        description: 'Sub-100ms startup time and sub-1ms simple query execution',
      },
      {
        title: 'ACID Transactions',
        description: 'Full ACID compliance with four isolation levels for data integrity',
      },
    ],
    useCases: [
      'Unit testing with JSONB data',
      'PostgreSQL application prototyping',
      'Integration testing replacement for H2',
      'Development environment databases',
      'CI/CD pipeline testing',
      'JSON-heavy application testing',
    ],
    techStack: ['Java 17+', 'SQL', 'JSONB', 'H2 Compatible', 'Apache 2.0'],
  },
};

export default function ProjectDetail({ id }: { id: string }) {
  const project = projectsData[id as keyof typeof projectsData];

  if (!project) {
    notFound();
  }

  const Icon = project.icon;

  return (
    <div className="min-h-screen pt-24">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link
              href="/projects"
              className="inline-flex items-center text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors mb-8"
            >
              <FiArrowLeft className="mr-2" />
              Back to Projects
            </Link>

            <div className="flex items-start justify-between mb-8">
              <div className="flex items-start gap-6">
                <div className={`p-4 rounded-xl bg-gradient-to-br ${project.gradient} text-white`}>
                  <Icon size={40} />
                </div>
                <div>
                  <h1 className="text-5xl font-bold mb-2">{project.title}</h1>
                  <p className="text-xl text-neutral-600 dark:text-neutral-400">{project.subtitle}</p>
                  <div className="flex items-center gap-3 mt-4">
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid lg:grid-cols-3 gap-8"
          >
            <div className="lg:col-span-2 space-y-8">
              <div className="p-6 rounded-xl bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800">
                <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {project.overview}
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800">
                <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature) => (
                    <div key={feature.title} className="p-4 rounded-lg bg-neutral-50 dark:bg-neutral-800/50">
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-xl bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800">
                <h2 className="text-2xl font-semibold mb-4">Use Cases</h2>
                <ul className="grid md:grid-cols-2 gap-2">
                  {project.useCases.map((useCase) => (
                    <li key={useCase} className="flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      <span className="text-neutral-600 dark:text-neutral-400">{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800">
                <h3 className="font-semibold mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-lg bg-neutral-100 dark:bg-neutral-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-xl bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800">
                <h3 className="font-semibold mb-4">Resources</h3>
                <div className="space-y-3">
                  <a
                    href={`https://github.com/cognisivelabs/${project.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                  >
                    <span className="flex items-center">
                      <FiGithub className="mr-2" />
                      GitHub Repository
                    </span>
                    <FiExternalLink size={16} />
                  </a>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-indigo-500/10 to-teal-500/10 border border-indigo-500/20">
                <h3 className="font-semibold mb-4">Get Updates</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                  Stay updated with the latest developments and releases by following our GitHub organization.
                </p>
                <a
                  href="https://github.com/cognisivelabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  <FiGithub className="mr-2" />
                  Follow CognisiveLabs
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}