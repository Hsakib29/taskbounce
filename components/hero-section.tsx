import { Button } from "@/components/ui/button";
import {
  Play,
  TrendingUp,
  Clock,
  CheckCircle,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import YoutubeModal from "./YoutubeModal"; // Import the YoutubeModal component
import { useState } from "react"; // Import useState from react

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Create a new state variable
  const videoId = "VIDEO_ID_HERE"; // Replace with your YouTube video ID

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-20 pt-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              {/* Placeholder for logo image - smaller size similar to original text */}
              <Image
                src="/images/taskbounce-large.webp?height=48&width=160&text=TaskBounce+Logo"
                alt="TaskBounce Logo"
                width={160}
                height={48}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Streamline your workflow with our expert virtual assistants. Focus
              on what matters most while we handle the rest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a
                href="https://cal.com/hsakib29/15-min-meeting-taskbounce"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white w-full sm:w-auto"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Get Started Today
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="border-teal-600 text-teal-600 hover:bg-teal-50"
              >
                <Play className="w-4 h-4 mr-2" />
                Watch Demo
              </Button>
            </div>
            <p className="text-sm text-gray-500">
              A <span className="text-orange-500 font-medium">BrandBounce</span>{" "}
              company
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-gray-900 text-lg">
                Performance Dashboard
              </h3>
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-100">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">
                    Task Completion
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">98%</div>
                  <div className="text-xs text-green-500">+2% this month</div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-100">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700 font-medium">
                    Client Satisfaction
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">95%</div>
                  <div className="text-xs text-blue-500">Excellent rating</div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg border border-orange-100">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-orange-600" />
                  </div>
                  <span className="text-gray-700 font-medium">
                    Response Time
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-orange-600">
                    {"< 2hrs"}
                  </div>
                  <div className="text-xs text-orange-500">
                    Average response
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <YoutubeModal
          videoId={"QusJ4fpWQwA"}
          isOpen={isModalOpen}
          onClose={handleModalClose}
        />
      )}
    </section>
  );
}
