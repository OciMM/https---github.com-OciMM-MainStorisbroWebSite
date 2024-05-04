import React from "react";
import Carousel from "react-img-carousel";

const AuthorizedAdminCarusel = ({ image }) => {
  require("react-img-carousel/lib/carousel.css");

  return (
    <Carousel cellPadding={105}>
      <img className="caruselItem" src={image} alt="img" />
      <img className="caruselItem" src={image} alt="img" />
      <img className="caruselItem" src={image} alt="img" />
      <img className="caruselItem" src={image} alt="img" />
      <img className="caruselItem" src={image} alt="img" />
      <img className="caruselItem" src={image} alt="img" />
      <img className="caruselItem" src={image} alt="img" />
      <img className="caruselItem" src={image} alt="img" />
    </Carousel>
  );
};

export default AuthorizedAdminCarusel;
