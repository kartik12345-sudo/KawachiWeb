
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
        description: "The Skylark Bridge is a monumental feat of modern engineering, a state-of-the-art suspension bridge designed to serve as a vital artery connecting the bustling heart of Metropolis to the rapidly growing northern districts. Spanning over 1.5 kilometers, this iconic structure is more than just a crossing; it is a symbol of progress and connectivity. Kawachi Infratech was tasked with overcoming significant geographical and environmental challenges, including deep-water pylons and high-wind corridors. Our team employed cutting-edge construction techniques and materials to ensure maximum durability and safety. The bridge incorporates an advanced seismic-resistant system, capable of withstanding major tectonic events, safeguarding the thousands of commuters who rely on it daily. Aesthetically, its sleek, aerodynamic design has made it a new landmark on the city's skyline, while its integrated smart traffic management system uses real-time data to optimize traffic flow and prevent congestion, making every journey smoother and more efficient. The project also focused on sustainability, incorporating energy-efficient LED lighting and materials with a lower carbon footprint. The pedestrian and cycling lanes are designed to promote green transportation, offering breathtaking views and encouraging a healthier lifestyle for the city's residents. Our work on the Skylark Bridge demonstrates a holistic approach to infrastructure, where functionality, safety, aesthetics, and environmental responsibility converge to create a lasting legacy for the community.",
        details: [
            "1.5km total length with a main span of 800m.",
            "Advanced seismic dampers and wind-tunnel tested aerodynamics.",
            "Integrated smart LED lighting system for energy efficiency and aesthetic appeal.",
            "Multi-modal design accommodating vehicles, cyclists, and pedestrians with dedicated lanes.",
            "Construction completed 3 months ahead of schedule and under budget.",
            "Eco-conscious engineering with minimal impact on marine ecosystems."
        ]
    },
    'apex-tower': { 
        title: 'Apex Tower', 
        category: 'Commercial',
        image: 'https://images.unsplash.com/photo-1582211516142-a0a149a46327?q=80&w=1200&h=600&fit=crop',
        description: "Dominating the Gotham City skyline, Apex Tower stands as a testament to commercial ambition and sustainable innovation. As the city's tallest structure, it redefines the modern workplace, offering over a million square feet of premium office and retail space. Kawachi Infratech spearheaded this ambitious project, delivering a skyscraper that is both a visual masterpiece and a benchmark for green building. The tower features a unique double-skin facade, which creates a thermal buffer to reduce heating and cooling costs, alongside a sophisticated rainwater harvesting system and roof-integrated solar panels. This commitment to sustainability has earned Apex Tower the prestigious LEED Platinum certification. The interior spaces are designed for collaboration and well-being, featuring a sky garden on the 100th floor that offers breathtaking panoramic views and a tranquil escape from the urban hustle. Our use of high-speed, energy-regenerative elevators further minimizes the building's carbon footprint, setting a new global standard for what a commercial high-rise can and should be. The structural design utilized advanced composite materials to create vast, column-free floor plates, maximizing natural light and offering unparalleled flexibility for tenants. Every detail, from the air filtration systems to the automated building management controls, was meticulously planned to create a healthy, productive, and inspiring environment for thousands of professionals.",
        details: [
            "108 floors of premium office and retail space.",
            "LEED Platinum certified for exceptional energy and environmental design.",
            "Public sky garden and observation deck on the 100th floor.",
            "High-speed, energy-regenerative elevators reducing energy consumption by up to 30%.",
            "Advanced structural engineering to maximize floor space and natural light.",
            "Integrated building management system for optimized operations."
        ]
    },
     'coastal-highway-expansion': { 
        title: 'Coastal Highway Expansion', 
        category: 'Transportation',
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&h=600&fit=crop',
        description: "The Coastal Highway Expansion was a critical infrastructure project aimed at alleviating chronic traffic congestion and enhancing safety along a vital 50km coastal corridor. This complex undertaking, managed by Kawachi Infratech, involved widening the highway from four to eight lanes, requiring meticulous planning and execution to minimize disruption to the daily flow of traffic. The project scope included the construction of five new interchanges and multiple overpasses, the erection of extensive retaining walls, and the implementation of an advanced drainage system to mitigate the risks of flooding during storm seasons. We successfully navigated challenging terrain and sensitive coastal ecosystems, employing innovative solutions like noise-reducing asphalt and aesthetically designed sound barriers to protect adjacent communities. Completed significantly ahead of schedule, the expansion has drastically reduced commute times, improved road safety, and bolstered economic activity in the region, demonstrating our capacity to deliver large-scale transportation projects efficiently and effectively. A key challenge was the integration of smart traffic systems, which use sensors and AI to manage traffic flow in real-time, reducing bottlenecks and improving overall network efficiency. We also constructed wildlife corridors to ensure minimal impact on local fauna, a testament to our commitment to environmentally responsible development.",
        details: [
            "Expansion from 4 to 8 lanes over a demanding 50km stretch.",
            "Construction of 5 new, modern interchanges and multiple overpasses.",
            "Implementation of noise-reducing asphalt and visually integrated sound barriers.",
            "Enhanced safety features including modern guardrails, high-visibility lighting, and emergency pull-off bays.",
            "Advanced ecological management to protect coastal habitats during construction.",
            "Project delivered 15% under budget, showcasing exceptional project management."
        ]
    },
    'olympus-stadium': { 
        title: 'Olympus Stadium', 
        category: 'Recreational',
        image: 'https://images.unsplash.com/photo-1596249313364-24538b726c59?q=80&w=1200&h=600&fit=crop',
        description: "Olympus Stadium is a world-class, multi-purpose venue engineered to host the most prestigious international sporting events and large-scale concerts. Kawachi Infratech was the lead contractor, turning an ambitious architectural vision into a functional and awe-inspiring reality. The stadium's most impressive feature is its fully retractable roof, which can open or close in just 15 minutes, ensuring events can proceed in any weather condition. With a seating capacity of 80,000, every seat has been designed to offer optimal sightlines. The facility boasts cutting-edge broadcasting infrastructure, a state-of-the-art turf management and drainage system, and unparalleled hospitality suites. Sustainability was a core principle in its construction, with extensive recycling programs, water conservation systems, and the use of locally sourced materials. Olympus Stadium is not just a building; it's a destination that provides an unforgettable experience for athletes, performers, and fans alike, setting a new benchmark for recreational facilities globally. The structure's iconic latticework facade is not just for aesthetics; it provides natural ventilation and incorporates a kinetic lighting system that can display dynamic visuals, making the stadium itself part of the spectacle. Inside, the fan experience is enhanced with high-speed connectivity and an integrated app for navigation, ordering, and replays.",
        details: [
            "80,000 seating capacity with expandable options for major events.",
            "Fully retractable roof that can open or close in 15 minutes.",
            "State-of-the-art, FIFA and Olympic-certified turf and drainage system.",
            "Eco-friendly operations with extensive recycling and water-saving programs.",
            "4K-ready broadcasting infrastructure and facility-wide high-speed Wi-Fi.",
            "Over 100 luxury suites and premium hospitality areas."
        ]
    },
    'pioneering-the-future': {
        title: 'Pioneering the Future of Construction',
        category: 'Our Vision',
        image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&h=600&fit=crop',
        description: "For over two decades, Kawachi Infratech has been at the forefront of the civil engineering and construction industry, driven by a relentless pursuit of excellence. Our foundational mission is to deliver high-quality, innovative, and sustainable infrastructure projects that not only meet the demands of the present but also stand the test of time and contribute to a better, more connected future. We believe that the most profound solutions are born from a blend of tradition and technology. By integrating time-honored engineering principles with cutting-edge advancements like AI-driven project management, drone-based surveying, and sustainable materials science, we are equipped to solve the most complex challenges of the modern world. Our philosophy is built on a tripod of values: unwavering quality, deep-rooted commitment to sustainability, and a truly client-centric approach that fosters collaborative partnerships and shared success. We don't just build structures; we build legacies of progress and innovation for generations to come. This forward-looking perspective drives us to invest in research and development, exploring next-generation materials and autonomous construction technologies. Our goal is not just to be a leader in today's market but to be the architect of tomorrow's infrastructure, creating smart, resilient, and human-centric environments that will serve society for centuries.",
        details: [
            "Commitment to Quality: Uncompromising standards and meticulous attention to detail in every project phase.",
            "Sustainable Practices: Building a greener future by prioritizing eco-friendly materials and carbon-neutral processes.",
            "Client-Centric Approach: Fostering collaborative partnerships to ensure shared success and complete client satisfaction.",
            "Innovation at Core: Leveraging technology like BIM, AI, and robotics for efficient, safe, and robust solutions.",
            "Safety First Culture: Implementing rigorous safety protocols to protect our workforce and the public.",
            "Proven Track Record: A portfolio of landmark projects delivered on time and on budget."
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
