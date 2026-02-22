import { createContext, useState } from "react"

export const recipecontext = createContext(null)

const RecipeContext = (props) => {

  const [data, setData] = useState(() => {
    const storedRecipes = localStorage.getItem("recipes")
    return storedRecipes ? JSON.parse(storedRecipes) : []
  })

  return (
    <recipecontext.Provider value={{ data, setData }}>
      {props.children}
    </recipecontext.Provider>
  )
}

export default RecipeContext