'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiMail, FiGithub, FiSend, FiCheckCircle } from 'react-icons/fi';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="min-h-screen pt-32 pb-20 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
            Let&apos;s Build <br />
            <span className="gradient-text">Something Impactful.</span>
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto font-light leading-relaxed">
            Whether you need enterprise architectural consulting or want to
            collaborate on innovation through the Labs, we&apos;re ready.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-effect p-8 md:p-12 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold uppercase tracking-widest text-neutral-500 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-0 py-3 bg-transparent border-b border-neutral-200 dark:border-neutral-800 focus:border-indigo-600 outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold uppercase tracking-widest text-neutral-500 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-0 py-3 bg-transparent border-b border-neutral-200 dark:border-neutral-800 focus:border-indigo-600 outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-bold uppercase tracking-widest text-neutral-500 mb-2">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-0 py-3 bg-transparent border-b border-neutral-200 dark:border-neutral-800 focus:border-indigo-600 outline-none transition-colors"
                  placeholder="Your organization"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold uppercase tracking-widest text-neutral-500 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-0 py-3 bg-transparent border-b border-neutral-200 dark:border-neutral-800 focus:border-indigo-600 outline-none transition-colors resize-none"
                  placeholder="How can we help?"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center px-10 py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all group shadow-lg shadow-indigo-600/20"
              >
                Send Message
                <FiSend className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-2xl font-bold mb-8">Process & Delivery</h3>
              <div className="space-y-6">
                {[
                  { title: "Discovery", desc: "Deep dive into your architectural challenges." },
                  { title: "Blueprint", desc: "Detailed system design and execution strategy." },
                  { title: "Delivery", desc: "High-velocity development using Kotlin & React." }
                ].map((step, i) => (
                  <div key={i} className="flex space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-600/10 text-indigo-600 flex items-center justify-center font-bold text-xs">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{step.title}</h4>
                      <p className="text-neutral-500 font-light">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50">
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-neutral-500">Contact Details</h4>
              <div className="space-y-4">
                <a href="mailto:hello@cognisive.co.uk" className="flex items-center text-lg hover:text-indigo-600 transition-colors">
                  <FiMail className="mr-3" /> hello@cognisive.co.uk
                </a>
                <a href="https://github.com/cognisivelabs" target="_blank" rel="noopener noreferrer" className="flex items-center text-lg hover:text-indigo-600 transition-colors">
                  <FiGithub className="mr-3" /> @cognisivelabs
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-sm text-green-600 font-medium">
              <FiCheckCircle />
              <span>Response guaranteed within 24 hours</span>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}