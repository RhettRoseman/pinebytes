import Link from "next/link";

export default function PortfoliComp() {
    return (
        <main>
            {/* Hero Section */}
           <section
  className="bg-white py-20"
  style={{
    backgroundImage: "url('/camerasondesk.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  <div className="max-w-6xl mx-auto text-center px-6 bg-white bg-opacity-80 p-8 rounded-lg">
    <h1 className="text-5xl font-bold text-green-900 mb-4">
      Branded Videos That Grow Your Business 🎬
    </h1>
    <p className="text-gray-600 text-lg mb-6">
      We produce <span className="font-bold">short-form clips, long-form edits, and intro videos</span> for financial advisors and small business owners — polished, professional, and ready to engage your audience.
    </p>
    <p className="text-gray-600 text-lg mb-6">
      Whether you just need a single video or a consistent monthly flow of content, we handle the editing, branding, and polish so your content looks professional and consistent—without eating up your time.
    </p>
    <Link
      href="/contact"
      className="bg-green-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition"
    >
      Start Your Project
    </Link>
  </div>
</section>


            {/* Features Section */}
            <section className="bg-gray-50 py-20 px-6">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-10 rounded-lg shadow-md flex flex-col justify-center">
                        <h3 className="text-xl font-semibold text-green-900 mb-2">🎯 Professional Branding</h3>
                        <p className="text-gray-700">
                            Every video includes your logo, colors, and visual style, giving your brand a consistent and polished look across all platforms.
                        </p>
                    </div>
                    <div className="bg-white p-10 rounded-lg shadow-md flex flex-col justify-center">
                        <h3 className="text-xl font-semibold text-green-900 mb-2">⏱ Fast Turnaround</h3>
                        <p className="text-gray-700">
                            We handle the editing and deliver videos on schedule, so you never have to worry about missing deadlines or posting late.
                        </p>
                    </div>
                    <div className="bg-white p-10 rounded-lg shadow-md flex flex-col justify-center">
                        <h3 className="text-xl font-semibold text-green-900 mb-2">💡 Custom Content</h3>
                        <p className="text-gray-700">
                            From quick social clips to long-form webinars or intros, we create content tailored to your audience and goals.
                        </p>
                    </div>
                    <div className="bg-white p-10 rounded-lg shadow-md flex flex-col justify-center">
                        <h3 className="text-xl font-semibold text-green-900 mb-2">🤝 Easy Collaboration</h3>
                        <p className="text-gray-700">
                            Onboarding is simple. Send us your footage or ideas, and we handle the rest — edits, captions, graphics, and branding included.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-green-900 py-20 text-center text-white">
                <h2 className="text-4xl font-semibold mb-4">
                    Ready to Elevate Your Content?
                </h2>
                <p className="text-lg mb-8">
                    Let’s create videos that save you time, build your brand, and engage your audience. Start today!
                </p>
                <Link
                    href="/contact"
                    className="bg-white text-green-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100"
                >
                    Start Your Project
                </Link>
            </section>
        </main>
    );
}
