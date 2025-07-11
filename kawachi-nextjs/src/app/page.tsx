"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Click ripple effect
  const [ripples, setRipples] = useState<
    Array<{ x: number; y: number; id: number }>
  >([]);

  const createRipple = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const newRipple = { x, y, id: Date.now() };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
    }, 600);
  };

  const handleMenuClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="bg-kawachi-space min-h-screen text-white overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-4 pt-16 bg-pattern-dots"
        onClick={createRipple}
      >
        {/* Ripple Effects */}
        {ripples.map((ripple) => (
          <div
            key={ripple.id}
            className="absolute pointer-events-none animate-ripple"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(0,255,255,0.6) 0%, rgba(255,0,255,0.3) 50%, transparent 70%)",
              transform: "translate(-50%, -50%)",
              zIndex: 10,
            }}
          />
        ))}

        {/* Floating background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-kawachi-primary/20 rounded-full blur-xl animate-float" />
          <div
            className="absolute top-3/4 right-1/4 w-24 h-24 bg-kawachi-accent/20 rounded-full blur-xl animate-float"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute top-1/2 left-3/4 w-16 h-16 bg-kawachi-secondary/20 rounded-full blur-xl animate-float"
            style={{ animationDelay: "4s" }}
          />
          <div
            className="absolute top-1/3 right-1/3 w-20 h-20 bg-kawachi-tertiary/20 rounded-full blur-xl animate-float"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="max-w-4xl mx-auto text-center z-10">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient-enhanced leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Engineering Infrastructure for the Future
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Leading Construction & Infrastructure Development Across India
          </motion.p>

          <motion.p
            className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Kawachi Infratech delivers innovative, scalable, and sustainable
            engineering solutions with cutting-edge technology, BIM integration,
            and proven expertise.
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button
              onClick={() => handleMenuClick("#portfolio")}
              className="px-8 py-4 bg-gradient-to-r from-kawachi-primary to-kawachi-accent rounded-full text-white font-semibold text-lg btn-glow-hover shadow-epic"
            >
              Explore Projects
            </button>
            <button
              onClick={() => handleMenuClick("#services")}
              className="px-8 py-4 border-2 border-kawachi-primary text-kawachi-primary rounded-full font-semibold text-lg hover:bg-kawachi-primary hover:text-white transition-all duration-300 btn-glow-hover"
            >
              Our Services
            </button>
            <button
              onClick={() => handleMenuClick("#contact")}
              className="px-8 py-4 border-2 border-kawachi-secondary text-kawachi-secondary rounded-full font-semibold text-lg hover:bg-kawachi-secondary hover:text-white transition-all duration-300 btn-glow-hover"
            >
              Get Quote
            </button>
          </motion.div>
        </div>
      </section>

      {/* Services Section (Let's Build) */}
      <section
        id="services"
        className="py-32 px-4 bg-gradient-to-b from-kawachi-space to-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-kawachi-primary via-kawachi-secondary to-kawachi-accent bg-clip-text text-transparent">
              Let&apos;s Build Something Amazing Together
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive infrastructure solutions for modern India
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Civil Construction",
                icon: "🏗️",
                description:
                  "Large-scale infrastructure projects including highways, bridges, and urban development.",
              },
              {
                title: "Smart City Solutions",
                icon: "🌆",
                description:
                  "IoT-enabled urban infrastructure with intelligent traffic management and monitoring systems.",
              },
              {
                title: "Metro & Railway Systems",
                icon: "🚇",
                description:
                  "Advanced transit infrastructure with automated systems and passenger flow management.",
              },
              {
                title: "Water Treatment Plants",
                icon: "💧",
                description:
                  "State-of-the-art water purification facilities with environmental monitoring systems.",
              },
              {
                title: "Renewable Energy",
                icon: "⚡",
                description:
                  "Smart grid infrastructure for solar and wind energy integration.",
              },
              {
                title: "Healthcare Infrastructure",
                icon: "🏥",
                description:
                  "Modern healthcare facilities with advanced medical equipment and digital infrastructure.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="group p-8 bg-gradient-to-b from-gray-900/50 to-gray-900/80 backdrop-blur-sm rounded-2xl border border-kawachi-primary/20 hover:border-kawachi-primary/50 transition-all duration-500 hover:scale-105 card-enhanced"
                variants={fadeInUp}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-kawachi-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="py-32 px-4 bg-gradient-to-b from-gray-900 to-kawachi-space"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-kawachi-secondary to-kawachi-accent bg-clip-text text-transparent">
              Our Portfolio
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Showcasing landmark infrastructure projects that demonstrate our
              expertise and commitment to excellence
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Delhi Metro Extension Phase 4",
                category: "New Delhi",
                description:
                  "Underground metro line extension with 15 stations covering 28.9 km of advanced transit infrastructure.",
                budget: "₹2200 Cr",
                duration: "72 months",
                technologies: [
                  "Smart Traffic Systems",
                  "Weather Monitoring",
                  "Advanced BIM",
                ],
                image:
                  "https://images.unsplash.com/photo-1544966503-7e91b11d6e2d?w=800&auto=format&fit=crop&q=60",
              },
              {
                title: "Smart City Gurgaon Infrastructure",
                category: "Gurgaon",
                description:
                  "Comprehensive smart city development including IoT sensors, traffic management, and sustainable urban planning.",
                budget: "₹1800 Cr",
                duration: "48 months",
                technologies: [
                  "IoT Integration",
                  "Smart Lighting",
                  "Traffic Management",
                ],
                image:
                  "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&auto=format&fit=crop&q=60",
              },
              {
                title: "Yamuna Water Treatment Plant",
                category: "Delhi",
                description:
                  "State-of-the-art water treatment facility serving 1.5 million residents with advanced purification technology.",
                budget: "₹950 Cr",
                duration: "36 months",
                technologies: [
                  "Water Purification",
                  "Environmental Monitoring",
                  "Automation",
                ],
                image:
                  "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=60",
              },
              {
                title: "National Highway 48 Expansion",
                category: "Maharashtra",
                description:
                  "6-lane highway expansion with smart traffic management systems.",
                budget: "₹2200 Cr",
                duration: "72 months",
                technologies: [
                  "Smart Traffic Systems",
                  "Weather Monitoring",
                  "Advanced BIM",
                ],
                image:
                  "https://images.unsplash.com/photo-1558618666-4c2c0643b3bb?w=800&auto=format&fit=crop&q=60",
              },
              {
                title: "AIIMS Expansion Project",
                category: "New Delhi",
                description:
                  "Modern healthcare facility with 1500 beds and advanced medical equipment.",
                budget: "₹840 Cr",
                duration: "42 months",
                technologies: [
                  "Green Building",
                  "Advanced HVAC",
                  "Digital Infrastructure",
                ],
                image:
                  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&auto=format&fit=crop&q=60",
              },
              {
                title: "Renewable Energy Grid Integration",
                category: "Rajasthan",
                description:
                  "Smart grid infrastructure for solar and wind energy integration.",
                budget: "₹940 Cr",
                duration: "30 months",
                technologies: [
                  "Smart Grid",
                  "Energy Storage",
                  "Grid Automation",
                ],
                image:
                  "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&auto=format&fit=crop&q=60",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                className="group relative card-enhanced rounded-2xl overflow-hidden"
                variants={fadeInUp}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs px-3 py-1 bg-kawachi-primary/20 text-kawachi-primary rounded-full">
                      📍 {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">
                        Budget
                      </p>
                      <p className="text-kawachi-primary font-bold">
                        {project.budget}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">
                        Duration
                      </p>
                      <p className="text-kawachi-secondary font-bold">
                        {project.duration}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-kawachi-accent/10 text-kawachi-accent rounded border border-kawachi-accent/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-32 px-4 bg-gradient-to-b from-kawachi-space to-gray-900"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-kawachi-primary to-kawachi-secondary rounded-2xl flex items-center justify-center">
              <svg
                className="w-10 h-10 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-kawachi-primary via-kawachi-secondary to-kawachi-accent bg-clip-text text-transparent">
              Kawachi Infratech Private Limited
            </h2>
            <p className="text-xl text-kawachi-secondary mb-8">
              Engineering Infrastructure for the Future
            </p>
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              We are a forward-thinking infrastructure company delivering
              innovative, scalable, and sustainable engineering solutions across
              India&apos;s public and private sectors. Since our incorporation
              in 2021, we have been committed to transforming the infrastructure
              landscape with cutting-edge technology and engineering excellence.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row gap-6 justify-center mt-12"
            {...fadeInUp}
          >
            <button
              onClick={() => handleMenuClick("#about")}
              className="px-8 py-3 bg-gradient-to-r from-kawachi-primary to-kawachi-secondary rounded-full text-white font-medium hover:scale-105 transition-transform duration-300"
            >
              Company Profile
            </button>
            <button
              onClick={() => handleMenuClick("#contact")}
              className="px-8 py-3 border-2 border-kawachi-primary text-kawachi-primary rounded-full font-medium hover:bg-kawachi-primary hover:text-white transition-all duration-300"
            >
              Get In Touch
            </button>
          </motion.div>
        </div>
      </section>

      {/* Partners & Sponsors Section */}
      <section
        id="sponsors"
        className="py-20 px-4 bg-gradient-to-b from-gray-900 to-kawachi-space"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-kawachi-secondary to-kawachi-accent bg-clip-text text-transparent">
              Our Partners & Sponsors
            </h2>
            <p className="text-gray-400 text-lg">
              Trusted partnerships with government agencies and leading
              organizations
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Ministry of Road Transport & Highways",
                category: "Government Partner",
                description:
                  "Strategic partnership for highway infrastructure projects",
              },
              {
                title: "Indian Railways",
                category: "Infrastructure Partner",
                description:
                  "Collaboration on railway infrastructure development projects",
              },
              {
                title: "Delhi Development Authority",
                category: "Urban Development",
                description: "Urban planning and development projects",
              },
              {
                title: "Central Public Works Department",
                category: "Public Works",
                description: "Government building and infrastructure projects",
              },
            ].map((partner, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gradient-to-b from-gray-900/50 to-gray-900/80 backdrop-blur-sm rounded-2xl border border-kawachi-primary/20 hover:border-kawachi-primary/50 transition-all duration-300"
                variants={fadeInUp}
              >
                <div className="mb-4">
                  <span className="text-xs px-3 py-1 bg-kawachi-secondary/20 text-kawachi-secondary rounded-full">
                    {partner.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {partner.title}
                </h3>
                <p className="text-gray-400 text-sm">{partner.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="py-20 px-4 bg-gradient-to-b from-kawachi-space to-gray-900"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-kawachi-primary to-kawachi-secondary bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 text-lg">
              Get answers to common questions about our services and
              capabilities
            </p>
          </motion.div>

          <motion.div
            className="space-y-4"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                question:
                  "What types of projects does Kawachi Infratech handle?",
                answer:
                  "We specialize in large-scale infrastructure projects including metro systems, highways, smart city development, water treatment plants, healthcare facilities, and renewable energy infrastructure across India.",
              },
              {
                question:
                  "What is Kawachi Infratech&apos;s approach to quality and safety?",
                answer:
                  "We implement rigorous quality control measures, follow international safety standards, and use advanced project management systems with real-time monitoring to ensure all projects meet the highest standards of excellence.",
              },
              {
                question:
                  "How does Kawachi Infratech ensure timely project delivery?",
                answer:
                  "We use advanced project management methodologies, BIM technology, and maintain strong partnerships with reliable suppliers and contractors to ensure projects are delivered on time and within budget.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="border border-kawachi-primary/20 rounded-xl overflow-hidden bg-gray-900/50 backdrop-blur-sm"
                variants={fadeInUp}
              >
                <button
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-kawachi-primary/5 transition-colors duration-300"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-medium text-white">{faq.question}</span>
                  <motion.svg
                    className="w-5 h-5 text-kawachi-primary"
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 10l5 5 5-5z" />
                  </motion.svg>
                </button>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: openFaq === index ? "auto" : 0,
                    opacity: openFaq === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-gray-400">{faq.answer}</div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* News Section */}
      <section
        id="news"
        className="py-20 px-4 bg-gradient-to-b from-gray-900 to-kawachi-space"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-kawachi-secondary to-kawachi-accent bg-clip-text text-transparent">
              Latest News & Updates
            </h2>
            <p className="text-gray-400 text-lg">
              Stay updated with our latest projects, achievements, and industry
              developments
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title:
                  "Kawachi Infratech Wins ₹1500 Cr Smart City Project in Pune",
                category: "Awards",
                excerpt:
                  "Our company has been selected as the primary contractor for Pune's comprehensive smart city infrastructure development project, the largest single project to date.",
                tags: ["BIM", "Technology", "Innovation"],
                image:
                  "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&auto=format&fit=crop&q=60",
              },
              {
                title:
                  "Completion of Delhi Metro Phase 4 Extension Ahead of Schedule",
                category: "Projects",
                excerpt:
                  "The Delhi Metro Phase 4 extension is 6 months ahead of schedule, demonstrating our commitment to timely delivery and quality execution.",
                tags: ["Metro", "Infrastructure", "Delhi"],
                image:
                  "https://images.unsplash.com/photo-1544966503-7e91b11d6e2d?w=800&auto=format&fit=crop&q=60",
              },
              {
                title:
                  "Kawachi Infratech Adopts Advanced BIM Technology for All Projects",
                category: "Technology",
                excerpt:
                  "Implementation of Building Information Modeling across all projects enhances precision, reduces costs, and improves project coordination.",
                tags: ["BIM", "Technology", "Innovation"],
                image:
                  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=60",
              },
            ].map((article, index) => (
              <motion.div
                key={index}
                className="group bg-gradient-to-b from-gray-900/50 to-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-kawachi-primary/20 hover:border-kawachi-primary/50 transition-all duration-500 hover:scale-105"
                variants={fadeInUp}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs px-3 py-1 bg-kawachi-accent/20 text-kawachi-accent rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-kawachi-primary transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-kawachi-primary/10 text-kawachi-primary rounded border border-kawachi-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-kawachi-space to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-kawachi-primary to-kawachi-secondary bg-clip-text text-transparent">
              Stay Updated
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Subscribe to our newsletter for the latest project updates,
              industry insights, and company news
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 bg-gray-900/50 border border-kawachi-primary/30 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-kawachi-primary transition-colors duration-300"
              />
              <button
                onClick={() => {
                  if (email) {
                    alert("Thank you for subscribing!");
                    setEmail("");
                  }
                }}
                className="px-8 py-3 bg-gradient-to-r from-kawachi-primary to-kawachi-secondary rounded-full text-white font-medium hover:scale-105 transition-transform duration-300"
              >
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 bg-gradient-to-b from-gray-900 to-kawachi-space"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-kawachi-primary via-kawachi-secondary to-kawachi-accent bg-clip-text text-transparent">
              Let&apos;s Build Something Amazing Together
            </h2>
            <p className="text-gray-400 text-lg">
              Ready to start your next infrastructure project? Get in touch with
              our team.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div {...fadeInUp}>
              <h3 className="text-2xl font-bold text-white mb-8">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-1 text-kawachi-primary">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Head Office
                    </h4>
                    <p className="text-gray-400">New Delhi, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-1 text-kawachi-primary">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p className="text-gray-400">info@kawachiinfratech.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp}>
              <h3 className="text-2xl font-bold text-white mb-8">
                Send us a Message
              </h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (formData.name && formData.email && formData.message) {
                    alert(
                      "Thank you for your message! We will get back to you soon.",
                    );
                    setFormData({ name: "", email: "", message: "" });
                  }
                }}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="px-4 py-3 bg-gray-900/50 border border-kawachi-primary/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-kawachi-primary transition-colors duration-300"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="px-4 py-3 bg-gray-900/50 border border-kawachi-primary/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-kawachi-primary transition-colors duration-300"
                    required
                  />
                </div>
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-900/50 border border-kawachi-primary/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-kawachi-primary transition-colors duration-300 resize-none"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-kawachi-primary to-kawachi-accent rounded-lg text-white font-semibold hover:scale-105 transition-transform duration-300"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-kawachi-primary/20 bg-kawachi-darker">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-kawachi-primary via-kawachi-secondary to-kawachi-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <span className="text-kawachi-primary font-bold text-xl">
                Kawachi Infratech Private Limited
              </span>
            </div>

            <div className="flex items-center space-x-6">
              <a
                href="https://wa.me/your-whatsapp-number"
                target="_blank"
                rel="noopener noreferrer"
                className="text-kawachi-primary hover:text-kawachi-secondary transition-colors duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.905 3.686z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/kawachi-infratech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-kawachi-primary hover:text-kawachi-secondary transition-colors duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/kawachi-infratech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-kawachi-primary hover:text-kawachi-secondary transition-colors duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="text-center mt-8 pt-8 border-t border-kawachi-primary/20">
            <p className="text-gray-400 mb-2">
              Engineering Infrastructure for the Future
            </p>
            <p className="text-gray-500 text-sm">
              © 2025 Kawachi Infratech Pvt. Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
