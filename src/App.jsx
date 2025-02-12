import { useEffect } from "react"
import Navbar from "./components/Navbar"
import Aos from "aos"
import LandingPage from "./components/landingPage"
import Footer from "./components/Footer"
import TreatmentList from "./components/TreatmentList"
import { products } from "./components/product"


function App() {
  
  useEffect(()=>{
    Aos.init({
      duration:1500,

    })

  }, [])

  return (
    <>
      <Navbar/>
      <LandingPage></LandingPage>
      <TreatmentList></TreatmentList>
      <Footer></Footer>
    </>
  )
}

export default App
