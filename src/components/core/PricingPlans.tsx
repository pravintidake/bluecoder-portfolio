import { RiPlayCircleFill } from "react-icons/ri";
import { pricingPlans } from "../../utils";
import Button from "./Button";

const PricingPlans = () => {
  return (
    <div className="px-10 md:px-20 lg:px-40 bg-slate-50 flex flex-col items-center justify-center p-10">
      <h1 className="text-gray-500 font-bold text-3xl">Pricing Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full my-10">
        {pricingPlans.map((plan, id) => (
          <div
            className="w-full flex flex-col gap-3 items-start justify-stretch bg-white rounded-xl shadow-lg animate__animated animate__rubberBand"
            key={id}
          >
            <div className="w-full p-5">
              <div className="w-full p-5 flex flex-col items-center gap-5">
                <p className="font-bold text-xl text-slate-600">{plan.title}</p>
                <p
                  className="text-slate-600 font-bold text-2xl lg:text-3xl flex items-end gap-1   
              "
                >
                  <span className=" text-purple-500">₹</span>
                  {plan.price} /
                  <span className="text-slate-500">{plan.duration}</span>
                </p>
                <p className="text-slate-500 text-center">{plan.bestFor}</p>
                <Button
                  classes="transitionClasses btnCommen bg-purple-500 text-white hover:text-purple-500 hover:bg-white"
                  title="Buy Now"
                />
              </div>
              <div className="w-full p-5 flex flex-col items-start gap-3">
                {plan.features.map((feature, idx) => (
                  <p
                    key={idx}
                    className="text-left mb-2 flex items-center text-slate-500 gap-1"
                  >
                    <RiPlayCircleFill />
                    {feature}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
