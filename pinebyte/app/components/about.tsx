import Link from "next/link";
import Image from "next/image";

export default function AboutComp() {
  return (
    <main className="bg-gray-50 text-gray-900 min-h-screen">

      {/* Hero / Intro */}
      <section
        className="relative flex flex-col justify-center items-center text-center min-h-screen"
        style={{
          backgroundImage: "url('/keyboard-edit.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "bottom-center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black opacity-20"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl px-6 bg-white bg-opacity-90 rounded-2xl m-5 text-green-900">
          <h2 className="text-5xl lg:text-6xl md:text-5xl sm:text-3xl font-bold mb-6 leading-tight">
            About PineByte Digital
          </h2>

          <p className="text-lg md:text-xl opacity-90">
            In a world flooded with AI-generated video, we focus on the one thing technology can’t fake:
            <span className="font-bold"> real human connection</span>.
            PineByte Digital creates video content that sounds natural, feels authentic, and builds trust with the people watching.
          </p>
        </div>
      </section>

      {/* Experience & Philosophy */}
      <section className="py-20 px-8 max-w-5xl mx-auto space-y-12">
        <h2 className="text-4xl font-bold text-green-900 mb-8 text-center">
          Our Experience & Philosophy
        </h2>

        <div className="flex justify-center items-center">
          <Image
            src="/headshot.jpeg"
            alt="Founder Headshot"
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>

        {/* Core Philosophy */}
        <div className="max-w-3xl mx-auto p-8 bg-white rounded-2xl shadow-lg space-y-6 text-center text-gray-700">
          <p>
            We didn’t start PineByte Digital to churn out content faster.
            We started it because we kept seeing good businesses lose attention
            simply because their videos didn’t feel real.
          </p>
          <p>
            AI tools can write scripts, cut clips, and follow templates —
            but they can’t judge tone, pacing, or emotional timing the way a human can.
            That’s why so much video content today looks perfect and feels empty.
          </p>
          <p>
            Our approach is simple: use modern tools to move efficiently,
            but keep a real human in control of the story.
          </p>
        </div>

        {/* Why Work With Us */}
        <div className="max-w-3xl mx-auto p-8 rounded-2xl shadow-lg space-y-6 text-center text-gray-700 bg-white">
          <p>
            We specialize in <span className="font-semibold">short-form clips, long-form edits, podcasts, and webinar videos</span>
            for financial advisors and small business owners who want their content to actually connect.
          </p>
          <p>
            Every video is carefully edited, branded, and paced to sound like you —
            not a script, not a template, and not an AI voice guessing what feels right.
          </p>
          <p>
            When you work with PineByte Digital, you’re not hiring a file-drop editor.
            You’re partnering with someone who understands how attention, trust,
            and storytelling actually work online.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-green-900 text-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Let’s Make Your Content Feel Real
        </h2>
        <p className="max-w-xl mx-auto mb-6 opacity-90">
          If you’re tired of generic, over-produced video and want content that actually represents you,
          let’s talk.
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


// import Link from "next/link";
// import Image from "next/image";

// export default function AboutComp() {
//   return (
//     <main className="bg-gray-50 text-gray-900 min-h-screen">

//       {/* Hero / Intro */}
//       <section
//         className="relative flex flex-col justify-center items-center text-center min-h-screen"
//         style={{
//           backgroundImage: "url('/laptop-camera-desk.jpg')",
//           backgroundSize: "cover",
//           backgroundPosition: "bottom-center",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         {/* Overlay for readability */}
//         <div className="absolute inset-0 bg-black opacity-20"></div>

//         {/* Content */}
//         <div className="relative z-10 max-w-3xl px-6 bg-white bg-opacity-90 rounded-2xl m-5 text-green-900">
//           <h2 className="text-5xl lg:text-6xl md:text-5xl sm:text-3xl font-bold mb-6 leading-tight">
//             About PineByte Digital
//           </h2>

//           <p className="text-lg md:text-xl opacity-90">
//             We produce high-quality <span className="font-bold">short-form clips, long-form edits, and intro videos</span> for financial advisors and small business owners. Every video is polished, on-brand, and crafted to engage your audience — without eating up your time.
//           </p>
//         </div>
//       </section>

//       {/* Experience & Philosophy */}
//       <section className="py-20 px-8 max-w-5xl mx-auto space-y-12">
//         <h2 className="text-4xl font-bold text-green-900 mb-8 text-center">
//           Our Experience & Approach
//         </h2>

//         <div className="flex justify-center items-center">
//           <Image 
//             src="/headshot.jpeg" 
//             alt="Founder Headshot" 
//             width={200} 
//             height={200} 
//             className="rounded-full"
//           />
//         </div>

//         {/* Core Philosophy */}
//         <div className="max-w-3xl mx-auto p-8 bg-white rounded-2xl shadow-lg space-y-6 text-center text-gray-700">
//           <p>
//             We know what it takes to make video content that actually works. From quick social clips to long-form videos and webinar edits, every project is designed to help you connect with your audience and grow your business.
//           </p>
//           <p>
//             Our process is simple: we listen, plan, and produce content that aligns with your goals and reflects your brand. We handle all the editing, branding, captions, and polish so your videos are ready to post.
//           </p>
//           <p>
//             We don’t just deliver files — we deliver results that save you time, increase engagement, and make your business look professional across every platform.
//           </p>
//         </div>

//         {/* Why Work With Us */}
//         <div className="max-w-3xl mx-auto p-8 rounded-2xl shadow-lg space-y-6 text-center text-gray-700">
//           <p>
//             Whether you need short-form social content, long-form YouTube or podcast videos, or full webinar production, we provide flexible solutions tailored to your needs.
//           </p>
//           <p>
//             Every video we create is designed to reflect your brand, communicate your message clearly, and keep your audience engaged.
//           </p>
//           <p>
//             Partnering with PineByte Digital means less stress, faster delivery, and professional video content that actually works for your business.
//           </p>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-20 text-center bg-green-900 text-white">
//         <h2 className="text-3xl md:text-5xl font-bold mb-6">
//           Let’s Bring Your Videos to Life
//         </h2>
//         <p className="max-w-xl mx-auto mb-6 opacity-90">
//           From raw footage to fully branded, polished videos, we help your business capture attention, build credibility, and grow.
//         </p>
//         <Link
//           href="/contact"
//           className="inline-block bg-white text-green-900 font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition"
//         >
//           Schedule a Free Consultation
//         </Link>
//       </section>

//     </main>
//   );
// }
