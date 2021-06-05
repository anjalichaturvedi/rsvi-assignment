import React from "react";
import { Carousel } from "react-responsive-carousel";
import "../node_modules/react-responsive-carousel/lib/styles/carousel.css";
import styles from "./CarouselThumbnail.module.css";
const CarouselThumbnail = () => {
  return (
    <div className={styles.carouselWrapper}>
      <Carousel
        autoPlay
        infiniteLoop
        interval="15000"
        transitionTime="15000"
        className={styles.carouselRoot}
        id={styles.carouselRoot1}
        >
        <div className={` ${styles.carouselDiv} `}>
          <img
            src="https://images.pexels.com/photos/992734/pexels-photo-992734.jpeg"
            alt="thumb1"
            
          />
        </div>
        <div className={` ${styles.carouselDiv} `}>
          <img
            src="https://images.pexels.com/photos/60909/rose-yellow-flower-petals-60909.jpeg"
            alt="thumb2"
            
          />
        </div>
        <div className={` ${styles.carouselDiv} `}>
          <img
            src="https://images.pexels.com/photos/5212357/pexels-photo-5212357.jpeg"
            alt="thumb3"
            
          />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselThumbnail;
