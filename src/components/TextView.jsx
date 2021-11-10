import { memo } from "react";
import PropTypes from "prop-types";

const TextView = ({ label, fontSize, fontWeight, color, letterSpacing }) => {
  console.log("Text view called");
  const style = {
    label,
    fontSize,
    fontWeight,
    color,
    letterSpacing,
  };
  return (
    <>
      <p style={style}>{label}</p>
    </>
  );
};

TextView.defaultProps = {
  fontSize: "20px",
  color: "black",
  fontWeight: "600",
  letterSpacing: "4px",
};

TextView.propTypes = {
  label: PropTypes.string.isRequired,
};

export default memo(TextView);
