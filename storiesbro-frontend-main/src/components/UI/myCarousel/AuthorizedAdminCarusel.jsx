import React from "react";
import Carousel from "react-img-carousel";

const AuthorizedAdminCarusel = ({ image }) => {
  require("react-img-carousel/lib/carousel.css");

  return (
    <Carousel cellPadding={105}>
      <video className="carouselItem" controls>
        <source src={image} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video className="carouselItem" controls>
        <source src={image} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video className="carouselItem" controls>
        <source src={image} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Add more <video> elements for each video */}
    </Carousel>
  );
};

export default AuthorizedAdminCarusel;
