import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Modules from 'AboutUs.module.css'

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
                    {/* **************** Row 2 **************** */}
                        {/* Shataxi */}

                    {/* **************** Row 3 **************** */}
                        {/* Shadab */}
                    {/* **************** Row 4 **************** */}
                        {/* Shadab */}

                    {/* **************** Row 5 **************** */}
                        {/* Anjali */}
                    {/* **************** Row 6 **************** */}
                        {/* Anjali */}

                    {/* **************** Row 7 **************** */}
                        {/* Shadab */}

                    {/* **************** Row 8 **************** */}
                        {/* Anjali */}

                    {/* **************** Row 9 **************** */}
                        {/* Shataxi */}
                </Container>
            </div>
        )
    }
}

export default AboutUs
