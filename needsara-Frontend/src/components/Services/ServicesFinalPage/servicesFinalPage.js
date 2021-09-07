import React from 'react'
import styled from 'styled-components'
import { ColorButton } from '../../ServiceProviderDetailsForm/Style'
import { Link as LinkR} from 'react-router-dom'

// // // // // // // // // // // // // Styled Components Start // // // // // // // // // // //
const FinalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
    position: relative;
    top: 30%;
    margin: 1rem;

    @media screen and (max-width: 520px){
        width: 450px;
    }
`
const FinalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    box-shadow: 8px 5px 30px -8px rgba(0,0,0,0.5);
    border-radius: 20px;
`
const FinalHeading = styled.h2`
    font-weight: 700;
    font-size: 1.6rem;
    font-family: Georgia, 'Times New Roman', Times, serif;
    padding: 1rem;
    color: rgba(56, 211, 126, 0.89);
`
const FinalSubHeading = styled.h4`
    font-weight: 600;
    font-size: 0.85rem;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    padding: 0.5rem;
    color: rgba(0,0,0, 0.85);
    margin-bottom: 1rem;
`
const FinalButtonContainer = styled.div`
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
function deleteLocalStorageData(){
    localStorage.removeItem('Category');
    localStorage.removeItem('Pin');
    localStorage.removeItem('Range');
    localStorage.removeItem('UniqueId');
    localStorage.removeItem('address');
    localStorage.removeItem('userPhoneNumber');
    localStorage.removeItem('descriptionOfWork');
    localStorage.removeItem('spPhoneNumber');
    localStorage.removeItem('district');
    
}

function ServicesFinalPage() {

    return (
        <React.Fragment>
             <FinalContainer>
                <FinalContent>
                    <FinalHeading>
                        Your response have been recorded
                    </FinalHeading>
                    <FinalSubHeading>
                        You request will be delievered to the Service Provider and you will be contacted shortly. 
                    </FinalSubHeading>
                    <FinalButtonContainer>
                        <ButtonLink to='/' onClick={() => deleteLocalStorageData()}>
                            <ColorButton 
                            variant="contained" 
                            color="primary" 
                            className="Button"
                            >
                                Home
                            </ColorButton>
                        </ButtonLink>
                    </FinalButtonContainer>
                </FinalContent>
            </FinalContainer>
        </React.Fragment>
    )
}

export default ServicesFinalPage
