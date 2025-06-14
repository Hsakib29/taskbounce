"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          className="grid md:grid-cols-3 gap-8 text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow will-change-transform"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="text-5xl font-bold text-orange-500 mb-2">24%</div>
            <p className="text-gray-300">Increase in Productivity</p>
          </motion.div>

          <motion.div
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow will-change-transform"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="text-5xl font-bold text-orange-500 mb-2">80%</div>
            <p className="text-gray-300">Time Saved on Admin Tasks</p>
          </motion.div>

          <motion.div
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow will-change-transform"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="text-5xl font-bold text-orange-500 mb-2">95%</div>
            <p className="text-gray-300">Client Satisfaction Rate</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
