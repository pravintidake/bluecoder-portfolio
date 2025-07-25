import Hero from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import ServiceSection from "../components/home/ServiceSection";
import PortfolioSection from "../components/home/PortfolioSection";
import ClientSection from "../components/home/ClientSection";
import BlogSection from "../components/home/BlogSection";
import PartnerSection from "../components/home/PartnerSection";
import { useEffect } from "react";
const Home = ({ pageTitle }: any) => {
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);
  return (
    <div className="w-full">
      {/* Hero Section */}
      <Hero />
      {/* About Section */}
      <AboutSection isBtn={true} />

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
      <div className="px-10 md:px-20 lg:px-40 bg-gray-900  block md:block lg:flex items-center p-10 border-b border-white">
        <div className="w-full md:w-full lg:w-1/2">
          <h1 className="text-gray-200 font-bold text-3xl mb-3">
            Sign Up Our Newsletter
          </h1>
          <p className="text-gray-200 text-center md:text-center lg:text-left">
            We Offer An Informative Monthly Technology - Check It Out
          </p>
        </div>
        <div className="w-full md:w-full lg:w-1/2 flex mt-2">
          <input
            type="text"
            className="p-1 lg:p-2 bg-white w-full rounded-l text-sm lg:text-normal"
            placeholder="Enter You Email"
          />
          <button className="bg-purple-500 text-white p-1 lg:p-2 w-1/2 border border-purple-500 rounded-r text-sm lg:text-normal">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
