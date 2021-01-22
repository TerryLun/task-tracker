import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>License: MIT</p>
      <Link to="/about">About</Link>
    </footer>
  );
};

export default Footer;
