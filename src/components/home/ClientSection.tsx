import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

import React from "react";
import clientData from "../../utils/ClientData";

const ClientSection = () => {
  return (
    <div className="px-40 bg-indigo-50 flex flex-col items-center p-10">
      <h1 className="text-gray-500 font-bold text-3xl mb-10">Our Client Say</h1>
      <div className="grid grid-cols-3 gap-5 w-full my-10">
        {clientData.map((client, id) => (
          <div key={id} className="flex flex-col">
            <div>
              <div className="w-full flex flex-col justify-between gap-3 bg-white rounded p-10">
                <img
                  className="text-xl font-bold w-32 drop-shadow mb-3"
                  src={client.companyLogo}
                />
                <p className="text-md text-slate-400">{client.comment}</p>
                <p className="text-sm text-yellow-500">
                  {client.rating && (
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, index) => {
                        const ratingValue = index + 1;
                        return (
                          <React.Fragment key={index}>
                            {client.rating >= ratingValue ? (
                              <FaStar color="#ffc107" size={24} />
                            ) : client.rating >= ratingValue - 0.5 ? (
                              <FaStarHalfAlt color="#ffc107" size={24} />
                            ) : (
                              <FaRegStar color="#e4e5e9" size={24} />
                            )}
                          </React.Fragment>
                        );
                      })}
                    </div>
                  )}
                </p>
              </div>
              <div className="h-0 w-0 border-24 border-x-transparent border-t-white border-b-transparent ml-8"></div>
            </div>
            <div className="w-full flex items-center gap-3 ml-2">
              <img
                src={client.image}
                alt="client.image"
                className="h-24 rounded-full border-4 border-white shadow-lg"
              />
              <div className="flex flex-col gap-2">
                <p className="text-xl font-bold">{client.name}</p>
                <p className="text-sm text-purple-500">{client.designation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientSection;
