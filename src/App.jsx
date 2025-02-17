import { useEffect } from "react";
import Aos from "aos";
import LandingPage from "./components/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Treatment from "./components/Treatment";
import About from "./components/About";
import Location from "./components/Location";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
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
    </>
  );
}

export default App;
