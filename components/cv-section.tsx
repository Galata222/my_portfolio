'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, Calendar, MapPin, Award, GraduationCap, Briefcase } from 'lucide-react';

export function CVSection() {
  const experience = [
    {
      title: 'Assistant Lecturer in University',
      company: 'Haramaya University',
      location: 'Harar, Ethiopia',
      period: '03/10/2024 - Present',
      description: 'Delivering lectures and tutorials in assigned subjects, ensuring clear and effective instruction. Guiding students through academic projects, offering mentorship on research and development.',
      achievements: [
        'Teaching software engineering courses to university students',
        'Mentoring students in their academic projects'
      ],
      technologies: ['Teaching', 'Mentorship', 'Research']
    },
    {
      title: 'Software Developer Intern',
      company: 'Faris Technologies',
      location: 'Addis Ababa, Ethiopia',
      period: '05/07/2022 - 10/10/2023',
      description: 'Developed Volunteerism Management System for Addis Ababa Administration City as a backend developer. Worked closely with a cross-functional team to deliver the project on time and within budget.',
      achievements: [
        'Successfully delivered a city-wide volunteer management system',
        'Collaborated effectively with designers and project managers'
      ],
      technologies: ['Django', 'PostgreSQL', 'Team Collaboration']
    },
    {
      title: 'Software Engineer Intern',
      company: 'Hararghe Health Research',
      location: 'Harar, Ethiopia',
      period: '05/02/2023 - 27/06/2023',
      description: 'Developed and deployed systems to streamline administrative processes in healthcare and correctional facilities.',
      achievements: [
        'Created a Clinic Management System enhancing patient care',
        'Developed a Prisoner Management System for efficient record tracking'
      ],
      technologies: ['System Design', 'Full-stack Development', 'Deployment']
    }
  ];

  const education = [
    {
      degree: 'BSc in Software Engineering',
      institution: 'Haramaya University',
      location: 'Haramaya, Ethiopia',
      period: '06/10/2019 - 04/07/2024',
      gpa: '4.0/4.0',
      achievements: [
        'Gold Medalist for perfect 4.00 CGPA with all 35 A+ grades',
        'Thesis: Afan Oromo Spell Checker using NLP',
        'First place in Huawei ICT Competition 2022-2023 Cloud Track'
      ]
    },
    {
      degree: 'High School',
      institution: 'ODA Special Boarding School',
      location: 'Adama, Ethiopia',
      period: '09/09/2016 - 07/08/2019',
      achievements: [
        'Special boarding school education',
        'Strong foundation for university studies'
      ]
    }
  ];

  const certifications = [
    {
      name: 'Huawei ICT Competition 2022-2023 National Final Cloud Track First Prize',
      issuer: 'Huawei',
      date: '29/08/2023',
      credentialId: 'Regional Finalist'
    },
    {
      name: 'Artificial Intelligence Fundamentals',
      issuer: 'Udacity (Ethiopian Ministry of Labor and Skill)',
      date: '30/12/2024',
      credentialId: 'Nanodegree Program'
    },
    {
      name: 'Certificate of Academic Achievement',
      issuer: 'Haramaya University',
      date: '04/07/2024',
      credentialId: 'Gold Medalist'
    }
  ];

  return (
    <section id="cv" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Curriculum Vitae
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
            A comprehensive overview of my professional experience, education, and achievements
          </p>

          {/* Download CV button using <a> tag */}
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 font-semibold transition-all duration-300 transform hover:scale-105 rounded-md"
          >
            <Download className="h-4 w-4 mr-2" />
            Download CV
          </a>
        </div>

        <div className="space-y-12">
          {/* Professional Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="h-6 w-6 text-blue-600" />
              <h3 className="text-2xl font-bold text-foreground">Professional Experience</h3>
            </div>
            <div className="space-y-6">
              {experience.map((job, index) => (
                <Card
                  key={index}
                  className="bg-background/80 backdrop-blur-sm border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg"
                >
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl font-bold text-foreground mb-1">
                          {job.title}
                        </CardTitle>
                        <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                          {job.company}
                        </p>
                      </div>
                      <div className="flex flex-col md:items-end gap-2">
                        <div className="flex items-center gap-2 text-foreground/60">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm font-medium">{job.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-foreground/60">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{job.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-foreground/70 leading-relaxed">
                      {job.description}
                    </p>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Key Achievements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-foreground/70">
                        {job.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm">
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs border-blue-200 text-blue-700 dark:border-blue-800 dark:text-blue-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="h-6 w-6 text-green-600" />
              <h3 className="text-2xl font-bold text-foreground">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="bg-background/80 backdrop-blur-sm border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg"
                >
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl font-bold text-foreground mb-1">
                          {edu.degree}
                        </CardTitle>
                        <p className="text-lg font-semibold text-green-600 dark:text-green-400">
                          {edu.institution}
                        </p>
                      </div>
                      <div className="flex flex-col md:items-end gap-2">
                        <div className="flex items-center gap-2 text-foreground/60">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm font-medium">{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-foreground/60">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{edu.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {edu.gpa && (
                      <p className="text-foreground/70">
                        <span className="font-semibold">GPA:</span> {edu.gpa}
                      </p>
                    )}
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Achievements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-foreground/70">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm">
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award className="h-6 w-6 text-purple-600" />
              <h3 className="text-2xl font-bold text-foreground">Certifications & Awards</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="bg-background/80 backdrop-blur-sm border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg"
                >
                  <CardContent className="p-6">
                    <div className="text-center space-y-3">
                      <Award className="h-8 w-8 text-purple-600 mx-auto" />
                      <h4 className="font-bold text-foreground">{cert.name}</h4>
                      <p className="text-sm text-foreground/70">{cert.issuer}</p>
                      <Badge variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-200">
                        {cert.date}
                      </Badge>
                      <p className="text-xs text-foreground/50">
                        ID: {cert.credentialId}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
