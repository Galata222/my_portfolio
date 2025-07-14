'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PhotoSlideshow } from './photo-slideshow';

export function AboutSection() {
  const technologies = [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'SCSS',
    'Tailwind CSS',
    'MongoDB',
    'PostgreSQL',
    'GraphQL',
    'AWS',
    'Docker',
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Learn more about my journey, skills, and passion for Software development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <PhotoSlideshow />

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Software Engineer & Problem Solver
              </h3>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Highly motivated Software Engineer with a solid academic background and a strong software development track record. Graduated
 with a Bachelor in Software Engineering from Haramaya University, earning a Gold Medal for my perfect 4.00 CGPA with all 35 A+
 grades.
 I won first place in the Huawei ICT Competition 2022-2023 Cloud Track and represented my country in the Regional Final against
 North African countries. I am skilled in Django, React.js, PostgreSQL, with experience in user-focused systems and AI applications,
 like an Afan Oromo Spell Checker.
 
              </p>
              <p className="text-foreground/70 leading-relaxed mb-6">
           I pride myself on strong teamwork and integrated backend and frontend systems—all with a mind toward user experience. Very
 much looking forward to applying the skills of a Data Science, AI and Software Development professional in ongoing projects
 that truly make a difference.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-foreground mb-4">
                Technologies I work with
              </h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-200"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}