import { partner1, partner2, partner3, partner4, partner5 } from "../../assets";

const PartnerSection = () => {
  let partners = [partner1, partner2, partner3, partner4, partner5];
  return (
    <div className="px-10 md:px-20 lg:px-40 bg-blue-50 flex flex-col items-center p-10">
      <h1 className="text-gray-500 font-bold text-3xl mb-10">Our Partners</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 ld:grid-cols-5 gap-5 mb-10">
        {partners.map((partner, id) => (
          <div
            key={id}
            className="flex items-center justify-center bg-white rounded animate__animated animate__backInRight"
          >
            <img
              src={partner}
              alt="partner"
              className="object-fit px-10 py-2 w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerSection;
