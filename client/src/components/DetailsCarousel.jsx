import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../image/breakfast.jpeg";
import img2 from "../image/wallpaper_bg_image.jpg";

const DetailsCarousel = () => {
  return (
    <div className="details-carousel">
      <Carousel>
        <Carousel.Item>
          <img src={img1} className="d-block w-100 carousel" alt="img1" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={img2} className="d-block w-100" alt="img2" />
        </Carousel.Item>
       </Carousel>
    </div>
  );
};

export default DetailsCarousel;
