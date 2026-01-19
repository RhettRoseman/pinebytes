export default function WorkflowComp() {
  return (
    <section className="py-20 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-green-900 text-center mb-12">
          How Working With Us Works
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Client Side */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-green-900 mb-6 text-center">
              What You Do
            </h3>
            <ul className="list-decimal list-inside space-y-4 text-gray-700">
              <li>Record your clips or audio — short-form, long-form, or podcast style</li>
              <li>Send your footage or audio to us via your preferred method</li>
              <li>Provide any brand guidelines or key messaging notes</li>
              <li>Review the content once we deliver drafts (optional feedback)</li>
            </ul>
          </div>

          {/* PineByte Side */}
          <div className="bg-green-900 p-8 rounded-2xl shadow-lg text-white">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              What We Do
            </h3>
            <ul className="list-decimal list-inside space-y-4">
              <li>Create a content plan based on your footage and goals</li>
              <li>Edit videos with captions, overlays, and branding</li>
              <li>Optimize pacing, storytelling, and engagement for each platform</li>
              <li>Deliver ready-to-post content on your schedule</li>
              <li>Handle revisions and provide white-label options if needed</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
