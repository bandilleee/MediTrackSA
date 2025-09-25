"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";

type Testimonial = {
  name: string;
  role: string;
  image: string;
  company: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "I no longer have to waste a day queuing at the clinic, only to find my medication isn't ready. The **SMS alerts** tell me exactly when to go or when my delivery is on the way. It's made my treatment schedule so much easier to manage.",
    name: "Nomusa M.",
    role: "Chronic Patient (HIV)",
    company: "Registered MediTrack SA User",
    image: "https://randomuser.me/api/portraits/women/24.jpg",
  },
  {
    quote:
      "MediTrack SA transformed our clinic floor. We get **real-time low-stock alerts**, and the adherence dashboard flags exactly which patients need a follow-up. This tool has significantly **reduced unnecessary visits** and improved our workflow efficiency.",
    name: "Dr. Lindiwe S.",
    role: "Clinic Manager",
    company: "Public Health Clinic, Gauteng",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    quote:
      "The system gives us the visibility we needed. We can now see aggregated **adherence and stock data** across the region, allowing us to make better decisions for national health policy planning and evaluation. It's an essential tool for effective resource management.",
    name: "Mr. Themba Z.",
    role: "Health Department Director",
    company: "Provincial Dept. of Health",
    image: "https://randomuser.me/api/portraits/men/29.jpg",
  },
  {
    quote:
      "The **AI Chatbot** is a brilliant idea. Patients feel less alone and can get instant answers on medication side effects or adherence tips, even late at night. It's like having a dedicated nurse available 24/7, reducing the burden on our front desk staff.",
    name: "Sister Thandiwe N.",
    role: "Senior Nurse",
    company: "Public Health Clinic, Eastern Cape",
    image: "https://randomuser.me/api/portraits/women/30.jpg",
  },
  {
    quote:
      "As a delivery driver, the **CHW module** is invaluable. I get my route instantly, confirm successful delivery in real-time, and update the system immediately. The patient feedback mechanism also helps us constantly improve our logistical service.",
    name: "Vusi M.",
    role: "CHW Delivery Assistant",
    company: "Community Health Program",
    image: "https://randomuser.me/api/portraits/men/31.jpg",
  },
  {
    quote:
      "The **offline functionality** for notifications is a game-changer for our rural communities. Even when signal drops, patients still get reminders and critical alerts, which is essential for maintaining consistent adherence to treatment.",
    name: "Mahlatsi L.",
    role: "Business Analyst",
    company: "Project Team",
    image: "https://randomuser.me/api/portraits/men/21.jpg",
  },
  {
    quote:
      "The system's ability to **integrate with existing APIs** like RxSolution/SVS has been seamless. This ensures our patient apps and clinic dashboards are synchronized, giving us a single, secure view of medication availability and distribution.",
    name: "Tshegofatso M.",
    role: "Integration Specialist",
    company: "IT Support Services",
    image: "https://randomuser.me/api/portraits/women/26.jpg",
  },
  {
    quote:
      "We now generate daily and weekly reports on adherence trends and potential stock shortages with the click of a button. The **data visualization is excellent**, making it much easier to identify problems and report compliance up the chain of command.",
    name: "Mr. Bheki D.",
    role: "Clinic Operations Head",
    company: "Large Urban Clinic Network",
    image: "https://randomuser.me/api/portraits/men/25.jpg",
  },
  {
    quote:
      "Protecting patient data is non-negotiable. MediTrack SA's commitment to **POPIA compliance** and its use of secure, **role-based access control** gave us the confidence to approve this platform for a full regional deployment.",
    name: "Fatima K.",
    role: "Information Security Director",
    company: "National Dept. of Health",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
  },
];

// Simple Grid Pattern component (since we don't have access to the external one)
const GridPattern = ({ width = 25, height = 25, x = 0, y = 0, strokeDasharray = "3", className = "" }) => (
  <svg
    className={className}
    width="100%"
    height="100%"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern
        id="grid-pattern"
        width={width}
        height={height}
        patternUnits="userSpaceOnUse"
        x={x}
        y={y}
      >
        <path
          d={`M 0 ${height} L ${width} ${height} M ${width} 0 L ${width} ${height}`}
          fill="none"
          strokeDasharray={strokeDasharray}
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid-pattern)" />
  </svg>
);

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-30 bg-gradient-to-b from-gray-900 to-black overflow-hidden"
    >
      {/* Decorative background elements matching reference */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl"
        style={{ y: y1, rotate: rotate1 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl"
        style={{ y: y2, rotate: rotate2 }}
      />
      
      {/* Floating particles */}
      <motion.div
        className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full bg-blue-400/30"
        animate={{
          y: [0, -15, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-purple-400/30"
        animate={{
          y: [0, 20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="container max-w-[1220px] w-full px-6 md:px-10 relative z-10 mx-auto">
        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Header Section */}
          <motion.div className="text-center space-y-4" variants={itemVariants}>
            <div className="space-y-2 md:space-y-1">
              <h2 className="text-white text-3xl md:text-[40px] font-light leading-tight md:leading-[53px]">
                Impact on Health, Real Outcomes
              </h2>
              <motion.div
                className="w-24 h-1 bg-blue-400 mx-auto"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </div>
            <p className="text-gray-300 text-sm md:text-[15px] leading-6 max-w-2xl mx-auto">
              Hear from patients, clinics, and health workers on how MediTrack SA is improving 
              medication adherence and system efficiency in South Africa.
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="relative bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 overflow-hidden hover:border-gray-600/50 transition-all duration-500 group"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      padding: "1px",
                      background: "linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(168, 85, 247, 0.3))",
                      WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                    }}
                  />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Profile Section */}
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      loading="lazy"
                      className="w-12 h-12 rounded-full border-2 border-gray-600"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-medium text-sm truncate">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-400 text-xs">
                        {testimonial.role}
                      </p>
                      <p className="text-gray-500 text-xs truncate">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="relative">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {testimonial.quote.split('**').map((part, i) => 
                        i % 2 === 0 ? part : <span key={i} className="text-blue-400 font-medium">{part}</span>
                      )}
                    </p>
                  </blockquote>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-2 left-2 w-6 h-6 rounded-full bg-purple-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Grid pattern overlay */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <GridPattern
                    width={20}
                    height={20}
                    strokeDasharray="2"
                    className="stroke-blue-400/20 absolute inset-0 h-full w-full"
                  />
                </div>

                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div 
                    className="absolute inset-0 rounded-2xl blur-xl"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1), transparent 70%)`,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative bottom gradient matching the reference style */}
      <div
        className="absolute w-full h-px bottom-0 left-0 z-0"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(59, 130, 246, 0.3) 0%, rgba(59, 130, 246, 0) 100%)",
        }}
      />
    </section>
  );
}