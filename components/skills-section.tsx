'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function SkillsSection() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 'Expert' },
        { name: 'JavaScript', level: 'Expert' },
        { name: 'PHP', level: 'Advanced' },
        { name: 'C++', level: 'Advanced' },
        { name: 'Java', level: 'Intermediate' },
      ],
    },
    {
      title: 'Web Technologies',
      skills: [
        { name: 'HTML5', level: 'Expert' },
        { name: 'CSS', level: 'Expert' },
        { name: 'ReactJS', level: 'Advanced' },
        { name: 'Node.js', level: 'Intermediate' },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'Django', level: 'Expert' },
        { name: 'Laravel', level: 'Advanced' },
        { name: 'Yii2', level: 'Intermediate' },
        { name: 'ReactJS', level: 'Advanced' },
      ],
    },
    {
      title: 'Databases & AI',
      skills: [
        { name: 'PostgreSQL', level: 'Expert' },
        { name: 'MySQL', level: 'Advanced' },
        { name: 'MongoDB', level: 'Intermediate' },
        { name: 'SQL', level: 'Expert' },
        { name: 'Machine Learning', level: 'Intermediate' },
        { name: 'Natural Language Processing', level: 'Intermediate' },
      ],
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200';
      case 'Advanced':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-200';
    }
  };

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            My technical skills and proficiency levels across different technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-background/80 backdrop-blur-sm border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4 text-center">
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <Badge
                        variant="secondary"
                        className={`text-xs px-2 py-1 ${getLevelColor(skill.level)}`}
                      >
                        {skill.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}