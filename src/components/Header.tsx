import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { PiInstagramLogoBold } from "react-icons/pi";
import { Link } from "react-router-dom";

let menuOption = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Portfolio", href: "/portfolio" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];

let socialIcons = [
  { icon: <FaFacebookF />, href: "/" },
  { icon: <PiInstagramLogoBold />, href: "/" },
  { icon: <FaLinkedinIn />, href: "/" },
];

const Header = () => {
  return (
    <div className="flex items-center px-40 shadow py-5 h-[8vh] sticky top-0">
      {/* Logo */}
      <Link to="/" className="font-bold text-2xl text-slate-800">
        Bluecoder
      </Link>
      {/* Menu */}
      <div className="flex justify-center w-full gap-10">
        {menuOption.map((m) => (
          <Link
            to={m.href}
            className="text-slate-500 hover:border-b hover:text-slate-900 transition duration-800 ease-in-out"
          >
            {m.title}
          </Link>
        ))}
      </div>
      {/* Social Media Icons */}
      <div className="flex gap-5">
        {socialIcons.map((i) => (
          <Link to={i.href} className="text-md p-2 border rounded-full">
            {i.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
