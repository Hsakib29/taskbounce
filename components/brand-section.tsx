export default function BrandSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Elevate Your Brand with <span className="text-teal-600">TaskBounce</span>
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of businesses that trust TaskBounce to handle their virtual assistant needs
        </p>
        <div className="grid md:grid-cols-5 gap-8 items-center opacity-60">
          {["Company 1", "Company 2", "Company 3", "Company 4", "Company 5"].map((company, index) => (
            <div key={index} className="text-gray-400 font-semibold text-lg">
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
