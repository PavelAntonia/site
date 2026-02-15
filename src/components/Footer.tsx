'use client';

import Link from 'next/link';
import { TransitionLink } from './TransitionLink';
import { useState, useCallback } from 'react';

export default function Footer() {
  const [clickCount, setClickCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  const handleCopyrightClick = useCallback(() => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (newCount >= 5) {
      setShowMessage(true);
      setClickCount(0);

      window.dispatchEvent(new CustomEvent('footer-easter-egg'));

      setTimeout(() => {
        setShowMessage(false);
      }, 4000);
    }

    setTimeout(() => {
      setClickCount(0);
    }, 2000);
  }, [clickCount]);

  return (
    <footer className="bg-light dark:bg-dark border-t border-dark-300 dark:border-light-300 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <TransitionLink
              href="/"
              className="flex items-center text-xl font-bold text-dark dark:text-light hover:underline transition duration-300"
            >
              Antonia
            </TransitionLink>
          </div>

          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link href="#about" className="text-dark-500 dark:text-light-300 hover:text-dark dark:hover:text-light hover:underline transition duration-300 focus:outline-none">
              About
            </Link>
            <Link href="#experience" className="text-dark-500 dark:text-light-300 hover:text-dark dark:hover:text-light hover:underline transition duration-300 focus:outline-none">
              Experience
            </Link>
            <Link href="#skills" className="text-dark-500 dark:text-light-300 hover:text-dark dark:hover:text-light hover:underline transition duration-300 focus:outline-none">
              Skills
            </Link>
            <Link href="#highlights" className="text-dark-500 dark:text-light-300 hover:text-dark dark:hover:text-light hover:underline transition duration-300 focus:outline-none">
              Awards
            </Link>
            <Link href="#cv" className="text-dark-500 dark:text-light-300 hover:text-dark dark:hover:text-light hover:underline transition duration-300 focus:outline-none">
              CV
            </Link>
            <Link href="#contact" className="text-dark-500 dark:text-light-300 hover:text-dark dark:hover:text-light hover:underline transition duration-300 focus:outline-none">
              Contact
            </Link>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/floriana-antonia-pavel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark dark:text-light hover:underline transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>

        {showMessage && (
          <div className="mt-4 text-center">
            <p className="text-sm font-semibold text-dark dark:text-light">You found the secret!</p>
          </div>
        )}

        <div className="mt-6 pt-6 border-t border-dark-300 dark:border-light-300 text-center">
          <button
            onClick={handleCopyrightClick}
            className="text-sm text-dark-500 dark:text-light-300 hover:text-dark dark:hover:text-light transition-colors focus:outline-none"
            aria-label="Copyright information"
            data-testid="footer-copyright"
          >
            © {new Date().getFullYear()} Antonia Pavel. All rights reserved.
          </button>
        </div>
      </div>
    </footer>
  );
}
