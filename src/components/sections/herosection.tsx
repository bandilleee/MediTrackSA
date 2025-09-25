// herosection.tsx
"use client";

import React, { useRef } from "react";
import { Scene } from "@/components/hero-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Bell,
  Shield,
  Activity,
  MessageSquare,
  HeartHandshake,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const features = [
  {
    icon: Bell,
    title: "Smart Notifications",
    description:
      "Real-time alerts for medication availability and pickup schedules.",
  },
  {
    icon: Shield,
    title: "Secure & Compliant",
    description: "POPIA-compliant data protection with advanced encryption.",
  },
  {
    icon: Activity,
    title: "Adherence Tracking",
    description: "Comprehensive monitoring to improve treatment outcomes.",
  },
  {
    icon: MessageSquare,
    title: "AI-Powered Support",
    description: "Intelligent chatbot for instant guidance and health tips.",
  },
];

const DemoOne = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const featureVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div
      ref={heroRef}
      className="min-h-svh w-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex flex-col items-center justify-center p-8 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating particles */}
      <motion.div
        className="absolute top-1/4 left-1/5 w-4 h-4 rounded-full bg-blue-400/40"
        animate={{ y: [0, -20, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-purple-400/40"
        animate={{ y: [0, 15, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Main content */}
      <motion.div
        className="w-full max-w-6xl space-y-12 relative z-10 mt-15"
        style={{ opacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col items-center text-center space-y-8">
          {/* <motion.div variants={itemVariants}>
            <Badge className="backdrop-blur-sm bg-blue-500/10 border border-blue-400/30 text-blue-400 hover:bg-blue-500/20 px-6 py-3 rounded-full font-medium flex items-center gap-2">
              <HeartHandshake className="w-4 h-4" />
              Transforming Healthcare in South Africa
            </Badge>
          </motion.div> */}

          <motion.div
            className="space-y-6 flex items-center justify-center flex-col"
            variants={itemVariants}
          >
            <h1 className="text-3xl md:text-6xl font-light tracking-tight max-w-4xl leading-tight">
              <span className="text-purple-400">MediTrack</span>{""}
              SA
            </h1>

            <motion.div
              className="w-32 h-1 bg-blue-400"
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ duration: 1.2, delay: 1 }}
            />
            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
              MediTrack SA connects patients, clinics, and community health
              workers to improve chronic disease management through smart
              notifications, delivery tracking, and AI-powered support.
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 items-center pt-4"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="text-sm px-8 py-4 rounded-xl bg-blue-500 text-white border border-blue-400/20 shadow-lg hover:bg-blue-600 transition-all duration-300 font-medium">
                  Start Tracking
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="text-sm px-8 py-4 rounded-xl bg-gray-800/50 text-white border border-gray-700 shadow-lg hover:bg-gray-700/50 backdrop-blur-sm transition-all duration-300 font-medium">
                  Learn More
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="backdrop-blur-sm bg-gray-800/30 border border-gray-700 rounded-xl p-4 md:p-6 h-40 md:h-48 flex flex-col justify-start items-start space-y-2 md:space-y-3 group hover:bg-gray-800/50 transition-all duration-300 hover:border-blue-400/50"
              variants={featureVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              custom={idx}
            >
              <motion.div
                className="text-blue-400 bg-blue-500/10 p-2 rounded-lg group-hover:bg-blue-500/20 transition-colors duration-300"
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
              >
                <feature.icon size={18} className="md:w-5 md:h-5" />
              </motion.div>
              <h3 className="text-sm md:text-base font-medium text-white group-hover:text-blue-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                {feature.description}
              </p>
              <motion.div
                className="w-8 h-0.5 bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ width: 0 }}
                whileHover={{ width: 32 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* 3D Scene in background */}
      <div className="absolute inset-0">
        <Scene />
      </div>

      {/* Bottom gradient overlay */}
      <div
        className="absolute w-full h-32 bottom-0 left-0 z-5"
        style={{
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",
        }}
      />
    </div>
  );
};

export { DemoOne };
