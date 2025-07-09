"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import CustomCursor from "@/components/CustomCursor";
import Layout from "@/components/Layout";
import MagneticButton from "@/components/MagneticButton";
import ScrollReveal, {
  StaggeredReveal,
  StaggerItem,
} from "@/components/ScrollReveal";

// Dynamic imports for performance
const AlienPlanet = dynamic(() => import("@/components/AlienPlanet"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 -z-10 bg-black" />,
});

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(false);
  const [isPDFModalOpen, setIsPDFModalOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent,
        ) || window.innerWidth <= 768,
      );
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "₹500Cr+", label: "Project Value" },
    { number: "3+", label: "Years Experience" },
  ];

  const services = [
    {
      icon: "🏗️",
      title: "Infrastructure Development",
      description:
        "Comprehensive infrastructure projects including roads, bridges, and urban development. We deliver scalable solutions that drive economic growth and connectivity.",
    },
    {
      icon: "🏢",
      title: "Building Construction",
      description:
        "Commercial, residential, and industrial construction with modern building technologies. We ensure quality, safety, and timely delivery on all projects.",
    },
    {
      icon: "💧",
      title: "Water Management",
      description:
        "Advanced water supply systems, sewage treatment, and drainage solutions. Sustainable water infrastructure for growing urban communities.",
    },
    {
      icon: "⚡",
      title: "Electrical Systems",
      description:
        "Complete electrical installations, power distribution, and smart grid solutions. Modern electrical infrastructure supporting digital transformation.",
    },
    {
      icon: "🛣️",
      title: "Transportation Networks",
      description:
        "Highway construction, road maintenance, and transportation infrastructure. Connecting communities with reliable and durable transportation systems.",
    },
    {
      icon: "📋",
      title: "Project Management",
      description:
        "End-to-end project management with advanced planning, execution, and quality control. Ensuring projects are delivered on time, within budget, and to specification.",
    },
  ];

  const capabilities = [
    {
      icon: "🏗️",
      title: "Advanced Construction",
      description:
        "Modern construction techniques with BIM integration, prefabrication, and smart building technologies for enhanced efficiency and quality.",
    },
    {
      icon: "🔧",
      title: "Engineering Excellence",
      description:
        "Comprehensive engineering services including structural, MEP, and civil engineering with state-of-the-art design and analysis capabilities.",
    },
    {
      icon: "📊",
      title: "Digital Project Management",
      description:
        "Integrated project management systems with real-time monitoring, IoT sensors, and data analytics for optimized project execution and delivery.",
    },
  ];

  const ecosystemDivisions = [
    {
      icon: "🏗️",
      title: "Civil Engineering",
      description:
        "Comprehensive civil engineering services including structural design, foundation engineering, and infrastructure development solutions.",
    },
    {
      icon: "⚡",
      title: "MEP Services",
      description:
        "Mechanical, Electrical, and Plumbing systems design and installation with smart building automation and energy-efficient solutions.",
    },
    {
      icon: "📋",
      title: "Project Consulting",
      description:
        "Strategic project consulting, feasibility studies, and engineering advisory services for optimal project planning and execution.",
    },
    {
      icon: "🛠️",
      title: "Maintenance Services",
      description:
        "Comprehensive maintenance and facility management services ensuring long-term asset performance and operational efficiency.",
    },
  ];

  const faqItems = [
    {
      question: "What types of projects does Kawachi Infratech handle?",
      answer:
        "We specialize in comprehensive infrastructure projects including roads, bridges, building construction, water management systems, electrical installations, and transportation networks across public and private sectors.",
    },
    {
      question: "What is Kawachi Infratech's approach to quality and safety?",
      answer:
        "We implement rigorous quality control measures, follow international safety standards, and use advanced project management systems with real-time monitoring to ensure all projects meet the highest standards of excellence.",
    },
    {
      question: "How does Kawachi Infratech ensure timely project delivery?",
      answer:
        "We use digital project management tools, BIM integration, and advanced planning methodologies combined with experienced teams to ensure projects are delivered on time and within budget.",
    },
    {
      question:
        "What makes Kawachi Infratech different from other construction companies?",
      answer:
        "Our commitment to innovation, sustainability, and technology integration sets us apart. We combine traditional engineering excellence with modern digital solutions and smart building technologies for superior project outcomes.",
    },
  ];

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <>
      <CustomCursor isMobile={isMobile} />
      <AlienPlanet isMobile={isMobile} />

      <Layout>
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center relative overflow-hidden"
        >
          <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
            <motion.h1
              className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-kawachi-primary via-kawachi-secondary to-kawachi-accent bg-clip-text text-transparent leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ textShadow: "0 0 30px rgba(0, 255, 255, 0.5)" }}
            >
              Engineering Infrastructure for the Future
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Leading Construction & Infrastructure Development
            </motion.p>

            <motion.p
              className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Kawachi Infratech delivers innovative, scalable, and sustainable
              engineering solutions across India&apos;s public and private
              sectors with cutting-edge technology and expertise.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <MagneticButton href="#projects" variant="primary">
                View Projects
              </MagneticButton>
              <MagneticButton href="#services" variant="secondary">
                Our Services
              </MagneticButton>
            </motion.div>
          </div>

          {/* Floating elements */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 bg-kawachi-primary/20 rounded-full"
                style={{
                  left: `${10 + i * 15}%`,
                  top: `${20 + (i % 3) * 20}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 6 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-kawachi-primary via-kawachi-secondary to-kawachi-accent bg-clip-text text-transparent mb-6">
                  Comprehensive Infrastructure Services
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Delivering world-class construction and engineering solutions
                  across diverse sectors
                </p>
              </div>
            </ScrollReveal>

            <StaggeredReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="bg-kawachi-dark/70 backdrop-blur-intense border border-kawachi-primary/20 rounded-2xl p-8 h-full transition-all duration-300 hover:border-kawachi-primary/40 hover:shadow-glow group"
                    whileHover={{ y: -10 }}
                    data-magnetic
                  >
                    <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-kawachi-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggeredReveal>
          </div>
        </section>

        {/* Stats Section */}
        <section
          id="projects"
          className="py-24 bg-gradient-to-r from-kawachi-dark to-kawachi-darker relative"
        >
          <div className="max-w-7xl mx-auto px-6">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-kawachi-primary to-kawachi-accent bg-clip-text text-transparent mb-6">
                  Our Impact & Achievements
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Delivering excellence across infrastructure projects with
                  measurable results
                </p>
              </div>
            </ScrollReveal>

            <StaggeredReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="text-center p-8 bg-kawachi-primary/5 backdrop-blur-intense border border-kawachi-primary/20 rounded-2xl hover:border-kawachi-primary/40 hover:shadow-glow transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    data-magnetic
                  >
                    <motion.div
                      className="text-4xl md:text-5xl font-black bg-gradient-to-r from-kawachi-primary to-kawachi-accent bg-clip-text text-transparent mb-4"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {stat.number}
                    </motion.div>
                    <p className="text-gray-400 font-medium uppercase tracking-wide text-sm">
                      {stat.label}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggeredReveal>
          </div>
        </section>

        {/* Capabilities Section */}
        <section id="capabilities" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-kawachi-primary via-kawachi-secondary to-kawachi-accent bg-clip-text text-transparent mb-6">
                  Core Engineering Capabilities
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Advanced technical expertise and cutting-edge methodologies
                  for superior project delivery
                </p>
              </div>
            </ScrollReveal>

            <StaggeredReveal className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="bg-kawachi-dark/70 backdrop-blur-intense border border-kawachi-primary/20 rounded-2xl p-10 h-full transition-all duration-300 hover:border-kawachi-primary/40 hover:shadow-epic group"
                    whileHover={{ y: -15, rotateY: 5 }}
                    data-magnetic
                  >
                    <div className="text-5xl mb-8 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                      {capability.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-6 group-hover:text-kawachi-primary transition-colors">
                      {capability.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-lg">
                      {capability.description}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggeredReveal>
          </div>
        </section>

        {/* Company Divisions Section */}
        <section className="py-24 bg-gradient-to-r from-kawachi-darker to-kawachi-dark relative">
          <div className="max-w-7xl mx-auto px-6">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-kawachi-primary to-kawachi-accent bg-clip-text text-transparent mb-6">
                  Company Divisions
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Specialized divisions delivering comprehensive infrastructure
                  solutions across sectors
                </p>
              </div>
            </ScrollReveal>

            <StaggeredReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ecosystemDivisions.map((division, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="bg-kawachi-dark/60 backdrop-blur-intense border border-kawachi-primary/20 rounded-2xl p-6 h-full transition-all duration-300 hover:border-kawachi-primary/40 hover:shadow-glow group"
                    whileHover={{ y: -8, scale: 1.02 }}
                    data-magnetic
                  >
                    <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {division.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-kawachi-primary transition-colors">
                      {division.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {division.description}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggeredReveal>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 relative">
          <div className="max-w-4xl mx-auto px-6">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-kawachi-primary to-kawachi-accent bg-clip-text text-transparent mb-6">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-gray-400">
                  Get answers to common questions about Kawachi Infratech&apos;s
                  services and capabilities
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <motion.div
                    className="bg-kawachi-dark/50 backdrop-blur-intense border border-kawachi-primary/20 rounded-2xl overflow-hidden"
                    whileHover={{ borderColor: "rgba(0, 255, 255, 0.4)" }}
                  >
                    <button
                      className="w-full p-6 text-left flex justify-between items-center hover:bg-kawachi-primary/5 transition-colors"
                      onClick={() =>
                        setOpenFAQ(openFAQ === index ? null : index)
                      }
                      data-magnetic
                    >
                      <span className="text-lg font-semibold text-white pr-8">
                        {item.question}
                      </span>
                      <motion.span
                        className="text-kawachi-primary text-2xl flex-shrink-0"
                        animate={{ rotate: openFAQ === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        ▼
                      </motion.span>
                    </button>
                    <motion.div
                      initial={false}
                      animate={{
                        height: openFAQ === index ? "auto" : 0,
                        opacity: openFAQ === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-gray-400 leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="py-24 bg-gradient-to-r from-kawachi-darker to-kawachi-dark relative"
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            <ScrollReveal>
              <div className="mb-12">
                <motion.img
                  src="Kawachi_logo_design4.jpg"
                  alt="Kawachi Infratech Logo"
                  className="w-24 h-24 mx-auto rounded-2xl mb-8 border-2 border-kawachi-primary/30 shadow-glow"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />

                <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-kawachi-primary to-kawachi-accent bg-clip-text text-transparent mb-6">
                  Kawachi Infratech Private Limited
                </h2>

                <p className="text-2xl text-kawachi-secondary font-medium mb-8">
                  Engineering Infrastructure for the Future
                </p>

                <p className="text-lg text-gray-400 leading-relaxed mb-12 max-w-3xl mx-auto">
                  We are a forward-thinking infrastructure company delivering
                  innovative, scalable, and sustainable engineering solutions
                  across India&apos;s public and private sectors. Since our
                  incorporation in 2021, we have been committed to transforming
                  the infrastructure landscape with cutting-edge technology and
                  engineering excellence.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <MagneticButton
                  onClick={() => setIsPDFModalOpen(true)}
                  variant="primary"
                >
                  Learn More
                </MagneticButton>
                <MagneticButton
                  href="https://adityabhardwaj1234.github.io/KawachiWeb/Kawachi%20Infratech%20private%20limited_Profile1.1.pdf"
                  variant="secondary"
                >
                  Download Profile
                </MagneticButton>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Newsletter Section */}
        <section
          id="contact"
          className="py-24 bg-gradient-to-r from-kawachi-dark to-kawachi-darker relative"
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-kawachi-primary to-kawachi-accent bg-clip-text text-transparent mb-6">
                Stay Connected
              </h2>
              <p className="text-xl text-gray-400 mb-12">
                Subscribe to our newsletter for the latest project updates and
                infrastructure insights
              </p>

              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 bg-kawachi-dark/50 border border-kawachi-primary/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-kawachi-primary focus:shadow-glow transition-all duration-300"
                  required
                />
                <MagneticButton variant="primary" className="px-8">
                  Subscribe
                </MagneticButton>
              </form>
            </ScrollReveal>
          </div>
        </section>
      </Layout>

      {/* PDF Modal */}
      {isPDFModalOpen && (
        <motion.div
          className="fixed inset-0 z-[10000] bg-black/90 backdrop-blur-intense flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsPDFModalOpen(false)}
        >
          <motion.div
            className="bg-kawachi-dark border border-kawachi-primary/20 rounded-2xl w-full max-w-6xl h-[90vh] flex flex-col overflow-hidden shadow-epic"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-kawachi-primary/20">
              <h3 className="text-2xl font-semibold text-white">
                Kawachi Infratech Company Profile
              </h3>
              <button
                onClick={() => setIsPDFModalOpen(false)}
                className="w-10 h-10 rounded-full bg-red-500/20 hover:bg-red-500/30 text-red-400 hover:text-red-300 transition-all duration-300 flex items-center justify-center text-xl"
                data-magnetic
              >
                ×
              </button>
            </div>
            <div className="flex-1">
              <iframe
                src="https://adityabhardwaj1234.github.io/KawachiWeb/Kawachi%20Infratech%20private%20limited_Profile1.1.pdf"
                className="w-full h-full border-none"
                title="Kawachi Infratech Company Profile"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
