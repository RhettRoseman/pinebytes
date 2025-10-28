import PackagesComp from './packages';
export default function ServiceComp() {
  const services = [
    {
      title: "Website Design",
      description:
        "Custom, mobile-friendly sites built to convert visitors into clients — designed for speed, trust, and impact.",
      icon: "💻",
    },
    {
      title: "Video Production",
      description:
        "Professional videos that explain your story clearly, build credibility, and drive engagement across all platforms.",
      icon: "🎥",
    },
    {
      title: "Brand Identity",
      description:
        "Cohesive visuals, fonts, and colors that make your business instantly recognizable and build long-term trust.",
      icon: "🎨",
    },
    {
      title: "Ongoing Support",
      description:
        "We keep your digital assets updated, secure, and running smoothly so you can stay focused on your business.",
      icon: "🧰",
    },
  ];

  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Header Section */}
   <section
  className="text-center relative min-h-screen flex flex-col justify-center  text-green-900"
  style={{
    backgroundImage: "url(/laptop-camera-desk.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-linear-to-b"></div>

  {/* Content */}
  <div className="relative z-10 max-w-3xl mx-auto px-6 bg-white rounded-2xl">
    <h1 className="text-5xl lg:text-6xl md:text-5xl sm:text-3xl font-bold mb-6 leading-tight">
      Our Services
    </h1>
    <p className="text-lg md:text-xl opacity-90">
      Digital solutions that help you look professional, attract more clients,
      and grow your business with confidence.
    </p>
  </div>
</section>



      {/* Services Grid */}
      <section className="py-24 px-6 md:px-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map(({ title, description, icon }) => (
          <div
            key={title}
            className="bg-white rounded-2xl shadow-md p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-5">
              <span className="text-4xl">{icon}</span>
              <h2 className="text-2xl font-semibold text-green-900">{title}</h2>
            </div>
            <p className="text-gray-600 text-base leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </section>
    {/* packages */}
        <PackagesComp/>
      {/* CTA Section */}
      <section className="py-24 text-center bg-green-900 text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Ready to Start Your Next Project?
        </h2>
        <p className="text-lg mb-10 opacity-90">
          Let’s build something that looks good, works great, and earns trust.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-green-900 font-semibold px-10 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
        >
          Let’s Talk
        </a>
      </section>
    </main>
  );
}
