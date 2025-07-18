import myPicture from "../assets/portfolio_face.jpg";
import aboutProfile from "../assets/aboutProfile.jpg";
import Button from "../components/core/Button";
import { GrAchievement } from "react-icons/gr";
import { MdOutlineMail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";
import {
  FaCode,
  FaFigma,
  FaNodeJs,
  FaPalette,
  FaReact,
  FaSearch,
  FaServer,
  FaShoppingCart,
  FaTools,
} from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { CgPerformance } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
const Home = () => {
  let aboutData = [
    { title: "", text: "5 Years of Experience", icon: <GrAchievement /> },
    {
      title: "Email",
      text: "bluecodertech@gmail.com",
      icon: <MdOutlineMail />,
    },
    { title: "Phone", text: "+91 78780 87844", icon: <FiPhone /> },
  ];

  const serviceData = [
    {
      title: "Website Design & UI/UX Development",
      description:
        "We create visually stunning, responsive, and user-friendly interfaces that ensure a seamless experience across all devices. Our designs focus on clarity, usability, and performance.",
      icon: <FaFigma size={80} />,
    },
    {
      title: "Frontend Development",
      description:
        "Building fast, interactive, and scalable frontends using technologies like HTML5, CSS3, JavaScript, React, Next.js, and more. We ensure code quality, accessibility, and responsiveness.",
      icon: <FaReact size={80} />,
    },
    {
      title: "Backend Development",
      description:
        "We develop secure and scalable server-side solutions using Node.js, Express, MongoDB, MySQL, and other backend frameworks. Includes API integration, database management, and authentication systems.",
      icon: <FaNodeJs size={80} />,
    },
    {
      title: "E-commerce Website Development",
      description:
        "Launch a powerful online store with product listings, shopping cart, order management, payment gateways, and user accounts. Built with platforms like Shopify, WooCommerce, or custom stacks.",
      icon: <IoCartOutline size={80} />,
    },
    {
      title: "Website Maintenance & Support",
      description:
        "Ongoing website updates, bug fixes, feature enhancements, backup solutions, and performance monitoring to keep your site secure and up-to-date at all times.",
      icon: <LuShoppingBag size={80} />,
    },
    {
      title: "SEO & Performance Optimization",
      description:
        "Boost your site's search engine rankings and load speed with technical SEO, on-page optimizations, image compression, code minification, and performance audits.",
      icon: <CgPerformance size={80} />,
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="px-40 bg-black text-white bg-cover bg-center h-[92vh] flex flex-col justify-center items-end gap-4"
        style={{ backgroundImage: `url(${myPicture})` }}
      >
        <div className="flex flex-col gap-4">
          <p className="text-lg uppercase">Hello There</p>
          <h1 className="text-5xl font-bold">I'm Pravin Tidake</h1>
          <p className="max-w-xl text-sm leading-6 text-gray-300">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            repellendus, labore repellat quo excepturi ipsum.
          </p>
          <div className="flex gap-4">
            <Button
              classes="transitionClasses btnCommen bg-purple-500 text-white hover:text-purple-500 hover:bg-white"
              title="Our Service"
            />
            <Button
              classes="transitionClasses btnCommen bg-transparent border border-white hover:border-purple-500 hover:shadow hover:bg-purple-600"
              title="Contact Me"
            />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="h-[92vh] px-40 bg-white flex justify-between items-center p-10">
        <div className="w-1/2 flex flex-col items-start gap-4">
          <h1 className="text-3xl font-bold">
            Hello I'm Pravin Tidake, a proffesional Web Developer In India
          </h1>
          <p className="max-w-xl text-md leading-6 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            distinctio, labore sapiente, velit repudiandae modi, debitis
            laboriosam recusandae animi accusamus obcaecati illum iusto eos
            sequi provident. Numquam iusto facere.
          </p>
          <div>
            {aboutData.map((item, idx) => (
              <p
                className="flex items-center gap-2 text-gray-800 mb-2"
                key={idx}
              >
                {item.icon}
                {item.title && <span className="w-12">{item.title}:</span>}{" "}
                {item.text}
              </p>
            ))}
          </div>
          <Button
            classes="transitionClasses btnCommen bg-transparent border-2 border-black hover:border-white hover:shadow hover:bg-black hover:text-white"
            title="Add More"
          />
        </div>
        <img
          src={aboutProfile}
          alt="about_profile"
          className="object-center h-full shadow-2xl rounded-tr-3xl rounded-bl-3xl"
        />
      </div>

      {/* Services */}
      <div className="px-40 bg-slate-100 flex flex-col items-center p-10">
        <h1 className="text-gray-500 font-bold text-3xl mb-10">Our Service</h1>
        <div className="grid grid-cols-3 gap-10 w-full mb-10">
          {serviceData.map((service, idx) => (
            <div
              className="w-full bg-white shadow-lg rounded flex flex-col gap-5 items-start justify-start p-8"
              key={idx}
            >
              {service.icon}
              <h3 className="text-xl font-bold mt-3 text-teal-800">
                {service.title}
              </h3>
              <p className="text-sm leading-6 text-gray-600">
                {service.description}
              </p>
              <Link to="/" className="font-bold text-purple-800">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Portfolio */}
      <div className="px-40 bg-white flex flex-col items-center p-10">
        <h1 className="text-gray-500 font-bold text-3xl mb-10">
          Our Portfolio
        </h1>
        <div className="grid grid-cols-3 gap-5 mb-10">
          <div className="grid gap-5">
            <div>
              <img
                className="h-auto max-w-full rounded"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-5">
            <div>
              <img
                className="h-auto max-w-full rounded"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-5">
            <div>
              <img
                className="h-auto max-w-full rounded"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="h-[92vh] px-40 bg-pink-100">Our Client Say</div>

      {/* Blogs */}
      <div className="h-[92vh] px-40 bg-purple-100">Blog & Article</div>

      {/* Partners */}
      <div className="h-[92vh] px-40 bg-green-100">Trusted Partners</div>
    </div>
  );
};

export default Home;
