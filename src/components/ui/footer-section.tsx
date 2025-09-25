"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Facebook, Instagram, Linkedin, Moon, Send, Sun, Twitter, Sparkles, HeartHandshake } from "lucide-react"
import { motion, useScroll, useTransform, type Variants } from "framer-motion"

function Footerdemo() {
  const [isDarkMode, setIsDarkMode] = React.useState(true)
  const [isChatOpen, setIsChatOpen] = React.useState(false)
  const footerRef = React.useRef<HTMLElement>(null)

  // Parallax effects matching your AboutUsSection
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -30])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 30])
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 15])

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <footer 
      ref={footerRef}
      className="relative border-t border-gray-700 bg-gradient-to-b from-gray-900 to-black text-white transition-colors duration-300 overflow-hidden"
    >
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-10 left-10 w-48 h-48 rounded-full bg-blue-500/5 blur-3xl"
        style={{ y: y1, rotate: rotate1 }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-purple-500/5 blur-3xl"
        style={{ y: y2 }}
      />
      
      {/* Floating particles */}
      <motion.div
        className="absolute top-1/3 left-1/5 w-3 h-3 rounded-full bg-blue-400/40"
        animate={{
          y: [0, -10, 0],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/5 w-4 h-4 rounded-full bg-purple-400/40"
        animate={{
          y: [0, 15, 0],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="container mx-auto px-4 py-5 md:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="grid gap-12 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="relative" variants={itemVariants}>
            <div className="flex items-center gap-2 mb-4">
              <HeartHandshake className="w-5 h-5 text-blue-400" />
              <h2 className="text-3xl font-light tracking-tight">Stay Informed</h2>
            </div>
            <motion.div
              className="w-16 h-1 bg-blue-400 mb-4"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
            <p className="mb-6 text-gray-300 leading-relaxed">
              Subscribe for healthcare updates, medication alerts, and system announcements.
            </p>
            <div className="relative">
              <Input
                type="email"
                placeholder="Enter your clinic email"
                className="pr-12 bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400 backdrop-blur-sm focus:border-blue-400"
              />
              <Button
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-all hover:scale-105"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </div>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl" />
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="mb-4 text-lg font-medium text-white">Platform</h3>
            <motion.div
              className="w-12 h-0.5 bg-blue-400 mb-4"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            />
            <nav className="space-y-3 text-sm">
              {[
                "Patient Portal",
                "Clinic Dashboard", 
                "CHW Module",
                "Admin Panel",
                "API Documentation"
              ].map((item, index) => (
                <motion.a 
                  key={item}
                  href="#" 
                  className="block transition-colors hover:text-blue-400 text-gray-300 hover:translate-x-1 transition-transform duration-200"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {item}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="mb-4 text-lg font-medium text-white">Contact 10x Developers</h3>
            <motion.div
              className="w-12 h-0.5 bg-blue-400 mb-4"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            />
            <address className="space-y-2 text-sm not-italic text-gray-300">
              <p>Johannesburg, Gauteng</p>
              <p>South Africa</p>
              <p className="hover:text-blue-400 transition-colors">
                Email: contact@10xdevelopers.za
              </p>
              <p className="hover:text-blue-400 transition-colors">
                Support: support@meditracksa.org
              </p>
              <motion.p 
                className="mt-4 text-xs text-gray-400 flex items-center gap-1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <Sparkles className="w-3 h-3 text-blue-400" />
                Geekulcha Annual Hackathon 2025
              </motion.p>
            </address>
          </motion.div>

          <motion.div className="relative" variants={itemVariants}>
            <h3 className="mb-4 text-lg font-medium text-white">Connect With Us</h3>
            <motion.div
              className="w-12 h-0.5 bg-blue-400 mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            />
            <div className="mb-6 flex space-x-4">
              {[
                { icon: Facebook, label: "Facebook", tooltip: "Follow MediTrack SA on Facebook" },
                { icon: Twitter, label: "Twitter", tooltip: "Follow us on Twitter" },
                { icon: Instagram, label: "Instagram", tooltip: "Follow us on Instagram" },
                { icon: Linkedin, label: "LinkedIn", tooltip: "Connect with 10x Developers on LinkedIn" }
              ].map(({ icon: Icon, label, tooltip }, index) => (
                <TooltipProvider key={label}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="rounded-full bg-gray-800/50 border-gray-700 text-gray-300 hover:bg-blue-500/20 hover:border-blue-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
                        >
                          <Icon className="h-4 w-4" />
                          <span className="sr-only">{label}</span>
                        </Button>
                      </motion.div>
                    </TooltipTrigger>
                    <TooltipContent className="bg-gray-800 border-gray-700 text-white">
                      <p>{tooltip}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
            <div className="absolute -right-4 bottom-0 h-16 w-16 rounded-full bg-purple-500/10 blur-xl" />
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-700 pt-8 text-center md:flex-row"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-400">
            © 2025 10x Developers - MediTrack SA. All rights reserved.
          </p>
          <nav className="flex gap-6 text-sm">
            {[
              "Privacy Policy (POPIA Compliant)",
              "Terms of Service", 
              "Data Protection"
            ].map((item, index) => (
              <motion.a 
                key={item}
                href="#" 
                className="transition-colors hover:text-blue-400 text-gray-300"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {item}
              </motion.a>
            ))}
          </nav>
        </motion.div>
      </div>

      {/* Bottom decorative gradient */}
      <div
        className="absolute w-full h-px bottom-0 left-0 z-0"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(59, 130, 246, 0.3) 0%, rgba(59, 130, 246, 0) 100%)",
        }}
      />
    </footer>
  )
}

export { Footerdemo }