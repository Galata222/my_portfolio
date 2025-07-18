'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-background/80 backdrop-blur-sm border-2 hover:border-primary/20 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Let's Connect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-foreground/70 leading-relaxed">
                  I'm always interested in new opportunities and exciting projects.
                  Whether you have a specific project in mind or just want to chat
                  about technology, feel free to reach out!
                </p>

                <div className="space-y-4">
                  <a
                    href="mailto:galata20wako@gmail.com"
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-200"
                  >
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span className="text-foreground">galata20wako@gmail.com</span>
                  </a>

                  <a
                    href="https://github.com/galatawaqwaya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-200"
                  >
                    <Github className="h-5 w-5 text-gray-600" />
                    <span className="text-foreground">github.com/galatawaqwaya</span>
                  </a>

                  <a
                    href="https://linkedin.com/in/galatawaqwaya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-200"
                  >
                    <Linkedin className="h-5 w-5 text-blue-700" />
                    <span className="text-foreground">linkedin.com/in/galatawaqwaya</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-background/80 backdrop-blur-sm border-2 hover:border-primary/20 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form
                action="https://formsubmit.co/galata20wako@gmail.com"
                method="POST"
                className="space-y-4"
              >
                {/* Optional settings */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://galata_Waqwaya.com-one-phi-89.vercel.app" />

                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    className="bg-background/50 border-2 focus:border-primary/50 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="bg-background/50 border-2 focus:border-primary/50 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="bg-background/50 border-2 focus:border-primary/50 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 transition-all duration-300 transform hover:scale-105"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
