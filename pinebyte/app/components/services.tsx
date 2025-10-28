import Link from "next/link"
import Image from "next/image"

    
export default function ServiceComp() {
  const services = [
    {
      title: "Website Design",
      description:
        "Custom, mobile-friendly sites built to convert visitors into clients. Designed for credibility and speed.",
      icon: "💻",
    },
    {
      title: "Video Production",
      description:
        "Professional videos that build trust and help explain your message clearly — perfect for social or your homepage.",
      icon: "🎥",
    },
    {
      title: "Brand Identity",
      description:
        "Consistent colors, fonts, and visuals that make your business instantly recognizable and professional.",
      icon: "🎨",
    },
    {
      title: "Ongoing Support",
      description:
        "We keep your digital assets updated, secure, and running smoothly so you can focus on your business.",
      icon: "🧰",
    },
  ];

  return (
    <main className="bg-gray-50 min-h-screen text-gray-900">
      {/* Header */}
      <section className="text-center py-20 bg-green-900 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Our Services
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
          Digital solutions that help you look professional, attract more clients,
          and grow your business with confidence.
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-8 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map(({ title, description, icon }) => (
          <div
            key={title}
            className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition flex flex-col items-start"
          >
            <span className="text-4xl mb-4">{icon}</span>
            <h2 className="text-2xl font-semibold text-green-900 mb-2">
              {title}
            </h2>
            <p className="text-gray-600 text-sm">{description}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-green-900 text-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to start your next project?
        </h2>
        <a
          href="/contact"
          className="inline-block bg-white text-green-900 font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition"
        >
          Let’s Talk
        </a>
      </section>
    </main>
  );
}

  