import React from 'react'
import Card from './Card'
import {ServicesContainer, ServicesH1, ServicesWrapper} from './ServicesElements'

import applianceRepair from '../../Images/ServicesImages/applianceRepair.jpg'
import carpenter from '../../Images/ServicesImages/carpenter.jpg'
import disinfect from '../../Images/ServicesImages/disinfect.jpg'
import electrician2 from '../../Images/ServicesImages/electrician2.jpeg'
import houseCleaning from '../../Images/ServicesImages/houseCleaning.jpg'
import painter from '../../Images/ServicesImages/painter.jpg'
import pestControl from '../../Images/ServicesImages/pestControl.jpg'
import plumber from '../../Images/ServicesImages/plumber.jpeg'
import salonForMen from '../../Images/ServicesImages/salonForMen.jpg'
import salonForWomen from '../../Images/ServicesImages/salonForWomen.jpg'

const Services = () => {

    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
           {/* <ServicesWrapper>
            {ServiceData.slice(0,3).map((item) => (       
                <Card
                    image={`${item.image}`}
                    title={item.title}
                    body={item.body}
                />  
            ))}
            </ServicesWrapper> */}
            <ServicesWrapper>
                <Card
                    image={applianceRepair}
                    title='Appliance Repair'
                    body=''
                />
                <Card
                    image={carpenter}
                    title='Carpenter'
                    body=''
                />
                <Card
                    image={disinfect}
                    title='Sanitization & Disinfection'
                    body=''
                />
                <Card
                    image={electrician2}
                    title='Electrician'
                    body=''
                />
                <Card
                    image={houseCleaning}
                    title='House Cleaning'
                    body=''
                />
                <Card
                    image={painter}
                    title='Painter'
                    body=''
                />
                <Card
                    image={pestControl}
                    title='Pest Control'
                    body=''
                />
                <Card
                    image={plumber}
                    title='Plumber'
                    body=''
                />
                <Card
                    image={salonForMen}
                    title='Salon for Men'
                    body=''
                />
                <Card
                    image={salonForWomen}
                    title='Salon for Women'
                    body=''
                />
            </ServicesWrapper>  
        </ServicesContainer>           
    )
}

export default Services
