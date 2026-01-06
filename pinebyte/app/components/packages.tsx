import Link from "next/link";

export default function PackagesComp() {
const packages = [
  {
    name: "Starter",
    price: "$1,500/month",
    features: [
      "15 short-form videos per month",
      "Captions included",
      "Basic branding",
      "Standard turnaround",
      "Best for getting consistent content out",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    price: "$3,000/month",
    features: [
      "25 short-form videos per month",
      "1 long-form video (3–9 min) included",
      "Branding overlays",
      "Weekly delivery",
      "Best value for serious growth",
    ],
    highlight: true,
  },
  {
    name: "Authority",
    price: "$4,500/month",
    features: [
      "40 short-form videos per month",
      "2 long-form videos included",
      "Priority turnaround",
      "Content planning support",
      "Built for creators & businesses scaling hard",
    ],
    highlight: false,
  },
  {
    name: "Webinar Pro",
    price: "$6,000/month",
    features: [
      "1–2 webinars per month",
      "30 short clips from webinar content",
      "Branding + captions included",
      "Perfect for coaches, advisors, and educators",
    ],
    highlight: false,
  },
  {
    name: "Webinar Authority",
    price: "$8,000/month",
    features: [
      "3–4 webinars per month",
      "30+ short clips included",
      "Priority editing + branding",
      "Built for teams producing heavy content",
    ],
    highlight: false,
  },
  {
    name: "Custom",
    price: "Let’s Talk",
    features: [
      "Tailored monthly plan",
      "Custom volume of shorts & long-form",
      "Flexible turnaround",
      "White-label available",
      "Built around your exact needs",
    ],
    highlight: false,
  },
];



  return (
    <section className="py-20 px-8 bg-gray-50 text-gray-900">
      <h2 className="text-4xl font-bold text-center text-green-900 mb-12">
        Monthly Packages
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
