import React from "react";
import styles from "./About.module.css";
const AboutComponent = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className={`row mt-3 ${styles.section1}`}>
          <img
            className={`col-lg-4 col-md-6 my-md-5 p-0 ${styles.groupImg}`}
            src="https://images.pexels.com/photos/5212357/pexels-photo-5212357.jpeg"
            alt="group"
          ></img>
          <div className={`${styles.intro} col text-center py-5`}>
            <div className="d-inline-block  text-left my-5">
              <h1 className="d-inline-block">
                Rehabiliation <br></br>Society of the<br></br>Visually Impaired
              </h1>

              <br></br>
              <p className="d-inline-block h6">
                let the blind hold the torch...
              </p>
            </div>
          </div>
        </div>

        <div className={`row ${styles.headerOfSection2} py-4 mt-5`}>
          <h1 className="">Who Are We?</h1>
        </div>
        <div className={`row mx-5 pt-2 text-justify ${styles.introPara}`}>
          <p>
            RSVI started its journey in the year 2005 and has successfully
            completed more than 15 years of its successful mission.
          </p>
          <p>
            RSVI is a charitable organization professionally managed by a team
            of committed social workers having experience of more than 20 years
            and technical expertise in the field of education, training,
            research, employment, networking, advocacy and consultancy services
            pertaining to the social, psychological and economic rehabilitation
            of the visually impaired. It aims at achieving perfection to the
            satisfaction of both the beneficiary and the benefactor.
          </p>
          <p>
            We at RSVI (Rehabilitation Society of The Visually Impaired) have
            joined hands together to help you if for any reason or by birth you
            are affected by one or the other problem of eyesight. You may have
            lost your eyesight completely or in the process of losing the same,
            you can always count on us for all kinds of problems that you face
            due to the partial or total loss of eyesight.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
//
