import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modules from 'AboutUs.module.css';
import { Carousel } from "react-responsive-carousel";
import "./Carousel/Carousel.css";
import boxbg from 'AboutUsImages/dummy-box.jpg';
import bgimage from 'AboutUsImages/dummy-bg.jpg';

class AboutUs extends Component {
  render() {
    return (
      <div className={`${Modules.mainAboutUs}`}>
        <Container className={`${Modules.container}`}>
          {/* Accepted classNames...
                    Examples:
                    1. if row1 -> className = rowOne or sectionOne
                    2. if column1 in row 1 -> className = rowOneColOne or contentWrap
                    3. if header in row2 -> className = rowTwoHeader
                    4. if para in column -> className = colTwoPara
                */}

          {/* **************** Row 1 **************** */}
          {/* Shataxi */}
          <div className={`row mt-3 ${Modules.section1} p-2`}>
            <img
              className={`col-lg-4 col-md-6 my-md-5 p-0 ${Modules.rowOneColOne}`}
              src="https://images.pexels.com/photos/5212357/pexels-photo-5212357.jpeg"
              alt="group"
            ></img>
            <div className={`${Modules.rowOneColTwo} col text-center py-5`}>
              <div className="d-inline-block  text-left my-5">
                <h1 className="d-inline-block">
                  Rehabiliation <br></br>Society of the<br></br>Visually
                  Impaired
                </h1>

                <br></br>
                <p className="d-inline-block h6">
                  let the blind hold the torch...
                </p>
              </div>
            </div>
          </div>
          {/* **************** Row 2 **************** */}
          {/* Shataxi */}
          <div className={`row ${Modules.section2} p-2 `}>
            <div className={`${Modules.rowTwoDiv} py-4 mt-5`}>
              <h1 className="">Who Are We?</h1>
            </div>
            <div
              className={`row pt-2 m-1 text-justify ${Modules.rowTwoRowPara}`}
            >
              <p className="mx-4">
                RSVI started its journey in the year 2005 and has successfully
                completed more than 15 years of its successful mission.
              </p>
              <p className="mx-4">
                RSVI is a charitable organization professionally managed by a
                team of committed social workers having experience of more than
                20 years and technical expertise in the field of education,
                training, research, employment, networking, advocacy and
                consultancy services pertaining to the social, psychological and
                economic rehabilitation of the visually impaired. It aims at
                achieving perfection to the satisfaction of both the beneficiary
                and the benefactor.
              </p>
              <p className="mx-4">
                We at RSVI (Rehabilitation Society of The Visually Impaired)
                have joined hands together to help you if for any reason or by
                birth you are affected by one or the other problem of eyesight.
                You may have lost your eyesight completely or in the process of
                losing the same, you can always count on us for all kinds of
                problems that you face due to the partial or total loss of
                eyesight.
              </p>
            </div>
          </div>

          {/* **************** Row 3 **************** */}
          {/* Shadab */}
          {/* **************** Row 4 **************** */}
          {/* Shadab */}

          {/* **************** Row 5 **************** */}
          {/* Anjali */}
          <Container fluid>
              <Row className={Modules.section5}>
                  <p className={Modules.para1}>
                  Besides there are other issues to be addressed, such as availability of Aids & Appliances (Assistive Devices) for the blind students and professionals, availability of assistive technology, information & communication technology, community services, awareness, advocacy services, skill development & Vocational Training, Psychological and Social Adjustments, Availability of Sports & Entertainment Facilities, Training in Daily Living Skills, resource crunch etc.
                  </p>
                  <p className={Modules.para2}>
                  As a matter of fact, the disability sector in the state of Uttar Pradesh requires more attention from the government and the people than in many other States and Union Territories of Our Country. The picture appears to be quite bleak. Hence, RSVI is a ray of hope for the above-mentioned challenges with respect to Visual Impairment.
                  </p>
              </Row>
              {/* **************** Row 6 **************** */}
              {/* Anjali */}
              <Row className={Modules.bgimage}>
                <img src={bgimage} alt='dummy'/>
              </Row>
              <Row>
              <Col>
                <img src={boxbg} alt='dummy' className={Modules.boxbgmain}/>
                <p className={Modules.sbox}> About Us </p>
              </Col>
              <Col>
                <img src={boxbg} alt='dummy' className={Modules.boxbg}/>
                <p className={Modules.sbox}> About Us </p>
              </Col>
              <Col>
                <img src={boxbg} alt='dummy' className={Modules.boxbg}/>
                <p className={Modules.sbox}> About Us </p>
              </Col>
              </Row>
              </Container>
          {/* **************** Row 7 **************** */}
          {/* Shadab */}

          {/* **************** Row 8 **************** */}
          {/* Anjali */}
          <Container>
          <Row>
            <img src={bgimage} alt='dummy' className={Modules.bgimage}/>
          </Row>
          <Row className={Modules.collabs}>
            <Col>
              <h1> Affilations & Collaborations </h1>
              <button className={Modules.collabbutton}> KNOW MORE </button>
            </Col>
            <Col>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie iaculis fringilla. Ut tincidunt tempor quam, sit amet interdum lectus tempus porttitor. Vivamus dolor est, vulputate ut dapibus vitae, accumsan consequat tortor. Phasellus varius porttitor nunc, a accumsan lorem tempor sit amet. Nam aliquet ultricies metus. </p>
            </Col>
          </Row>
        </Container>
          {/* **************** Row 9 **************** */}
          {/* Shataxi */}
          <div className={`${Modules.rowNineCarouselWrapper} p-2 mt-2`}>
            <Carousel
              autoPlay
              infiniteLoop
              interval="15000"
              transitionTime="15000"
              className={Modules.rowNineCarouselRoot}
            >
              <div className={` ${Modules.rowNineCarouselDiv} `}>
                <img
                  src="https://images.pexels.com/photos/992734/pexels-photo-992734.jpeg"
                  alt="thumb1"
                />
              </div>
              <div className={` ${Modules.rowNineCarouselDiv} `}>
                <img
                  src="https://images.pexels.com/photos/60909/rose-yellow-flower-petals-60909.jpeg"
                  alt="thumb2"
                />
              </div>
              <div className={` ${Modules.rowNineCarouselDiv} `}>
                <img
                  src="https://images.pexels.com/photos/5212357/pexels-photo-5212357.jpeg"
                  alt="thumb3"
                />
              </div>
            </Carousel>
          </div>
        </Container>
      </div>
    );
  }
}

export default AboutUs;
