import React from 'react';
import { Container } from 'react-bootstrap';
import style from './about_us.module.css';
import image from './images/image.jpg';

const AboutUs = () => {
    return (
        <Container className={style.container}>
            <section className={style.section3}>
                <div className={style.content}>
                    <p>
                        In fact, we also extend our services to people with other types of physical and mental disabilities, including hearing impairment, dyslexia, muscular dystrophy or even people suffering from more than one disability. Our services are designed to serve persons of all ages and sexes. We also help parents and siblings of persons with disabilities and teach them how to overcome the mental trauma they undergo because of having a person with a disability in their family.<br /><br />

                            Our efforts are directed towards creating an inclusive and barrier-free environment; we build a common platform for uncommon people. We provide educational facilities, emotional strength, psychological counselling, social integration, Economic Rehabilitation and all that is
                            needed for a person suffering from a disability to be a respectable member of society. From giving advice to providing emotional dock and assisting you to choose the appropriate technology for your educational needs or for your workplace, we are at your beck and call.

                        </p>
                </div>
                <div className={style.imageBox}>
                    <img src={image} alt="pot" />
                </div>
            </section>
            <section className={style.section4}>
                    <div className={style.whyStarted}>
                        <h1>Why We Started RSVI ?</h1>
                    </div>
                    <div className={style.reasonForStart}>
                        <p>
                            It is important to mention here that there is a dearth of reading material and information in accessaile formats (Audio, Braille, E-Text) for the visually impaired resulting in creating an insurmountable problem for the students and other professional requiring constant updating of their knowledge. It is estimated that less than 0.5% of books printed in india are converted into audio and Braille formats, let alone international publications. As a matter of fact, rehabilitation services are available to less than 5% of people suffering from blindness and low vision.<br />
                            The magnitude of the problem may be assessed from the following: <br /> 
                            1. Total number of schools for the blind in the state of Utter Pradesh with a population of more than 20 crores is less than 25.<br />
                            2. Government Braille Production Centers including NGO's in the entire country is less than 10.<br />
                            3. Audio Reording Centers of books run by government and NGO's in the entire country is less than 15. <br/>
                            4. Audio-Conversion Centers in the state of UP is only one.
                        </p>
                    </div>
            </section>
        </Container>
    )
}

export default AboutUs;