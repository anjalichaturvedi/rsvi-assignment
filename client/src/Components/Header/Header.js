import React, { Component } from 'react';

import Icon from './Images/rsvi.png'

import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar} from 'react-bootstrap';

import styles from './Header.module.css';

class Header extends Component {
    render() {
        return (
            <Navbar expand='xxl' className={styles.navbar}>
                <Navbar.Brand className={styles.navbrand}>
                    <img src={Icon} alt='sample png' className={styles.navicon}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='navbar-nav'/>
                <Navbar.Collapse id='navbar-nav' className={styles.navlinkbar}>
                    <Nav className='mr-auto w-100' justify='true'>
                    <Nav.Link href='#home' className={styles.navlink}>HOME</Nav.Link>
                    <Nav.Link href='#about-us' className={styles.navlink}>ABOUT US</Nav.Link>
                    <Nav.Link href='#mission' className={styles.navlink}>MISSIONS</Nav.Link>
                    <Nav.Link href='#internship' className={styles.navlink}>INTERNSHIP</Nav.Link>
                    <Nav.Link href='#collaborations' className={styles.navlink}>COLLABORATIONS</Nav.Link>
                    <Nav.Link href='#faq' className={styles.navlink}>FAQ's</Nav.Link>
                    <Nav.Link href='#get-in-touch' className={styles.navlink}>GET IN TOUCH</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;
