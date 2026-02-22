import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex items-center space-y-8 animate-fadeIn">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center ">

        {/* LEFT CONTENT */}
        <div className="space-y-8 animate-fadeIn">

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Discover & Create
            <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Amazing Recipes
            </span>
          </h1>

          <p className="text-gray-400 text-lg max-w-xl">
            Your personal recipe manager. Save, update, and organize your favorite dishes beautifully — all in one place.
          </p>

          <div className="flex gap-4 flex-wrap">

            <Link
              to="/recipes"
              className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-blue-500/30"
            >
              Explore Recipes
            </Link>

            <Link
              to="/create-recipe"
              className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 px-6 py-3 rounded-xl font-semibold"
            >
              Create Recipe
            </Link>

          </div>

        </div>

        {/* RIGHT CONTENT (IMAGE / VISUAL) */}
        <div className="relative">

          <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>

          <img
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061"
            alt="food"
            className="relative z-10 rounded-3xl shadow-2xl"
          />

        </div>

      </div>
    </div>
  )
}

export default Home