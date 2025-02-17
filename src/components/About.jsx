import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Footer from "./Footer";
import Navbar from "./Navbar";
const About = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.6 },
    }),
  };
  return (
    <>
      <Navbar></Navbar>
      <section className="bg-white text-black py-16 px-6 md:px-12 xl:px-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="flex flex-col space-y-6 pt-8 ">
            <motion.img
              src="/team1.jpg"
              alt="team1"
              className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
            <motion.img
              src="/team2.jpg"
              alt="team2"
              className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>

          {/* Text Section */}
          <div className="font-serif">
            <motion.p
              className="text-lg md:text-xl leading-relaxed text-center md:text-left"
              initial="hidden"
              animate="visible"
              custom={1}
              variants={textVariants}
            >
              <span className="font-semibold font-mono text-2xl">
                Massage GI
              </span>{" "}
              is a sanctuary of relaxation and body care, inspired by the
              traditional <span className="italic">Balinese massage</span>.
              Founded in <span className="font-semibold">2018</span>, we are
              dedicated to providing a rejuvenating and calming spa experience
              with the warmth of Indonesian hospitality.
            </motion.p>

            {/* Treatments List */}
            <motion.div
              className="mt-6 pt-7"
              initial="hidden"
              animate="visible"
              custom={2}
              variants={textVariants}
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-[#C2A74E] mb-4 text-center md:text-left ">
                Our Treatments
              </h3>
              <ul className="text-lg md:text-xl space-y-3">
                <motion.li custom={3} variants={textVariants}>
                  ✔{" "}
                  <span className="font-semibold">
                    Traditional Balinese Massage
                  </span>{" "}
                  - A signature Balinese massage combining finger pressure
                  techniques and aromatherapy oils.
                </motion.li>
                <motion.li custom={4} variants={textVariants}>
                  ✔ <span className="font-semibold">Aromatherapy Massage</span>{" "}
                  - A soothing massage using essential oils for deep relaxation.
                </motion.li>
                <motion.li custom={5} variants={textVariants}>
                  ✔ <span className="font-semibold">Reflexology</span> -
                  Pressure-point foot massage to restore body balance.
                </motion.li>
                <motion.li custom={6} variants={textVariants}>
                  ✔ <span className="font-semibold">Hot Stone Therapy</span> - A
                  massage using heated stones to improve blood circulation and
                  relieve muscle tension.
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Automatic Image Slider */}
        <div className="mt-16 max-w-8xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="rounded-xl shadow-lg"
          >
            <SwiperSlide>
              <img
                src="/bali.jpg"
                alt="Balinese Spa"
                className="w-full h-80 md:h-96 object-cover rounded-xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/relaxation2.jpg"
                alt="Relaxing Massage"
                className="w-full h-80 md:h-96 object-cover rounded-xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/aromatherapy.png"
                alt="Aromatherapy"
                className="w-full h-80 md:h-96 object-cover rounded-xl"
              />
            </SwiperSlide>
            <style>
              {`
      .swiper-pagination-bullet-active {
        background-color: #1b1b1b !important;
      }
    `}
            </style>
          </Swiper>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default About;
