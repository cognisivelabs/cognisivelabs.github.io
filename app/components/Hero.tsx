'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight, FiShield, FiCpu, FiZap, FiUsers, FiGlobe } from 'react-icons/fi';

const stats = [
  { label: 'Delivery Speed', value: 'High', icon: FiZap },
  { label: 'Team Seniority', value: '100%', icon: FiUsers },
  { label: 'Labs Pipeline', value: 'Active', icon: FiCpu },
];

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
      {/* Background Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Engineering Excellence Powered by Innovation
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Enterprise Delivery <br />
              <span className="gradient-text">Product Stability.</span>
            </h1>

            <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-lg leading-relaxed">
              Cognisive bridges the gap between complex engineering and elegant product delivery.
              Enterprise-grade consulting meeting radical experimental innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/services" className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold shadow-lg shadow-indigo-500/25 hover:bg-indigo-700 transition-all flex items-center justify-center group">
                Consulting Services
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/projects" className="px-8 py-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl font-semibold hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all text-center">
                Enter the Labs
              </Link>
            </div>

            {/* Precision Stat Bar */}
            <div className="grid grid-cols-3 gap-4 p-1 bg-neutral-100/50 dark:bg-neutral-800/50 rounded-2xl border border-neutral-200 dark:border-neutral-700 max-w-md">
              {stats.map((stat) => (
                <div key={stat.label} className="p-3 text-center">
                  <div className="font-mono text-lg font-bold text-indigo-600 dark:text-indigo-400">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Abstract Product Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 glass-effect p-8 rounded-3xl border border-white/20 shadow-2xl overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-500 opacity-50" />
              <div className="flex items-center justify-between mb-8">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="px-3 py-1 rounded bg-neutral-200 dark:bg-neutral-800 text-[10px] font-mono">system.status.ok</div>
              </div>

              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded-full w-full relative overflow-hidden">
                    <motion.div
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-indigo-500 to-purple-600"
                      initial={{ width: 0 }}
                      animate={{ width: `${40 + i * 15}%` }}
                      transition={{ delay: 1 + i * 0.2, duration: 1.5 }}
                    />
                  </div>
                ))}
              </div>

              <div className="mt-12 grid grid-cols-2 gap-4">
                <div className="h-24 bg-indigo-500/10 rounded-2xl border border-indigo-500/20 p-4">
                  <div className="w-8 h-8 rounded bg-indigo-500/20 mb-2 flex items-center justify-center">
                    <FiShield className="text-indigo-500" />
                  </div>
                  <div className="h-2 bg-indigo-500/30 w-1/2 rounded" />
                </div>
                <div className="h-24 bg-teal-500/10 rounded-2xl border border-teal-500/20 p-4">
                  <div className="w-8 h-8 rounded bg-teal-500/20 mb-2 flex items-center justify-center">
                    <FiGlobe className="text-teal-500" />
                  </div>
                  <div className="h-2 bg-teal-500/30 w-1/2 rounded" />
                </div>
              </div>

              {/* Decorative "Data" points */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-2xl" />
            </div>

            {/* Floaties */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-10 -right-6 glass-effect p-4 rounded-2xl border border-white/20 shadow-xl z-20"
            >
              <div className="text-xs font-mono font-bold text-teal-500">DEPLOY SUCCESS</div>
              <div className="text-[10px] text-neutral-500">v2.4.0-stable</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Trust Bar */}
      <div className="absolute bottom-10 left-0 w-full border-y border-neutral-200/50 dark:border-neutral-800/50 py-6 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700">
          <span className="text-sm font-bold tracking-[0.2em] font-mono">KOTLIN / SPRING</span>
          <span className="text-sm font-bold tracking-[0.2em] font-mono">REACT / NEXT.JS</span>
          <span className="text-sm font-bold tracking-[0.2em] font-mono">AWS / TERRAFORM</span>
          <span className="text-sm font-bold tracking-[0.2em] font-mono">MICROSERVICES</span>
        </div>
      </div>
    </section>
  );
}