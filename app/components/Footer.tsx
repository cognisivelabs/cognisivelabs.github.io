'use client';

import React from 'react';
import Link from 'next/link';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const footerLinks = {
  solutions: [
    { name: 'Enterprise Architecture', href: '/#services' },
    { name: 'Product Engineering', href: '/#services' },
    { name: 'Strategic Consulting', href: '/#services' },
  ],
  company: [
    { name: 'About Us', href: '/#about' },
    { name: 'The Labs', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
  social: [
    { name: 'GitHub', href: 'https://github.com/cognisivelabs', icon: FiGithub },
    { name: 'LinkedIn', href: '#', icon: FiLinkedin },
    { name: 'Twitter', href: '#', icon: FiTwitter },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center mb-6 group">
              <span className="text-3xl font-bold tracking-tighter text-neutral-900 dark:text-white group-hover:text-indigo-600 transition-colors uppercase">
                COGNISIVE
              </span>
            </Link>
            <p className="text-neutral-500 dark:text-neutral-400 mb-8 max-w-xs font-light leading-relaxed">
              Enterprise stability powered by continuous innovation. Delivering
              technical excellence through services and the Labs.
            </p>
            <div className="flex space-x-5">
              {footerLinks.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-neutral-400 hover:text-indigo-600 transition-colors"
                  aria-label={item.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <item.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-neutral-950 dark:text-white">Solutions</h4>
            <ul className="space-y-4 text-sm">
              {footerLinks.solutions.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-neutral-500 hover:text-indigo-600 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-neutral-950 dark:text-white">Company</h4>
            <ul className="space-y-4 text-sm">
              {footerLinks.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-neutral-500 hover:text-indigo-600 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-neutral-950 dark:text-white">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="mailto:hello@cognisive.co.uk" className="text-neutral-500 hover:text-indigo-600 transition-colors">
                  hello@cognisive.co.uk
                </a>
              </li>
              <li className="text-neutral-500">United Kingdom</li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-neutral-100 dark:border-neutral-800 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} Cognisive Ltd. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            {footerLinks.legal.map((item) => (
              <Link key={item.name} href={item.href} className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}