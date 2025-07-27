import {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
  project9,
} from "../../assets";

const PortfolioSection = () => {
  let gridData = [
    [{ image: project1 }, { image: project2 }, { image: project3 }],
    [{ image: project4 }, { image: project5 }, { image: project6 }],
    [{ image: project7 }, { image: project8 }, { image: project9 }],
  ];

  return (
    <div className="px-10 md:px-20 lg:px-40 bg-white flex flex-col items-center p-10">
      <h1 className="text-gray-500 font-bold text-3xl mb-10 text-center">
        Our Portfolio
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        {gridData.map((grid, index) => (
          <div className="grid gap-5" key={index}>
            {grid.map((gr, id) => (
              <div key={id}>
                <img
                  className="h-auto max-w-full rounded shadow animate__animated animate__fadeInUp"
                  src={gr.image}
                  alt="gr.image"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;
