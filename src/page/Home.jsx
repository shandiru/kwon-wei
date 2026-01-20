import React from 'react'
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import About from "../components/About";
import Review from "../components/Review";
import Contact from "../components/Contact";
import MapSection from "../components/MapSection";
import ImageSlider from "../components/ImageSlider"
import VenueSection from "../components/VenueSection"
const Home = () => {
    return (
        <div>
            <Hero />
            <Menu />
            <About />
            <ImageSlider />
            <Review />
             {/* <VenueSection /> */}
           
            <Contact />
             <MapSection />
        </div>
    )
}

export default Home
