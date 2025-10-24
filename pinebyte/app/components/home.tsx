import Link from "next/link";
import Image from "next/image";

export default function HomeComp(){
    return(
          <main className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center p-8  from-green-50 to-green-50">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-green-900 bg-clip-text ">
          Digital Solutions That Build Trust & Drive Growth
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mb-8 text-gray-700">
          PineByteDigital creates stunning websites and engaging video content that help financial advisors and small business owners attract more clients, establish credibility, and grow their practice online.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <a
            href="/contact"
            className="px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition shadow-lg hover:shadow-xl"
          >
            Start Your Project
          </a>
          <a
            href="/portfolio"
            className="px-8 py-4 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition"
          >
            View Our Work
          </a>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          What We Build For You
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Professional digital solutions designed specifically for financial professionals and small business owners who want to stand out online.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-4">Website Development</h3>
            <p className="text-gray-600">Custom, modern websites that convert visitors into clients. Mobile-responsive, fast, and built to showcase your expertise.</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-4">Video Production</h3>
            <p className="text-gray-600">Professional video editing for client testimonials, educational content, and social media that builds trust and engagement.</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-4">Brand & Design</h3>
            <p className="text-gray-600">Logo design, brand identity, and marketing materials that make you look professional and memorable.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-8  from-green-50 to-green-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Financial Advisors & Business Owners Choose Us
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">We Understand Your Industry</h3>
            <p className="text-gray-600">We know what builds credibility with your clients. Compliance-friendly, professional, and trustworthy design.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Fast Turnaround</h3>
            <p className="text-gray-600">We respect your time. Get your website or video project delivered on schedule without compromising quality.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
            <p className="text-gray-600">No hidden fees or surprise charges. Get clear packages with options that fit your budget and goals.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
            <p className="text-gray-600">We don't disappear after launch. Get updates, maintenance, and support as your business evolves.</p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Simple Process
        </h2>
        <div className="space-y-8">
          <article className="bg-white p-8 rounded-xl shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl font-bold text-green-600">01</span>
              <h3 className="text-2xl font-semibold">Discovery Call</h3>
            </div>
            <p className="text-gray-600 ml-16">We learn about your business, target audience, and goals. This free consultation helps us understand exactly what you need.</p>
          </article>

          <article className="bg-white p-8 rounded-xl shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl font-bold text-green-600">02</span>
              <h3 className="text-2xl font-semibold">Custom Proposal</h3>
            </div>
            <p className="text-gray-600 ml-16">We present a tailored plan with clear deliverables, timeline, and pricing options that fit your budget.</p>
          </article>

          <article className="bg-white p-8 rounded-xl shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl font-bold text-purple-600">03</span>
              <h3 className="text-2xl font-semibold">Build & Collaborate</h3>
            </div>
            <p className="text-gray-600 ml-16">We create your website or video with regular check-ins for your feedback, ensuring it perfectly matches your vision.</p>
          </article>

          <article className="bg-white p-8 rounded-xl shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl font-bold text-green-600">04</span>
              <h3 className="text-2xl font-semibold">Launch & Support</h3>
            </div>
            <p className="text-gray-600 ml-16">We launch your project and provide training and ongoing support to help you succeed.</p>
          </article>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-8 text-center bg-green-900 text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Elevate Your Digital Presence?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Let's build something amazing together. Schedule a free consultation to discuss your project.
        </p>
        <a
          href="/contact"
          className="inline-block px-10 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition shadow-xl hover:shadow-2xl"
        >
          Get Started Today
        </a>
      </section>
    </main>
    )
}