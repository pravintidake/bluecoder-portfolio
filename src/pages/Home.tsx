import Hero from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import ServiceSection from "../components/home/ServiceSection";
import PortfolioSection from "../components/home/PortfolioSection";
import ClientSection from "../components/home/ClientSection";
import BlogSection from "../components/home/BlogSection";
import PartnerSection from "../components/home/PartnerSection";
const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <Hero />
      {/* About Section */}
      <AboutSection />

      {/* Services */}
      <ServiceSection />

      {/* Portfolio */}
      <PortfolioSection />

      {/* Testimonials */}
      <ClientSection />

      {/* Blogs */}
      <BlogSection />

      {/* Partners */}
      <PartnerSection />

      {/* NewsLetter */}
      <div className="px-40 bg-black flex items-center p-10 border-b border-white">
        <div className="w-1/2">
          <h1 className="text-gray-200 font-bold text-3xl mb-3">
            Sign Up Our Newsletter
          </h1>
          <p className="text-gray-200">
            We Offer An Informative Monthly Technology - Check It Out
          </p>
        </div>
        <div className="w-1/2 flex">
          <input
            type="text"
            className="p-2 bg-white w-full rounded-l"
            placeholder="Enter You Email"
          />
          <button className="bg-purple-500 text-white p-2 w-1/2 border border-purple-500 rounded-r">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
