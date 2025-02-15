import Footer from "./Footer";
import Navbar from "./Navbar";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TreatmentList from "./TreatmentList";
import { products } from "./product";

const images = [
    "/relaxation2.jpg",
    "/bali2.jpg",
    "/facemassage.jpg",
    "/deep.jpg",
    "/bali.jpg",
    "/feet.jpg",
    "/hand.jpg"
  ];
const Treatment = () => {
   
      const [index, setIndex] = useState(0);

      const prevSlide = () => {
        setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      };
    
      const nextSlide = () => {
        setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      };
    
    return(
    <>
    <Navbar></Navbar>
    <div className="relative w-full max-w-12xl mx-auto overflow-hidden">
      <motion.img
        key={index}
        src={images[index]}
        alt="Slide"
        className="w-full h-96 object-cover"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
      />

      {/* Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-50 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-50 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        <ChevronRight size={24} />
      </button>
      <h2 className="text-center text-2xl font-bold mb-6">All Treatments</h2>
      <TreatmentList products={products} />
    </div>


    <Footer></Footer>
    </>

    )
}

export default Treatment;