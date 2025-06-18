"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Palette,
  Video,
  Layers,
  MessageSquare,
  FileImage,
} from "lucide-react";

export default function BrandBouncePromo() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-blue-600 mb-2">Need Design Services?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Elevate Your Brand with{" "}
            <span className="relative inline-block">
              <span className="absolute top-0 right-0 -mt-4 -mr-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                    fill="#FF6B00"
                  />
                </svg>
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-orange-500">
                BrandBounce
              </span>
            </span>
          </h2>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-600">
            While TaskBounce handles your productivity needs, our parent company
            BrandBounce can transform your visual identity with professional
            design services.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {[
            {
              icon: <Palette className="w-6 h-6 text-blue-500" />,
              title: "Logo Design",
              description:
                "Create a unique, memorable logo that captures the heart of your brand.",
              color: "bg-blue-100",
            },
            {
              icon: <Video className="w-6 h-6 text-orange-500" />,
              title: "Video Editing",
              description:
                "Bring your story to life with professional video editing.",
              color: "bg-orange-100",
            },
            {
              icon: <Layers className="w-6 h-6 text-blue-500" />,
              title: "Branding",
              description:
                "Develop a cohesive brand identity, including color schemes and typography.",
              color: "bg-blue-100",
            },
            {
              icon: <MessageSquare className="w-6 h-6 text-blue-500" />,
              title: "Social Media Marketing",
              description:
                "Grow your online presence with engaging content and targeted strategies.",
              color: "bg-blue-100",
            },
            {
              icon: <FileImage className="w-6 h-6 text-orange-500" />,
              title: "Graphic Design",
              description: "Custom designs for all your marketing needs.",
              color: "bg-orange-100",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <div
                className={`w-12 h-12 ${service.color} rounded-full flex items-center justify-center mb-4`}
              >
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {service.description}
              </p>
              <div className="flex justify-end">
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://brandbounce.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 text-white px-8 py-2 rounded-full">
              Visit BrandBounce <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
