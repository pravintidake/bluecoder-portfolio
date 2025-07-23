import { Link } from "react-router-dom";
import SocialIcons from "./core/SocialIcons";

const Footer = () => {
  let quickLinks = [
    { title: "About Us", href: "/about" },
    { title: "Portfolio", href: "/portfolio" },
    { title: "Contact Us", href: "/contact" },
    { title: "Services & Pricing", href: "/services" },
  ];

  let contactInfo = [
    { label: "Phone", value: "+91 78780 87844" },
    { label: "Email", value: "bluecodertech@gmail.com" },
    {
      label: "Office Location",
      value: "44, Nath Baba Chowk, Nagpur, Maharashtra",
    },
  ];

  return (
    <div className="bg-black text-white">
      <div className="flex gap-20 px-40 py-10 bg-gray-900">
        <div className="w-1/2">
          <h3 className="font-bold text-2xl">Bluecoder</h3>
          <p className="text-sm my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            accusamus quibusdam officiis pariatur aspernatur, voluptatem ad non
            excepturi at rerum!
          </p>
          <SocialIcons />
        </div>
        <div className="w-1/2 flex justify-between">
          <div>
            <p className="text-lg font-bold mb-3">Quick Links</p>
            <div className="flex flex-col font-semibold gap-3">
              {quickLinks.map((link, id) => (
                <Link
                  to={link.href}
                  key={id}
                  className="transitionClasses hover:border-b hover:text-slate-300 w-max"
                  // target={"_blank"}
                  rel="noopener noreferrer"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-lg font-bold mb-3">Contact Information</p>
            {contactInfo.map((info, id) => (
              <div key={id}>
                <p className="font-bold">{info.label}</p>
                <p className="my-2 text-sm">{info.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="text-sm text-center px-40 py-5">
        &copy; {new Date().getFullYear()}{" "}
        <Link
          to="https://www.youtube.com/@bluecodertech"
          className="font-bold transitionClasses hover:border-b hover:text-slate-300"
        >
          Bluecoder Tech
        </Link>{" "}
        - All Rights Reverved
      </p>
    </div>
  );
};

export default Footer;
