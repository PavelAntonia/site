"use client";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-light dark:bg-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-dark dark:text-light mb-4">
            Get In Touch
          </h2>
          <div className="h-px w-20 bg-dark dark:bg-light mx-auto mb-6" />
          <p className="text-lg text-dark-500 dark:text-light-300 max-w-2xl mx-auto">
            Feel free to reach out!
          </p>
        </div>
 
        <div className="max-w-3xl mx-auto">
          <div className="bg-light dark:bg-dark p-8 border border-dark-300 dark:border-light-300">
            <h3 className="text-2xl text-dark dark:text-light mb-8">
              Contact Information
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex items-center space-x-4 p-4 border border-dark-300 dark:border-light-300 transition-all duration-200">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 flex items-center justify-center border border-dark-300 dark:border-light-300 text-dark dark:text-light transition-colors duration-200">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-dark-500 dark:text-light-300 mb-0.5">
                    Email
                  </p>
                  <a
                    href="mailto:floriana.antonia.pavel@gmail.com"
                    className="text-base text-dark dark:text-light hover:underline transition duration-200"
                  >
                    floriana.antonia.pavel@gmail.com
                  </a>
                </div>
              </div> 
              <div className="flex items-center space-x-4 p-4 border border-dark-300 dark:border-light-300 transition-all duration-200">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 flex items-center justify-center border border-dark-300 dark:border-light-300 text-dark dark:text-light transition-colors duration-200">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-dark-500 dark:text-light-300 mb-0.5">
                    Location
                  </p>
                  <p className="text-base text-dark dark:text-light">
                    Luxembourg, Luxembourg
                  </p>
                </div>
              </div> 
              <div className="flex items-center space-x-4 p-4 border border-dark-300 dark:border-light-300 transition-all duration-200">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 flex items-center justify-center border border-dark-300 dark:border-light-300 text-dark dark:text-light transition-colors duration-200">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 8a6 6 0 01-8.6 5.4L4 17v-3.4A6 6 0 1116 8z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-dark-500 dark:text-light-300 mb-0.5">
                    LinkedIn
                  </p>
                  <a
                    href="https://www.linkedin.com/in/floriana-antonia-pavel"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="text-base text-dark dark:text-light hover:underline transition-colors duration-200 focus:outline-none"
                  >
                    linkedin.com/in/floriana-antonia-pavel
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
 
      </div>
    </section>
  );
}
