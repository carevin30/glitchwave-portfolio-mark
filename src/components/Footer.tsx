import { Heart, Code, Music } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Synthwave skyline animation */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neon-purple/20 via-neon-pink/10 to-transparent">
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-r from-neon-blue/30 via-neon-purple/30 to-neon-pink/30 animate-pulse"></div>
        
        {/* Animated skyline silhouette */}
        <div className="absolute bottom-0 left-0 right-0 h-12 opacity-60">
          <div className="flex items-end justify-center h-full">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="bg-gradient-to-t from-neon-purple to-neon-pink mx-1 floating"
                style={{
                  height: `${Math.random() * 30 + 20}px`,
                  width: `${Math.random() * 8 + 4}px`,
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(320,100%,65%,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(320,100%,65%,0.05)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main footer content */}
        <div className="text-center space-y-8">
          {/* Logo/Name */}
          <div className="space-y-4">
            <h3 className="text-2xl font-space font-bold gradient-text">
              Mark Carevin Daluson
            </h3>
            <p className="text-muted-foreground font-mono">
              where code becomes art
            </p>
          </div>

          {/* Decorative elements */}
          <div className="flex justify-center items-center gap-6">
            <div className="w-8 h-8 bg-neon-blue rounded-full neon-glow-blue flex items-center justify-center floating">
              <Code className="w-4 h-4 text-background" />
            </div>
            <div className="w-2 h-2 bg-neon-pink rounded-full neon-glow"></div>
            <div className="w-8 h-8 bg-neon-green rounded-full neon-glow-green flex items-center justify-center floating" style={{ animationDelay: "1s" }}>
              <Music className="w-4 h-4 text-background" />
            </div>
          </div>

          {/* Copyright with heart */}
          <div className="pt-8 border-t border-neon-purple/20">
            <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
              Made with 
              <Heart className="w-4 h-4 text-neon-pink animate-pulse" />
              and beats by Mark Carevin Daluson © 2024
            </p>
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-neon-cyan rounded-full floating opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${4 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;