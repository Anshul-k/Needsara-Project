import React from 'react'
import styled from 'styled-components'
import { ColorButton } from './Style'
import { Link as LinkR} from 'react-router-dom'

// // // // // // // // // // // // // Styled Components Start // // // // // // // // // // //
const SuccessContainer = styled.div`
    position: absolute;
    top: 30%;
    margin: 1rem;

    @media screen and (max-width: 520px){
        width: 450px;
    }
`
const SuccessContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    box-shadow: 8px 5px 30px -8px rgba(0,0,0,0.5);
    border-radius: 20px;
`
const SuccessHeading = styled.h2`
    font-weight: 700;
    font-size: 1.6rem;
    font-family: Georgia, 'Times New Roman', Times, serif;
    padding: 1rem;
    color: rgba(56, 211, 126, 0.89);
`
const SuccessSubHeading = styled.h4`
    font-weight: 600;
    font-size: 0.85rem;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    padding: 0.5rem;
    color: rgba(0,0,0, 0.85);
    margin-bottom: 1rem;
`
const SuccessButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    @media screen and (max-width: 720px){
        
    }
`
const ButtonLink = styled(LinkR)`
    display: flex;
    text-decoration: none;
    color: transparent;
    width: 30%;

    @media screen and (max-width: 720px){
        width: 12rem;
    }

    .Button{
        margin-left: 1rem;
        margin-right: 1rem;
        width: 100%;

        @media screen and (max-width: 720px){
        width: 250px;
    }
    }
`
// // // // // // // // // // // // // Styled Components End // // // // // // // // // // // //

const Success = () => {
    return (
        <React.Fragment>
            <SuccessContainer>
                <SuccessContent>
                    <SuccessHeading>
                        Congratulation, you have been registered as a Service Provider
                    </SuccessHeading>
                    <SuccessSubHeading>
                        Select the option below to move to either to the Home Page or your Dashboard.
                    </SuccessSubHeading>
                    <SuccessButtonContainer>
                        <ButtonLink to='/'>
                            <ColorButton 
                            variant="contained" 
                            color="primary" 
                            className="Button"
                            >
                                Home
                            </ColorButton>
                        </ButtonLink>
                        <ButtonLink to='/admin'>
                            <ColorButton 
                            variant="contained" 
                            color="primary" 
                            className="Button"
                            >
                                Dashboard
                            </ColorButton>
                        </ButtonLink>
                    </SuccessButtonContainer>
                </SuccessContent>
            </SuccessContainer>
        </React.Fragment>
    )
}

export default Success
