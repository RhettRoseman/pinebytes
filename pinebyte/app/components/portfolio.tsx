import Link from "next/link";

export const metadata = {
    title: "Henry Joseph Financial | Pinebyte Digital Portfolio",
    description:
        "A modern financial firm website built by Pinebyte Digital using Next.js and Tailwind CSS. Designed to inspire trust and clarity for blue-collar business owners.",
};

export default function PortfoliComp() {
    return (
        <main>
            {/* Hero Section */}
            <section className="bg-white py-20">
                <div className="max-w-6xl mx-auto text-center px-6">
                    <h1 className="text-5xl font-bold text-green-900 mb-4">
                        Henry Joseph Financial
                    </h1>
                    <p className="text-gray-600 text-lg">
                        A modern financial firm website built with Next.js, Tailwind CSS,
                        and a focus on clarity and trust.
                    </p>
                    <div className="mt-8">
                        <img
                            src="/hjweb.gif"
                            alt="Henry Joseph Financial Website"
                            className="rounded-2xl shadow-lg mx-auto"
                        />
                    </div>
                    <Link href="https://www.henryjosephfinancial.com">
                        <button className="bg-green-900 text-white font-bold py-3 px-6 m-5 rounded-lg hover:bg-green-700 transition-colors">
                            Look at the Live Version!
                        </button>
                    </Link>
                </div>
            </section>

            {/* About Section */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-3xl font-semibold text-green-900 mb-4">
                        About the Project
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        I created Henry Joseph Financial with a digital first presence that reflected integrity and connection to blue-collar business owners. I
                        built a site that communicates trust through clean design, simple
                        navigation, and a warm tone. Designed for my own financial firm.
                    </p>
                </div>
            </section>

            {/* Process Section */}
            <section className="bg-white py-16">
                <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold text-green-900 mb-2">
                            Planning
                        </h3>
                        <p className="text-gray-700">
                            Researched financial firm sites, created wireframes focusing on
                            clarity and call-to-action placement, did calls with target market to make sure I was putting in the right problem-solution.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-green-900 mb-2">
                            Design & Branding
                        </h3>
                        <p className="text-gray-700">
                            Implemented a design using neutral tones and deep blues, paired with strong typography to reflect the firm’s personality. Carefully selected high-quality stock photos were used, focusing solely on the target audience and the narratives we wanted to communicate.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-green-900 mb-2">
                            Development
                        </h3>
                        <p className="text-gray-700">
                            Built in Next.js with Tailwind CSS for performance and
                            flexibility. Optimized SEO and responsive layouts.
                        </p>
                    </div>
                </div>
            </section>

            {/* Results Section */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-semibold text-green-900 mb-6">
                        The Results
                    </h2>
                    <ul className="text-gray-700 space-y-3">
                        <li>
                            ⚡️ <strong>100%</strong> mobile responsiveness across all devices
                        </li>
                        <li>🔍 SEO-optimized metadata for higher local visibility</li>
                        <li>💬 Clear client journey — from homepage to contact form</li>
                        <li>🎨 Consistent brand language built around trust & clarity</li>
                    </ul>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-green-900 py-20 text-center text-white">
                <h2 className="text-4xl font-semibold mb-4">
                    Need a website that builds trust?
                </h2>
                <p className="text-lg mb-8">
                    Let’s build your online presence with the same care and clarity.
                </p>
                <a
                    href="/contact"
                    className="bg-white text-green-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100"
                >
                    Start a Project
                </a>
            </section>
        </main>
    );
}