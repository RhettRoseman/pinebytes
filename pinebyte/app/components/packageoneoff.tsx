const oneOffPackages = [
  {
    name: "Simple Edit",
    price: "$500",
    description:
      "You provide the full video — we handle cutting, cleanup, and polish. No production work required.",
  },
  {
    name: "Short Clip (<2 min)",
    price: "$600",
    description:
      "Full edit with captions and basic branding. Perfect for social media and promos.",
  },
  {
    name: "Long-Form Video (3–9 min)",
    price: "$1,500",
    description:
      "Professional edit with branding overlays, captions, and graphics.",
  },
  {
    name: "Custom / Full Production",
    price: "Call for pricing",
    description:
      "Anything over 9 minutes or complex production work. Scope and pricing discussed on a call.",
  },
];

export default function OneOffPackage() {
  return (
<section className="bg-white py-20 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-green-900 text-center mb-12">
      One-Off Editing Packages
    </h2>
    <p className="text-center text-gray-700 max-w-2xl mx-auto m-2">
      Need a single video polished and ready to go? Each one-off project is fully branded with your logo and visuals, giving you professional, consistent content — no hassle, no stress, just results.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {oneOffPackages.map((pkg) => (
        <div
          key={pkg.name}
          className="border border-green-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
        >
          <h2 className="text-xl font-semibold text-green-900 mb-2">
            {pkg.name}
          </h2>

          <div className="text-2xl font-bold text-black mb-4">
            {pkg.price}
          </div>

          <p className="text-gray-700 leading-relaxed">
            {pkg.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}
