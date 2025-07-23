import aboutProfile from "../../assets/aboutProfile.jpg";
import { aboutData } from "../../utils";
import { Link } from "react-router-dom";

const AboutSection = ({ isBtn }: any) => {
  return (
    <div className="h-[92vh] px-40 bg-white flex justify-between items-center p-10">
      <div className="w-1/2 flex flex-col items-start gap-4">
        <h1 className="text-3xl font-bold">
          Hello I'm Pravin Tidake, a proffesional Web Developer In India
        </h1>
        <p className="max-w-xl text-md leading-6 text-gray-500">
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
        className="object-center h-full shadow-2xl rounded-tr-3xl rounded-bl-3xl"
      />
    </div>
  );
};

export default AboutSection;
