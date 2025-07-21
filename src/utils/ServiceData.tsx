import { CgPerformance } from "react-icons/cg";
import { FaFigma, FaNodeJs, FaReact } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";

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

export default serviceData;
