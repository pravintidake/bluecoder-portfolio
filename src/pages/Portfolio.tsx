import { useEffect } from "react";
import BreadCrumb from "../components/core/BreadCrumb";
import PortfolioSection from "../components/home/PortfolioSection";

const Portfolio = ({ pageTitle }: any) => {
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);
  return (
    <div className="w-full flex justify-center flex-col items-center">
      <BreadCrumb heading="Our Portfolio" page="Portfolio" />
      <PortfolioSection />
    </div>
  );
};

export default Portfolio;
