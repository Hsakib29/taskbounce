"use client";

import { useState, useEffect, forwardRef, Ref } from "react"; // Import forwardRef and Ref
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ExternalLink, Mail, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

// Define the props type for ContactSection
interface ContactSectionProps {
  selectedSubject: string; // Now it's selectedSubject
}

// Use forwardRef to allow parent components to get a ref to the DOM element
const ContactSection = forwardRef<HTMLElement, ContactSectionProps>(
  ({ selectedSubject }, ref: Ref<HTMLElement>) => {
    // Initialize subject state with the prop
    const [subject, setSubject] = useState<string>(selectedSubject);

    // Effect to update subject when selectedSubject prop changes
    useEffect(() => {
      // Only update if the selectedSubject prop is different from current state
      if (selectedSubject !== subject) {
        setSubject(selectedSubject);
      }
    }, [selectedSubject, subject]); // Add 'subject' to dependency array

    return (
      <section id="contact" className="py-20 bg-gray-50" ref={ref}>
        {" "}
        {/* Assign the ref here */}
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
              Contact us today to get started with your virtual assistance
              needs.
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
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Email Us
                    </h4>
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
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Our Hub
                    </h4>
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
                      Share your details, and we'll get in touch within 24
                      hours.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="https://cal.com/hsakib29/15-min-meeting-taskbounce"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button
                    size="lg"
                    className="bg-orange-500 hover:bg-orange-600 w-full sm:w-auto"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
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
              <form
                className="space-y-6"
                action="https://formspree.io/f/xanovlod"
                method="POST"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="first_name"
                      placeholder="First Name"
                      className="w-full"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="last_name"
                      placeholder="Last Name"
                      className="w-full"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="w-full"
                    required
                  />
                </div>

                {/* Subject Dropdown + Conditional Field */}
                <div className="space-y-4">
                  <label className="block">
                    <span className="text-gray-700 font-medium">Subject</span>
                    <select
                      name="subject"
                      value={subject}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                        setSubject(e.target.value)
                      }
                      required
                      className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-3 focus:border-teal-500 focus:ring-teal-500"
                    >
                      <option value="" disabled>
                        Select a subject
                      </option>
                      <option value="Virtual Assistance">
                        Virtual Assistance
                      </option>
                      <option value="Data Entry">Data Entry</option>
                      <option value="Research & Leads">Research & Leads</option>
                      <option value="Creative Services">
                        Creative Services
                      </option>
                      <option value="Partnership/Collaboration">
                        Partnership/Collaboration
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </label>

                  {subject === "Other" && (
                    <Input
                      name="custom_subject"
                      placeholder="Please specify your subject"
                      required
                    />
                  )}
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={6}
                    className="w-full"
                    required
                    minLength={10}
                  />
                </div>

                <Button
                  size="lg"
                  className="bg-teal-600 hover:bg-teal-700 w-full"
                  type="submit"
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
);

// Export the component as default
export default ContactSection;
