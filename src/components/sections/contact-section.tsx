"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, Building } from 'lucide-react';
import { motion } from 'framer-motion';

export function ContactSection() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you shortly.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold uppercase text-primary mb-2">Contact Us</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Get in Touch
          </h3>
          <p className="text-muted-foreground">
            We're here to help and answer any question you might have. We look forward to hearing from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div 
            className="p-8 rounded-lg glassmorphic"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h4 className="text-2xl font-bold mb-6">Contact Information</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full border border-primary/20">
                  <MapPin className="h-6 w-6 text-primary icon-glow" />
                </div>
                <div>
                  <h5 className="font-semibold">Our Office</h5>
                  <p className="text-muted-foreground">123 Innovation Drive, Tech Park, Metropolis, 12345</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full border border-primary/20">
                  <Mail className="h-6 w-6 text-primary icon-glow" />
                </div>
                <div>
                  <h5 className="font-semibold">Email Us</h5>
                  <p className="text-muted-foreground">contact@kawachiinfratech.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full border border-primary/20">
                  <Phone className="h-6 w-6 text-primary icon-glow" />
                </div>
                <div>
                  <h5 className="font-semibold">Call Us</h5>
                  <p className="text-muted-foreground">(123) 456-7890</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="p-8 rounded-lg neumorphic-inset"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input 
                type="text" 
                placeholder="Your Name" 
                required 
                className="bg-background/50 border-white/10 focus:ring-primary focus:border-primary"
              />
              <Input 
                type="email" 
                placeholder="Your Email" 
                required 
                className="bg-background/50 border-white/10 focus:ring-primary focus:border-primary"
              />
              <Input 
                type="text" 
                placeholder="Subject" 
                required 
                className="bg-background/50 border-white/10 focus:ring-primary focus:border-primary"
              />
              <Textarea 
                placeholder="Your Message" 
                rows={5} 
                required 
                className="bg-background/50 border-white/10 focus:ring-primary focus:border-primary"
              />
              <Button type="submit" size="lg" className="w-full btn-gradient rounded-lg shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
