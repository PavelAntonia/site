'use client';

import { useState } from 'react';
import ProjectCard from './ProjectCard';

type Project = {
  title: string;
  description: string;
  /** Fallback single link (legacy) */
  link?: string;
  /** Preferred explicit links */
  liveLink?: string;
  githubLink?: string;
  image: string;
  technologies: string[];
};

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const projects: Project[] = [
    {
      title: 'National Business Contest – 1st Prize',
      description: 'Developed and pitched a business model with full financial and market strategy (Spain, 2017).',
      image: '/projects/award-1.jpg',
      technologies: ['Award', 'Business Strategy'],
    },
    {
      title: 'Hackathon (BEST/AXA) – 1st Prize',
      description: 'Led a team to build a full-stack solution for a real-world AXA business case (Spain, 2021).',
      image: '/projects/award-2.jpg',
      technologies: ['Award', 'Full-stack'],
    },
    {
      title: 'Publication: Ya2ro (Demo Paper)',
      description: 'Co-authored a peer-reviewed demo paper on creating Research Objects from minimum metadata (2023).',
      link: 'https://dgarijo.com/papers/Ya2RO_Damalos_2023_DEMO.pdf',
      image: '/projects/publication-1.jpg',
      technologies: ['Publication', 'Research'],
    },
  ];

  const allTechnologies = projects.flatMap((project) => project.technologies);

  const filteredProjects = projects.filter((project) => {
    const matchesFilter = activeFilter === 'All' || project.technologies.includes(activeFilter);
    const matchesSearch =
      searchQuery === '' ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="highlights" className="py-20 bg-light dark:bg-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-dark dark:text-light mb-2">Highlights</h2>
          <div className="h-1 bg-dark dark:bg-light mx-auto mb-4" />
          <p className="text-lg text-dark-600 dark:text-light-300 max-w-2xl mx-auto">
            Awards and publications that reflect my work across analytics, automation, and research.
          </p>
        </div>

        <div className="mb-8 space-y-4">
          <div className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search highlights..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search highlights"
              className="w-full px-4 py-2 border border-dark dark:border-light bg-light dark:bg-dark text-dark dark:text-light focus:outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="border border-dark-300 dark:border-light-300 bg-light dark:bg-dark overflow-hidden"
            >
                <div className="h-48 border-b border-dark-300 dark:border-light-300 flex items-center justify-center">
                  <div className="text-4xl font-bold text-dark dark:text-light">{project.title}</div>
                </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark dark:text-light mb-2">{project.title}</h3>
                <p className="text-dark-500 dark:text-light-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs font-medium border border-dark-300 dark:border-light-300 text-dark dark:text-light"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
{(project.liveLink || project.githubLink || project.link) && (
                  <div className="flex flex-wrap gap-4">
                    {(project.liveLink || (project.link && !project.link.includes('github.com') ? project.link : undefined)) && (
                      <a
                        href={project.liveLink || project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-dark dark:text-light hover:underline transition-colors duration-300"
                      >
                        Details
                        <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01 1.414 1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
                        </svg>
                      </a>
                    )}

                    {(project.githubLink || (project.link && project.link.includes('github.com') ? project.link : undefined)) && (
                      <a
                        href={project.githubLink || project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-dark dark:text-light hover:underline transition-colors duration-300"
                      >
                        Source
                        <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01 1.414 1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
                        </svg>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="col-span-full text-center py-16">
            <p className="text-dark-500 dark:text-light-400 text-lg">
              No highlights found matching your criteria.
            </p>
            <button
              onClick={() => {
                  setActiveFilter('All');
                  setSearchQuery('');
                }}
              aria-label="Clear all filters"
              className="mt-4 px-6 py-2 border-2 border dark:border-light text-dark dark:text-light hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
