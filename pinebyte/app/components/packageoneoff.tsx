import React from "react";

export default function OneOffPackagesPage() {
  const oneOffPackages = [
    {
      name: "Simple Edit",
      price: "$500",
      description:
        "You provide the complete raw video file. We handle all the editing: trimming, cleaning up audio/video, and adding polish.",
    },
    {
      name: "Short Clip (<2 min)",
      price: "$600",
      description:
        "You provide the raw footage. We create a short, fully edited clip with captions, simple branding, and formatting ready for social media or promotions. No filming or graphics required on your part",
    },
    {
      name: "Long-Form Video (3–9 min)",
      price: "$1,500",
      description:
        "You provide the raw footage. We produce a polished long-form video including professional editing, captions, branding overlays, and graphics. No filming or graphics required on your part",
    },
    {
      name: "Custom / Full Production",
      price: "Call for pricing",
      description:
        "If your video is over 9 minutes or requires full production (filming, motion graphics, scripting, etc.), we handle the entire process. You provide your vision; we handle everything else. Pricing and scope are discussed on a call.",
    },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-green-900 text-center mb-12">
          One-Off Editing Packages
        </h2>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
          Need a single video polished and ready to go? Each package is designed to take your raw footage or ideas and turn them into professional, ready-to-publish content. You provide the material or the concept; we handle the editing, branding, captions, and final polish.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {oneOffPackages.map((pkg, idx) => (
            <div
              key={idx}
              className="border border-green-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col h-full"
            >
              <h3 className="text-xl font-semibold text-green-900 mb-2">
                {pkg.name}
              </h3>
              <div className="text-2xl font-bold text-black mb-4">{pkg.price}</div>

              <p className="text-gray-700 flex-1">{pkg.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
