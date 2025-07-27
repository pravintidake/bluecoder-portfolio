import { Link } from "react-router-dom";
import { serviceData } from "../../utils";

const ServiceSection = () => {
  return (
    <div className="px-10 md:px-20 lg:px-40 bg-slate-100 flex flex-col items-center p-10">
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-10 w-full mb-10">
        {serviceData.map((service, idx) => (
          <div
            className="w-full bg-white shadow-lg rounded flex flex-col gap-5 items-start justify-start p-8 animate__animated animate__fadeInUp"
            key={idx}
          >
            {service.icon}
            <h3 className="text-xl font-bold mt-3 text-teal-800">
              {service.title}
            </h3>
            <p className="text-sm leading-6 text-gray-600">
              {service.description}
            </p>
            <Link to="/" className="font-bold text-purple-800">
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
