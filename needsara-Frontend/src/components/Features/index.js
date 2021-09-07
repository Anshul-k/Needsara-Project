import React from 'react'
import { FaBullseye, FaCheckCircle, FaHeart } from 'react-icons/fa'
import { FeatureConatiner, FeatureElement, Image, FeatureHeading, FeatureContent } from './FeaturesElements'

const Features = () => {
    return (
        <FeatureConatiner>
            <FeatureElement>
                <Image>
                    <FaCheckCircle/>
                </Image>
                <FeatureHeading>Customer Friendly</FeatureHeading>
                <FeatureContent>So easy to use, anyone could do it</FeatureContent>
            </FeatureElement>
            <FeatureElement>
                <Image>
                    <FaBullseye/>
                </Image>
                <FeatureHeading>Quality of Service</FeatureHeading>
                <FeatureContent>High quality of service delievered</FeatureContent>
            </FeatureElement>
            <FeatureElement>
                <Image>
                    <FaHeart/>
                </Image>
                <FeatureHeading>Guaranteed work</FeatureHeading>
                <FeatureContent>Work done in the minimum time</FeatureContent>
            </FeatureElement>
        </FeatureConatiner>
    )
}

export default Features
