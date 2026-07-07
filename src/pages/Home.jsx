import { useNavigate } from "react-router-dom";
import Category from "../components/home/Categories";
import HowItWorks from "../components/home/HowItWorks";
import StatsBanner from "../components/home/StatsBanner";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <section className="relative overflow-hidden bg-gradient-to-br from-teal-600 via-teal-500 to-teal-400 text-white">
          {/* Decorative blobs */}
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-orange-300/20 blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white/90 text-sm font-medium mb-6">
                🌟 Freelance Marketplace
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Find your perfect
                <span className="block text-orange-300">project match</span>
              </h1>
              <p className="text-teal-100 text-lg mb-10 leading-relaxed max-w-md">
                Connect with skilled freelancers or find exciting projects. Your
                next great collaboration starts here.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick=""
                  className="px-8 py-3.5 rounded-full bg-white text-teal-600 font-semibold hover:bg-orange-300 hover:text-white transition-all shadow-lg hover:shadow-xl"
                >
                  Post a Project
                </button>
                <button
                  onClick={() => navigate("/projects")}
                  className="px-8 py-3.5 rounded-full border-2 border-white/70 text-white font-semibold hover:bg-white/10 transition-all"
                >
                  Browse Projects
                </button>
              </div>
            </div>

            {/* Hero image */}
            <div className="hidden md:block relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://res.cloudinary.com/dvyids286/image/upload/v1659151316/CapstoneProjects/cdo9kdqyxmh7igscmenb.jpg"
                  alt="Freelancers working"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-700/30 to-transparent" />
              </div>
              {/* Floating stat cards */}
              <div className="absolute -bottom-4 -left-6 bg-white rounded-2xl shadow-xl px-5 py-3 flex items-center gap-3">
                <span className="text-2xl">✅</span>
                <div>
                  <p className="font-bold text-teal-700 text-sm">
                    Projects Posted
                  </p>
                  <p className="text-xs text-slate-500">
                    Join a growing community
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Category />
        <StatsBanner />
        <HowItWorks />
        <section className="bg-gradient-to-r from-orange-300 to-orange-400 text-white py-16">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-orange-100 mb-8 text-lg">
              Join hundreds of clients and freelancers already using
              ClientConnect.
            </p>
            <button
              onClick={() => navigate("/register")}
              className="px-10 py-4 rounded-full bg-white text-orange-400 font-bold text-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
            >
              Create Free Account
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
