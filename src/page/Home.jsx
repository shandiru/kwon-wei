import Hero from "../components/Hero";
import Menu from "../components/Menu";
import Contact from "../components/Contact";
import MapSection from "../components/MapSection";
import ImageSlider from "../components/ImageSlider"
import Enquiry from '../components/Enquery';

const Home = () => {
    return (
        <div>
            <Hero />
            <Menu />
            <ImageSlider />
            {/* <VenueSection /> */}
            <Contact />
            <Enquiry />
            <MapSection />
        </div>
    )
}

export default Home
