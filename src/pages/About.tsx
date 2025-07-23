import AboutSection from "../components/home/AboutSection";
import BreadCrumb from "../components/core/BreadCrumb";
import PartnerSection from "../components/home/PartnerSection";
import TeamMembers from "../components/core/TeamMembers";
import { useEffect } from "react";

const About = ({ pageTitle }: any) => {
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);
  return (
    <div className="w-full flex justify-center flex-col items-center">
      <BreadCrumb heading="About Us" page="About" />
      <AboutSection isBtn={false} />
      {/* Team Members */}
      <TeamMembers />
      <PartnerSection />
    </div>
  );
};

export default About;
