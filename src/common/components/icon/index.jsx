import React from "react";
import PropTypes from "prop-types";
// import sprite from "../../../img/sprite.svg";

const Icon = ({ name, className }) => (
  <svg className={className}>
    <use xlinkHref={process.env.PUBLIC_URL + `/images/sprite.svg#${name}`} />
  </svg>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string
};

Icon.defaultProps = {
  className: "w-[24px] h-[24px]"
};

export default Icon;
