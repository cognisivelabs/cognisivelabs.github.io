'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  FiSettings,
  FiLayers,
  FiCode,
  FiTrendingUp,
  FiBox,
  FiArrowRight
} from 'react-icons/fi';

const services = [
  {
    title: 'Enterprise Architecture',
    description: 'We specialize in architecting the high-performance backbones of modern digital ecosystems. By strategically transforming complex legacy technical debt into resilient, event-driven distributed systems, we empower organizations to achieve unprecedented global scale, absolute reliability, and rapid, consistent delivery cycles across their entire global operations.',
    icon: FiLayers,
    size: 'lg',
    gradient: 'from-blue-600 to-indigo-700',
    outcomes: 'Accelerate delivery by 40% while reducing infrastructure overhead.',
    stack: ['Kotlin', 'Spring Boot', 'Kafka', 'AWS Cloud']
  },
  {
    title: 'Product Engineering',
    description: 'We engineer impactful digital products, bridging the gap between abstract concepts and industrial-strength, production-ready code for high-growth ventures.',
    icon: FiCode,
    size: 'md',
    gradient: 'from-purple-600 to-pink-600',
    outcomes: 'Concept to Production launch in under 8 weeks.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind']
  },
  {
    title: 'Security & Integrity',
    description: 'Hardening your digital assets against modern threats while ensuring continuous regulatory alignment.',
    icon: FiSettings,
    size: 'sm',
    gradient: 'from-teal-600 to-emerald-600',
    stack: ['IAM', 'SOC2', 'Pen-Testing']
  },
  {
    title: 'Strategic Growth',
    description: 'Aligning technical roadmaps with commercial objectives to drive sustainable ROI and technical maturity.',
    icon: FiTrendingUp,
    size: 'sm',
    gradient: 'from-orange-600 to-red-600',
    stack: ['Tech Audit', 'Agile', 'Scale-up']
  }
];

export default function ServicesOverview() {
  return (
    <section id="services" className="py-32 relative overflow-hidden bg-white dark:bg-neutral-950">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Consulting <span className="text-indigo-600">&</span> Product Pillars
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto font-light">
            Our expertise is split between high-stakes enterprise delivery and
            agile product engineering, powered by continuous innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative overflow-hidden group glass-effect rounded-3xl border border-neutral-200/50 dark:border-neutral-800/50 p-7 flex flex-col justify-between hover:border-indigo-500/50 transition-all duration-500 ${service.size === 'lg' ? 'md:col-span-2 md:row-span-2' :
                service.size === 'md' ? 'md:col-span-1 md:row-span-2' :
                  'md:col-span-1 md:row-span-1'
                }`}
            >
              <div className="relative z-10 flex-1">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-6 shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-500`}>
                  <service.icon size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-3 tracking-tight">{service.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-light mb-8 text-base">
                  {service.description}
                </p>

                {service.outcomes && (
                  <div className="mt-2 p-3 rounded-xl bg-indigo-50/50 dark:bg-indigo-500/5 border border-indigo-100 dark:border-indigo-500/10 mb-2">
                    <span className="text-[9px] uppercase tracking-widest font-bold text-indigo-600 dark:text-indigo-400 block mb-0.5">Key Outcome</span>
                    <p className="text-xs text-neutral-700 dark:text-neutral-300 font-medium leading-snug">
                      {service.outcomes}
                    </p>
                  </div>
                )}
              </div>

              {service.stack && (
                <div className="relative z-10 mt-auto pt-4 border-t border-neutral-100 dark:border-neutral-900/50 flex flex-wrap gap-2">
                  {service.stack.map(s => (
                    <span key={s} className="text-[9px] uppercase tracking-[0.15em] font-mono font-bold px-2 py-1 bg-neutral-100 dark:bg-neutral-900/50 text-neutral-500 rounded border border-neutral-200/50 dark:border-neutral-800/50">{s}</span>
                  ))}
                </div>
              )}

              {/* Hover Decorative Element */}
              <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-700`} />
            </motion.div>
          ))}

          {/* Labs CTA Card */}
          <Link href="/projects" className="md:col-span-1 md:row-span-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="h-full rounded-3xl bg-indigo-600 p-8 flex flex-col justify-between text-white relative overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-800 z-0" />
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-4">
                  <FiBox size={20} />
                </div>
                <h3 className="text-2xl font-bold">Visit the Labs</h3>
                <p className="text-indigo-100/80 text-sm mt-3 font-light leading-relaxed">
                  Where experimental tools and open-source contributions are incubated.
                </p>
              </div>
              <div className="relative z-10 flex items-center text-sm font-bold group-hover:translate-x-1 transition-transform">
                Explore <FiArrowRight className="ml-2" />
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
}