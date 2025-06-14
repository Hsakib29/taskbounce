"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function RealWorkSection() {
  const [currentBg, setCurrentBg] = useState(0);
  const backgrounds = [
    "bg-[url('/images/background-realwork1.webp?height=800&width=1600')]",
    "bg-[url('/images/background-realwork2.webp?height=800&width=1600&text=Image+2')]",
    "bg-[url('/images/background-realwork3.webp?height=800&width=1600&text=Image+3')]",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={`py-20 relative overflow-hidden transition-all duration-1000 ${backgrounds[currentBg]} bg-cover bg-center`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-800/90"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Real Work, Real Impact
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Experience measurable results with our dedicated virtual assistants
            who understand your business needs.
          </motion.p>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold text-orange-500 mb-2">
                +500
              </div>
              <p className="text-gray-300">Projects Completed</p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold text-orange-500 mb-2">
                24/7
              </div>
              <p className="text-gray-300">Support Available</p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold text-orange-500 mb-2">
                99.9%
              </div>
              <p className="text-gray-300">Uptime Guarantee</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
