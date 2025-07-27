import { Link } from "react-router-dom";
import { socialIcons } from "../../utils";
import { motion } from "motion/react";

const SocialIcons = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.5 }}
    >
      <div className="gap-3 flex">
        {socialIcons.map((i, id) => (
          <Link
            to={i.href}
            className="text-md p-2 border rounded-full animate__animated animate__pulse"
            key={id}
            target="_blank"
          >
            {i.icon}
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default SocialIcons;
