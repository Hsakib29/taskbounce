"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
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
          <div className="inline-block bg-teal-100 text-teal-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Get in Touch
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to Delegate with Confidence?
          </h2>
          <p className="text-xl text-gray-600">
            Contact us today to get started with your virtual assistance needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg h-full flex flex-col"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Contact Information
            </h3>

            <div className="space-y-8 flex-grow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
                  <p className="text-gray-600 mb-2">For general inquiries:</p>
                  <a
                    href="mailto:info@brandbounce.app"
                    className="text-teal-600 hover:text-teal-700"
                  >
                    info@brandbounce.app
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Our Hub</h4>
                  <p className="text-gray-600 mb-2">Find us in Sylhet:</p>
                  <p className="text-orange-600">Sylhet, Bangladesh</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <Send className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {"Let's Connect"}
                  </h4>
                  <p className="text-gray-600 mb-2">
                    Our global team is ready to boost your productivity.
                  </p>
                  <p className="text-gray-600">
                    Share your details, and {"we'll"} get in touch within 24
                    hours.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="https://calendly.com/hsakib29/taskbounce-consultation-call"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 w-full sm:w-auto"
                >
                  Schedule a Call
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg h-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Input placeholder="First Name" className="w-full" />
                </div>
                <div>
                  <Input placeholder="Last Name" className="w-full" />
                </div>
              </div>
              <div>
                <Input placeholder="Email" type="email" className="w-full" />
              </div>
              <div>
                <Input placeholder="Subject" className="w-full" />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  rows={6}
                  className="w-full"
                />
              </div>
              <Button
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 w-full"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
