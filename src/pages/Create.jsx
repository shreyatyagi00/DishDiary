import { nanoid } from "nanoid"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { recipecontext } from "../context/RecipeContext"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const Create = () => {

  const navigate = useNavigate()
  const { data, setData } = useContext(recipecontext)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const SubmitHandler = (recipe) => {
    recipe.id = nanoid()

    const copydata = [...data, recipe]

    setData(copydata)
    localStorage.setItem("recipes", JSON.stringify(copydata))

    toast.success("Recipe Created Successfully 🚀")
    reset()
    navigate("/recipes")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">

      <div className="max-w-3xl mx-auto px-6">

        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl shadow-2xl p-10">

          <h1 className="text-3xl font-bold mb-8 text-center">
            Create New Recipe
          </h1>

          <form
            onSubmit={handleSubmit(SubmitHandler)}
            className="space-y-6"
          >

            {/* IMAGE */}
            <div>
              <label className="block mb-2 text-sm text-gray-400">
                Image URL
              </label>
              <input
                {...register("image", { required: "Image URL is required" })}
                type="url"
                placeholder="Enter image URL"
                className="w-full bg-gray-800 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              {errors.image && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.image.message}
                </p>
              )}
            </div>

            {/* CHEF */}
            <div>
              <label className="block mb-2 text-sm text-gray-400">
                Chef Name
              </label>
              <input
                {...register("chef", { required: "Chef name is required" })}
                type="text"
                placeholder="Enter chef name"
                className="w-full bg-gray-800 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              {errors.chef && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.chef.message}
                </p>
              )}
            </div>

            {/* TITLE */}
            <div>
              <label className="block mb-2 text-sm text-gray-400">
                Recipe Title
              </label>
              <input
                {...register("title", { required: "Title is required" })}
                type="text"
                placeholder="Enter recipe title"
                className="w-full bg-gray-800 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              {errors.title && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.title.message}
                </p>
              )}
            </div>

            {/* DESCRIPTION */}
            <div>
              <label className="block mb-2 text-sm text-gray-400">
                Description
              </label>
              <textarea
                {...register("desc", { required: "Description is required" })}
                placeholder="Write recipe description"
                rows="3"
                className="w-full resize-none min-h-[120px] overflow-hidden bg-gray-800 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500 transition"
              ></textarea>
              {errors.desc && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.desc.message}
                </p>
              )}
            </div>

            {/* INGREDIENTS */}
            <div>
              <label className="block mb-2 text-sm text-gray-400">
                Ingredients
              </label>
              <textarea
                {...register("ingredients", { required: "Ingredients required" })}
                placeholder="Separate ingredients with comma"
                rows="3"
                className="w-full resize-none min-h-[120px] overflow-hidden bg-gray-800 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500 transition"
              ></textarea>
              {errors.ingredients && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.ingredients.message}
                </p>
              )}
            </div>

            {/* INSTRUCTIONS */}
            <div>
              <label className="block mb-2 text-sm text-gray-400">
                Instructions
              </label>
              <textarea
                {...register("instructions", { required: "Instructions required" })}
                placeholder="Separate steps with comma"
                rows="3"
                className="w-full resize-none min-h-[120px] overflow-hidden bg-gray-800 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500 transition"
              ></textarea>
              {errors.instructions && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.instructions.message}
                </p>
              )}
            </div>

            {/* CATEGORY */}
            <div>
              <label className="block mb-2 text-sm text-gray-400">
                Category
              </label>
              <select
                {...register("category")}
                className="w-full bg-gray-800 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500 transition"
              >
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Snacks">Snacks</option>
                <option value="Dinner">Dinner</option>
              </select>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 rounded-xl py-3 font-semibold shadow-lg hover:shadow-blue-500/30 mt-6"
            >
              Create Recipe
            </button>

          </form>

        </div>

      </div>
    </div>
  )
}

export default Create
