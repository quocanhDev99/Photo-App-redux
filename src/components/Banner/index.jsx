import React from "react";
import PropTypes from "prop-types";
import "./Banner.scss";

Banner.propTypes = {
  title: PropTypes.string,
  backgroundUrl: PropTypes.string,
};

Banner.defaultProps = {
  title: "",
  backgroundUrl: "",
};

function Banner(props) {
  const { title, backgroundUrl } = props;

  const bannerStyle = backgroundUrl
    ? { backgrounImage: `url(${backgroundUrl})` }
    : {};

  return (
    <section className="banner" style={bannerStyle}>
      <h1 className="banner_title">{title}</h1>
    </section>
  );
}

export default Banner;
