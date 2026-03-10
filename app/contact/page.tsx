'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiSend, FiCheckCircle } from 'react-icons/fi';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-48 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-16 md:space-y-24"
      >
        <div className="space-y-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif text-neutral-900 dark:text-neutral-100 font-light tracking-tight"
          >
            Hi, how can we help?
          </motion.p>
        </div>

        <div className="pt-12 border-t border-neutral-100 dark:border-neutral-800">
          <form onSubmit={handleSubmit} className="max-w-xl space-y-12 relative">
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white/95 dark:bg-neutral-950/95 backdrop-blur-sm text-center"
              >
                <FiCheckCircle size={48} className="text-indigo-600 mb-6" />
                <h3 className="text-3xl font-serif mb-2">Message Sent</h3>
                <p className="text-neutral-500 font-light">We will be in touch shortly.</p>
              </motion.div>
            )}

            <div className="space-y-8">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full text-xl md:text-2xl bg-transparent border-b border-neutral-200 dark:border-neutral-800 focus:border-neutral-900 dark:focus:border-white outline-none py-2 transition-colors font-light"
                  placeholder="Your Name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full text-xl md:text-2xl bg-transparent border-b border-neutral-200 dark:border-neutral-800 focus:border-neutral-900 dark:focus:border-white outline-none py-2 transition-colors font-light"
                  placeholder="name@company.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full text-xl md:text-2xl bg-transparent border-b border-neutral-200 dark:border-neutral-800 focus:border-neutral-900 dark:focus:border-white outline-none py-2 transition-colors font-light resize-none"
                  placeholder="How can we help?"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="text-lg font-mono uppercase tracking-[0.2em] text-neutral-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center group cursor-pointer"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <FiSend className="ml-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>

        <div className="pt-12 text-sm font-mono uppercase tracking-[0.2em] text-neutral-400">
          <Link href="/" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
            ← Back to Index
          </Link>
        </div>
      </motion.div>
    </div>
  );
}