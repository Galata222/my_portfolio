'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download, Calendar, MapPin, Award, GraduationCap, Briefcase } from 'lucide-react';

export function CVSection() {
  const experience = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Lead development of scalable web applications using React, Next.js, and Node.js. Mentored junior developers and implemented CI/CD pipelines.',
      achievements: [
        'Increased application performance by 40% through optimization',
        'Led a team of 5 developers on major product releases',
        'Implemented microservices architecture reducing deployment time by 60%'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'AWS', 'Docker']
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovations Inc.',
      location: 'Austin, TX',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create pixel-perfect user interfaces.',
      achievements: [
        'Built 15+ responsive web applications from scratch',
        'Reduced bug reports by 35% through comprehensive testing',
        'Improved code quality through peer reviews and best practices'
      ],
      technologies: ['React', 'Vue.js', 'Express', 'MongoDB', 'SCSS', 'Jest']
    },
    {
      title: 'Frontend Developer',
      company: 'StartupHub',
      location: 'Remote',
      period: '2019 - 2020',
      description: 'Focused on creating engaging user experiences for startup clients. Worked closely with UX designers to implement responsive designs.',
      achievements: [
        'Delivered 20+ projects on time and within budget',
        'Improved user engagement by 50% through UI/UX enhancements',
        'Established frontend development standards and workflows'
      ],
      technologies: ['JavaScript', 'React', 'Tailwind CSS', 'Figma', 'Git']
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Technology',
      location: 'California, USA',
      period: '2015 - 2019',
      gpa: '3.8/4.0',
      achievements: [
        'Magna Cum Laude graduate',
        'President of Computer Science Club',
        'Dean\'s List for 6 consecutive semesters'
      ]
    },
    {
      degree: 'Full Stack Web Development Bootcamp',
      institution: 'CodeAcademy Pro',
      location: 'Online',
      period: '2018',
      achievements: [
        'Top 5% of cohort',
        'Built 10+ full-stack applications',
        'Specialized in MERN stack development'
      ]
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      credentialId: 'AWS-CSA-2023-001'
    },
    {
      name: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: '2022',
      credentialId: 'GCP-PD-2022-045'
    },
    {
      name: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      date: '2021',
      credentialId: 'MDB-DEV-2021-123'
    }
  ];

  const downloadCV = () => {
    // In a real application, this would download the actual CV file
    console.log('Downloading CV...');
    // You could implement actual file download here
    alert('CV download functionality would be implemented here');
  };

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
          <Button
            onClick={downloadCV}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <Download className="h-4 w-4 mr-2" />
            Download CV
          </Button>
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
                        {job.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-sm">
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
                        {edu.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-sm">
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
              <h3 className="text-2xl font-bold text-foreground">Certifications</h3>
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