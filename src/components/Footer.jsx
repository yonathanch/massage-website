import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1b1b1b] text-white py-30 flex flex-col items-center space-y-6">
      <img src="/Massagetransparent.png" alt="Logo" className="h-20" />
      <div className="flex space-x-6 text-xl">
        <FaLinkedinIn className="hover:text-[#C2A74E] transition-colors duration-200" />
        <FaGithub className="hover:text-[#C2A74E] transition-colors duration-200" />
      </div>
      <p className="text-sm">Copyright &copy; {currentYear}. by Massage Gi</p>
    </footer>
  );
};

export default Footer;
