"use client";

import { useState, type FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log("Subscribed with:", email);
      toast({
        title: "Subscription Successful!",
        description: `Thank you for subscribing, ${email}.`,
      });
      setEmail("");
    } else {
       toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="relative bg-primary text-primary-foreground p-8 md:p-16 rounded-lg overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Image 
                src="https://placehold.co/1200x400.png"
                data-ai-hint="blueprint lines"
                alt="Blueprint background"
                fill
                className="object-cover"
            />
          </div>
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated with Kawachi
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Subscribe to our newsletter to get the latest news on our projects, industry insights, and company updates.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:bg-primary-foreground/20"
                required
              />
              <Button type="submit" size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shrink-0">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
