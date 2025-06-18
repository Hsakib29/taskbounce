"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star } from "lucide-react";
import { motion } from "framer-motion";

// Define the props type for PricingSection
interface PricingSectionProps {
  // onGetStarted will now also handle scrolling, so rename for clarity
  onGetStartedAndScroll: (subject: string) => void;
}

export default function PricingSection({
  onGetStartedAndScroll,
}: PricingSectionProps) {
  const handleGetStartedClick = (subject: string) => {
    // This function now just calls the prop, delegating both state update and scroll to parent
    onGetStartedAndScroll(subject);
  };

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Affordable Rates, Premium Quality
          </h2>
          <p className="text-xl text-gray-600">
            Flexible pricing options to suit your needs and budget.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* Virtual Assistance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex"
          >
            <Card className="border-2 border-orange-300 relative flex flex-col w-full">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500">
                Most Popular
              </Badge>
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Virtual Assistance</CardTitle>
                <p className="text-sm text-gray-600 mb-4">
                  Flexible hourly support for admin tasks
                </p>
                <div className="text-3xl font-bold text-gray-900">
                  £3.20{" "}
                  <span className="text-lg font-normal text-gray-600">
                    / £4.50
                  </span>
                </div>
                <p className="text-sm text-gray-500">/hour</p>
                <p className="text-xs text-gray-500 mt-2">
                  Basic & Premium options available
                </p>
              </CardHeader>
              <CardContent className="space-y-3 flex-grow">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Email & calendar management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Admin support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-4 h-4 text-orange-500 flex-shrink-0" />
                  <span className="text-sm">
                    Priority support & task coordinator (Premium)
                  </span>
                </div>
              </CardContent>
              <div className="p-6 pt-0 mt-auto">
                <Button
                  className="w-full bg-orange-500 hover:bg-orange-600"
                  onClick={() => handleGetStartedClick("Virtual Assistance")}
                >
                  Get Started
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Data Entry */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex"
          >
            <Card className="border-2 border-gray-200 flex flex-col w-full">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Data Entry</CardTitle>
                <p className="text-sm text-gray-600 mb-4">
                  Accurate entry, uploads & management
                </p>
                <div className="text-3xl font-bold text-gray-900">
                  £2.80{" "}
                  <span className="text-lg font-normal text-gray-600">
                    / £3.80
                  </span>
                </div>
                <p className="text-sm text-gray-500">/hour</p>
                <p className="text-xs text-gray-500 mt-2">
                  Basic & Premium options available
                </p>
              </CardHeader>
              <CardContent className="space-y-3 flex-grow">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm">
                    Product uploads & database updates
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Basic data processing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-4 h-4 text-orange-500 flex-shrink-0" />
                  <span className="text-sm">
                    QA checks & priority support (Premium)
                  </span>
                </div>
              </CardContent>
              <div className="p-6 pt-0 mt-auto">
                <Button
                  className="w-full bg-gray-600 hover:bg-gray-700"
                  onClick={() => handleGetStartedClick("Data Entry")}
                >
                  Get Started
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Research & Leads */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex"
          >
            <Card className="border-2 border-gray-200 flex flex-col w-full">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Research & Leads</CardTitle>
                <p className="text-sm text-gray-600 mb-4">
                  Lead generation & market insights
                </p>
                <div className="text-3xl font-bold text-gray-900">
                  £3.50{" "}
                  <span className="text-lg font-normal text-gray-600">
                    / £5.00
                  </span>
                </div>
                <p className="text-sm text-gray-500">/hour</p>
                <p className="text-xs text-gray-500 mt-2">
                  Basic & Premium options available
                </p>
              </CardHeader>
              <CardContent className="space-y-3 flex-grow">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm">
                    Web research & lead list building
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Market/competitor analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-4 h-4 text-orange-500 flex-shrink-0" />
                  <span className="text-sm">
                    Dedicated researcher & reports (Premium)
                  </span>
                </div>
              </CardContent>
              <div className="p-6 pt-0 mt-auto">
                <Button
                  className="w-full bg-teal-600 hover:bg-teal-700"
                  onClick={() => handleGetStartedClick("Research & Leads")}
                >
                  Get Started
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Task Packs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex"
          >
            <Card className="border-2 border-teal-300 relative flex flex-col w-full">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-teal-600">
                Best Value
              </Badge>
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Task Packs</CardTitle>
                <p className="text-sm text-gray-600 mb-4">
                  Pre-paid bulk data services
                </p>
                <div className="text-3xl font-bold text-gray-900">£29</div>
                <p className="text-sm text-gray-500">/pack</p>
                <p className="text-xs text-gray-500 mt-2">
                  500 data entries (~£0.058/entry)
                </p>
              </CardHeader>
              <CardContent className="space-y-3 flex-grow">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Ideal for bulk uploads</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Quick turnaround</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm">No expiry</span>
                </div>
              </CardContent>
              <div className="p-6 pt-0 mt-auto">
                <Button
                  className="w-full bg-teal-600 hover:bg-teal-700"
                  onClick={() => handleGetStartedClick("Data Entry")} // Mapped to Data Entry
                >
                  Get Started
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
