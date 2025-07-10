"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Navigation from "@/components/Navigation";

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
        className="relative min-h-screen flex items-center justify-center px-4 pt-16"
      >
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
              onClick={() => handleMenuClick("#contact")}
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

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4">
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
              {
                title: "Mumbai Coastal Road Project",
                category: "Mumbai",
                description:
                  "8-lane coastal highway with tunnels and bridges to reduce traffic congestion.",
                budget: "₹12,700 Cr",
                duration: "84 months",
                technologies: [
                  "Tunnel Engineering",
                  "Marine Construction",
                  "Environmental Protection",
                ],
                image:
                  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&auto=format&fit=crop&q=60",
              },
              {
                title: "Bangalore Airport Metro Extension",
                category: "Bangalore",
                description:
                  "High-speed metro connection to Kempegowda International Airport.",
                budget: "₹5,950 Cr",
                duration: "54 months",
                technologies: [
                  "Airport Rail Link",
                  "Automated Systems",
                  "Passenger Flow Management",
                ],
                image:
                  "https://images.unsplash.com/photo-1544966503-7e91b11d6e2d?w=800&auto=format&fit=crop&q=60",
              },
              {
                title: "Pune IT City Development",
                category: "Pune",
                description:
                  "Integrated IT hub with residential, commercial and tech infrastructure.",
                budget: "₹3,200 Cr",
                duration: "60 months",
                technologies: [
                  "Smart Building",
                  "Fiber Optic Network",
                  "Sustainable Design",
                ],
                image:
                  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                className="group relative bg-gradient-to-b from-gray-900/50 to-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-kawachi-primary/20 hover:border-kawachi-primary/50 transition-all duration-500 hover:scale-105"
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
                      {project.category}
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
        className="py-20 px-4 bg-gradient-to-b from-kawachi-space to-gray-900"
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
              India's public and private sectors. Since our incorporation in
              2021, we have been committed to transforming the infrastructure
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
      <section id="sponsors" className="py-20 px-4">
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
        className="py-20 px-4 bg-gradient-to-b from-gray-900 to-kawachi-space"
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
                  "What is Kawachi Infratech's approach to quality and safety?",
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
      <section id="news" className="py-20 px-4">
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
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 bg-gray-900/50 border border-kawachi-primary/30 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-kawachi-primary transition-colors duration-300"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-kawachi-primary to-kawachi-secondary rounded-full text-white font-medium hover:scale-105 transition-transform duration-300">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-kawachi-primary via-kawachi-secondary to-kawachi-accent bg-clip-text text-transparent">
              Let's Build Something Amazing Together
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
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="px-4 py-3 bg-gray-900/50 border border-kawachi-primary/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-kawachi-primary transition-colors duration-300"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="px-4 py-3 bg-gray-900/50 border border-kawachi-primary/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-kawachi-primary transition-colors duration-300"
                  />
                </div>
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-kawachi-primary/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-kawachi-primary transition-colors duration-300 resize-none"
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
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-kawachi-primary via-kawachi-secondary to-kawachi-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">K</span>
            </div>
            <span className="text-kawachi-primary font-bold text-xl">
              Kawachi Infratech
            </span>
          </div>
          <p className="text-gray-400 mb-4">
            Engineering Infrastructure for the Future
          </p>
          <p className="text-gray-500 text-sm">
            © 2024 Kawachi Infratech Private Limited. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
