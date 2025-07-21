import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Play, Volume2, Gamepad2 } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "SynthWave Visualizer",
      description: "Real-time audio visualizer with WebGL effects and beat detection. Features customizable color schemes and responsive particle systems that dance to the music.",
      icon: Volume2,
      tech: ["JavaScript", "WebGL", "Web Audio API", "Three.js"],
      gradient: "from-neon-pink to-neon-purple",
      glowColor: "neon-glow",
      demo: true,
      github: true
    },
    {
      title: "Rhythm Playlist Manager",
      description: "Smart playlist web app that analyzes song tempo and mood. Uses machine learning to create perfect workout, study, or chill playlists automatically.",
      icon: Play,
      tech: ["React", "Node.js", "Python", "Spotify API", "TensorFlow"],
      gradient: "from-neon-blue to-neon-cyan",
      glowColor: "neon-glow-blue",
      demo: true,
      github: true
    },
    {
      title: "Beat-Sync Game Engine",
      description: "2D game engine where gameplay mechanics sync with background music. Features dynamic difficulty scaling based on song complexity and user performance.",
      icon: Gamepad2,
      tech: ["C++", "OpenGL", "FMOD", "Lua Scripting"],
      gradient: "from-neon-green to-neon-blue",
      glowColor: "neon-glow-green",
      demo: false,
      github: true
    }
  ];

  return (
    <section className="py-20 relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-neon-pink/10 rounded-full blur-3xl floating"></div>
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-neon-blue/10 rounded-full blur-3xl floating" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Where technology meets creativity - projects that showcase the harmony between code and music
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className={`bg-card/50 border-0 ${project.glowColor} hover:scale-105 transition-all duration-300 group overflow-hidden relative`}>
              {/* Project icon with gradient background */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${project.gradient} opacity-20 blur-xl`}></div>
              
              <CardHeader className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <project.icon className="w-6 h-6 text-background" />
                  </div>
                  <CardTitle className="text-xl font-space text-foreground group-hover:text-neon-pink transition-colors">
                    {project.title}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="border-neon-purple/30 text-neon-purple hover:bg-neon-purple/10 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3 pt-4">
                  {project.demo && (
                    <Button 
                      size="sm" 
                      className="flex-1 bg-gradient-neon hover:opacity-90 transition-opacity"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                  {project.github && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className={`${project.demo ? '' : 'flex-1'} neon-glow-blue hover:bg-neon-blue/10`}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work or collaborate on something amazing?
          </p>
          <Button className="gradient-border p-0 bg-transparent">
            <div className="gradient-border-content px-8 py-3 text-foreground hover:text-background transition-colors">
              View All Projects
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;