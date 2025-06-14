import { Button } from "@/components/ui/button"

export default function StepsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Unlock Your Productivity in 7 Simple Steps</h2>
          <p className="text-xl text-gray-600">Get started with TaskBounce in just a few easy steps</p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {[
              "Create Your Account",
              "Define Your Requirements",
              "Choose Your Assistant",
              "Set Up Communication",
              "Start Your First Task",
              "Review and Feedback",
              "Scale Your Operations",
            ].map((step, index) => (
              <div key={index} className="flex items-center space-x-6">
                <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step}</h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            Get Started Now
          </Button>
        </div>
      </div>
    </section>
  )
}
