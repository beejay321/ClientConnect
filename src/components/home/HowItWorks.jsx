const steps = [
  {
    icon: "✍️",
    title: "Post a Project",
    desc: "Describe your project, set your budget and timeline.",
  },
  {
    icon: "🔍",
    title: "Review Bids",
    desc: "Receive proposals from skilled freelancers and compare offers.",
  },
  {
    icon: "🚀",
    title: "Get it Done",
    desc: "Choose the best match and watch your project come to life.",
  },
];

const HowItWorks = () => (
  <section className="py-24 bg-warm-50">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <span className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-600 text-sm font-semibold mb-4">
        Simple Process
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold text-teal-700 mb-4">
        How It Works
      </h2>
      <p className="text-lg text-slate-500 mb-16 max-w-xl mx-auto">
        Connect with top freelancers in just a few steps — it's fast, simple,
        and effective.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <div
            key={step.title}
            className="relative bg-white rounded-2xl p-8 shadow-sm border border-warm-200 hover:shadow-md hover:-translate-y-1 transition-all"
          >
            <div className="w-14 h-14 rounded-2xl bg-teal-100 flex items-center justify-center text-2xl mx-auto mb-5">
              {step.icon}
            </div>
            <div className="absolute -top-3 -left-3 w-7 h-7 rounded-full bg-teal-400 text-white text-xs font-bold flex items-center justify-center shadow">
              {i + 1}
            </div>
            <h3 className="font-semibold text-teal-700 text-lg mb-2">
              {step.title}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
