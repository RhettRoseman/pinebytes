import Link from "next/link";

export default function PackagesComp() {
  const packages = [
    { name: "Starter Package", price: "$500", features: ["1-page website", "1 x 30-second video", "Strategy call", "7-day delivery"], highlight: false },
    { name: "Growth Package", price: "$1,500", features: ["Full website", "1 x 1-minute video (more if discussed)", "Strategy call", "14-day delivery"], highlight: true },
    { name: "Professional Package", price: "$2,500", features: ["Full website + blog", "2 x 1-minute videos", "Strategy call + implementation advice", "20-day delivery", "Booking System", "Extra revisions"], highlight: false },
    { name: "Premium Package", price: "$4,000", features: ["Custom Website (More than 7 pages) and/or Custom App", "3 x 1-minute videos", "Comprehensive strategy session", "25+ day delivery", "Ongoing support (1 month)", "Extra revisions"], highlight: false },
  ];

  return (
    <section className="py-20 px-8 bg-gray-50 text-gray-900">
      <h2 className="text-4xl font-bold text-center text-green-900 mb-12">
        Our Packages
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {packages.map((pkg, index) => (
          <Link
            key={index}
            href={`/packages?pkg=${encodeURIComponent(pkg.name)}`}
            className="bg-white rounded-2xl shadow-md p-8 flex flex-col justify-between hover:border-green-700 hover:border-4 transition transform"
          >
            {pkg.highlight && (
              <div className="mt-4 text-sm font-semibold text-green-800 bg-green-50 inline-block px-3 py-1 rounded-full">
                🌟 Most Popular
              </div>
            )}

            <div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">{pkg.name}</h3>
              <p className="text-3xl font-bold mb-6">{pkg.price}</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="text-green-600 mr-2">✔</span> {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-4 text-gray-600 text-sm text-center">
              Website Hosting starting at $35/month
            </div>

            <div className="mt-auto flex justify-center">
              <span className="inline-block text-center bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-green-700 transition">
                Get Started
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
