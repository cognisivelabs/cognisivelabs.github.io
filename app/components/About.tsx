'use client';

import { motion } from 'framer-motion';


export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-neutral-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Engineering <br />
              <span className="gradient-text">Beyond Consulting.</span>
            </h2>
            <div className="space-y-6 text-xl text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
              <p>
                Cognisive is a specialized technology firm focused on delivering
                robust, enterprise-grade solutions across the financial and digital landscape.
              </p>
              <p>
                We operate with a dual-model: <strong className="font-bold text-neutral-900 dark:text-white">Cognisive</strong> provides the steady hands and
                strategic architectural oversight for complex enterprise delivery, while <strong className="font-bold text-neutral-900 dark:text-white">CognisiveLabs</strong> serves as our research engine, incubating the experimental
                products and tools that become tomorrow&apos;s standards.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-effect p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-2xl relative z-10">
              <div className="grid grid-cols-1 gap-6">
                {[
                  {
                    title: "Cognisive Services",
                    desc: "High-stakes enterprise delivery, Node.js/JS mastery, Kotlin microservices, and strategic architecture.",
                    icon: "ES"
                  },
                  {
                    title: "CognisiveLabs",
                    desc: "Open-source R&D hub where we experiment with next-gen engineering tools.",
                    icon: "CL"
                  }
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 hover:border-indigo-500/30 transition-all">
                    <div className="flex items-center space-x-4 mb-3">
                      <span className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-xs">
                        {item.icon}
                      </span>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                    </div>
                    <p className="text-sm text-neutral-500 font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Background Accent */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}