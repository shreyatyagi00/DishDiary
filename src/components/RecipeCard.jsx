import { Link } from "react-router-dom"

const RecipeCard = ({ recipe }) => {

  const { id, image, desc, chef, title, category } = recipe

  const defaultImage =
    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80"

  return (
    <Link
      to={`/recipes/details/${id}`}
      className="group relative w-[320px] bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden shadow-xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2"
    >

      {/* IMAGE SECTION */}
      <div className="relative h-56 overflow-hidden">

        <img
          src={image || defaultImage}
          alt={title}
          onError={(e) => {
            e.target.onerror = null
            e.target.src = defaultImage
          }}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-blue-600/80 backdrop-blur-md text-xs px-3 py-1 rounded-full font-medium">
          {category || "General"}
        </div>

      </div>

      {/* CONTENT */}
      <div className="p-6 space-y-4">

        <h2 className="text-xl font-semibold tracking-tight group-hover:text-blue-400 transition">
          {title}
        </h2>

        <p className="text-sm text-gray-400">
          by <span className="text-white font-medium">{chef}</span>
        </p>

        <p className="text-gray-300 text-sm leading-relaxed break-words line-clamp-3">
          {desc}
        </p>

      </div>

      {/* Bottom Glow Line */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition duration-500"></div>

    </Link>
  )
}

export default RecipeCard