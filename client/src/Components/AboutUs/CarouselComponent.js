import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styles from "./Carousel.module.css";
const CarouselComponent = () => {
  return (
    <div className="my-2">
      <div className="carousel-wrapper-div">
        <Carousel className={`text-center ${styles.carouselDiv} py-3`}>
          <Carousel.Item>
            <img
              src="https://images.pexels.com/photos/992734/pexels-photo-992734.jpeg"
              alt="rsvi-team"
              className=""
            ></img>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://images.pexels.com/photos/60909/rose-yellow-flower-petals-60909.jpeg"
              alt="rsvi-team"
              className=""
            ></img>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://images.pexels.com/photos/5212357/pexels-photo-5212357.jpeg"
              alt="rsvi-team"
              className=""
            ></img>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselComponent;
