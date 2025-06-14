"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion, useInView, useAnimation } from "framer-motion";

export default function HowItWorks() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const steps = [
    {
      title: "Schedule a Call",
      description:
        "Book a free consultation to discuss your needs and how we can support your business.",
    },
    {
      title: "Define Your Requirements",
      description:
        "Tell us exactly what tasks or projects you need help with—big or small.",
    },
    {
      title: "Choose Your Assistant",
      description:
        "Browse profiles and select a skilled assistant who fits your needs and work style.",
    },
    {
      title: "Set Up Communication",
      description:
        "Connect with your assistant through your preferred channels—chat, email, or video calls.",
    },
    {
      title: "Start Your First Task",
      description:
        "Assign your first task and watch it get done efficiently and on time.",
    },
    {
      title: "Review and Feedback",
      description:
        "Provide feedback to ensure your assistant is perfectly aligned with your expectations.",
    },
    {
      title: "Scale Your Operations",
      description:
        "Easily expand your team and delegate more as your business grows.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Get started with TaskBounce in just a few easy steps
          </p>
        </motion.div>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {steps.map(({ title, description }, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-6"
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: (i) => ({
                    opacity: 1,
                    x: 0,
                    transition: {
                      delay: i * 0.2,
                      duration: 0.6,
                      ease: "easeOut",
                    },
                  }),
                }}
                initial="hidden"
                animate={controls}
                custom={index}
              >
                <motion.div
                  className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {index + 1}
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-600">{description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            Get Started Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
