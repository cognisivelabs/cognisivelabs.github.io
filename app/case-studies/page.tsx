'use client';

import { motion } from 'framer-motion';
import { FiLayers, FiCode, FiUsers, FiTrendingUp, FiCheckCircle, FiArrowRight } from 'react-icons/fi';

const caseStudies = [
  {
    id: 'birmingham-council',
    title: 'Digital Transformation & Modernization',
    client: 'Birmingham Council',
    description: 'A strategic initiative focused on modernizing critical public service infrastructure and digital delivery models.',
    challenge: 'Currently transitioning legacy systems to modern, citizen-centric digital platforms.',
    solution: 'Details of the architectural overhaul and implementation strategy will be shared soon.',
    results: [
      'Project in progress',
      'Focus on scalability and resilience',
      'Modernizing public service delivery'
    ],
    technologies: ['Enterprise Architecture', 'Cloud Migration', 'Digital Strategy'],
    duration: 'Ongoing',
    teamSize: 'Strategic Team',
    icon: FiCheckCircle,
    gradient: 'from-orange-500 to-red-500',
  },
];

export default function CaseStudiesPage() {
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
              Success <span className="gradient-text">Stories</span>
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              Real-world examples of how we&apos;ve helped businesses transform their technology
              infrastructure and achieve their goals.
            </p>
          </motion.div>

          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Header */}
                    <div className="lg:col-span-3">
                      <div className="flex items-center mb-6">
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${study.gradient} flex items-center justify-center text-white mr-6`}>
                          <study.icon size={28} />
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold mb-2">{study.title}</h2>
                          <p className="text-lg text-neutral-600 dark:text-neutral-400">{study.client}</p>
                        </div>
                      </div>
                      <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
                        {study.description}
                      </p>
                    </div>

                    {/* Challenge */}
                    <div className="lg:col-span-1">
                      <h3 className="text-xl font-semibold mb-4 text-red-600 dark:text-red-400">
                        The Challenge
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-400">
                        {study.challenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="lg:col-span-1">
                      <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
                        Our Solution
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                        {study.solution}
                      </p>
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Technologies Used:</p>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 text-xs rounded-lg bg-neutral-100 dark:bg-neutral-800"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="lg:col-span-1">
                      <h3 className="text-xl font-semibold mb-4 text-green-600 dark:text-green-400">
                        The Results
                      </h3>
                      <ul className="space-y-3">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-start">
                            <FiCheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={16} />
                            <span className="text-neutral-600 dark:text-neutral-400 text-sm">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Project Details */}
                    <div className="lg:col-span-3 mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-700">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="flex items-center">
                          <FiUsers className="text-indigo-500 mr-3" size={20} />
                          <div>
                            <p className="text-sm text-neutral-500 dark:text-neutral-400">Team Size</p>
                            <p className="font-medium">{study.teamSize}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <FiTrendingUp className="text-indigo-500 mr-3" size={20} />
                          <div>
                            <p className="text-sm text-neutral-500 dark:text-neutral-400">Project Duration</p>
                            <p className="font-medium">{study.duration}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 p-8 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-200 dark:border-indigo-800"
          >
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4">Ready for Your Success Story?</h3>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6 max-w-2xl mx-auto">
                Every successful project starts with understanding your unique challenges.
                Let&apos;s discuss how we can help transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors group"
                >
                  Start Your Project
                  <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center px-6 py-3 border border-neutral-300 dark:border-neutral-700 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                >
                  View Our Services
                </a>
              </div>
            </div>
          </motion.div>

          {/* Additional Case Studies Coming Soon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800/50"
          >
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-2">More Case Studies Coming Soon</h4>
              <p className="text-neutral-600 dark:text-neutral-400">
                We&apos;re continuously working on new projects and will be sharing more success stories as they become available.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}