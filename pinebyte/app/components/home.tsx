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
    title: "🎯 Video That Actually Converts",
    description: "We don’t just edit clips—we craft content designed to capture attention, build trust with your audience, and drive real engagement for your business."
  },
  {
    title: "⚡ Lightning-Fast Turnaround",
    description: "Need content ready on schedule? Short-form clips, long-form edits, or podcast episodes delivered reliably so you never miss a posting deadline."
  },
  {
    title: "💵 Straightforward, Honest Pricing",
    description: "No surprise fees, no hidden costs. You know exactly what you’re paying for—whether it’s a monthly package or extra edits—and every dollar goes toward results."
  },
  {
    title: "🤝 Support That Actually Helps",
    description: "We don’t just drop files and disappear. Get revisions, updates, and white-label options so every video is polished, branded, and ready to post—or resell—without headaches."
  }
];


// Feature Card Section 
const FeatureCard: React.FC<Feature> = ({ title, description }) => (
  <div className="bg-white p-10 rounded-lg shadow-md  flex flex-col justify-center mt-1">
    <h3 className="text-xl font-semibold text-green-900 m-5">{title}</h3>
    <p className="text-gray-600 text-sm mr-2 ml-2 justify">{description}</p>
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
    title: "Onboarding & Content Planning",
    description:
      "We kick things off with a quick onboarding session to understand your brand, goals, and content needs. We gather your footage, logos, and brand assets, then map out a content schedule tailored to your package—short-form, long-form, or both.",
  },
  {
    step: 2,
    title: "Editing & Branding",
    description:
      "Our team transforms your footage into polished short clips or long-form videos, adding captions, overlays, and branding elements. Everything is aligned with your style and goals, so your content looks professional and cohesive.",
  },
  {
    step: 3,
    title: "Delivery & Feedback",
    description:
      "We deliver your videos on your preferred schedule—weekly or monthly—so you have time to review them. You can request revisions or adjustments to make sure every video hits the mark.",
  },
  {
    step: 4,
    title: "Finalization & Optimization",
    description:
      "After feedback, we finalize your content and make any last improvements to ensure it’s ready to post. Higher-tier packages also get priority turnaround, content planning support, and white-label delivery options.",
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
  At <span className="text-green-700">PineByteDigital</span>, we create short-form clips, long-form edits, and podcast content that help your business get noticed, build trust, and grow your audience.  
</p>
<p className="text-lg md:text-l text-gray-700">
  Whether you just need a single video or a long-term content partner, we’re here to make the process easy. We handle the editing, branding, and polish so your videos look professional and consistent—without taking up your time.
</p>

</div>

        {/* <div className="relative w-full overflow-hidden">
        <IconMarquee/>
        </div> */}
        <div className="flex flex-col md:flex-row gap-4 m-10">
          <Link
             href="/contact"
            className="px-8 py-4 bg-green-900 text-white rounded-lg hover:bg-green-600 hover:border-2 transition shadow-lg hover:shadow-xl"
          >
            Start Your Project
          </Link>
          {/* <Link
            href="/portfolio"
            className="px-8 py-4   bg-green-900 text-white rounded-lg hover:bg-green-600 hover:border-2 transition"
          >
            View Our Examples
          </Link> */}
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