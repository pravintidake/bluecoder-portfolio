import { Link } from "react-router-dom";
import SocialIcons from "./core/SocialIcons";

let menuOption = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Portfolio", href: "/portfolio" },
  { title: "Blog", href: "https://bluecodertech.netlify.app" },
  { title: "Contact", href: "/contact" },
];

const Header = () => {
  return (
    <div className="flex items-center px-40 shadow-lg py-5 h-[8vh] sticky top-0 bg-white">
      {/* Logo */}
      <Link to="/" className="font-bold text-2xl text-slate-800">
        Bluecoder
      </Link>
      {/* Menu */}
      <div className="flex justify-center w-full gap-10">
        {menuOption.map((m, i) => (
          <Link
            to={m.href}
            target={m.title == "Blog" ? "_blank" : undefined}
            key={i}
            className="text-slate-500 hover:border-b hover:text-slate-900 transition duration-800 ease-in-out"
          >
            {m.title}
          </Link>
        ))}
      </div>
      {/* Social Media Icons */}
      <SocialIcons />
    </div>
  );
};

export default Header;
