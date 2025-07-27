import { Link } from "react-router-dom";
import SocialIcons from "./core/SocialIcons";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { TbMedicalCrossCircle } from "react-icons/tb";

let menuOption = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Portfolio", href: "/portfolio" },
  { title: "Blog", href: "https://bluecodertech.netlify.app" },
  { title: "Contact", href: "/contact" },
];

const Header = () => {
  let [isPopup, setIsPopup] = useState(false);
  const handleClick = () => {
    setIsPopup(!isPopup);
  };
  return (
    <div className="flex items-center justify-between px-5 md:px-20 lg:px-40 shadow-lg py-5 h-[8vh] sticky top-0 bg-white z-999">
      {/* Logo */}
      <div className="flex items-center justify-between w-full relative">
        <Link
          to="/"
          className="font-bold text-2xl text-slate-800 animate__animated animate__bounce"
        >
          Bluecoder
        </Link>
        {/* Menu */}
        <div className="hidden lg:flex md:hidden justify-center w-full gap-10">
          {menuOption.map((m, i) => (
            <Link
              to={m.href}
              target={m.title == "Blog" ? "_blank" : undefined}
              key={i}
              className="text-slate-500 hover:border-b hover:text-slate-900 transition duration-800 ease-in-out animate__animated animate__backInDown"
            >
              {m.title}
            </Link>
          ))}
        </div>
        <div className="block lg:hidden md:block absolute right-2">
          {!isPopup ? (
            <GiHamburgerMenu size={24} onClick={handleClick} />
          ) : (
            <RxCross1 size={24} onClick={handleClick} />
          )}
        </div>

        {/* Social Media Icons */}
        <div className="hidden md:hidden lg:flex">
          <SocialIcons />
        </div>
      </div>
      {isPopup && (
        <div className="absolute right-1 top-15 bg-white flex lg:hidden md:hidden flex-col p-5 w-1/2 shadow gap-5">
          {menuOption.map((m, i) => (
            <div className="flex items-center gap-2">
              <TbMedicalCrossCircle />
              <Link
                to={m.href}
                target={m.title == "Blog" ? "_blank" : undefined}
                key={i}
                className="text-slate-500 hover:border-b hover:text-slate-900 transition duration-800 ease-in-out animate__animated animate__fadeIn w-max"
              >
                {m.title}
              </Link>
            </div>
          ))}
          <SocialIcons />
        </div>
      )}
    </div>
  );
};

export default Header;
