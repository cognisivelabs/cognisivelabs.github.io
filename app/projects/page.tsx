'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiCode, FiBox, FiCpu, FiPlus } from 'react-icons/fi';

const projects = [
  {
    title: 'G-Mock',
    category: 'DevOps Tool (Go)',
    description: 'The "Single-Binary" Mock Server. Unlike GripMock or Prism, G-Mock offers zero-config live-reload and a native Go DX, allowing teams to simulate complex gRPC/REST backends with zero runtime dependencies.',
    tech: ['Go', 'gRPC', 'Live-Reload'],
    github: 'https://github.com/cognisivelabs/g-mock',
    status: 'ALPHA',
    achievements: ['Zero-Dependency Binary', 'Real-time Mock Hot-Swap', 'OpenAPI/Proto Support']
  },
  {
    title: 'G-Env',
    category: 'Security Tool (Go)',
    description: 'The "Truth" for your Environments. It goes beyond dotenv-linter by actively synchronizing and validating local environments against codebase usage, ensuring secrets never leak and configurations never drift.',
    tech: ['Go', 'Security Scanner', 'CLI'],
    github: 'https://github.com/cognisivelabs/g-env',
    status: 'PROTOTYPE',
    achievements: ['Code-to-Env Mapping', 'Leak Prevention', 'Environment Syncing']
  },
  {
    title: 'K-Forge',
    category: 'Engineering Library',
    description: 'Scenario-based Data Factories for Kotlin. While Faker generates random data, K-Forge generates meaningful object scenarios (e.g., "Premier Tier Tenant"), slashing test boilerplate by 60%.',
    tech: ['Kotlin', 'Type-Safe DSL', 'Testing'],
    github: 'https://github.com/cognisivelabs/k-forge',
    status: 'PROTOTYPE',
    achievements: ['Scenario-First API', 'JVM Object Graph Support', 'Template-based Generation']
  },
  {
    title: 'K-Spec',
    category: 'Engineering Library',
    description: 'Zero-Config Contract Snapshots. The "Jest for Backend" approach to API protection. Avoid the complexity of Pact/Pact-Broker with automated snapshot-based contract verification.',
    tech: ['Kotlin', 'Snapshot Testing', 'API Safety'],
    github: 'https://github.com/cognisivelabs/k-spec',
    status: 'CONCEPT',
    achievements: ['Broker-less Verification', 'Breaking-Change Detection', 'Instant Setup']
  }
];

export default function LabsPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white selection:bg-indigo-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-mono mb-6">
            <FiCpu className="mr-2" /> COGNISIVE_LABS / R&D_ENGINE
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
            The Innovation <br />
            <span className="text-indigo-600 dark:text-indigo-500">Playground.</span>
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl font-light leading-relaxed">
            CognisiveLabs is where our boldest ideas take shape. We build tools
            and projects that solve the engineering challenges of tomorrow,
            contributing back to the global developer community.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 hover:border-indigo-500/50 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-indigo-600 dark:text-indigo-400 uppercase bg-indigo-500/10 px-2 py-1 rounded">
                      {project.category}
                    </span>
                    <h3 className="text-3xl font-bold mt-4 leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex space-x-3">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors shadow-sm">
                      <FiGithub size={20} />
                    </a>
                  </div>
                </div>

                <p className="text-neutral-600 dark:text-neutral-400 mb-8 font-light leading-relaxed text-lg">
                  {project.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-4">Milestones</h4>
                  <ul className="space-y-2">
                    {project.achievements.map(a => (
                      <li key={a} className="flex items-center text-sm text-neutral-700 dark:text-neutral-300">
                        <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-3" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-neutral-200 dark:border-neutral-800">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] uppercase font-mono tracking-wider text-neutral-500 bg-neutral-100 dark:bg-neutral-800/40 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* New Project Idea Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative flex flex-col justify-center items-center p-8 border-2 border-dashed border-neutral-200 dark:border-neutral-800 rounded-3xl hover:border-indigo-500/50 transition-all duration-500 cursor-pointer text-center min-h-[400px]"
          >
            <div className="w-16 h-16 rounded-full bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center text-neutral-400 dark:text-neutral-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:bg-indigo-50 dark:group-hover:bg-neutral-800 transition-all mb-4">
              <FiPlus size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Build Together</h3>
            <p className="text-neutral-500 font-light max-w-[200px]">Have a tool idea? Let&apos;s collaborate in the Labs.</p>
          </motion.div>
        </div>

        {/* Product Incubation Strategy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 grid md:grid-cols-3 gap-12 items-center"
        >
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold mb-6 tracking-tight">From Lab to <span className="text-indigo-600 dark:text-indigo-500">Industry.</span></h2>
            <p className="text-neutral-600 dark:text-neutral-400 font-light leading-relaxed mb-6 italic">
              &quot;Our products are born in the Labs—not in a board room. We identify repeatable engineering patterns and mature them into hardened, industry-grade tools.&quot;
            </p>
            <div className="flex items-center text-indigo-600 dark:text-indigo-400 text-sm font-bold tracking-widest uppercase">
              <div className="w-8 h-[1px] bg-indigo-500 mr-3" /> Incubation Roadmap
            </div>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 hover:border-indigo-500/30 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-500 mb-6">
                <FiBox size={24} />
              </div>
              <h4 className="text-xl font-bold mb-3">Enterprise Standardization</h4>
              <p className="text-sm text-neutral-500 leading-relaxed font-light">Hardening open-source experiments into compliant, SOC2-ready enterprise frameworks.</p>
            </div>
            <div className="p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 hover:border-indigo-500/30 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-500 mb-6">
                <FiCode size={24} />
              </div>
              <h4 className="text-xl font-bold mb-3">Managed Commercialization</h4>
              <p className="text-sm text-neutral-500 leading-relaxed font-light">Developing fully managed cloud editions of our most successful internal projects.</p>
            </div>
          </div>
        </motion.div>

        {/* Community Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 p-12 rounded-3xl bg-indigo-600 relative overflow-hidden group shadow-2xl shadow-indigo-500/20"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-800 z-0 opacity-90" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-700" />

          <div className="relative z-10 flex flex-col items-center text-center">
            <FiGithub size={48} className="mb-6 text-white" />
            <h2 className="text-4xl font-bold mb-6 text-white">Open Source is in our DNA</h2>
            <p className="text-indigo-100 text-xl font-light max-w-2xl mb-10 leading-relaxed">
              We believe the best solutions are built in the open. Explore our
              repositories, report issues, or star your favorite tools.
            </p>
            <a
              href="https://github.com/cognisivelabs"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-white text-indigo-600 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-xl"
            >
              View GitHub Organization
            </a>
          </div>
        </motion.div>
      </div>
    </main >
  );
}