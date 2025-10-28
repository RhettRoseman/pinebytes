import Link from "next/link";
import Image from "next/image";
import LanguageMarquee from "./LanguageMarquee";
import IconMarquee from "../components/icons/Languages"

// Featured section class
interface Feature {
  title: string;
  description: string;
}
// Featured section Array
const features : Feature[] = [
{
    title: "We Understand Your Industry",
    description: "We know what builds credibility with your clients. Compliance-friendly, professional, and trustworthy design."
  },
  {
    title: "Fast Turnaround",
    description: "We respect your time. Get your website or video project delivered on schedule without compromising quality."
  },
  {
    title: "Transparent Pricing",
    description: "No hidden fees or surprise charges. Get clear packages with options that fit your budget and goals."
  },
  {
    title: "Ongoing Support",
    description: "We don't disappear after launch. Get updates, maintenance, and support as your business evolves."
  }
];
// Feature Card Section 
const FeatureCard: React.FC<Feature> = ({ title, description }) => (
  <div className="bg-white p-10 rounded-lg shadow-md  flex flex-col justify-center mt-1">
    <h3 className="text-xl font-semibold text-green-900">{title}</h3>
    <p className="text-gray-600 text-sm ">{description}</p>
  </div>
);
///////////////////////////////////////////////////////////
// Process Class
interface Process {
    step : number ;
    title: string ;
    description : string;
}
// Array For the Processes
const processes : Process[] = [
   {
    step: 1,
    title: "Discovery Call",
    description:
      "We learn about your business, target audience, and goals. This free consultation helps us understand exactly what you need.",
  },
  {
    step: 2,
    title: "Custom Proposal",
    description:
      "We present a tailored plan with clear deliverables, timeline, and pricing options that fit your budget.",
  },
  {
    step: 3,
    title: "Build & Collaborate",
    description:
      "We create your website or video with regular check-ins for your feedback, ensuring it perfectly matches your vision.",
  },
  {
    step: 4,
    title: "Launch & Support",
    description:
      "We launch your project and provide training and ongoing support to help you succeed.",
  },
];


export default function HomeComp(){
    return(
          <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center p-2 "  
    style={{
    backgroundImage: "url(/pexels-pixabay-39284.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}>
         <div className="bg-white bg-opacity-90 p-6 rounded-lg max-w-3xl">
    <h1 className="text-3xl lg:text-6xl md:text-3xl sm:text-2xl font-bold mb-6 text-green-900">
      Digital Solutions That Build Trust & Drive Growth
    </h1>
    <p className="text-lg md:text-l text-gray-700">
    At <span className="text-green-700">PineByteDigital</span> we create stunning websites and engaging video content that help independent financial advisors and small business owners attract more clients, establish credibility, and grow their practice online.
    </p>
  </div>
        <div>
        <IconMarquee/>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <a
            href="/contact"
            className="px-8 py-4 bg-green-900 text-white rounded-lg hover:bg-green-600 hover:border-2 transition shadow-lg hover:shadow-xl"
          >
            Start Your Project
          </a>
          <a
            href="/portfolio"
            className="px-8 py-4   bg-green-900 text-white rounded-lg hover:bg-green-600 hover:border-2 transition"
          >
            View Our Examples
          </a>
        </div>
      </section>

      {/* Why Choose Us */}
    <section
  className="py-20 px-8"
//   style={{
//     backgroundImage: "url(/computer-w-notepad.jpg)",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//   }}
>
  <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8">
    {features.map((feature, index) => (
      <FeatureCard key={index} title={feature.title} description={feature.description} />
    ))}
  </div>
</section>


{/* How it Works */}
<section className="py-20 px-8 max-w-6xl mx-auto">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-900">
    Our Simple Process
  </h2>
  <div className="space-y-8">
    {processes.map(({ step, title, description }) => (
      <article key={step} className="bg-white p-8 rounded-xl shadow-md">
        <div className="flex items-center gap-4 mb-4">
            {/* className  if else Function For Steps */}
          <span className={`text-4xl font-bold text-green-900`}>
            {step.toString().padStart(2, "0")}
          </span>
           <h3
          className={`text-2xl font-semibold text-green-900`}
        >{title}</h3>
        </div>
        <p className="text-gray-600 ml-16">{description}</p>
      </article>
    ))}
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