import { Card, CardContent } from "@/components/ui/card";
import { Code2, Music4, Lightbulb, Zap, Heart, Target } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Code2,
      title: "IT Journey",
      description: "Passionate about both software development and hardware engineering, constantly exploring new technologies."
    },
    {
      icon: Music4,
      title: "Musical Inspiration",
      description: "Music drives my creativity - from algorithm composition to UI design, rhythm guides my coding process."
    },
    {
      icon: Lightbulb,
      title: "Creative Problem Solving",
      description: "Approaching complex problems with artistic thinking, finding elegant solutions through creative perspectives."
    }
  ];

  const values = [
    { icon: Zap, text: "Innovation through rhythm" },
    { icon: Heart, text: "Passion for clean code" },
    { icon: Target, text: "Precision in execution" }
  ];

  return (
    <section className="py-20 relative">
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm an aspiring IT student who believes that the intersection of technology and music creates 
            the most beautiful digital experiences. My journey combines systematic programming with 
            creative expression, producing code that not only functions but inspires.
          </p>
        </div>

        {/* Main highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {highlights.map((item, index) => (
            <Card key={index} className="bg-card/50 border-0 neon-glow hover:neon-glow-blue transition-all duration-300 floating group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-neon rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-background" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-neon-blue transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Personal philosophy */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-card/30 to-card/50 border-neon-purple/30 neon-glow-purple">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-space font-semibold mb-6 text-neon-purple">
                    "Code is Poetry in Motion"
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Every line of code I write follows a rhythm, every function has its own melody. 
                    I approach software development like composing music - with structure, harmony, 
                    and an emotional connection to the end result.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    My goal is to create technology that doesn't just solve problems, but creates 
                    experiences that resonate with users on both logical and emotional levels.
                  </p>
                </div>
                
                <div className="space-y-4">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors group">
                      <div className="w-10 h-10 bg-gradient-cyber rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <value.icon className="w-5 h-5 text-background" />
                      </div>
                      <span className="text-foreground font-medium">{value.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;