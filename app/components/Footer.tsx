'use client';

import React from 'react';
import Link from 'next/link';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const footerLinks = {
  solutions: [
    { name: 'QuickForm', href: '/products/quickform' },
    { name: 'ZenDraw', href: '/products/zendraw' },
    { name: 'VerveNote', href: '/products/vervenote' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Labs', href: '/labs' },
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
      <div className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-12 2xl:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center mb-6 group">
              <span className="text-2xl font-serif tracking-tight text-neutral-900 dark:text-white group-hover:text-indigo-600 transition-colors">
                Cognisive
              </span>
            </Link>
            <p className="text-base font-light text-neutral-500 dark:text-neutral-400 mb-8 max-w-xs leading-relaxed">
              Precision-engineered software for everyone.
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
            <h4 className="text-sm uppercase tracking-widest mb-6 font-mono text-neutral-900 dark:text-white">Solutions</h4>
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
            <h4 className="text-sm uppercase tracking-widest mb-6 font-mono text-neutral-900 dark:text-white">Company</h4>
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
            <h4 className="text-sm uppercase tracking-widest mb-6 font-mono text-neutral-900 dark:text-white">Contact</h4>
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

        <div className="pt-10 border-t border-neutral-100 dark:border-neutral-800 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500 gap-y-4 md:gap-y-0">
          <p className="text-center md:text-left">© {new Date().getFullYear()} Cognisive Ltd. All rights reserved.</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-8">
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