"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Emily Carter",
      role: "Founder & CEO, BrightWave Solutions",
      initial: "EC",
      bgColor: "bg-teal-100",
      textColor: "text-teal-600",
      content:
        "Working with TaskBounce has been a game-changer. Their virtual assistants are not just skilled, but genuinely invested in helping our business thrive. It's like having an extended team right by our side.",
    },
    {
      id: 2,
      name: "David Nguyen",
      role: "Operations Manager, Horizon Ventures",
      initial: "DN",
      bgColor: "bg-orange-100",
      textColor: "text-orange-600",
      content:
        "I appreciate their attention to detail and quick turnaround. The TaskBounce team consistently exceeds expectations, freeing up my time to focus on strategic growth.",
    },
    {
      id: 3,
      name: "Sophia Patel",
      role: "Marketing Lead, CreativeFlow Agency",
      initial: "SP",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
      content:
        "TaskBounce has been a crucial partner in our marketing campaigns. Their research and data handling make my job so much easier and the results speak for themselves.",
    },
    {
      id: 4,
      name: "Marcus Lee",
      role: "Small Business Owner",
      initial: "ML",
      bgColor: "bg-purple-100",
      textColor: "text-purple-600",
      content:
        "I was hesitant at first, but TaskBounce proved their worth quickly. Their virtual assistant handled my admin tasks flawlessly, giving me back precious hours every week.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say
            about working with TaskBounce.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="relative h-80 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div
                    className={`w-14 h-14 ${testimonials[current].bgColor} rounded-full flex items-center justify-center`}
                  >
                    <span
                      className={`${testimonials[current].textColor} font-semibold text-lg`}
                    >
                      {testimonials[current].initial}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-xl text-gray-900">
                      {testimonials[current].name}
                    </div>
                    <div className="text-gray-600">
                      {testimonials[current].role}
                    </div>
                  </div>
                </div>
                <p className="text-lg text-gray-700 italic">
                  "{testimonials[current].content}"
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full ${
                  index === current ? "bg-teal-600" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={prev}
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center focus:outline-none"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={next}
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center focus:outline-none"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
