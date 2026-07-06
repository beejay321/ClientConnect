import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-teal-600 text-white mt-auto">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <img
            src="https://res.cloudinary.com/dvyids286/image/upload/v1659043493/CapstoneProjects/wvc3mfop7l7qyjtckwqy.png"
            alt="ClientConnect"
            className="h-10 w-auto mb-3"
          />
          <p className="text-teal-100 text-sm leading-relaxed">
            Connecting talented freelancers with clients who have great
            projects.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-white">Platform</h4>
          <ul className="space-y-2">
            <li>
              <Link
                to="/projects"
                className="text-teal-100 text-sm hover:text-white transition-colors"
              >
                Browse Projects
              </Link>
            </li>
            <li>
              <Link
                to="/postproject"
                className="text-teal-100 text-sm hover:text-white transition-colors"
              >
                Post a Project
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="text-teal-100 text-sm hover:text-white transition-colors"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-white">Built with</h4>
          <ul className="space-y-2 text-teal-100 text-sm">
            <li>React + JavaScript</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-teal-500 mt-10 pt-6 text-center text-teal-200 text-sm">
        © {new Date().getFullYear()} ClientConnect. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
