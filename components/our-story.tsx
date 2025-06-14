import { Star } from "lucide-react"

export default function OurStory() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded with the vision to revolutionize how businesses handle their administrative tasks, TaskBounce has
              grown to become a trusted partner for companies worldwide.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our team of expert virtual assistants brings years of experience and dedication to every project, ensuring
              your business runs smoothly while you focus on growth.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="text-gray-700">500+ satisfied clients</span>
              </div>
              <div className="flex items-center space-x-3">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="text-gray-700">99.9% uptime guarantee</span>
              </div>
              <div className="flex items-center space-x-3">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="text-gray-700">24/7 customer support</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg p-8">
            <div className="space-y-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                    <span className="text-teal-600 font-semibold">JD</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">John Doe</div>
                    <div className="text-sm text-gray-600">CEO, TechCorp</div>
                  </div>
                </div>
                <p className="text-gray-700">
                  "TaskBounce has transformed our operations. Their virtual assistants are professional, reliable, and
                  have saved us countless hours."
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 font-semibold">SM</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Sarah Miller</div>
                    <div className="text-sm text-gray-600">Founder, StartupXYZ</div>
                  </div>
                </div>
                <p className="text-gray-700">
                  "The quality of work and attention to detail is exceptional. I couldn't imagine running my business
                  without TaskBounce."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
