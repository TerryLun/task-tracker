import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, ontoggleForm, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={ontoggleForm}
      />
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };

export default Header;
