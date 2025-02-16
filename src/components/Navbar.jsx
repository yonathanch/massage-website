import { useState, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { PiShoppingBag } from "react-icons/pi";
import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
  const [dropDown, setDropDown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [navHeight, setNavHeight] = useState(0);

  const showDropDown = () => {
    setDropDown(!dropDown);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const updateNavHeight = () => {
      const navbar = document.getElementById("navbar");
      if (navbar) {
        setNavHeight(navbar.offsetHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateNavHeight);
    updateNavHeight(); // Set initial height

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateNavHeight);
    };
  }, []);
  return (
    <>
      <header
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-transparent" : "bg-black"
        }`}
      >
        <nav
          className={`w-full flex flex-col justify-center items-center lg:relative sticky top-0 z-50 bg-black lg:bg-transparent ${
            isScrolled ? "opacity-35" : "opacity-100"
          }`}
        >
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

                <a
                  href="https://wa.me/6282210833987?text=hello I want to order a Massage GI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden lg:block bg-[#C2A74E] text-white text-[10px] font-semibold px-6 py-3 hover:bg-white hover:text-[#C2A74E] transition duration-200"
                >
                  BOOK NOW
                </a>
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
              <div className="lg:hidden fixed inset-0 bg-[#1b1b1b] bg-opacity-80 flex flex-col items-start ">
                <div className="w-full bg-black px-6 py-4 flex justify-between items-center">
                  <img src="/Massagetransparent.png" alt="logo" width={70} />
                  <button
                    onClick={() => setDropDown(false)}
                    className="absolute top-8 right-6 text-white text-2xl"
                  >
                    <MdClose />
                  </button>
                </div>
                <ul className=" text-white p-6 font-sans w-full ">
                  <li className="py-3  border-b border-[#C2A74E]">
                    <Link
                      to="/"
                      className="text-lg hover:text-[#C2A74E] transition duration-200 "
                    >
                      HOME
                    </Link>
                  </li>
                  <li className="py-3 border-b border-[#C2A74E]">
                    <Link
                      to="/treatment"
                      className="text-lg hover:text-[#C2A74E] transition duration-200"
                    >
                      TREATMENT
                    </Link>
                  </li>
                  <li className="py-3 border-b border-[#C2A74E]">
                    <Link
                      to="/location"
                      className="text-lg hover:text-[#C2A74E] transition duration-200"
                    >
                      LOCATION
                    </Link>
                  </li>
                  <li className="py-3 border-b border-[#C2A74E]">
                    <Link
                      to="/about"
                      className="text-lg hover:text-[#C2A74E] transition duration-200"
                    >
                      ABOUT
                    </Link>
                  </li>
                </ul>
                <div className="w-full mt-auto flex justify-center">
                  <a
                    href="https://wa.me/6282210833987?text=hello I want to order a Massage GI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[70%] border border-[#C2A74E] flex justify-center text-[20px] font-mono hover:bg-white hover:text-[#C2A74E] transition duration-200  m-8 pt-2 pb-3 text-[#C2A74E]"
                  >
                    BOOK NOW
                  </a>
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>

      {/* nav tidak menutupi kontent */}
      <div style={{ paddingTop: `${navHeight + -30}px` }}></div>
    </>
  );
}
