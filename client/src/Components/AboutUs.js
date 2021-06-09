import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Modules from "./AboutUs.module.css";
import { Carousel } from "react-bootstrap";
import "./Carousel/Carousel.css";
import bgimage from "../AboutUsImages/dummy-bg.jpg";
import image from "../AboutUsImages/Section3.jpeg";
import Section5Img from "../AboutUsImages/Section5.jpeg";
import Section6Img1 from "../AboutUsImages/Section6_1.jpeg";
import Section6Img2 from "../AboutUsImages/Section6_2.jpeg";
import Section6Img3 from "../AboutUsImages/Section6_3.jpeg";
import CarouselImg1 from "../AboutUsImages/Section9_1.jpeg";
import CarouselImg2 from "../AboutUsImages/Section9_2.jpeg";
import CarouselImg3 from "../AboutUsImages/Section9_3.jpeg";
import CarouselImg4 from "../AboutUsImages/Section9_4.jpeg";
import CarouselImg5 from "../AboutUsImages/Section9_5.jpeg";
class AboutUs extends Component {
  render() {
    return (
      <div className={`${Modules.mainAboutUs}`}>
        <Container className={`${Modules.containerAboutUs}`}>
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
            <div className={`col-md-3 col-12 my-md-5 p-0 ${Modules.rowOneColOne}`}>
              <img src="https://images.pexels.com/photos/5212357/pexels-photo-5212357.jpeg"
                alt="group"></img>
            </div>
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
          <div className={`row ${Modules.section2} p-1 `}>
            <div className={`${Modules.rowTwoDiv} py-4 mt-5`}>
              <h1 className="">Who Are We?</h1>
            </div>
            <div
              className={`row pt-2 m-1 text-justify ${Modules.rowTwoRowPara}`}
            >
              <p /* className="mx-4" */>
                RSVI started its journey in the year 2005 and has successfully
                completed more than 15 years of its successful mission.
              </p>
              <p /* className="mx-4" */>
                RSVI is a charitable organization professionally managed by a
                team of committed social workers having experience of more than
                20 years and technical expertise in the field of education,
                training, research, employment, networking, advocacy and
                consultancy services pertaining to the social, psychological and
                economic rehabilitation of the visually impaired. It aims at
                achieving perfection to the satisfaction of both the beneficiary
                and the benefactor.
              </p>
              <p /* className="mx-4" */>
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

          {/* <Container className={Modules.container2}> */}
            <section className={Modules.section3}>
              <div className={Modules.content}>
                <p>
                  In fact, we also extend our services to people with other
                  types of physical and mental disabilities, including hearing
                  impairment, dyslexia, muscular dystrophy or even people
                  suffering from more than one disability. Our services are
                  designed to serve persons of all ages and sexes. We also help
                  parents and siblings of persons with disabilities and teach
                  them how to overcome the mental trauma they undergo because of
                  having a person with a disability in their family.
                  <br />
                  <br />
                  Our efforts are directed towards creating an inclusive and
                  barrier-free environment; we build a common platform for
                  uncommon people. We provide educational facilities, emotional
                  strength, psychological counselling, social integration,
                  Economic Rehabilitation and all that is needed for a person
                  suffering from a disability to be a respectable member of
                  society. From giving advice to providing emotional dock and
                  assisting you to choose the appropriate technology for your
                  educational needs or for your workplace, we are at your beck
                  and call.
                </p>
              </div>
              <div className={Modules.imageBox}>
                <img src={image} alt="pot" />
              </div>
            </section>

            {/* **************** Row 4 **************** */}

            <section className={Modules.section4}>
              <div className={Modules.whyStarted}>
                <h1>Why We Started RSVI ?</h1>
              </div>
              <div className={Modules.reasonForStart}>
                <p>
                  It is important to mention here that there is a dearth of
                  reading material and information in accessaile formats (Audio,
                  Braille, E-Text) for the visually impaired resulting in
                  creating an insurmountable problem for the students and other
                  professional requiring constant updating of their knowledge.
                  It is estimated that less than 0.5% of books printed in india
                  are converted into audio and Braille formats, let alone
                  international publications. As a matter of fact,
                  rehabilitation services are available to less than 5% of
                  people suffering from blindness and low vision.
                  <br />
                  The magnitude of the problem may be assessed from the
                  following: <br />
                  1. Total number of schools for the blind in the state of Utter
                  Pradesh with a population of more than 20 crores is less than
                  25.
                  <br />
                  2. Government Braille Production Centers including NGO's in
                  the entire country is less than 10.
                  <br />
                  3. Audio Reording Centers of books run by government and NGO's
                  in the entire country is less than 15. <br />
                  4. Audio-Conversion Centers in the state of UP is only one.
                </p>
              </div>
            </section>
          {/* </Container> */}

          {/* **************** Row 5 **************** */}
          {/* Anjali */}
          {/* <Container fluid> */}
            <Row className={Modules.section5}>
              <p className={Modules.para1}>
                Besides there are other issues to be addressed, such as
                availability of Aids & Appliances (Assistive Devices) for the
                blind students and professionals, availability of assistive
                technology, information & communication technology, community
                services, awareness, advocacy services, skill development &
                Vocational Training, Psychological and Social Adjustments,
                Availability of Sports & Entertainment Facilities, Training in
                Daily Living Skills, resource crunch etc. <br></br> <br></br>
              {/* </p>
              <p className={Modules.para2}> */}
                As a matter of fact, the disability sector in the state of Uttar
                Pradesh requires more attention from the government and the
                people than in many other States and Union Territories of Our
                Country. The picture appears to be quite bleak. Hence, RSVI is a
                ray of hope for the above-mentioned challenges with respect to
                Visual Impairment.
              </p>
            </Row>
            {/* **************** Row 6 **************** */}
            {/* Anjali */}
            <Row className={Modules.sec5bgimage}>
              <img src={Section5Img} alt="dummy" />
            </Row>
            <Row>
              <Col>
                <img src={Section6Img1} alt="dummy" className={Modules.boxbgmain} />
                <p className={Modules.sbox}> About Us </p>
              </Col>
              <Col>
                <img src={Section6Img2} alt="dummy" className={Modules.boxbg} />
                <p className={Modules.sbox}> About Us </p>
              </Col>
              <Col>
                <img src={Section6Img3} alt="dummy" className={Modules.boxbg} />
                <p className={Modules.sbox}> About Us </p>
              </Col>
            </Row>
         {/*  </Container> */}
          {/* **************** Row 7 **************** */}
          {/* Shadab */}

          {/* **************** Row 8 **************** */}
          {/* Anjali */}
          {/* <Container> */}
            <Row>
              <img src={bgimage} alt="dummy" className={Modules.bgimage} />
            </Row>
            <Row className={Modules.collabs}>
              <Col>
                <h1> Affilations & <br></br>Collaborations </h1>
                <button className={Modules.collabbutton}> KNOW MORE </button>
              </Col>
              <Col>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas molestie iaculis fringilla. Ut tincidunt tempor quam,
                  sit amet interdum lectus tempus porttitor. Vivamus dolor est,
                  vulputate ut dapibus vitae, accumsan consequat tortor.
                  Phasellus varius porttitor nunc, a accumsan lorem tempor sit
                  amet. Nam aliquet ultricies metus.{" "}
                </p>
              </Col>
            </Row>
          {/* </Container> */}
          {/* **************** Row 9 **************** */}
          {/* Shataxi */}
          <div className={`${Modules.rowNineCarouselWrapper} p-2 mt-2`}>
             <Carousel
              autoPlay
              infiniteLoop
              interval="15000"
              transitionTime="600"
              className={Modules.rowNineCarouselRoot}
            >
            <div className={` ${Modules.rowNineCarouselDiv} `}>
            <img src={CarouselImg1} alt="thumb1" />
          </div>
          <div className={` ${Modules.rowNineCarouselDiv} `}>
            <img src={CarouselImg2} alt="thumb2" />
          </div>
          <div className={` ${Modules.rowNineCarouselDiv} `}>
            <img src={CarouselImg3} alt="thumb3" />
          </div>
          <div className={` ${Modules.rowNineCarouselDiv} `}>
            <img src={CarouselImg4} alt="thumb4" />
          </div>
          <div className={` ${Modules.rowNineCarouselDiv} `}>
            <img src={CarouselImg5} alt="thumb5" />
          </div>
            </Carousel>
          </div>
        </Container>
      </div>
    );
  }
}

export default AboutUs;
