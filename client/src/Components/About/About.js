import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Container, Col} from 'react-bootstrap';
import styles from './About.module.css';
import boxbg from './Images/dummy-box.jpg';
import bg from './Images/background-red.png';
import bgimage from './Images/dummy-bg.jpg';

class About extends Component {
    render() {
        return (
          <Container fluid>
              <Row className={styles.section5}>
                  <p className={styles.para1}>
                  Besides there are other issues to be addressed, such as availability of Aids & Appliances (Assistive Devices) for the blind students and professionals, availability of assistive technology, information & communication technology, community services, awareness, advocacy services, skill development & Vocational Training, Psychological and Social Adjustments, Availability of Sports & Entertainment Facilities, Training in Daily Living Skills, resource crunch etc.
                  </p>
                  <p className={styles.para2}>
                  As a matter of fact, the disability sector in the state of Uttar Pradesh requires more attention from the government and the people than in many other States and Union Territories of Our Country. The picture appears to be quite bleak. Hence, RSVI is a ray of hope for the above-mentioned challenges with respect to Visual Impairment.
                  </p>
              </Row>
              <Row>
              <img src={bgimage} alt='dummy' className={styles.bgimage}/>
              </Row>
              <Row>
              <Col>
              <img src={boxbg} alt='dummy' className={styles.boxbgmain}/>
                <p className={styles.sbox}> About Us </p>
              </Col>
              <Col>
              <img src={boxbg} alt='dummy' className={styles.boxbg}/>
                <p className={styles.sbox}> About Us </p>
              </Col>
              <Col>
              <img src={boxbg} alt='dummy' className={styles.boxbg}/>
                <p className={styles.sbox}> About Us </p>
              </Col>
              </Row>
          </Container>

        )
    }
}

export default About;
