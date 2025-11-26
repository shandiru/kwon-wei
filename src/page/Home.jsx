import React from 'react'
import Hero from "../components/Hero";
import Service from "../components/ServicesSection";
import About from "../components/About";
import Review from "../components/Review";
import Contact from "../components/Contact";
import WhyChooseUs from "../components/WhyChooseUs";
import ImageSlider from "../components/ImageSlider"
import VenueSection from "../components/VenueSection"
const Home = () => {
    return (
        <div>
            <Hero />
            <Service />
            <About />
            <ImageSlider />
            <Review />
             <VenueSection />
            <WhyChooseUs />
            <Contact />
        </div>
    )
}

export default Home
