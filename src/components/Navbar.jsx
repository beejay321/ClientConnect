import { Link, NavLink } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-warm-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/">
              <img
                src="https://res.cloudinary.com/dvyids286/image/upload/v1659043493/CapstoneProjects/wvc3mfop7l7qyjtckwqy.png"
                alt="ClientConnect"
                className="h-10 w-auto"
              />
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${isActive ? "text-teal-400" : "text-teal-600 hover:text-teal-400"}`
                }
              >
                Browse Projects
              </NavLink>
              <NavLink
                to="/postproject"
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${isActive ? "text-teal-400" : "text-teal-600 hover:text-teal-400"}`
                }
              >
                Post a Project
              </NavLink>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <div className="relative">
                <button
                  className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-warm-100 transition-colors"
                  aria-label="User menu"
                >
                  <img
                    src="https://gravatar.com/avatar/default?s=36&d=mp&r=x"
                    alt="Avatar"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm font-medium text-teal-600">▾</span>
                </button>

                <div className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-lg border border-warm-200 overflow-hidden"></div>
              </div>

              <Link
                to="/register"
                className="px-5 py-2 rounded-full bg-teal-400 text-white text-sm font-semibold hover:bg-teal-500 transition-all shadow-sm hover:shadow-md"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
