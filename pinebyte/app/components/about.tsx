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
  <div className="relative z-10 max-w-3xl px-6 bg-white rounded-2xl text-green-900">
    <h1 className="text-5xl lg:text-6xl md:text-5xl sm:text-3xl font-bold mb-6 leading-tight">
      About Me
    </h1>
   
     <p className="text-lg md:text-xl opacity-90">
         As Director of Technology at a financial firm, I learned how to build reliable, results-driven solutions—this experience ensures your business gets professional digital tools that actually work and grow your client base.
    </p>

   
  </div>
</section>
{/* Experience & Philosophy */}
<section className="py-20 px-8 max-w-5xl mx-auto space-y-12"

> 
 {/* bg-green-900 opacity-85 */}
  <h2 className="text-4xl font-bold text-green-900 mb-8 text-center">
    Experience & Approach
  </h2>

  {/* Core Experience Card */}
  <div className="max-w-3xl mx-auto p-8 bg-white rounded-2xl shadow-lg space-y-6 text-center text-gray-700">
    <p>
      Over the past 6 years, I’ve helped small businesses and independent financial advisors establish a strong online presence.
      From responsive websites to engaging video content, every project I take on is designed with your goals in mind.
    </p>
    <p>
      I focus on understanding your business inside and out. That way, every digital solution isn’t just beautiful—it actually performs and drives results.
    </p>
    <p>
      Your success is my priority. I don’t just deliver a product; I partner with you to make sure it works for your business long-term.
    </p>
  </div>

  {/* Financial Advisor Background Card */}
  <div className="max-w-3xl mx-auto p-8 rounded-2xl shadow-lg space-y-6 text-center text-gray-700">
    <p className="text-lg font-semibold text-green-900">
      As a second-generation financial advisor and the grandson of a blue-collar business owner, I understand the unique challenges independent advisors face.
    </p>
    <p>
      From acquiring clients to navigating policy sales, the daily hurdles can be daunting. I’ve experienced them firsthand, and I know what works.
    </p>
    <p>
      Partner with me to streamline your process, grow your practice, and make your work more rewarding—without sacrificing the quality and integrity your clients expect.
    </p>
  </div>
</section>


      {/* CTA */}
      <section className="py-20 text-center bg-green-900 text-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Let’s Build Something That Works
        </h2>
        <p className="max-w-xl mx-auto mb-6 opacity-90">
          Whether you need a new website, video content, or a complete digital strategy, I’m here to help your business succeed.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-green-900 font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition"
        >
          Schedule a Free Consultation
        </a>
      </section>

    </main>
  );
}