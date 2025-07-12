
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Mock data - in a real app, this would come from a CMS or database
const projects: { [key: string]: any } = {
    'skylark-bridge': { 
        title: 'Skylark Bridge', 
        category: 'Infrastructure',
        image: 'https://images.unsplash.com/photo-1429041966141-44d228a42775?q=80&w=1200&h=600&fit=crop',
        description: 'The Skylark Bridge is a state-of-the-art suspension bridge connecting Metropolis to the northern districts. A marvel of modern engineering, it incorporates advanced seismic-resistant technologies and a smart traffic management system to ensure smooth flow and safety for thousands of commuters daily.',
        details: [
            "1.5km total length with a main span of 800m.",
            "Advanced seismic dampers and wind-tunnel tested aerodynamics.",
            "Integrated smart LED lighting system for energy efficiency.",
            "Multi-modal design accommodating vehicles, cyclists, and pedestrians."
        ]
    },
    'apex-tower': { 
        title: 'Apex Tower', 
        category: 'Commercial',
        image: 'https://images.unsplash.com/photo-1582211516142-a0a149a46327?q=80&w=1200&h=600&fit=crop',
        description: 'Apex Tower stands as the tallest structure in Gotham City, a beacon of commercial prowess. This skyscraper features a unique, eco-friendly design with a double-skin facade, rainwater harvesting, and integrated solar panels, setting a new standard for sustainable high-rise buildings.',
        details: [
            "108 floors of premium office and retail space.",
            "LEED Platinum certified for sustainability.",
            "Sky garden and observation deck on the 100th floor.",
            "High-speed, energy-regenerative elevators."
        ]
    },
     'coastal-highway-expansion': { 
        title: 'Coastal Highway Expansion', 
        category: 'Transportation',
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&h=600&fit=crop',
        description: 'The Coastal Highway Expansion project involved widening a critical 50km stretch of roadway to alleviate congestion and improve safety. This complex project included the construction of several new overpasses, retaining walls, and advanced drainage systems, all completed ahead of schedule.',
        details: [
            "Expansion from 4 to 8 lanes over a 50km stretch.",
            "Construction of 5 new interchanges and overpasses.",
            "Implementation of noise-reducing asphalt and barriers.",
            "Enhanced safety features including modern guardrails and lighting."
        ]
    },
    'olympus-stadium': { 
        title: 'Olympus Stadium', 
        category: 'Recreational',
        image: 'https://images.unsplash.com/photo-1596249313364-24538b726c59?q=80&w=1200&h=600&fit=crop',
        description: 'Olympus Stadium is a multi-purpose recreational facility designed to host international sporting events and concerts. It features a retractable roof, a seating capacity of 80,000, and cutting-edge broadcasting infrastructure, making it a world-class venue.',
        details: [
            "80,000 seating capacity with expandable options.",
            "Fully retractable roof that can open or close in 15 minutes.",
            "State-of-the-art turf and drainage system.",
            "Eco-friendly operations with extensive recycling programs."
        ]
    },
    'pioneering-the-future': {
        title: 'Pioneering the Future of Construction',
        category: 'Our Vision',
        image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&h=600&fit=crop',
        description: 'For over two decades, Kawachi Infratech has been a leader in the civil engineering and construction industry. Our mission is to deliver high-quality, innovative, and sustainable infrastructure projects that stand the test of time and contribute to a better future. We blend traditional engineering principles with cutting-edge technology to solve modern challenges.',
        details: [
            "Commitment to Quality: Uncompromising standards in every project.",
            "Sustainable Practices: Building a greener future with eco-friendly materials.",
            "Client-Centric Approach: Collaborative partnerships for shared success.",
            "Innovation at Core: Leveraging technology for efficient and robust solutions."
        ]
    }
};


export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug] || {
    title: 'Project Not Found',
    category: 'Error',
    image: 'https://placehold.co/1200x600.png',
    description: "The project you are looking for does not exist or has been moved. Please go back to the homepage and browse our portfolio.",
    details: []
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-24">
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="mb-12">
                     <Button asChild variant="outline">
                        <Link href="/#projects" className="inline-flex items-center gap-2">
                            <ArrowLeft className="h-4 w-4" />
                            Back to Portfolio
                        </Link>
                    </Button>
                </div>
                
                <div className="text-center mb-12">
                    <p className="text-primary font-bold uppercase mb-2">{project.category}</p>
                    <h1 className="text-4xl md:text-6xl font-bold text-gradient-hero">{project.title}</h1>
                </div>

                <div className="mb-12 rounded-lg overflow-hidden shadow-2xl shadow-primary/20">
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={1200}
                        height={600}
                        className="w-full object-cover"
                    />
                </div>

                <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-12">
                    <div className="md:col-span-2">
                        <h2 className="text-3xl font-bold mb-4">Project Overview</h2>
                        <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                    </div>
                    <div>
                         <h3 className="text-2xl font-bold mb-4">Key Features</h3>
                         <ul className="space-y-4">
                            {project.details.map((point: string, index: number) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle className="h-6 w-6 text-accent icon-glow mt-1 shrink-0" />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
