'use client';
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface SectionWithMockupProps {
    title: string | React.ReactNode;
    description: string | React.ReactNode;
    primaryImageSrc: string;
    secondaryImageSrc: string;
    reverseLayout?: boolean;
}

const SectionWithMockup: React.FC<SectionWithMockupProps> = ({
    title,
    description,
    primaryImageSrc,
    secondaryImageSrc,
    reverseLayout = false,
}) => {
    const sectionRef = useRef<HTMLDivElement>(null);

    // Parallax effects matching your AboutUsSection
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
    const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20]);
    const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            }
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.6, ease: "easeOut" } 
        },
    };

    const layoutClasses = reverseLayout
        ? "md:grid-cols-2 md:grid-flow-col-dense"
        : "md:grid-cols-2";

    const textOrderClass = reverseLayout ? "md:col-start-2" : "";
    const imageOrderClass = reverseLayout ? "md:col-start-1" : "";

    return (
        <section 
            ref={sectionRef}
            className="relative py-24 md:py-30 bg-gradient-to-b from-gray-900 to-black overflow-hidden"
        >
            {/* Decorative background elements matching AboutUsSection */}
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
                    className={`grid grid-cols-1 gap-16 md:gap-8 w-full items-center ${layoutClasses}`}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* Text Content */}
                    <motion.div
                        className={`flex flex-col items-start gap-4 mt-10 md:mt-0 max-w-[546px] mx-auto md:mx-0 ${textOrderClass}`}
                        variants={itemVariants}
                    >
                        <div className="space-y-2 md:space-y-1">
                            <h2 className="text-white text-3xl md:text-[40px] font-light leading-tight md:leading-[53px]">
                                {title}
                            </h2>
                            <motion.div
                                className="w-24 h-1 bg-blue-400"
                                initial={{ width: 0 }}
                                whileInView={{ width: 96 }}
                                transition={{ duration: 1, delay: 0.5 }}
                                viewport={{ once: true }}
                            />
                        </div>
                        <p className="text-gray-300 text-sm md:text-[15px] leading-6">
                            {description}
                        </p>
                    </motion.div>

                    {/* App mockup/Image Content */}
                    <motion.div
                        className={`relative mt-10 md:mt-0 mx-auto ${imageOrderClass} w-full max-w-[300px] md:max-w-[471px]`}
                        variants={itemVariants}
                    >
                        {/* Decorative Background Element */}
                        <motion.div
                            className="absolute w-[300px] h-[317px] md:w-[472px] md:h-[500px] bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-[32px] z-0"
                            style={{
                                top: reverseLayout ? 'auto' : '10%',
                                bottom: reverseLayout ? '10%' : 'auto',
                                left: reverseLayout ? 'auto' : '-20%',
                                right: reverseLayout ? '-20%' : 'auto',
                                transform: reverseLayout ? 'translate(0, 0)' : 'translateY(10%)',
                            }}
                            initial={{ y: reverseLayout ? 0 : 0, opacity: 0 }}
                            whileInView={{ y: reverseLayout ? -20 : -30, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <div
                                className="relative w-full h-full bg-cover bg-center rounded-[32px] opacity-60"
                                style={{
                                    backgroundImage: `url(${secondaryImageSrc})`,
                                }}
                            />
                        </motion.div>

                        {/* Main Mockup Card */}
                        <motion.div
                            className="relative w-full h-[405px] md:h-[637px] bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-[32px] z-10 overflow-hidden shadow-xl"
                            initial={{ y: reverseLayout ? 0 : 0, scale: 0.95, opacity: 0 }}
                            whileInView={{ y: reverseLayout ? 20 : 30, scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            viewport={{ once: true, amount: 0.3 }}
                            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                        >
                            <div className="p-0 h-full">
                                <div className="h-full relative">
                                    {/* Primary Image */}
                                    <div
                                        className="w-full h-full bg-cover bg-center"
                                        style={{
                                            backgroundImage: `url(${primaryImageSrc})`,
                                        }}
                                    />
                                    
                                    {/* Subtle overlay for better integration */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating accent elements matching AboutUsSection */}
                        <motion.div
                            className="absolute -top-4 -right-8 w-16 h-16 rounded-full bg-blue-500/10"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            viewport={{ once: true }}
                            style={{ y: y1 }}
                        />
                        <motion.div
                            className="absolute -bottom-6 -left-10 w-20 h-20 rounded-full bg-purple-500/15"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.7 }}
                            viewport={{ once: true }}
                            style={{ y: y2 }}
                        />

                        {/* Small decorative dots */}
                        <motion.div
                            className="absolute -top-10 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-400"
                            animate={{
                                y: [0, -10, 0],
                                opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                            }}
                        />
                        <motion.div
                            className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-purple-400"
                            animate={{
                                y: [0, 10, 0],
                                opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                delay: 0.5,
                            }}
                        />
                    </motion.div>
                </motion.div>
            </div>

            {/* Decorative bottom gradient matching the style */}
            <div
                className="absolute w-full h-px bottom-0 left-0 z-0"
                style={{
                    background:
                        "radial-gradient(50% 50% at 50% 50%, rgba(59, 130, 246, 0.3) 0%, rgba(59, 130, 246, 0) 100%)",
                }}
            />
        </section>
    );
};

export default SectionWithMockup;