import { useState } from "react";
import { HiMenuAlt3, HiSearch } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { PiShoppingBag } from "react-icons/pi";
import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
  const [dropDown, setDropDown] = useState(false);

  const showDropDown = () => {
    setDropDown(!dropDown);
  };

  return (
    <header className="bg-[#1b1b1b]">
      <nav className="w-full flex flex-col justify-center items-center lg:relative sticky top-0 z-50 bg-black lg:bg-transparent">
        <div className="container mx-auto lg:w-full w-[95%]">
          <div className="flex items-center justify-between border-b border-amber-600 py-6 lg:w-4/5 w-full mx-auto">
            <span className="flex items-center gap-8 ml-auto">
              <button
                onClick={showDropDown}
                className="lg:hidden text-[22px] cursor-pointer text-white"
              >
                {dropDown ? <MdClose /> : <HiMenuAlt3 />}
              </button>

              <PiShoppingBag size={24} className="text-white" />

              <button className="hidden lg:block bg-[#C2A74E] text-white text-[10px] font-semibold px-6 py-3 hover:bg-white hover:text-[#C2A74E] transition duration-200">
                BOOK NOW
              </button>
            </span>
          </div>

          <div className="hidden lg:flex justify-center gap-16 items-center mt-6">
            <ul className="flex items-center xl:gap-12 gap-x-4 bg-black text-white border-3 rounded border-amber-200 px-4 py-2">
              <img
                src="/Massagetransparent.png"
                alt="logo"
                width={80}
                className="opacity-80"
              />
              <Link
                to="/"
                className="text-sm hover:text-[#C2A74E] transition duration-200"
              >
                HOME
              </Link>
              <Link
                to="/treatment"
                className="text-sm hover:text-[#C2A74E] transition duration-200"
              >
                TREATMENT
              </Link>
              <Link
                to="/location"
                className="text-sm hover:text-[#C2A74E] transition duration-200"
              >
                LOCATION
              </Link>
              <Link
                to="/about"
                className="text-sm hover:text-[#C2A74E] transition duration-200"
              >
                ABOUT
              </Link>
            </ul>
          </div>

          {dropDown && (
            <div className="lg:hidden fixed inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center">
              <ul className="w-4/5 bg-black text-white border border-amber-200 rounded-lg p-6 text-center">
                <li className="py-3 border-b border-gray-600">
                  <a href="#" className="text-lg font-semibold">
                    HOME
                  </a>
                </li>
                <li className="py-3 border-b border-gray-600">
                  <a href="#" className="text-lg font-semibold">
                    TREATMENT
                  </a>
                </li>
                <li className="py-3 border-b border-gray-600">
                  <a href="#" className="text-lg font-semibold">
                    LOCATION
                  </a>
                </li>
                <li className="py-3">
                  <a href="#" className="text-lg font-semibold">
                    ABOUT US
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>

    // <nav className="w-full lg:pb-8 flex flex-col justify-center items-center lg:relative sticky top-0 z-50 lg:bg-tranparent bg-black">
    //    <div className="container mx-auto lg:w-full w-[95%]">
    //      <div className="flex item-center justify-between  border-[#e8e3da] lg:w-4/5 w-full mx-auto py-8 border-b border-amber-600 ">
    //        <span className="flex items-center gap-8 ml-auto">
    //             {dropDown? (
    //                 <div onClick={showDropDown}className="lg:hidden text-[22px] cursor-pointer text-white">
    //                     <MdClose />
    //                 </div>
    //             ):(
    //                 <div onClick={showDropDown}className="lg:hidden text-[22px] cursor-pointer text-white">
    //                     <HiMenuAlt3 />
    //                 </div>
    //             )}
    //             <PiShoppingBag size={24} className="text-white"/>

    //             <button className="lg:block hidden bg-[#C2A74E] text-white text-[10px] font-semibold px-[29px] py-[11px] transition-bg hover:bg-white hover:text-[#C2A74E] transition-colors duration-200">BOOK NOW</button>
    //         </span>
    //      </div>

    //      <div className="lg:w-full mx-auto h-full lg:flex hidden justify-center gap-16 items-center m-8 absolute top-10 left-0 ">
    //         <ul className="flex items-center xl:gap-12 gap-x-4 max-lg:hidden bg-black text-white border-3 rounded  border-amber-200 p-3 mt-5">
    //             <img src="/Massagetransparent.png" alt="logo" width={80} className="opacity-80"/>
    //             <Link to="/" className="leading-normal no-underline text-sm hover:text-[#C2A74E] transition-colors duration-200"> HOME</Link>
    //             <Link to="/treatment" className="leading-normal no-underline text-sm hover:text-[#C2A74E] transition-colors duration-200">TREATMENT</Link>
    //             <Link to="/location" className="leading-normal no-underline text-sm hover:text-[#C2A74E] transition-colors duration-200">LOCATION</Link>
    //             <Link to="/about" className="leading-normal no-underline text-sm hover:text-[#C2A74E] transition-colors duration-200">ABOUT</Link>
    //         </ul>
    //      </div>
    //      {dropDown &&(
    //     <div className="lg:hidden w-full h-full px-6 fixed top-30  transition-all">
    //         <div className="w-full flex flex-col items-baseline gap-4">
    //             <ul className="flex flex-col justify-center w-full">
    //                 <a href="#" className="px-6 h-10 flex item-center leading-normal no-underline font-bold text-lg text-[15px] border-0 border-b border-[#ffffffc5] border border-solid ">HOME</a>
    //                 <a href="#" className="px-6 h-10 flex item-center leading-normal no-underline font-bold text-lg text-[15px] border-0 border-b border-[#ffffff1a] border border-solid">TREATMENT</a>
    //                 <a href="#" className="px-6 h-10 flex item-center leading-normal no-underline font-bold text-lg text-[15px] border-0 border-b border-[#ffffff1a] border border-solid">LOCATION</a>
    //                 <a href="#" className="px-6 h-10 flex item-center leading-normal no-underline font-bold text-lg text-[15px] border-0 border-b border-[#ffffff1a] border border-solid">ABOUT US</a>
    //             </ul>
    //         </div>
    //     </div>
    //      )}
    //     </div>
    // </nav>
  );
}
