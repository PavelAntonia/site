'use client';

import SkillBar from './SkillBar';

const skills = [
  {
    category: 'Languages',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
      </svg>
    ),
    items: [
      { name: 'Spanish', description: 'Native' },
      { name: 'Romanian', description: 'Native' },
      { name: 'English', description: 'Professional' },
    ],
  },
  {
    category: 'Data & Visualization',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
      </svg>
    ),
    items: [
      { name: 'Power BI', description: 'Dashboards and reporting' },
      { name: 'Python (Pandas, NumPy, Seaborn)', description: 'Data analysis and automation' },
      { name: 'ETL', description: 'Data extraction and transformation' },
    ],
  },
  {
    category: 'Software & Tools',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="3" y1="9" x2="21" y2="9"></line>
        <line x1="9" y1="21" x2="9" y2="9"></line>
      </svg>
    ),
    items: [
      { name: 'SAP SuccessFactors', description: 'HRIS administration and integration' },
      { name: 'ServiceNow', description: 'Workflow and ticketing' },
      { name: 'SharePoint', description: 'Collaboration and content management' },
      { name: 'Jira', description: 'Project tracking' },
      { name: 'Microsoft Office', description: 'Reporting and documentation' },
    ],
  },
  {
    category: 'Programming',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
        <line x1="12" y1="22" x2="12" y2="15.5"></line>
        <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
        <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
        <line x1="12" y1="2" x2="12" y2="8.5"></line>
      </svg>
    ),
    items: [
      { name: 'Python', description: 'Automation and data pipelines' },
      { name: 'Kotlin', description: 'Mobile development' },
      { name: 'Swift', description: 'iOS development' },
      { name: 'SQL', description: 'Queries and data modeling' },
      { name: 'HTML/CSS/JavaScript', description: 'Web fundamentals' },
      { name: 'RESTful APIs', description: 'Integration patterns' },
    ],
  },
  {
    category: 'DevOps & Methodologies',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3"></circle>
        <circle cx="6" cy="18" r="3"></circle>
        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
      </svg>
    ),
    items: [
      { name: 'Agile (Scrum)', description: 'Iterative delivery' },
      { name: 'Git', description: 'Version control' },
      { name: 'GitHub', description: 'Collaboration and reviews' },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-light dark:bg-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl text-dark dark:text-light mb-2">
            Technical Skills
          </h2>
          <div className="h-px w-20 bg-dark dark:bg-light mx-auto mb-4" />
          <p className="text-lg text-dark-500 dark:text-light-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills, tools, and methodologies I use to solve complex problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillCategory, index) => (
            <div
              key={index}
              className="bg-light dark:bg-dark p-6 border border-dark-300 dark:border-light-300"
            >
              <div className="flex items-center mb-6">
                <div className="mr-3 border border-dark-300 dark:border-light-300 p-2 text-dark dark:text-light">
                  {skillCategory.icon}
                </div>
                <h3 className="text-xl text-dark dark:text-light">{skillCategory.category}</h3>
              </div>
              <ul className="space-y-2">
                {skillCategory.items.map((skill, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="text-dark dark:text-light mr-2">•</span>
                    <SkillBar
                      skill={skill.name}
                      description={skill.description}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
