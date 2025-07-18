import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black text-white p-3">
      <p className="text-sm text-center">
        &copy; {new Date().getFullYear()}{" "}
        <Link to="https://www.youtube.com/@bluecodertech">Bluecoder Tech</Link>-
        All Rights Reverved
      </p>
    </div>
  );
};

export default Footer;
