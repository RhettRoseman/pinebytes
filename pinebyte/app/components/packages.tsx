import Link from "next/link";

export default function PackagesComp() {
  const packages = [
    {
      name: "Starter",
      price: "$500/month",
      features: [
        "5 short-form videos per month",
        "Captions included",
        "Basic branding",
        "Standard turnaround",
        "Perfect for testing video content",
      ],
      roleExplanation: "You provide raw footage or audio files, or tell us what you want and we create it for you. We handle all editing, branding, captions, and delivery.",
      highlight: false,
    },
    {
      name: "Momentum",
      price: "$1,000/month",
      features: [
        "10 short-form videos per month",
        "Captions included",
        "Consistent branding",
        "Weekly delivery",
        "Great for staying visible online",
      ],
      roleExplanation: "You provide raw footage or audio files, or tell us what you want and we create it for you. We handle all editing, branding, captions, and delivery.",
      highlight: false,
    },
    {
      name: "Growth",
      price: "$1,500/month",
      features: [
        "15 short-form videos per month",
        "1 long-form video included",
        "Branding overlays",
        "Weekly delivery",
        "Built for consistent audience growth",
      ],
      roleExplanation: "You provide raw footage or audio files, or tell us what you want and we create it for you. We handle all editing, branding, captions, and delivery.",
      highlight: true,
    },
    {
      name: "Scale",
      price: "$2,500/month",
      features: [
        "25 short-form videos per month",
        "2 long-form videos included",
        "Priority turnaround",
        "Light content planning support",
        "For businesses ready to scale fast",
      ],
      roleExplanation: "You provide raw footage or audio files, or tell us what you want and we create it for you. We handle all editing, branding, captions, and delivery.",
      highlight: false,
    },
    {
      name: "Premium Long Form",
      price: "$3,200/month",
      features: [
        "4 long-form videos included",
        "Priority turnaround",
        "Light content planning support",
        "For businesses that need multiple webinars or podcasts a month",
      ],
      roleExplanation: "You provide raw footage or audio files, or tell us what you want and we create it for you. We handle all editing, branding, captions, and delivery.",
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
      roleExplanation: "You provide raw footage or audio files, or tell us what you want and we create it for you. We handle all editing, branding, captions, and delivery.",
      highlight: false,
    },
  ];

  return (
    <section className="py-20 px-8 bg-gray-50 text-gray-900">
      <div>
        <h2 className="text-4xl font-bold text-center text-green-900 mb-12">
          Monthly Packages
        </h2>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
          Every video comes fully branded with your logo and personalized visuals.  
          We handle the editing so your content looks professional, consistent, and ready to post every month.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 m-2">
        {packages.map((pkg, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow flex flex-col h-full hover:shadow-lg transition">
            {pkg.highlight && (
              <div className="mt-4 text-sm font-semibold text-green-800 bg-green-50 inline-block px-3 py-1 rounded-full">
                🌟 Most Popular
              </div>
            )}

            <h3 className="text-2xl font-semibold text-green-900 mb-2">{pkg.name}</h3>
            <p className="text-3xl font-bold mb-6">{pkg.price}</p>

            {/* Features listed properly */}
            <ul className="space-y-2 text-gray-700 mb-4 flex-1">
              {pkg.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">✔</span> {feature}
                </li>
              ))}
            </ul>

            {/* Paragraph explaining roles */}
            <p className="text-gray-600 text-sm mb-4">
              {pkg.roleExplanation}
            </p>

            <Link href="/contact" className="mt-auto flex justify-center">
              <span className="inline-block text-center bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-green-700 transition">
                Get Started
              </span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
