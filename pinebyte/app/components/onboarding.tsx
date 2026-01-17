import Link from "next/link";

export default function OnBoarding() {
  return (
    <section className="bg-gray-50 py-20 px-6">
  <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
    <h2 className="text-3xl font-bold text-green-900 mb-4 text-center">
      Client Onboarding Form
    </h2>

    <p className="text-gray-600 text-center mb-8">
      This helps us get everything we need to start your content quickly and smoothly.
    </p>

    <form
      action="https://formspree.io/f/mqagyrkw"
      method="POST"
      className="space-y-8"
    >
      {/* Hidden input for redirect */}
      <input type="hidden" name="_next" value="/" />

      {/* Business Info */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-green-900 text-center">
          Business Information
        </h3>
        <div className="grid md:grid-cols-2 gap-4 ">
          <input
            type="text"
            name="business_name"
            placeholder="Business Name"
            className="input text-black"
            required
          />
          <input
            type="text"
            name="contact_name"
            placeholder="Primary Contact Name"
            className="input text-black"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input text-black"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            className="input text-black"
          />
        </div>
      </div>

      {/* Scheduling */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-green-900 text-center">
          Scheduling
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="time_zone"
            placeholder="Time Zone (ex: EST, PST)"
            className="input text-black"
            required
          />
          <input
            type="text"
            name="best_days"
            placeholder="Best Days for Calls"
            className="input text-black"
          />
          <input
            type="text"
            name="best_time"
            placeholder="Best Time of Day"
            className="input text-black"
          />
        </div>
      </div>

      {/* Branding */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-green-900 text-center">
          Branding
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="website"
            placeholder="Website (if any)"
            className="input text-black"
          />
          <input
            type="text"
            name="social_links"
            placeholder="Social Media Links"
            className="input text-black"
          />
          <input
            type="text"
            name="brand_colors"
            placeholder="Brand Colors"
            className="input text-black"
          />
          <input
            type="text"
            name="brand_voice"
            placeholder="Brand Voice (professional, casual, bold, etc.)"
            className="input text-black"
          />
        </div>
      </div>

      {/* Content Goals */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-green-900 text-center">
          Content Goals
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="main_goal"
            placeholder="Main Goal for Video Content"
            className="input text-black"
          />
          <input
            type="text"
            name="platforms"
            placeholder="Platforms (TikTok, IG, YouTube, etc.)"
            className="input text-black"
          />
          <input
            type="text"
            name="posting_frequency"
            placeholder="How often do you want to post?"
            className="input text-black"
          />
        </div>
      </div>

      {/* Notes */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-green-900 text-center">
          Notes / Special Requests
        </h3>
        <textarea
          name="notes"
          rows={5}
          placeholder="Anything else we should know?"
          className="input text-black resize-none"
        ></textarea>
      </div>

      {/* Submit */}
      <div className="text-center pt-6">
        <button
          type="submit"
          className="bg-green-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          Submit Onboarding Form
        </button>
      </div>
    </form>
  </div>
</section>

  );
}
