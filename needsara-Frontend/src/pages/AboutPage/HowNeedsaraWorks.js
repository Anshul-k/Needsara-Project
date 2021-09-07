import React from 'react'
import styled from 'styled-components'
import { Divider } from '@material-ui/core'
import Notepad from '../../Images/AboutPage/notepad-256.png'
import Service from '../../Images/AboutPage/services-256.png'
import Solutions from '../../Images/AboutPage/solutions-256.png'

// // // // // // // // // // // // // Styled Components Start // // // // // // // // // // // // // // //
const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2.3em 3em 3em 3em;
    color: #fff;
    background: rgba(0,0,0,0.96);
    flex-direction: column;
`
const CardHeading = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .Divider{
        position: relative;
        background: #fff;
        width: 100%;
    }
`
const MainHeading = styled.div`
    padding: 0.6em;
    padding-left: 0.4em;
    padding-bottom: 0.8em;
    font-size: 2.2em;
    font-weight: 700;

    strong{
        color: #01bf71;
    }
`
const SubHeading = styled.div`
    padding: 0.6em;
    font-size: 1.2em;
    font-style: oblique;
`
const CardContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 820px){
        flex-direction: column;
    } 
`
const ContentColumn = styled.div`
    padding: 2em;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Image = styled.img`
    width: 5em;
    height: 5em;
    margin-bottom: 1em;
`
const ColumnHeading = styled.h2`
    padding-bottom: 1em;
    font-size: 1.8em;
    font-weight: 700;
`
const ColumnSubheading = styled.h4`
    font-size: 1em;
    font-weight: 300;
    letter-spacing: 1px;
    line-height: 1.5;
    color: rgba(229, 232, 232, 0.75);
`
// // // // // // // // // // // // // Styled Components End // // // // // // // // // // // // // // // //

const HowNeedsaraWorks = () => {
    return (
        <CardContainer>
            <CardHeading>
                <MainHeading>
                    <h2><strong>Why</strong> Choose US</h2>
                </MainHeading>
                <Divider className="Divider"/>
                <SubHeading>
                    Best Services
                </SubHeading>
            </CardHeading>
            <CardContent>
                <ContentColumn>
                    <Image src={Notepad} alt=''/>
                    <ColumnHeading>
                        Describe Your Task 
                    </ColumnHeading>
                    <ColumnSubheading>
                        You can post your job on the Site or you can give the job directly to your
                        favorite service provider.
                    </ColumnSubheading>
                </ContentColumn>
                <ContentColumn>
                    <Image src={Service} alt=''/>
                    <ColumnHeading>
                        Choose a Service Provider 
                    </ColumnHeading>
                    <ColumnSubheading>
                        Service Providers apply to your posted job or call and give you information about 
                        your service, you can select a service provider on this basis or you can select them
                        based on other customer's feedback and their star ratings. 
                    </ColumnSubheading>
                </ContentColumn>
                <ContentColumn>
                    <Image src={Solutions} alt=''/>
                    <ColumnHeading>
                        Get Things Done Fast 
                    </ColumnHeading>
                    <ColumnSubheading>
                        Enjoy the hassle free service at you door step quickly.
                    </ColumnSubheading>
                </ContentColumn>
            </CardContent>
        </CardContainer>
    )
}

export default HowNeedsaraWorks
