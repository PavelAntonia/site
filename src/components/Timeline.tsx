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
        name: 'HRIS Integration & Automation',
        description: [
          'Led end-to-end integration of Intelsat employees into corporate HR and IT systems with accurate SAP data migration',
          'Coordinated IT and reorg initiatives impacting 2,000+ employees by integrating HR workflows across SAP and SuccessFactors',
          'Developed an org chart visualization tool, saving ~40 hours per quarter in standard operations and 50+ hours per major reorg',
          'Engineered Python scripts to automate data cleaning, transformation, deduplication, validation, and integration pipelines',
          'Designed and implemented ETLs and Power BI dashboards to enhance HR data reporting',
          'Supported HRIS implementation and troubleshooting with >99% uptime through cross-team collaboration'
        ],
        techStack: ['SAP', 'SuccessFactors', 'Python', 'ETL', 'Power BI']
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
        name: 'Operating Model & Process Optimization',
        description: [
          'Led analytics-backed operating model reviews for Corporate Services with executive-ready reports and benchmarks',
          'Mapped end-to-end treasury processes, quantified waste and cycle times, and designed centralized workflows reducing redundancy by ~15%',
          'Partnered with Finance and IT stakeholders to align metrics, governance, and data requirements'
        ],
        techStack: ['Analytics', 'Process Mapping', 'Stakeholder Management']
      }
    ]
  },
  {
    title: 'Research Assistant',
    company: 'EELISA European University',
    location: 'Remote',
    period: 'Sep 2021 - Nov 2021',
    missions: [
      {
        name: 'Ya2ro Research Automation',
        description: [
          'Built "ya2ro", an open-source automation tool that converts minimal metadata into fully packaged Research Objects',
          'Implemented Python-based pipelines and API integrations (DOI, ORCID) to standardize data quality and traceability',
          'Co-authored a peer-reviewed demo paper and presented outcomes adopted by research teams'
        ],
        techStack: ['Python', 'APIs', 'Research Automation']
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
          'Improved Santander Bank’s mobile app by implementing a streamlined user menu and enhancing key modules in Kotlin and Swift',
          'Delivered features within tight deadlines as part of an Agile team',
          'Participated in Scrum ceremonies and CI/CD workflows'
        ],
        techStack: ['Kotlin', 'Swift', 'Agile']
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
