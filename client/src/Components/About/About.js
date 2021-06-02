import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Container} from 'react-bootstrap';
import styles from './About.module.css';

class About extends Component {
    render() {
        return (
          <Container fluid>
              <Row className={styles.body}>
                  <p className={styles.para1}>
                  Besides there are other issues to be addressed, such as availability of Aids & Appliances (Assistive Devices) for the blind students and professionals, availability of assistive technology, information & communication technology, community services, awareness, advocacy services, skill development & Vocational Training, Psychological and Social Adjustments, Availability of Sports & Entertainment Facilities, Training in Daily Living Skills, resource crunch etc.
                  </p>
                  <p className={styles.para2}>
                  As a matter of fact, the disability sector in the state of Uttar Pradesh requires more attention from the government and the people than in many other States and Union Territories of Our Country. The picture appears to be quite bleak. Hence, RSVI is a ray of hope for the above-mentioned challenges with respect to Visual Impairment.
                  </p>
              </Row>
          </Container>
        )
    }
}

export default About;
