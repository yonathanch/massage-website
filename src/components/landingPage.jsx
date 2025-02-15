import { products } from "./product";
import TreatmentList from "./TreatmentList";
import Navbar from "./Navbar";
import Footer from "./Footer";
const LandingPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="relative w-full min-h-screen overflow-hidden h-158 ">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/bg-2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
          <h1 className="text-5xl font-bold">AIRE ANCIENT BATHS BARCELONA</h1>
          <p className="mt-4 text-lg">WHERE TIME DOES NOT EXIST</p>
        </div>
      </div>

      <section className="bg-white py-16 px-6 lg:px-24">
        <div className="max-w-6xl mx-auto">
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
            <div className="relative pt-8">
              <img
                src="/bali.jpg"
                alt="Balinese Massage"
                className="w-full h-72 lg:h-96 object-cover rounded-xl shadow-md"
              />
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-semibold text-gray-800">
                Relax With Balinese Massage
              </h3>
              <p className="mt-2 text-gray-600 pt-5 max-w-prose">
                A traditional massage technique from Bali that combines long
                strokes, deep pressure, acupressure, and reflexology. This
                massage uses aromatherapy oils to help relieve muscle tension,
                improve blood circulation, and provide deep relaxation.
              </p>
              <div className="mt-4 flex justify-end">
                <img src="/bali2.jpg" alt="Balinese Massage" width={155} />
              </div>
            </div>
          </div>

          <div className="pt-8 mt-8">
            <h2 className="text-center text-lg font-semibold tracking-widest pt-5 font-serif text-[#C2A74E]">
              RELAXATION MASSAGE
            </h2>
            <p className="mt-2 text-gray-600 text-center pt-5 max-w-prose mx-auto">
              Relaxation Massage is a gentle massage designed to provide
              relaxation and reduce stress.
            </p>

            <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Massaging slowly and gently in a calm manner.
                </h3>
                <p className="mt-2 text-gray-600 pt-5 max-w-prose">
                  This technique uses slow, soothing strokes with light to
                  medium pressure to stimulate blood circulation and relax the
                  muscles. It is perfect for those looking to unwind and
                  experience a calming massage session.
                </p>
                <div className="mt-4 flex justify-start">
                  <img
                    src="/facemassage.jpg"
                    alt="Face Massage"
                    className="h-[180px]"
                  />
                </div>
              </div>
              <div className="relative pt-8">
                <img
                  src="/relaxation2.jpg"
                  alt="Relaxation Massage"
                  className="w-full h-72 lg:h-96 object-cover rounded-xl shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 bg-[#1b1b1b] text-white px-10 py-12 gap-8">
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
            AIRE Barcelona preserves the authenticity of the original
            architecture of the building, an 18th century food warehouse, which
            can be seen through the two skylights above the Tepidarium, through
            which the goods were brought in and then transported to the famous
            Born Market.
          </p>
        </div>
      </section>
      <TreatmentList products={products} limit={3} />
      <Footer></Footer>

      {/* <Navbar></Navbar>
        <div className="relative w-full h-158 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          className="absolute w-full h-full object-cover"
        >
          <source src="/bg-2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <h1 className="text-5xl font-bold">AIRE ANCIENT BATHS BARCELONA</h1>
          <p className="mt-4 text-lg">WHERE TIME DOES NOT EXIST</p>
        </div>
      </div>
  <div>
   <section className="bg-white py-16 px-6 lg:px-24">
   <div className="max-w-6xl mx-auto">
     <h2 className="text-center text-lg font-semibold font-serif text-[#C2A74E] tracking-widest ">
     TRADITIONAL MASSAGE
     </h2>
     <p className="text-center pt-5 font-sans text-gray-600">Balinese Massage is a traditional massage technique from Bali that combines gentle strokes, stretching, acupressure, and aromatherapy  This massage aims to relax the body, improve blood circulation, and relieve stress and muscle tension.</p>
     <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
       <div className="relative pt-8">
         <img
           src="/bali.jpg" 
           alt="Tepidarium"
           className="w-full h-72 lg:h-96 object-cover rounded-xl shadow-md"
         />
       </div>
       <div className="text-center lg:text-left">
         <h3 className="text-2xl font-semibold text-gray-800">
           Relax With Balinese Massage
         </h3>
         <p className="mt-2 text-gray-600 pt-5">
         A traditional massage technique from Bali that combines long strokes, deep pressure, acupressure, and reflexology. This massage uses aromatherapy oils to help relieve muscle tension, improve blood circulation, and provide deep relaxation. It is perfect for those seeking body and mind rejuvenation.
         </p>
         <div className="mt-4 flex justify-end">
            <img src="bali2.jpg" alt=""  width={155}/>
         </div>
       </div>
       
     
     </div>
      <div className="pt-8 mt-8">
        <h2 className="text-center text-lg font-semibold tracking-widest pt-8 font-serif text-[#C2A74E] ">
          Relaxation Massage
        </h2>
        <p className="mt-2 text-gray-600 text-center pt-5">
        Relaxation Massage is a gentle massage designed to provide relaxation and reduce stress. 
        </p>
      
      <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
      <div className="text-center lg:text-left">
         <h3 className="text-2xl font-semibold text-gray-800">
         Massaging slowly and gently in a calm manner.
         </h3>
         <p className="mt-2 text-gray-600 pt-5">
         This technique uses slow, soothing strokes with light to medium pressure to stimulate blood circulation and relax the muscles. It is perfect for those looking to unwind and experience a calming massage session.
         </p>
         <div className="mt-4 flex justify-start">
            <img src="/facemassage.jpg" alt="" className="h-[180px]"/>
         </div>
       </div>
       <div className="relative pt-8">
         <img
           src="/relaxation2.jpg" 
           alt="Tepidarium"
           className="w-full h-72 lg:h-96 object-cover rounded-xl shadow-md"
         />
       </div>
      </div>
        
      </div>
   </div>
 </section>

  <section className="grid grid-cols-1 md:grid-cols-2 bg-[#1b1b1b] text-white px-10 py-12 gap-8">
      <div className="">
        <img
          src="/history.jpg" 
          alt="Spa"
          width={800}
          className="rounded-lg object-cover h-[500px] "
        />
      </div>

      <div className="flex flex-col justify-center px-6">
        <h2 className="text-2xl font-semibold mb-4 text-[#f4f3f1] font-mono">HISTORY</h2>
        <p className="text-lg leading-relaxed text-white font-sans">
          AIRE Barcelona preserves the authenticity of the original architecture
          of the building, an 18th century food warehouse, which can be seen
          through the two skylights above the Tepidarium, through which the
          goods were brought in and then transported to the famous Born Market.
        </p>
      </div>
  </section>
  <TreatmentList products={products} limit={3} />
  </div>
  <Footer></Footer> */}
    </>
  );
};

export default LandingPage;
