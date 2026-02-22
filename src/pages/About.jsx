const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">

      <div className="max-w-6xl mx-auto px-6 space-y-20">

        {/* HERO */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
  Dish Diary
</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
           Dish Diary is a modern recipe management web application where users can create, update, delete, and organize their favorite recipes in a clean and beautiful interface.
          </p>
        </div>

        {/* FEATURES */}
        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl hover:-translate-y-2 transition cursor-pointer">
            <h3 className="text-xl font-semibold mb-3">Create Recipes</h3>
            <p className="text-gray-400">
              Add your own recipes with image, ingredients, instructions, and categories.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl hover:-translate-y-2 transition cursor-pointer">
            <h3 className="text-xl font-semibold mb-3">Manage & Update</h3>
            <p className="text-gray-400">
              Edit or delete recipes anytime with a smooth user experience.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl hover:-translate-y-2 transition cursor-pointer">
            <h3 className="text-xl font-semibold mb-3">Favourite System</h3>
            <p className="text-gray-400">
              Save your favorite dishes and access them instantly from your dashboard.
            </p>
          </div>

        </div>

        {/* TECH STACK */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-10 shadow-2xl text-center space-y-6">

          <h2 className="text-3xl font-bold">
            Built With Modern Technologies
          </h2>

          <div className="flex flex-wrap justify-center gap-4 text-sm">

            <span className="bg-blue-600/20 px-4 py-2 rounded-full">React</span>
            <span className="bg-purple-600/20 px-4 py-2 rounded-full">React Router</span>
            <span className="bg-green-600/20 px-4 py-2 rounded-full">Tailwind CSS</span>
            <span className="bg-yellow-600/20 px-4 py-2 rounded-full">Context API</span>
            <span className="bg-pink-600/20 px-4 py-2 rounded-full">React Hook Form</span>
            <span className="bg-indigo-600/20 px-4 py-2 rounded-full">LocalStorage</span>

          </div>

        </div>

      </div>
    </div>
  )
}

export default About