import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Palette, Headphones, Zap, Users, Target, Heart } from "lucide-react";

const SkillsSection = () => {
  const techSkills = [
    { name: "HTML5", level: 90, color: "neon-pink" },
    { name: "CSS3", level: 85, color: "neon-blue" },
    { name: "JavaScript", level: 80, color: "neon-purple" },
    { name: "Python", level: 75, color: "neon-green" },
    { name: "React", level: 70, color: "neon-cyan" },
    { name: "MySQL", level: 65, color: "neon-pink" },
    { name: "Node.js", level: 60, color: "neon-blue" },
    { name: "Git", level: 80, color: "neon-purple" }
  ];

  const softSkills = [
    { icon: Palette, name: "Creativity", description: "Bringing artistic vision to technical solutions" },
    { icon: Headphones, name: "Focus & Flow", description: "Deep concentration inspired by musical rhythms" },
    { icon: Zap, name: "Quick Learning", description: "Rapidly adapting to new technologies and trends" },
    { icon: Users, name: "Collaboration", description: "Working harmoniously in team environments" },
    { icon: Target, name: "Precision", description: "Attention to detail in code and design" },
    { icon: Heart, name: "Passion", description: "Genuine love for creating meaningful experiences" }
  ];

  const categories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: ["React", "TypeScript", "Tailwind CSS", "Three.js", "WebGL"],
      gradient: "from-neon-pink to-neon-purple"
    },
    {
      title: "Backend & Database",
      icon: Database,
      skills: ["Node.js", "Python", "MySQL", "PostgreSQL", "API Design"],
      gradient: "from-neon-blue to-neon-cyan"
    },
    {
      title: "Audio & Creative Tech",
      icon: Headphones,
      skills: ["Web Audio API", "MIDI Programming", "Digital Music Production", "Sound Design"],
      gradient: "from-neon-green to-neon-blue"
    }
  ];

  return (
    <section className="py-20 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(320,100%,65%,0.1),transparent_70%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A blend of technical proficiency and creative intuition, always evolving with the beat of innovation
          </p>
        </div>

        {/* Technical Skills Progress */}
        <div className="mb-16">
          <h3 className="text-2xl font-space font-semibold mb-8 text-center text-neon-purple">
            Technical Proficiency
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {techSkills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="text-muted-foreground text-sm">{skill.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r from-${skill.color} to-${skill.color}/70 rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <Card key={index} className="bg-card/50 border-0 neon-glow hover:neon-glow-blue transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <category.icon className="w-6 h-6 text-background" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-neon-blue transition-colors">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="outline"
                      className="border-neon-purple/30 text-neon-purple hover:bg-neon-purple/10 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-space font-semibold mb-8 text-center text-neon-green">
            Creative Qualities
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <Card key={index} className="bg-gradient-to-br from-card/30 to-card/50 border-neon-green/20 hover:border-neon-green/40 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-neon-green to-neon-cyan rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <skill.icon className="w-7 h-7 text-background" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground group-hover:text-neon-green transition-colors">
                    {skill.name}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;