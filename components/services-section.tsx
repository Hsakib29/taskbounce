"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Mail,
  ClipboardList,
  Users,
  Calendar,
  Search,
  Database,
  TrendingUp,
  Package,
  Truck,
  Calculator,
  Share2,
  Megaphone,
  FileText,
  Palette,
} from "lucide-react"

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(0)

  const serviceCategories = [
    {
      name: "Virtual Assistance",
      color: "teal",
      services: [
        {
          icon: <Mail className="w-6 h-6" />,
          title: "Remote Virtual Assistance",
          description: "General administrative support, scheduling, and communication management.",
        },
        {
          icon: <ClipboardList className="w-6 h-6" />,
          title: "Online Survey Coordination",
          description: "Organizing and managing surveys, including participant outreach and data collection logistics.",
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: "Sales Operations Support",
          description: "Assisting with sales processes, CRM management, and client follow-ups.",
        },
        {
          icon: <Calendar className="w-6 h-6" />,
          title: "Calendar Management",
          description: "Scheduling appointments, organizing meetings, and managing your time efficiently.",
        },
      ],
    },
    {
      name: "Data & E-Commerce",
      color: "orange",
      services: [
        {
          icon: <Search className="w-6 h-6" />,
          title: "Lead Generation & Research",
          description: "Identifying and researching potential clients or customers.",
        },
        {
          icon: <Database className="w-6 h-6" />,
          title: "Data Entry & Annotation",
          description: "Inputting, organizing, and labeling data for various applications.",
        },
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: "Market Research & Analysis",
          description: "Collecting and analyzing market data to inform business strategies.",
        },
        {
          icon: <Package className="w-6 h-6" />,
          title: "Amazon/eBay Listing Management",
          description: "Creating and optimizing product listings on e-commerce platforms.",
        },
        {
          icon: <Truck className="w-6 h-6" />,
          title: "Order Processing & Dispatch",
          description: "Handling order fulfillment, shipping, and logistics.",
        },
        {
          icon: <Calculator className="w-6 h-6" />,
          title: "Store Bookkeeping & Maintenance",
          description: "Managing financial records and maintaining e-commerce store operations.",
        },
      ],
    },
    {
      name: "Creative Tasks",
      color: "blue",
      services: [
        {
          icon: <Share2 className="w-6 h-6" />,
          title: "Social Media Management",
          description: "Developing and executing social media strategies, including content creation and engagement.",
        },
        {
          icon: <Megaphone className="w-6 h-6" />,
          title: "Digital Marketing Campaigns",
          description: "Designing and managing online advertising and promotional campaigns.",
        },
        {
          icon: <FileText className="w-6 h-6" />,
          title: "Content Writing & Editing",
          description: "Crafting and refining written content for websites, blogs, or marketing materials.",
        },
        {
          icon: <Palette className="w-6 h-6" />,
          title: "Basic Canva Designs",
          description: "Creating social media graphics, simple flyers, and presentation slides.",
        },
      ],
    },
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case "teal":
        return {
          bg: "bg-teal-100",
          text: "text-teal-600",
          border: "border-teal-200",
          tab: "bg-teal-100 text-teal-700",
          tabActive: "bg-teal-600 text-white",
        }
      case "orange":
        return {
          bg: "bg-orange-100",
          text: "text-orange-600",
          border: "border-orange-200",
          tab: "bg-orange-100 text-orange-700",
          tabActive: "bg-orange-600 text-white",
        }
      case "blue":
        return {
          bg: "bg-blue-100",
          text: "text-blue-600",
          border: "border-blue-200",
          tab: "bg-blue-100 text-blue-700",
          tabActive: "bg-blue-600 text-white",
        }
      default:
        return {
          bg: "bg-gray-100",
          text: "text-gray-600",
          border: "border-gray-200",
          tab: "bg-gray-100 text-gray-700",
          tabActive: "bg-gray-600 text-white",
        }
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-block bg-teal-100 text-teal-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Can Do For You</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From administrative tasks to creative support, we've got you covered.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {serviceCategories.map((category, index) => {
            const colors = getColorClasses(category.color)
            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === index ? colors.tabActive : colors.tab
                }`}
              >
                {category.name}
              </button>
            )
          })}
        </div>

        {/* Service Grid */}
        <motion.div
          key={activeTab}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {serviceCategories[activeTab].services.map((service, index) => {
            const colors = getColorClasses(serviceCategories[activeTab].color)
            return (
              <motion.div
                key={index}
                className={`p-6 rounded-lg border-2 ${colors.border} hover:shadow-lg transition-all duration-300 bg-white`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center mb-4`}>
                  <div className={colors.text}>{service.icon}</div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
