import Mainroutes from "./routes/Mainroutes"
import Navbar from "./components/Navbar"
const App = () => {
  return (
    <div className="min-h-screen w-full bg-gray-800 text-white font-thin px-[10%] py-10 overflow-x-hidden">
      <Navbar />
      <Mainroutes />
    </div>
  )
}

export default App
