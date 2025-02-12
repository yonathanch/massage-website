import { useState } from "react";
import { HiMenuAlt3, HiSearch } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { PiShoppingBag } from "react-icons/pi";

export default function Navbar() {
    const[dropDown, setDropDown] = useState(false);

    const showDropDown = () => {
        setDropDown(!dropDown);
    };


  return(
    <nav className="w-full lg:pb-8 flex flex-col justify-center items-center lg:relative sticky top-0 z-50 lg:bg-tranparent bg-black">
       <div className="container mx-auto lg:w-full w-[95%]">
         <div className="flex item-center justify-between  border-[#e8e3da] lg:w-4/5 w-full mx-auto py-8 border-b border-amber-600 "> 
           <span className="flex items-center gap-8 ml-auto">
                {dropDown? (
                    <div onClick={showDropDown}className="lg:hidden text-[22px] cursor-pointer text-white">
                        <MdClose />
                    </div>
                ):(
                    <div onClick={showDropDown}className="lg:hidden text-[22px] cursor-pointer text-white">
                        <HiMenuAlt3 />
                    </div>
                )}     
                <PiShoppingBag size={24} className="text-white"/>

                <button className="lg:block hidden bg-[#C2A74E] text-white text-[10px] font-semibold px-[29px] py-[11px] transition-bg hover:bg-white hover:text-[#C2A74E] transition-colors duration-200">BOOK NOW</button>
            </span>     
         </div>
        
         <div className="lg:w-full mx-auto h-full lg:flex hidden justify-center gap-16 items-center m-8 absolute top-10 left-0 ">
            <ul className="flex items-center xl:gap-12 gap-x-4 max-lg:hidden bg-black text-white border-3 rounded  border-amber-200 p-3 mt-5">
                <img src="/Massagetransparent.png" alt="logo" width={80} className="opacity-80"/> 
                <a href="#" className="leading-normal no-underline text-sm hover:text-[#C2A74E] transition-colors duration-200">HOME</a>
                <a href="#" className="leading-normal no-underline text-sm hover:text-[#C2A74E] transition-colors duration-200">TREATMENT</a>
                <a href="#" className="leading-normal no-underline text-sm hover:text-[#C2A74E] transition-colors duration-200">LOCATION</a>
                <a href="#" className="leading-normal no-underline text-sm hover:text-[#C2A74E] transition-colors duration-200">ABOUT US</a>
            </ul>
         </div>
         {dropDown &&(
        <div className="lg:hidden w-full h-full px-6 fixed top-30  transition-all">
            <div className="w-full flex flex-col items-baseline gap-4">
                <ul className="flex flex-col justify-center w-full">
                    <a href="#" className="px-6 h-10 flex item-center leading-normal no-underline font-bold text-lg text-[15px] border-0 border-b border-[#ffffffc5] border border-solid ">HOME</a>
                    <a href="#" className="px-6 h-10 flex item-center leading-normal no-underline font-bold text-lg text-[15px] border-0 border-b border-[#ffffff1a] border border-solid">TREATMENT</a>
                    <a href="#" className="px-6 h-10 flex item-center leading-normal no-underline font-bold text-lg text-[15px] border-0 border-b border-[#ffffff1a] border border-solid">LOCATION</a>
                    <a href="#" className="px-6 h-10 flex item-center leading-normal no-underline font-bold text-lg text-[15px] border-0 border-b border-[#ffffff1a] border border-solid">ABOUT US</a>
                </ul>
            </div>
        </div>
         )}
        </div>
    </nav>
    );
}
