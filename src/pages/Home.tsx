import Hero from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import ServiceSection from "../components/home/ServiceSection";
import PortfolioSection from "../components/home/PortfolioSection";
import ClientSection from "../components/home/ClientSection";
import BlogSection from "../components/home/BlogSection";
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
      <div className="h-[92vh] px-40 bg-green-100">Trusted Partners</div>
    </div>
  );
};

export default Home;
