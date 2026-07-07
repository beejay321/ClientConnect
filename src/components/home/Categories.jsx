import { useNavigate } from "react-router-dom";

const Categories = [
  { label: "🎨 Design", value: "Design" },
  { label: "💻 Programming", value: "Programming" },
  { label: "📚 Education", value: "Education" },
  { label: "💼 Business", value: "Business" },
  { label: "🎉 Entertainment", value: "Entertainment" },
  { label: "🍽️ Catering", value: "Catering" },
];

function Category() {
  const navigate = useNavigate();

  return (
    <>
      <section className="bg-white border-b border-warm-200 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {Categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => navigate(`/projects?category=${cat.value}`)}
                className="px-4 py-2 rounded-full border border-warm-200 text-sm text-teal-600 font-medium hover:border-teal-400 hover:bg-teal-100 transition-all"
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Category;
