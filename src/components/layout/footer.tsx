import Link from "next/link";
import { Logo } from "@/components/icons/logo";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Facebook } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { icon: Twitter, href: "#" },
    { icon: Facebook, href: "#" },
    { icon: Linkedin, href: "#" },
  ];

  const footerLinks = {
    company: [
      { label: "About Us", href: "#about" },
      { label: "Our Projects", href: "#projects" },
      { label: "Careers", href: "#" },
    ],
    services: [
      { label: "Construction", href: "#services" },
      { label: "Renovation", href: "#services" },
      { label: "Project Management", href: "#services" },
    ],
  };

  return (
    <footer className="bg-secondary text-secondary-foreground" id="contact">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="md:col-span-2 lg:col-span-2">
            <Link href="#home" className="mb-4 inline-block">
              <Logo />
            </Link>
            <p className="max-w-sm text-sm text-muted-foreground">
              Building the future, one project at a time. We are committed to excellence, safety, and sustainability.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4 lg:col-span-1">
             <h3 className="font-bold mb-4">Follow Us</h3>
             <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button key={index} variant="outline" size="icon" asChild>
                  <Link href={social.href}>
                    <social.icon className="h-4 w-4" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Kawachi Infratech. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
