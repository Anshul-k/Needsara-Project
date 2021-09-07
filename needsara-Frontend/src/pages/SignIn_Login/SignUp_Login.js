import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import Service from '../../Images/Sign_in_up/Service.gif'
import Customer from '../../Images/Sign_in_up/Customer.gif'
import Footer from '../../components/Footer'
// // // // // // // // // // // // // Styled Components Start// // // // // // // // // // // // //
const Wrapper = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 98vw;;
    margin: 0px auto;

    @media(max-width: 1170px){
        padding: 30px 0;
    }
`
const CardsContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 5rem;
    grid-gap: 3rem;

    @media(max-width: 800px){
        width: 90vw;
        grid-template-columns: 1fr;
    }
`
const Card = styled.div`
    height: 450px;
    perspective: 1000px;

    .front-card1{
        background: linear-gradient(rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.5)), url(${Service}) center/cover no-repeat;
    }
    .front-card2{
        background: linear-gradient(rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.5)), url(${Customer}) center/cover no-repeat;
    }

    @media(max-width: 800px){
        width: 70%;
        margin-left: auto;
        margin-right: auto;
    }

    @media(max-width: 400px){
        width: 100%;
    }
`
const CardWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 1s ease;
    box-shadow: 10px 20px 40px -10px rgba(0, 0, 0, 0.5);
    transform-style: preserve-3d;

    :hover{
        transform: rotateY(180deg);
    }
`
const FrontCard = styled.div`
    border-radius: 4px;
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
`
const FrontCardContent = styled.div`
    position: absolute;
    bottom: 15px;
    left: 15px;
    color: #fff;
    line-height: 1.6;
`
const H2 = styled.h2`
    font-size: 19px;
    padding: 10px 0 2px;
    margin-bottom: 0.8rem;
`
const P = styled.p`
    line-height: 1.6;
    font-size: 15px;
    font-weight: 300;
`
const RearCard = styled.div`
    border-radius: 4px;
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    text-align: center;
    transform: rotateY(180deg);
    background: #01bf71;
    color: #fff;
    padding: 20px;
`
const RearCardContent = styled.div`
`
const AboutInfo = styled.div`
    margin-top: 1.5rem;
`
const Image = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
`
const InfoContent = styled.div`
    font-size: 19px;
    padding: 10px 0 2px;

    .Link{
        text-decoration: none;
    }
`
// // // // // // // // // // // // // Styled Components End// // // // // // // // // // // // //

const ColorButton = withStyles(() => ({
    root: {
      borderRadius: 20,
      width: "40%",
      fontFamily: "sans-serif",
      backgroundColor: "#fff",
      color: "#4CAF50",
      '&:hover': {
        backgroundColor: "#4CAF50",
        color: "#fff"
      },
    },
  }))(Button);


const SignUpLogin = () => {
    return (
        <React.Fragment>
        <Wrapper>
            <CardsContainer>
                <Card>
                    <CardWrapper>
                        <FrontCard className="front-card1">
                            <FrontCardContent>
                                <H2>Hello Service Provider</H2>
                                <P>Spread your business</P>
                            </FrontCardContent>
                        </FrontCard>
                        <RearCard>
                            <RearCardContent>
                                <H2>Lets Contribute and get better</H2>
                                <AboutInfo>
                                    <Image src={Service} alt=""/>
                                    <InfoContent>
                                        <H2>Service Provider</H2>
                                        <Link to="/signin_admin" className="Link">
                                            <ColorButton 
                                            variant="contained" 
                                            color="primary" 
                                            >
                                                Continue to get Started
                                            </ColorButton>
                                        </Link>
                                    </InfoContent>
                                </AboutInfo>
                            </RearCardContent>
                        </RearCard>
                    </CardWrapper>
                </Card>
                <Card>
                    <CardWrapper>
                        <FrontCard className="front-card2">
                            <FrontCardContent>
                                <H2>Hello Consumer</H2>
                                <P>Select here to get your Service Done</P>
                            </FrontCardContent>
                        </FrontCard>
                        <RearCard>
                            <RearCardContent>
                                <H2>We Know you are in hurry</H2>
                                <AboutInfo>
                                    <Image src={Customer} alt=""/>
                                    <InfoContent>
                                        <H2>Consumer</H2>
                                        <Link to="/signin_user" className="Link">
                                            <ColorButton 
                                            variant="contained" 
                                            color="primary"
                                            >
                                                Just a Step away
                                            </ColorButton>
                                        </Link>
                                    </InfoContent>
                                </AboutInfo>
                            </RearCardContent>
                        </RearCard>
                    </CardWrapper>
                </Card>
            </CardsContainer>
        </Wrapper>
        <Footer/>
        </React.Fragment>
    )
}

export default SignUpLogin
