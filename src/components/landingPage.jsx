import { motion } from "framer-motion";
import { products } from "./product";
import TreatmentList from "./TreatmentList";
import Navbar from "./Navbar";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <>
      <Navbar />

      <div className="relative w-full min-h-screen overflow-hidden h-[700px]">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/bg-2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6 pb-15"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono leading-tight">
            MASSAGE GI SANCTUARY OF <br /> RELAXATION
          </h1>

          <motion.a
            href="#discover-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border bg-white text-[#C2A74E] font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300 hover:bg-[#1b1b1b] hover:text-white mt-6 font-serif"
          >
            Discover All
          </motion.a>
        </motion.div>
      </div>

      {/* Discover Section */}
      <section className="bg-white py-16 px-6 lg:px-24" id="discover-all">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-center text-lg font-semibold font-serif text-[#C2A74E] tracking-widest">
            TRADITIONAL MASSAGE
          </h2>
          <p className="text-center pt-5 text-gray-600 max-w-prose mx-auto">
            Balinese Massage is a traditional massage technique from Bali that
            combines gentle strokes, stretching, acupressure, and aromatherapy.
            This massage aims to relax the body, improve blood circulation, and
            relieve stress and muscle tension.
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative pt-8"
            >
              <img
                src="/bali.jpg"
                alt="Balinese Massage"
                className="w-full h-72 lg:h-96 object-cover rounded-xl shadow-md"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h3 className="text-2xl font-semibold text-gray-800">
                Relax With Balinese Massage
              </h3>
              <p className="mt-2 text-gray-600 pt-5 max-w-prose">
                A traditional massage technique from Bali that combines long
                strokes, deep pressure, acupressure, and reflexology. This
                massage uses aromatherapy oils to help relieve muscle tension,
                improve blood circulation, and provide deep relaxation.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* History Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 bg-[#1b1b1b] text-white px-10 py-12 gap-8"
      >
        <div className="relative">
          <img
            src="/history.jpg"
            alt="Spa History"
            className="rounded-lg object-cover h-[500px] w-full"
          />
        </div>
        <div className="flex flex-col justify-center px-6">
          <h2 className="text-2xl font-semibold mb-4 text-[#f4f3f1] font-mono">
            HISTORY
          </h2>
          <p className="text-lg leading-relaxed text-white max-w-prose">
            Massage GI is a sanctuary of relaxation and body care, inspired by
            the traditional Balinese massage. Founded in 2018, we are dedicated
            to providing a rejuvenating and calming spa experience with the
            warmth of Indonesian hospitality.
          </p>
        </div>
      </motion.section>

      <TreatmentList products={products} limit={3} />

      <Footer />
    </>
  );
};

export default LandingPage;
