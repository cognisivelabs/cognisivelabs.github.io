'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiDatabase, FiArrowUpRight } from 'react-icons/fi';

const projects = [
  {
    id: 'memgres',
    title: 'MemGres',
    description: 'Fast, in-memory relational database with native JSONB — built for unit testing and prototyping',
    icon: FiDatabase,
    gradient: 'from-blue-500 to-cyan-500',
    tags: ['Database', 'JSONB', 'Testing', 'Java'],
    status: 'Phase 3.3 - 540+ Tests Passing',
  },
];

export default function ProjectsPreview() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Our Projects</h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Innovative solutions designed to streamline and enhance consulting operations
          </p>
        </motion.div>

        <div className={projects.length === 1 ? "max-w-3xl mx-auto" : "grid md:grid-cols-2 gap-8"}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/projects/${project.id}`}>
                <div className="group relative h-full p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-primary/50 transition-all duration-300 hover-lift card-shadow">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300 ${project.gradient}`}
                  />
                  
                  <div className="relative">
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${project.gradient} text-white mb-4`}>
                      <project.icon size={24} />
                    </div>
                    
                    <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 mb-4">
                      {project.status}
                    </span>
                    
                    <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm rounded-lg bg-neutral-100 dark:bg-neutral-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center text-primary font-medium">
                      Learn more
                      <FiArrowUpRight className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/projects"
            className="inline-flex items-center px-6 py-3 border border-neutral-300 dark:border-neutral-700 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
          >
            View All Projects
            <FiArrowUpRight className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}