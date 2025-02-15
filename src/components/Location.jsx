import Navbar from "./Navbar";
import { FaMapMarkerAlt } from "react-icons/fa";
import Footer from "./Footer";
const Location = () => {
  return (
    <>
      <Navbar></Navbar>
      <section className="grid grid-cols-1 md:grid-cols-2 bg-[#1b1b1b] text-white px-6 sm:px-8 md:px-16 lg:px-24 py-12 gap-8">
        {/* Bagian Informasi Lokasi */}
        <div className="px-6 sm:px-10 pt-6 md:pt-10">
          <h2 className="text-xl sm:text-2xl font-bold font-mono pt-4 md:pt-8">
            Our Venue
          </h2>
          <div className="flex items-center gap-2 pt-6">
            <FaMapMarkerAlt className="text-red-600 text-2xl sm:text-3xl" />
            <span className="text-base sm:text-lg md:text-xl text-[#C2A74E]">
              Ubud, Ubud District, Gianyar Regency, Bali, Indonesia
            </span>
          </div>
        </div>

        {/* Bagian Google Maps */}
        <div className="flex justify-center md:justify-start px-6 sm:px-8">
          <iframe
            className="w-full max-w-3xl aspect-video rounded-lg shadow-lg"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=ubud,%20Kecamatan%20Ubud,%20Kabupaten%20Gianyar,%20Bali,%20Indonesia+(Massage%20Gy)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </section>

      {/* <section className="grid grid-cols-1 md:grid-cols-2 bg-[#1b1b1b] text-white px-10 py-12 gap-8 ">
        <div className="px-8 pt-8 mt-8">
                <h2 className="text-2xl font-bold font-mono pt-8">Our Venue</h2>
                <div className="flex items-center gap-2 pt-8">
                    <FaMapMarkerAlt className="text-red-600 text-3xl" />
                    <span className="text-lg text-[#C2A74E] mt-2"> 
                    Ubud, Ubud District, Gianyar Regency, Bali, Indonesia
                    </span>
                </div>
            
        </div>

      <div className="flex flex-col justify-center px-6 pt-8 mt-8">
        <iframe width="100%" height="515" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=ubud,%20Kecamatan%20Ubud,%20Kabupaten%20Gianyar,%20Bali,%20Indonesia+(Massage%20Gy)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps drone</a></iframe>
      </div>
     </section> */}
      <div className="">
        <Footer></Footer>
      </div>
    </>
  );
};

export default Location;
