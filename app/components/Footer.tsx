'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FiGithub, FiLinkedin, FiMail, FiExternalLink } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer id="contact" className="bg-neutral-50 dark:bg-neutral-900/50 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image 
                src="/cognisiveLogo.png" 
                alt="CognisiveLabs Logo" 
                width={40} 
                height={40}
                className="rounded-lg"
              />
              <span className="font-semibold text-xl">CognisiveLabs</span>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-md">
              Building innovative solutions for consulting companies. 
              Part of the Cognisive family.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/cognisivelabs"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="mailto:contact@cognisivelabs.com"
                className="p-2 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
                aria-label="Email"
              >
                <FiMail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-neutral-600 dark:text-neutral-400">
            <p>&copy; {new Date().getFullYear()} CognisiveLabs. All rights reserved.</p>
            <div className="flex items-center mt-4 md:mt-0">
              <span className="mr-2">A</span>
              <a
                href="https://cognisive.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:text-primary transition-colors inline-flex items-center"
              >
                Cognisive
                <FiExternalLink className="ml-1" size={14} />
              </a>
              <span className="ml-2">Company</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}