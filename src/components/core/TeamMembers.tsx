import { teamData } from "../../utils";

const TeamMembers = () => {
  return (
    <div className="px-10 md:px-20 lg:px-40 bg-slate-50 flex flex-col items-center p-10">
      <h1 className="text-gray-500 font-bold text-3xl">Team Members</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full my-10 animate__animated animate__headShake">
        {teamData.map((member, id) => (
          <div
            className="w-full flex flex-col gap-3 items-start justify-start"
            key={id}
          >
            <img
              src={member.profileImg}
              alt="member_profileImg"
              className="shadow-lg rounded"
            />
            <div className="shadow-lg rounded w-full bg-white p-5">
              <p className="font-bold text-xl text-slate-600 mb-2">
                {member.name}
              </p>
              <p className="text-purple-500 font-bold">{member.designation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
