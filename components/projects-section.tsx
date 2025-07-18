'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

export function ProjectsSection() {
  const projects = [
    {
      title: 'GOSA (Social Support Association Platform)',
      description: 'A Django–React–PostgreSQL application built for managing traditional social support associations in Ethiopia. Features include contribution tracking, event coordination, role-based access, and live deployment via Yegara Cloud at afoosha.com.',
      technologies: ['Django','React.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
      github: 'https://github.com/Galata222/ocia-project',
      demo: 'https://afoosha.com/',
      image: 'aosc.png',
    },

    {
      title: 'Clinic Management System',
      description: 'A system for digitizing clinical records, appointments, and medical reporting for small health centers. Built using Yii2 PHP Framework and Bootstrap.',
      technologies: ['PHP', 'Bootstrap', 'Yii2', 'MySQL'],
      github: 'https://github.com/Galata222/clinic-managemnt-system',
      demo: 'https://taskapp-demo.galatawaqwaya.com',
      image: 'clinic.png',
    },

    {
      title: 'Volunteerism Management System',
      description: 'A backend system developed for the Addis Ababa City Administration to manage and coordinate large-scale volunteer efforts.',
      technologies: ['Laravel', 'Bootstrap', 'JavaScript', 'Chart.js', 'CSS'],
      github: 'https://github.com/galatawaqwaya/weather-dashboard',
      demo: 'https://weather-demo.galatawaqwaya.httpscom',
      image: 'vms.png',
    },

    {
      title: 'Afan Oromo Spell Checker',
      description: 'An NLP-based tool that detects and corrects spelling errors in Afan Oromo, one of Ethiopia’s major languages. It combines rule-based AI with dictionary lookup for accurate spell checking.',
      technologies: ['Python', 'Flask', 'Hanspell', 'JavaScript', 'Tailwind CSS'],
      github: 'https://github.com/Galata222/Afan-Oromo-Spell-Checker',
      demo: 'https://social-demo.galatawaqwaya.com',
      image: 'aosc.png',
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating expertise in modern web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 bg-background/80 backdrop-blur-sm overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-foreground/70 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs border-blue-200 text-blue-700 dark:border-blue-800 dark:text-blue-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1 group-hover:border-primary/50 transition-colors"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    asChild
                    className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}