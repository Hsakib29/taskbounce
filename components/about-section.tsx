"use client"

import { Star, Play } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded with the vision to revolutionize how businesses handle their administrative tasks, TaskBounce has
              grown to become a trusted partner for companies worldwide.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our team of expert virtual assistants brings years of experience and dedication to every project, ensuring
              your business runs smoothly while you focus on growth.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="text-gray-700">500+ satisfied clients</span>
              </div>
              <div className="flex items-center space-x-3">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="text-gray-700">99.9% uptime guarantee</span>
              </div>
              <div className="flex items-center space-x-3">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="text-gray-700">24/7 customer support</span>
              </div>
            </div>
            <Button className="bg-teal-600 hover:bg-teal-700">Learn More About Us</Button>
          </motion.div>

          <motion.div
            className="bg-gray-100 rounded-lg overflow-hidden shadow-lg aspect-video relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-colors">
                <Play className="w-8 h-8 text-teal-600 ml-1" />
              </div>
            </div>
            <div className="w-full h-full bg-gray-300">
              {/* Video will be placed here */}
              <div className="w-full h-full flex items-center justify-center text-gray-500">Video Preview</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
