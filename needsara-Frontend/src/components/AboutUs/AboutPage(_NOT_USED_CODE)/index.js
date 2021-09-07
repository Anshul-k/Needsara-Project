import React from 'react'
import { Link } from 'react-router-dom'
import './AboutPageElements.css'

const AboutPage = () => {
    return (
        <section>
            <div className = "image">  
            </div>
            <div className = "content">
                <h2>About Us</h2>
                <span></span>
                <p>We will provide services on the fingertips of the users. With web application platform, it is feasible to provide these services to user. This application solves many problems as it helps to provide jobs to blue collar workers who are looking for opportunities and for the user it will make the process hassle free. 
                    This platform can be used anywhere and anytime according to user convenience</p>
                <ul className = "links">
                    <Link className='inlink' to="/ourTeamPage" style={{color: '#777', textDecoration: 'none'}}><li>OUR TEAM</li></Link>
                    <div className = "vertical-line"></div>
                    <li><a href = "#">Terms and Conditions</a></li>
                    <div className = "vertical-line"></div>
                    <Link className='inlink' to="/contactus" style={{color: '#777', textDecoration: 'none'}}><li>CONTACT</li></Link>
                </ul>
                <ul className = "icons">
                    <li>
                        <i className = "fa fa-twitter"></i>
                    </li>
                    <li>
                        <i className = "fa fa-facebook"></i>
                    </li>
                    <li>
                        <i className = "fa fa-github"></i>
                    </li>
                    <li>
                        <i className = "fa fa-pinterest"></i>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default AboutPage
