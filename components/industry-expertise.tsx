import Image from "next/image";

const expertiseData = [
  {
    src: "/images/techstartup.webp",
    alt: "Tech Startup",
    title: "Tech Startups",
    description:
      "Agile support for founders—email, research, CRM updates, and scheduling handled efficiently.",
  },
  {
    src: "/images/nonprofit.webp",
    alt: "Nonprofit",
    title: "Nonprofits",
    description:
      "Cost-effective admin support for mission-driven teams, from donor communication to event planning.",
  },
  {
    src: "/images/healthcare.webp",
    alt: "Healthcare",
    title: "Healthcare",
    description:
      "Patient scheduling, follow-ups, and secure data entry with attention to detail and care.",
  },
  {
    src: "/images/finance.webp",
    alt: "Finance",
    title: "Finance",
    description:
      "Precise VA services for finance professionals—reporting, scheduling, and client coordination.",
  },
  {
    src: "/images/education.webp",
    alt: "Education",
    title: "Education",
    description:
      "Support for educators and institutions—classroom management, content prep, and admin work.",
  },
  {
    src: "/images/ecommerce.webp",
    alt: "Ecommerce",
    title: "E-commerce",
    description:
      "Product listing, inventory updates, customer service, and platform management for online stores.",
  },
];

export default function IndustryExpertise() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Industry Talent Expertise
          </h2>
          <p className="text-xl text-gray-600">
            Our diverse team brings specialized knowledge across multiple
            industries
          </p>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
          {expertiseData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={200}
                height={150}
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
