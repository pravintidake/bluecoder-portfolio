import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";
import myPicture from "../../assets/portfolio_face.jpg";

const BreadCrumb = ({ heading, page }: any) => {
  return (
    <div
      className="bg-black bg-cover bg-center h-[60vh] w-full flex flex-col justify-center font-bold text-white"
      style={{ backgroundImage: `url(${myPicture})` }}
    >
      <h1 className="mx-10 lg:mx-40 mb-5 text-2xl text-center lg:text-left">
        {heading}
      </h1>
      <div className="flex mx-10 lg:mx-40 gap-2 items-center justify-center lg:justify-start">
        <Link
          to="/"
          className="transitionClasses hover:border-b hover:text-slate-300 w-max"
        >
          Home
        </Link>
        <GoDotFill className="text-yellow-500" />

        <p>{page}</p>
      </div>
    </div>
  );
};

export default BreadCrumb;
