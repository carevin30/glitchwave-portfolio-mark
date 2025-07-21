import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Music, Code, ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  const [text, setText] = useState("");
  const fullText = "Tech meets rhythm – where code becomes art.";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 80);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(320,100%,65%,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(320,100%,65%,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse opacity-30"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-pink rounded-full floating"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        {/* Profile image */}
        <div className="mb-8 relative">
          <div className="w-48 h-48 mx-auto rounded-full overflow-hidden neon-glow pulse-neon relative">
            <img 
              src="/lovable-uploads/7262cf8f-a302-469d-99cf-6878486162e5.png"
              alt="Mark Carevin Daluson"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-neon-green rounded-full neon-glow-green floating">
            <Music className="w-5 h-5 text-background m-1.5" />
          </div>
          <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-neon-blue rounded-full neon-glow-blue floating" style={{ animationDelay: "1s" }}>
            <Code className="w-5 h-5 text-background m-1.5" />
          </div>
        </div>

        {/* Name with glitch effect */}
        <h1 
          className="text-6xl md:text-8xl font-space font-bold mb-6 glitch-text gradient-text"
          data-text="Mark Carevin Daluson"
        >
          Mark Carevin Daluson
        </h1>

        {/* Animated tagline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-mono">
          {text}
          <span className="animate-pulse text-neon-pink">|</span>
        </p>

        {/* Social links */}
        <div className="flex justify-center gap-4 mb-12">
          <Button variant="outline" size="icon" className="neon-glow hover:neon-glow-blue group">
            <Github className="w-5 h-5 group-hover:text-neon-blue transition-colors" />
          </Button>
          <Button variant="outline" size="icon" className="neon-glow hover:neon-glow-green group">
            <Linkedin className="w-5 h-5 group-hover:text-neon-green transition-colors" />
          </Button>
          <Button variant="outline" size="icon" className="neon-glow hover:neon-glow-purple group">
            <Mail className="w-5 h-5 group-hover:text-neon-purple transition-colors" />
          </Button>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button className="gradient-border p-0 bg-transparent">
            <div className="gradient-border-content px-8 py-3 text-foreground hover:text-background transition-colors">
              View My Work
            </div>
          </Button>
          <Button variant="outline" className="neon-glow hover:bg-primary/10">
            Let's Connect
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center">
          <ArrowDown className="w-6 h-6 text-neon-pink floating animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;