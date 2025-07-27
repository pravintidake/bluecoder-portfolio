import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogSection = () => {
  let blogs = [
    {
      title:
        "How to start a web development? Complete Full Stack Web Developer Roadmap 2025",
      desc: "The ultimate guide to becoming a modern full-stack web developer. Hello friends! So, as we all know, now a days IT Jobs values increases daily, everyone wanted to get the job in IT company.",
      category: "Web Development",
      createdAt: "20 July 2025",
      featuredImg:
        "https://ap-south-1.graphassets.com/AwvwvF3oVRz2AzLzRHiyVz/7QIwBI8QRBCtLFWt0zCS",
    },
    {
      title:
        "Introduction to HTML, CSS, JavaScript and how create website using html, css, javascript?",
      desc: "In this article I’ll teach you web development in easy way! My actual aim to write this article is to teach you introductory part of html, css, javascript and web development basics also teach you how to create...",
      category: "Web Development",
      createdAt: "21 July 2025",
      featuredImg:
        "https://ap-south-1.graphassets.com/AwvwvF3oVRz2AzLzRHiyVz/BDELWrETECZavwkwX44y",
    },
    {
      title:
        "Installation of Vs code & Live Server, Complete visual studio code setup, Learn web development",
      desc: "In this article, we are going to start our first HTML tutorial. We will now learn about how to install VS code and live server also learn how to write HTML code in the Visual Studio Code.",
      category: "Web Development",
      createdAt: "22 July 2025",
      featuredImg:
        "https://ap-south-1.graphassets.com/AwvwvF3oVRz2AzLzRHiyVz/bPx6hBMTS2ws0DSWqpDX",
    },
  ];

  return (
    <div className="px-10 md:px-20 lg:px-40 bg-slate-50 flex flex-col items-center p-10">
      <h1 className="text-gray-500 font-bold text-3xl mb-10">
        Blogs & Articles
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-6 animate__animated animate__fadeInDown">
        {blogs.map((blog, id) => (
          <div className="bg-white rounded shadow" key={id}>
            <img
              src={blog.featuredImg}
              alt={blog.featuredImg}
              className="rounded-t"
            />
            <div className="p-5">
              <p className="text-fuchsia-700 font-bold">
                {blog.category} |{" "}
                <span className="text-gray-500 text-sm font-normal">
                  {blog.createdAt}
                </span>
              </p>
              <h3 className="text-xl font-bold text-slate-500 my-5">
                {blog.title}
              </h3>
              <p className="text-sm text-gray-400 mb-5"> {blog.desc}</p>
              <Link
                to="/"
                className="text-fuchsia-700 font-bold flex gap-1 items-center text-sm"
              >
                <span>
                  <FaPlus />
                </span>
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
