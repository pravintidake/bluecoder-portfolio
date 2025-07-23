import ServiceSection from "../components/home/ServiceSection";
import BreadCrumb from "../components/core/BreadCrumb";
import PartnerSection from "../components/home/PartnerSection";
import PricingPlans from "../components/core/PricingPlans";
import { useEffect } from "react";

const Services = ({ pageTitle }: any) => {
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);
  return (
    <div className="w-full flex justify-center flex-col items-center">
      <BreadCrumb heading="Our Services" page="Services" />
      {/* Pricing Plans */}
      <PricingPlans />
      <ServiceSection />
      <PartnerSection />
    </div>
  );
};

export default Services;
