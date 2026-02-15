'use client';

import { useState } from 'react';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  missions: Array<{
    name: string;
    description: string[];
    techStack?: string[];
  }>;
}

const experiences: Experience[] = [
  {
    title: 'Analyst, Systems and Automation (HRIS)',
    company: 'SES Satellites',
    location: 'Luxembourg',
    period: 'Jun 2022 - Present',
    missions: [
      {
        name: 'Systems Integration & Automation',
        description: [
          'Supported end-to-end integration of Intelsat employees into HR systems with SAP data migration, interface synchronization, and validated employee master data',
          'Supported reorganizations impacting 2,000+ employees by validating org structures and implementing changes across SAP ECC and SAP SuccessFactors',
          'Built a CLI org chart generator using Python (pandas), JSON payloads, and D3.js static HTML output, saving ~40 hours per quarter and 50+ hours per major reorg',
          'Migrated 20,000+ employee documents for 1,500+ employees into a DMS, fixing metadata quality issues and improving taxonomy-based mass upload',
          'Owned end-to-end HR systems operations and delivered Power BI reporting for HR and business decisions',
          'Developed scripts for data cleaning, deduplication, validation, and integration to reduce manual work and errors'
        ],
        techStack: ['SAP ECC', 'SAP SuccessFactors', 'Python', 'D3.js', 'Power BI', 'ETL']
      }
    ]
  },
  {
    title: 'Corporate Services Transformation',
    company: 'KPMG',
    location: 'Madrid',
    period: 'Jan 2022 - Jun 2022',
    missions: [
      {
        name: 'Treasury Process Transformation',
        description: [
          'Drove treasury process transformation for a global client across Benelux, centralizing cash flow, risk management, forecasting, and financial reporting',
          'Led stakeholder interviews and workshops to capture requirements, pain points, and regional differences, aligning teams on a single process vision',
          'Delivered As-Is/To-Be process documentation, RACI governance, controls inputs, and an implementation roadmap'
        ],
        techStack: ['Process Mapping', 'Treasury', 'RACI', 'Stakeholder Management']
      }
    ]
  },
  {
    title: 'Research Assistant',
    company: 'EELISA European University',
    location: 'Remote from Finland',
    period: 'Sep 2021 - Nov 2021',
    missions: [
      {
        name: 'Ya2ro Research Object Tooling',
        description: [
          'Built ya2ro to convert minimal YAML input (DOIs, ORCIDs, repository URLs, title, summary) into complete Research Objects',
          'Produced both human-readable HTML and machine-readable JSON-LD outputs aligned with Schema.org terms',
          'Packaged and published the tool as open source with documentation and distribution via GitHub and PyPI'
        ],
        techStack: ['Python', 'APIs', 'YAML', 'JSON-LD', 'Schema.org']
      }
    ]
  },
  {
    title: 'Software Engineer (Intern)',
    company: 'Vector ITC Group / Santander Bank',
    location: 'Madrid',
    period: 'Jun 2019 - Jul 2019',
    missions: [
      {
        name: 'Mobile Banking',
        description: [
          'Improved Banco Santander mobile app navigation for 5M+ users in Spain by implementing a streamlined user menu',
          'Enhanced core modules in Kotlin (Android) and Swift (iOS) for consistent cross-platform behavior and improved usability',
          'Partnered with product, design, backend, and QA to deliver stable releases through implementation, testing, and bug fixing'
        ],
        techStack: ['Kotlin', 'Swift', 'iOS', 'Android', 'Agile']
      }
    ]
  }
];

interface ExperienceCardProps {
  experience: Experience;
}

function ExperienceCard({ experience }: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div
      className={`bg-light dark:bg-dark p-6 cursor-pointer border border-dark-300 dark:border-light-300 focus:outline-none transition-all duration-200 ${
        isExpanded ? 'border-dark dark:border-light' : ''
      }`}
      onClick={() => setIsExpanded(!isExpanded)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-expanded={isExpanded}
      aria-label={`${experience.company} - ${experience.title}, Press Enter to ${isExpanded ? 'collapse' : 'expand'}`}
    >
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="text-lg text-dark dark:text-light">
            {experience.company}
          </h3>
          <p className="text-sm text-dark-500 dark:text-light-300">{experience.title}</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 text-dark dark:text-light transition-transform duration-200 ${
            isExpanded ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      <div className="flex items-center gap-2 text-sm text-dark-500 dark:text-light-300">
        <span>{experience.location}</span>
        <span>•</span>
        <span>{experience.period}</span>
      </div>

      {isExpanded && (
        <div className="space-y-4 mt-4">
          {experience.missions.map((mission, missionIndex) => (
            <div key={missionIndex} className="border-t border-dark-300 dark:border-light-300 pt-3">
              <h4 className="text-dark dark:text-light mb-2">
                {mission.name}
              </h4>
              <ul className="space-y-1">
                {mission.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm text-dark-500 dark:text-light-300 flex items-start">
                    <span className="text-dark dark:text-light mr-2 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {mission.techStack && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {mission.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 border border-dark-300 dark:border-light-300 text-dark dark:text-light text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Timeline() {
  return (
    <section id="experience" className="py-20 bg-light dark:bg-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl text-dark dark:text-light mb-2">
            Professional Experience
          </h2>
          <div className="h-px w-20 bg-dark dark:bg-light mx-auto mb-4" />
          <p className="text-lg text-dark-500 dark:text-light-300 max-w-2xl mx-auto">
            My journey through HRIS, analytics, automation, and research roles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
