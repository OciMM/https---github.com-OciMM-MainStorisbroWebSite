import React from "react";
import Carousel from "react-img-carousel";

const AuthorizedAdminCarusel = ({ image }) => {
  require("react-img-carousel/lib/carousel.css");

  const videoStyle = {
    width: "258px",
    height: "461px",
    borderRadius: "10px", // Пример радиуса скругления
  };

  return (
    <Carousel cellPadding={105}>
      <video style={videoStyle} className="carouselItem" controls>
        <source src={image} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video style={videoStyle} className="carouselItem" controls>
        <source src={image} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video style={videoStyle} className="carouselItem" controls>
        <source src={image} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Добавьте больше элементов <video> для каждого видео */}
    </Carousel>
  );
};

export default AuthorizedAdminCarusel;
