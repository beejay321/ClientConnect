function StatsBanner() {
  return (
    <>
      <section className="bg-warm-100 py-12">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "500+", label: "Projects Posted" },
            { value: "200+", label: "Freelancers" },
            { value: "7", label: "Categories" },
            { value: "100%", label: "Free to Join" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold text-teal-600">{stat.value}</p>
              <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default StatsBanner;
