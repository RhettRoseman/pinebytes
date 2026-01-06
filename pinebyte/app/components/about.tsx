import Link from "next/link"
import Image from "next/image"

export default function AboutComp() {
  return (
    <main className="bg-gray-50 text-gray-900 min-h-screen">

      {/* Hero / Intro */}
    <section
  className="relative flex flex-col justify-center items-center text-center min-h-screen"
  style={{
    backgroundImage: "url(/computer-w-notepad.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Overlay for readability */}
  <div className="absolute inset-0 "></div>

  {/* Content */}
  
   <div className="relative z-10 max-w-3xl px-6 bg-white rounded-2xl m-5 text-green-900">
  <h1 className="text-5xl lg:text-6xl md:text-5xl sm:text-3xl font-bold mb-6 leading-tight">
    About Us
  </h1>

  <p className="text-lg md:text-xl opacity-90 ">
    With years of experience as Director of Technology at a financial firm, our founder built reliable, results-driven digital solutions. We leverage that expertise to produce professional video content that actually works — helping your business engage audiences, build credibility, and grow.
  </p>
</div>


   
  
</section>
{/* Experience & Philosophy */}
{/* Experience & Approach */}
<section className="py-20 px-8 max-w-5xl mx-auto space-y-12">
  <h2 className="text-4xl font-bold text-green-900 mb-8 text-center">
    Our Experience & Approach
  </h2>

  <div className="flex justify-center items-center">
    <Image 
      src="/headshot.jpeg" 
      alt="Team Headshot" 
      width={200} 
      height={200} 
      className="rounded-full"
    />
  </div>

  {/* Core Service Philosophy */}
  <div className="max-w-3xl mx-auto p-8 bg-white rounded-2xl shadow-lg space-y-6 text-center text-gray-700">
    <p>
      We help businesses create video content that performs. From short social clips to long-form videos, we make sure every project engages your audience and represents your brand professionally.
    </p>
    <p>
      Our approach is all about understanding your goals and audience. That way, every edit, graphic, and production decision maximizes results and keeps your brand consistent.
    </p>
    <p>
      We don’t just deliver videos — we provide solutions that save time, increase engagement, and grow your business.
    </p>
  </div>

  {/* Why Work With Us */}
  <div className="max-w-3xl mx-auto p-8 rounded-2xl shadow-lg space-y-6 text-center text-gray-700">
    <p>
      Whether you need short-form content for social media, long-form videos for YouTube or podcasts, or full webinar production, we provide flexible, professional solutions tailored to your needs.
    </p>
    <p>
      Every video we produce is designed to reflect your brand, communicate your message clearly, and keep your audience engaged.
    </p>
    <p>
      Partnering with us means less stress, faster delivery, and video content that truly works for your business.
    </p>
  </div>
</section>



      {/* CTA */}
      <section className="py-20 text-center bg-green-900 text-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Let’s Build Something That Works
        </h2>
        <p className="max-w-xl mx-auto mb-6 opacity-90">
         We turn raw footage into powerful video content that builds trust, grows your audience, and drives results.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-green-900 font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition"
        >
          Schedule a Free Consultation
        </Link>
      </section>

    </main>
  );
}