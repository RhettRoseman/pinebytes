import Link from "next/link";

export default function PackagesComp() {
  
const packages = [
  {
    name: "Starter",
    price: "$500/month",
    features: [
      "8 short-form videos per month",
      "Captions included",
      "Basic branding",
      "Standard turnaround",
      "Perfect for getting started with video",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    price: "$750/month",
    features: [
      "15 short-form videos per month",
      "1 long-form video included",
      "Branding overlays",
      "Weekly delivery",
      "Best value for early growth",
    ],
    highlight: true,
  },
  {
    name: "Pro",
    price: "$1,500/month",
    features: [
      "25 short-form videos per month",
      "2 long-form videos included",
      "Priority turnaround",
      "Light content planning support",
      "Built for businesses ready to scale",
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
      <div>
        <h2 className="text-4xl font-bold text-center text-green-900 mb-12">
        Monthly Packages
      </h2>
       <p className="text-center text-gray-700 max-w-2xl mx-auto">
    Every video comes fully branded with your logo and personalized visuals.  
    We handle the editing so your content looks professional, consistent, and ready to post every month.
  </p>
      </div>
      

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 m-2">
        {packages.map((pkg, index) => (
          <Link
           href='/contact'
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
            OnBoarding Fee Included in Packages 
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
