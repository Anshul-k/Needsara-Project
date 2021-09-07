import React from 'react';
import Video from '../../videos/video.mp4';
// import {FiSearch} from 'react-icons/fi'
import Typewriter from 'typewriter-effect'
import {
    HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroContent,
    // SearchboxContainer,
    // SearchboxIcon,
    // Searchbox, 
    HeroH1,
    } from './HeroElements';
// import Category from '../CategoryList/categroyList'

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Connecting Local to Local</HeroH1>
                <Typewriter
                className="Typewriter"
                options={{
                    strings: ['Creating Opportunities', 'Providing Comfort', 'Work Smart, Save Time'],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    cursorClassName: "Typewriter__cursor",
                  }}
                />
                {/*<SearchboxContainer>
                    <Searchbox
                    placeholder="Search here for Services">
                    </Searchbox>
                    <SearchboxIcon>
                        <FiSearch/>
                    </SearchboxIcon>
                </SearchboxContainer>
                */}
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
