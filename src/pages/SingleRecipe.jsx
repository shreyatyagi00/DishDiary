import { useContext, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { recipecontext } from "../context/RecipeContext"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"

const SingleRecipe = () => {

  const { data, setData } = useContext(recipecontext)
  const navigate = useNavigate()
  const params = useParams()

  const recipe = data.find((r) => r.id === params.id)

  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: recipe?.title,
      chef: recipe?.chef,
      image: recipe?.image,
      instructions: recipe?.instructions,
      desc: recipe?.desc,
      ingredients: recipe?.ingredients,
      category: recipe?.category
    }
  })

  const UpdateHandler = (updatedRecipe) => {
    const index = data.findIndex((r) => r.id === params.id)
    const copydata = [...data]
    copydata[index] = { ...copydata[index], ...updatedRecipe }

    setData(copydata)
    localStorage.setItem("recipes", JSON.stringify(copydata))
    toast.success("Recipe Updated Successfully 🚀")
  }

  const DeleteHandler = () => {

  // Remove from recipes
  const filterdata = data.filter(r => r.id !== params.id)
  setData(filterdata)
  localStorage.setItem("recipes", JSON.stringify(filterdata))

  // ALSO remove from favourites
  const favData = JSON.parse(localStorage.getItem("fav")) || []
  const updatedFav = favData.filter(f => f.id !== params.id)
  localStorage.setItem("fav", JSON.stringify(updatedFav))

  toast.success("Recipe Deleted Successfully ❌")
  navigate("/recipes")
}

  const [favourite, setFavourite] = useState(
    JSON.parse(localStorage.getItem("fav")) || []
  )

  const FavHandler = () => {
    const copyfav = [...favourite, recipe]
    setFavourite(copyfav)
    localStorage.setItem("fav", JSON.stringify(copyfav))
  }

  const UnFavHandler = () => {
    const filterfav = favourite.filter((f) => f.id !== recipe?.id)
    setFavourite(filterfav)
    localStorage.setItem("fav", JSON.stringify(filterfav))
  }

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-gray-900">
        Loading...
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-gray-800 text-white p-10">

      <div className="w-full grid md:grid-cols-2 gap-10">

        {/* LEFT SECTION */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl shadow-2xl p-8 relative overflow-hidden">

          {/* Favourite Icon */}
          {favourite.find((f) => f.id === recipe?.id) ? (
            <i
              onClick={UnFavHandler}
              className="ri-heart-fill absolute right-6 top-6 text-red-500 text-3xl cursor-pointer hover:scale-110 transition"
            ></i>
          ) : (
            <i
              onClick={FavHandler}
              className="ri-heart-line absolute right-6 top-6 text-red-400 text-3xl cursor-pointer hover:scale-110 transition"
            ></i>
          )}

          <h1 className="text-4xl font-bold mb-6 tracking-tight">
            {recipe.title}
          </h1>

          <img
            className="w-full h-80 object-cover rounded-2xl mb-8 shadow-lg"
            src={recipe.image}
            alt=""
          />

          <div className="space-y-6">

            <div>
              <p className="text-sm uppercase text-gray-400 tracking-wider">
                Chef
              </p>
              <p className="text-xl font-semibold">
                {recipe.chef}
              </p>
            </div>

            <div>
              <p className="text-sm uppercase text-gray-400 tracking-wider">
                Description
              </p>
              <p className="text-gray-300 leading-relaxed">
                {recipe.desc}
              </p>
            </div>

          </div>
        </div>


        {/* RIGHT SECTION – FORM */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl shadow-2xl p-8">

          <h2 className="text-2xl font-semibold mb-6">
            Update Recipe
          </h2>

          <form
            className="space-y-5"
            onSubmit={handleSubmit(UpdateHandler)}
          >

            <input
              className="w-full bg-gray-800 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500 transition"
              {...register("image")}
              type="url"
              placeholder="Image URL"
            />

            <input
              className="w-full bg-gray-800 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500 transition"
              {...register("chef")}
              type="text"
              placeholder="Chef Name"
            />

            <input
              className="w-full bg-gray-800 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500 transition"
              {...register("title")}
              type="text"
              placeholder="Recipe Title"
            />

            <textarea
              className="w-full resize-none min-h-[120px] overflow-hidden bg-gray-800 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500 transition"
              {...register("desc")}
              placeholder="Description"
            />

            <textarea
              className="w-full resize-none min-h-[120px] overflow-hidden bg-gray-800 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500 transition"
              {...register("ingredients")}
              placeholder="Ingredients"
            />

            <textarea
              className="w-full resize-none min-h-[120px] overflow-hidden bg-gray-800 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500 transition"
              {...register("instructions")}
              placeholder="Instructions"
            />

            <select
              className="w-full bg-gray-800 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500 transition"
              {...register("category")}
            >
              <option value="cat-1">Category 1</option>
              <option value="cat-2">Category 2</option>
              <option value="cat-3">Category 3</option>
              <option value="cat-4">Category 4</option>
            </select>

            <div className="flex gap-4 pt-4">

              <button
                type="submit"
                className="flex-1 bg-blue-600 hover:bg-blue-700 transition-all duration-300 rounded-xl py-3 font-semibold shadow-lg hover:shadow-blue-500/30"
              >
                Update
              </button>

              <button
                type="button"
                onClick={DeleteHandler}
                className="flex-1 bg-red-600 hover:bg-red-700 transition-all duration-300 rounded-xl py-3 font-semibold shadow-lg hover:shadow-red-500/30"
              >
                Delete
              </button>

            </div>

          </form>
        </div>

      </div>
    </div>
  )
}

export default SingleRecipe
