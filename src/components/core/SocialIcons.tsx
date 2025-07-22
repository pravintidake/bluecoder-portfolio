import { Link } from "react-router-dom";
import { socialIcons } from "../../utils";

const SocialIcons = () => {
  return (
    <div className="flex gap-3">
      {socialIcons.map((i, id) => (
        <Link
          to={i.href}
          className="text-md p-2 border rounded-full"
          key={id}
          target="_blank"
        >
          {i.icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialIcons;
