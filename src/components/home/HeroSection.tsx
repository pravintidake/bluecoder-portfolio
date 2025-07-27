import { Link } from "react-router-dom";
import myPicture from "../../assets/portfolio_face.jpg";

const Hero = () => {
  return (
    <div
      className="px-10 md:px-20 lg:px-40 bg-black text-white bg-cover bg-center h-[92vh] flex flex-col justify-center items-end gap-4"
      style={{ backgroundImage: `url(${myPicture})` }}
    >
      <div className="flex flex-col justify-start items-center lg:justify-center lg:items-start md:justify-start md:items-center gap-4 animate__animated animate__bounceInUp">
        <p className="text-lg uppercase">Hello There</p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          I'm Pravin Tidake
        </h1>
        <p className="max-w-xl text-sm leading-6 text-gray-300 lg:text-left md:text-left text-justify">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          repellendus, labore repellat quo excepturi ipsum.
        </p>
        <div className="flex gap-4">
          <Link
            to="/services"
            className="transitionClasses btnCommen bg-purple-500 text-white hover:text-purple-500 hover:bg-white"
          >
            Our Service
          </Link>
          <Link
            to="/contact"
            className="transitionClasses btnCommen bg-transparent border border-white hover:border-purple-500 hover:shadow hover:bg-purple-600"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
