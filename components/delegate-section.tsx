import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users, Shield, Zap } from "lucide-react";

export default function DelegateSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Delegate with Confidence
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our expert virtual assistants are ready to handle your tasks with
            precision and professionalism.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-2 border-teal-100 hover:border-teal-300 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-teal-600" />
              </div>
              <CardTitle className="text-teal-600">Expert Team</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Skilled professionals with expertise across various industries
                and business functions.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="border-2 border-orange-100 hover:border-orange-300 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-orange-600" />
              </div>
              <CardTitle className="text-orange-600">
                Secure & Reliable
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Enterprise-grade security and reliability you can trust with
                your sensitive business data.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="border-2 border-blue-100 hover:border-blue-300 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle className="text-blue-600">Fast Delivery</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Quick turnaround times without compromising on quality or
                attention to detail.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600"
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
}
