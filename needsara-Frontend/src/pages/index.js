import React, {useState} from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import { homeObjOne } from '../components/AboutUs/Data';
import Features from '../components/Features';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen)
    };

    return (
        <React.Fragment>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <HeroSection/>
            <Features/>
            <Services/>
            <AboutUs {...homeObjOne}/>
            <Footer/>
        </React.Fragment>
    )
}

export default Home
