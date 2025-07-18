import myPicture from "../assets/portfolio_face.jpg";
const Home = () => {
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
            <button className="transition delay-150 duration-300 ease-in-out bg-purple-500 text-white px-5 py-2 rounded-full hover:text-purple-500 hover:bg-white cursor-pointer">
              Our Service
            </button>
            <button className="transition delay-150 duration-300 ease-in-out bg-transparent border border-white px-5 py-2 rounded-full cursor-pointer hover:border-purple-500 hover:shadow hover:bg-purple-600">
              Contact Me
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="h-[92vh] px-40 bg-blue-100">About Me</div>

      {/* Services */}
      <div className="h-[92vh] px-40 bg-red-100">Our Services</div>

      {/* Portfolio */}
      <div className="h-[92vh] px-40 bg-yellow-100">Our Portfolio</div>

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
