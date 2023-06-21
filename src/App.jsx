import Navbar from "./views/Navbar/Navbar"
import Home from "./views/Home"
import About from "./views/About"
import Services from "./views/Services"
import Packages from "./views/Packages"
import Contact from "./views/Contact"
import { Bars2Icon, Bars3Icon } from "@heroicons/react/24/solid"
import Footer from "./views/Footer"

function App() {


  return (
    <div className="app  ">
           <Navbar />
           <Home/>
           <About/>
           <Services/>
           <Packages/>
           <Contact/>
           <Footer/>
          
    </div>
    
  )
}

export default App
