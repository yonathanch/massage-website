import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Aos from "aos";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import TreatmentList from "./components/TreatmentList";
import { products } from "./components/product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Treatment from "./components/Treatment";
import About from "./components/about";
import Location from "./components/Location";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<LandingPage />} />
            <Route path="/treatment" element={<Treatment />} />
            <Route path="/location" element={<Location />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Navbar/>
      <LandingPage></LandingPage>
      <TreatmentList></TreatmentList>
      <Footer></Footer> */}
    </>
  );
}

export default App;
