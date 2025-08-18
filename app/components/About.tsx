'use client';

import { motion } from 'framer-motion';
import { FiTarget, FiUsers, FiTrendingUp } from 'react-icons/fi';

const features = [
  {
    icon: FiTarget,
    title: 'Mission-Driven',
    description: 'Focused on delivering practical, high-impact solutions for real business challenges',
  },
  {
    icon: FiUsers,
    title: 'Client-Centric',
    description: 'Building tools that consulting companies actually need and want to use daily',
  },
  {
    icon: FiTrendingUp,
    title: 'Innovation-Led',
    description: 'Leveraging cutting-edge technology to create tomorrow&apos;s business solutions',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              About <span className="gradient-text">CognisiveLabs</span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
              CognisiveLabs is the innovation arm of Cognisive, a leading consulting company. 
              We develop cutting-edge products and tools that help consulting companies streamline 
              their operations and deliver better results for their clients.
            </p>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Our team combines deep consulting expertise with technical innovation to create 
              solutions that address real-world business challenges. We believe in building 
              tools that are not just powerful, but also intuitive and enjoyable to use.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent-teal flex items-center justify-center text-white">
                    <feature.icon size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}