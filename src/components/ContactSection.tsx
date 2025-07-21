import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Music } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission with sound feedback
    toast({
      title: "Message sent! 🎵",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mark.daluson@email.com",
      color: "neon-pink"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+63 XXX XXX XXXX",
      color: "neon-blue"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Philippines",
      color: "neon-green"
    }
  ];

  const socialLinks = [
    { icon: Github, name: "GitHub", url: "#", color: "neon-purple" },
    { icon: Linkedin, name: "LinkedIn", url: "#", color: "neon-blue" },
    { icon: Music, name: "SoundCloud", url: "#", color: "neon-pink" }
  ];

  return (
    <section className="py-20 relative">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 via-transparent to-neon-pink/5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6 gradient-text">
            Let's Create Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to turn ideas into reality? Drop me a message and let's compose something amazing!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-card/50 border-0 neon-glow">
            <CardHeader>
              <CardTitle className="text-2xl font-space text-neon-pink flex items-center gap-3">
                <Send className="w-6 h-6" />
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-medium">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-muted/30 border-neon-purple/30 focus:border-neon-purple focus:ring-neon-purple transition-all"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-muted/30 border-neon-purple/30 focus:border-neon-purple focus:ring-neon-purple transition-all"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="bg-muted/30 border-neon-purple/30 focus:border-neon-purple focus:ring-neon-purple transition-all resize-none"
                    placeholder="Tell me about your project, collaboration idea, or just say hello!"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-neon hover:opacity-90 transition-opacity text-background font-semibold py-3"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="bg-card/50 border-0 neon-glow-blue">
              <CardHeader>
                <CardTitle className="text-2xl font-space text-neon-blue">
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors group">
                    <div className={`w-12 h-12 bg-${info.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <info.icon className="w-6 h-6 text-background" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="text-foreground font-medium">{info.value}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-card/50 border-0 neon-glow-green">
              <CardHeader>
                <CardTitle className="text-2xl font-space text-neon-green">
                  Connect Online
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      className={`neon-glow-${social.color.split('-')[1]} hover:bg-${social.color}/10 transition-all group`}
                    >
                      <social.icon className={`w-5 h-5 group-hover:text-${social.color} transition-colors`} />
                    </Button>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm mt-4">
                  Follow my journey, check out my code, and listen to the soundtracks that inspire my work.
                </p>
              </CardContent>
            </Card>

            {/* Fun Quote */}
            <Card className="bg-gradient-to-br from-card/30 to-card/50 border-neon-purple/30">
              <CardContent className="p-8 text-center">
                <p className="text-lg font-space text-neon-purple mb-2">
                  "Every great app starts with a conversation"
                </p>
                <p className="text-muted-foreground text-sm">
                  Let's start ours today! 🎵
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;