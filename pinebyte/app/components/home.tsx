import Link from "next/link";
import Image from "next/image";
import IconMarquee from "../components/icons/Languages"

// Featured section class
interface Feature {
  title: string;
  description: string;
}
// Featured section Array
const features: Feature[] = [
  {
    title: "We Know Video That Works",
    description: "We understand what engages audiences and builds credibility. Every edit is polished, on-brand, and optimized for results."
  },
  {
    title: "Fast Turnaround",
    description: "Your time is valuable. Get short-form clips, long-form edits, or podcast content delivered on schedule without sacrificing quality."
  },
  {
    title: "Transparent Pricing",
    description: "No hidden fees. Know exactly what you’re paying for, whether it’s a monthly package or additional short- and long-form videos."
  },
  {
    title: "Ongoing Support & White-Label Delivery",
    description: "We don’t just deliver files. We provide updates, revisions, and white-label options so your content is ready to post or resell."
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
const processes: Process[] = [
  {
    step: 1,
    title: "Content Intake & Planning",
    description:
      "We gather your footage, brand assets, and goals, then plan your content schedule based on your chosen package, whether it’s short-form only or includes long-form edits.",
  },
  {
    step: 2,
    title: "Editing & Branding",
    description:
      "We create your short clips and long-form edits with captions, overlays, and branding elements included according to your package level.",
  },
  {
    step: 3,
    title: "Delivery & Review",
    description:
      "Your edits are delivered on a weekly or monthly schedule depending on your package, giving you time to review and request adjustments.",
  },
  {
    step: 4,
    title: "Finalization & Optimization",
    description:
      "We finalize your content, ensuring it’s polished, on-brand, and ready for posting. Higher-tier packages get priority turnaround, content planning, and white-label options.",
  },
];

export default function HomeComp(){
    return(
          <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center p-2 "  
    style={{
    backgroundImage: "url(/biteofpine.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}>
   <div className="bg-white bg-opacity-90 p-6 rounded-lg max-w-3xl">
  <h1 className="text-3xl lg:text-6xl md:text-3xl sm:text-2xl font-bold mb-6 text-green-900">
    Video Content That Engages, Converts & Grows Your Brand
  </h1>
  <p className="text-lg md:text-l text-gray-700">
    At <span className="text-green-700">PineByteDigital</span>, we produce high-quality short-form clips, long-form edits, and podcast content that help independent financial advisors and small business owners capture attention, build credibility, and grow their audience — all while saving time and keeping your brand consistent.
  </p>
</div>

        {/* <div className="relative w-full overflow-hidden">
        <IconMarquee/>
        </div> */}
        <div className="flex flex-col md:flex-row gap-4 m-10">
          <Link
             href="/services"
            className="px-8 py-4 bg-green-900 text-white rounded-lg hover:bg-green-600 hover:border-2 transition shadow-lg hover:shadow-xl"
          >
            Start Your Project
          </Link>
          <Link
            href="/portfolio"
            className="px-8 py-4   bg-green-900 text-white rounded-lg hover:bg-green-600 hover:border-2 transition"
          >
            View Our Examples
          </Link>
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
        <Link
          href="/contact"
          className="inline-block px-10 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition shadow-xl hover:shadow-2xl"
        >
          Get Started Today
        </Link>
      </section>
    </main>
    )
}