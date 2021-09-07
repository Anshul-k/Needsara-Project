import React from 'react'
import { Button } from '../../components/AboutUs/ButtonElement'
import AboutUsPage from '../../Images/AboutPage/AboutPage.svg'
import styled from 'styled-components'
import HowNeedsaraWorks from './HowNeedsaraWorks'
import Footer from '../../components/Footer'

// // // // // // // // // // // // // // Styled Components Start// // // // // // // // // // // // // //
const AboutContainer = styled.div`
    padding: 100px;
    color: #fff;
    background: #fff;
`
const AboutWrapper = styled.div`
    width: 100%;
`
const AboutRow = styled.div`
    display: flex;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: row;

`
const Column = styled.div`
    margin-bottom: 15px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 1;
    max-width: 50%;
    flex-basis: 50%;

    @media screen and (max-width: 880px){
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    } 
`
const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    
    h1{
        margin: 0 0 10px 0;
        font-size: 3.5em;
        font-weight: 600;
        line-height: 1.1;
        color: black;
    }
    strong{
        color: #01BF71;
    }
    p{
        color: #484848;
        max-width: 640px;
        margin-bottom: 35px;
        font-size: 20px;
    }

    @media screen and (max-width: 768px){
        padding-bottom: 65px;

    }
`
const ButtonWrap = styled.div`
    display: inline-flex;
    margin: 5px;

    Button{
        width: 10rem;
        color: white;
    }
`
const ImageWrap = styled.div`
    max-width: 555px;
    display: flex;
    justify-content: flex-start;
`
const Img = styled.img`
    padding-right: 0;
    border: 0;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    max-height: 500px;
    animation: up-down 2s ease-in-out infinite alternate-reverse both;

    @-webkit-keyframes up-down{
        0%{
            transform: translateY(8px);
        }
        100%{
            transform: translateY(-8px);
        }
    }
    @keyframes up-down{
        0%{
            transform: translateY(8px);
        }
        100%{
            transform: translateY(-8px);
        }
}
`
// // // // // // // // // // // // // // Styled Components End // // // // // // // // // // // // // // 

const AboutPage = ({primary, dark, dark2}) => {
    return (
    <React.Fragment>
        <AboutContainer>
            <AboutWrapper>
                <AboutRow>
                    <Column>
                        <TextWrapper>
                            <h1>About<strong> Us</strong></h1>
                            <p>
                            We will provide services on the fingertips of the users. With web application platform, it is feasible to provide these services to user. This application solves many problems as it helps to provide jobs to blue collar workers who are looking for opportunities and for the user it will make the process hassle free. 
                            This platform can be used anywhere and anytime according to user convenience.
                            </p>
                            <ButtonWrap>
                                <Button
                                to="/ourTeamPage"
                                duration={500}
                                exact="true"
                                offset={-80}
                                primary={primary ? 1 : 0}
                                dark={dark ? 1 : 0}
                                dark2={dark2 ? 1 : 0}
                                >
                                    Our Team
                                </Button>
                            </ButtonWrap>
                            <ButtonWrap>
                                <Button
                                to="/contactus"
                                duration={500}
                                exact="true"
                                offset={-80}
                                primary={primary ? 1 : 0}
                                dark={dark ? 1 : 0}
                                dark2={dark2 ? 1 : 0}
                                >
                                    Contact Us
                                </Button>
                            </ButtonWrap>
                        </TextWrapper>
                    </Column>
                    <Column>
                        <ImageWrap className="header-img">
                            <Img src={AboutUsPage} alt=""/>
                        </ImageWrap>
                    </Column>
                </AboutRow>
            </AboutWrapper>
        </AboutContainer>
        <HowNeedsaraWorks/>
        <Footer/>
    </React.Fragment>
    )
}

export default AboutPage
