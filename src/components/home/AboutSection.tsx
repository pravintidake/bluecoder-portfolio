import aboutProfile from "../../assets/aboutProfile.jpg";
import { aboutData } from "../../utils";
import { Link } from "react-router-dom";

const AboutSection = ({ isBtn }: any) => {
  return (
    <div className="h-full md:h-full lg:h-[92vh] px-10 md:px-20 lg:px-40 bg-white flex lg:flex-row md:flex-col flex-col justify-between items-center p-10 ">
      <div className="w-full md:w-full lg:w-1/2 flex flex-col items-start gap-4 animate__animated animate__bounceInLeft order-2 lg:order-1 md-order-2">
        <h1 className="text-xl md:text-2xl lg:text-3xl text-center md:text-center lg:text-left font-bold mt-3">
          Hello I'm Pravin Tidake, a proffesional Web Developer In India
        </h1>
        <p className="max-w-xl text-md leading-6 text-gray-500 text-justify ld:text-left md:text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          distinctio, labore sapiente, velit repudiandae modi, debitis
          laboriosam recusandae animi accusamus obcaecati illum iusto eos sequi
          provident. Numquam iusto facere.
        </p>
        <div>
          {aboutData.map((item, idx) => (
            <p className="flex items-center gap-2 text-gray-800 mb-2" key={idx}>
              {item.icon}
              {item.title && <span className="w-12">{item.title}:</span>}{" "}
              {item.text}
            </p>
          ))}
        </div>
        {isBtn ? (
          <Link
            to="/about"
            className="transitionClasses btnCommen bg-transparent border-2 border-black hover:border-white hover:shadow hover:bg-black hover:text-white"
          >
            See More
          </Link>
        ) : null}
      </div>
      <img
        src={aboutProfile}
        alt="about_profile"
        className="object-center h-1/2 md:h-1/2 lg:h-full shadow-2xl rounded-tr-3xl rounded-bl-3xl animate__animated animate__backInRight order-1 lg:order-2 md-order-1"
      />
    </div>
  );
};

export default AboutSection;
