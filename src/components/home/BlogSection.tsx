import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogSection = () => {
  return (
    <div className="px-40 bg-slate-50 flex flex-col items-center p-10">
      <h1 className="text-gray-500 font-bold text-3xl mb-10">
        Blogs & Articles
      </h1>
      <div className="grid grid-cols-3 w-full gap-5">
        <div className="bg-white rounded shadow">
          <img
            src="https://ap-south-1.graphassets.com/AwvwvF3oVRz2AzLzRHiyVz/7QIwBI8QRBCtLFWt0zCS"
            alt="blog_image"
            className="rounded-t"
          />
          <div className="p-5">
            <p className="text-purple-500 font-bold text-lg">
              Web Devevelopment |{" "}
              <span className="text-gray-500 text-sm font-normal">
                22 July 2025
              </span>
            </p>
            <h3 className="text-xl font-bold text-slate-500 my-5">
              How to start a web development? Complete Full Stack Web Developer
              Roadmap 2025
            </h3>
            <p className="text-sm text-gray-400 mb-5">
              The ultimate guide to becoming a modern full-stack web developer.
              Hello friends! So, as we all know, now a days IT Jobs values
              increases daily, everyone wanted to get the job in IT company..
            </p>
            <Link
              to="/"
              className="text-purple-700 font-bold flex gap-1 items-center"
            >
              <span>
                <FaPlus />
              </span>
              Read More
            </Link>
          </div>
        </div>
        <div className="bg-white rounded shadow">
          <img
            src="https://ap-south-1.graphassets.com/AwvwvF3oVRz2AzLzRHiyVz/7QIwBI8QRBCtLFWt0zCS"
            alt="blog_image"
            className="rounded-t"
          />
          <div className="p-5">
            <p className="text-purple-500 font-bold text-lg">
              Web Devevelopment |{" "}
              <span className="text-gray-500 text-sm font-normal">
                22 July 2025
              </span>
            </p>
            <h3 className="text-xl font-bold text-slate-500 my-5">
              How to start a web development? Complete Full Stack Web Developer
              Roadmap 2025
            </h3>
            <p className="text-sm text-gray-400 mb-5">
              The ultimate guide to becoming a modern full-stack web developer.
              Hello friends! So, as we all know, now a days IT Jobs values
              increases daily, everyone wanted to get the job in IT company..
            </p>
            <Link
              to="/"
              className="text-purple-700 font-bold flex gap-1 items-center"
            >
              <span>
                <FaPlus />
              </span>
              Read More
            </Link>
          </div>
        </div>
        <div className="bg-white rounded shadow">
          <img
            src="https://ap-south-1.graphassets.com/AwvwvF3oVRz2AzLzRHiyVz/7QIwBI8QRBCtLFWt0zCS"
            alt="blog_image"
            className="rounded-t"
          />
          <div className="p-5">
            <p className="text-purple-500 font-bold text-lg">
              Web Devevelopment |{" "}
              <span className="text-gray-500 text-sm font-normal">
                22 July 2025
              </span>
            </p>
            <h3 className="text-xl font-bold text-slate-500 my-5">
              How to start a web development? Complete Full Stack Web Developer
              Roadmap 2025
            </h3>
            <p className="text-sm text-gray-400 mb-5">
              The ultimate guide to becoming a modern full-stack web developer.
              Hello friends! So, as we all know, now a days IT Jobs values
              increases daily, everyone wanted to get the job in IT company..
            </p>
            <Link
              to="/"
              className="text-purple-700 font-bold flex gap-1 items-center"
            >
              <span>
                <FaPlus />
              </span>
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
