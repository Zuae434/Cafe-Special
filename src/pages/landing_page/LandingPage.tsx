import { motion } from "framer-motion";
import Header from "../components/header";
import Hero from "./landing_components/Hero/Hero";
import ContentBar from "./landing_components/ContentBar/ContentBar";
import CoffeeMug from "./landing_components/ContentBar/WhiteCoffeeCup.svg";
import BestSellers from "./landing_components/BestSellers/BestSellers";
import MeetTheTeam from "./landing_components/Team/Team";
import PhotoGallery from "./landing_components/PhotoGallery/PhotoGallery";
import CoffeeEvents from "./landing_components/CoffeeEvents/Events";
import LandingContact from "./landing_components/Contact/LandingContact";
import NewsLetter from "./landing_components/NewsLetter/NewsLetter";
import BackToTop from "../components/BackToTop";

const LandingPage = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
        <Hero />
        <ContentBar
          content={[
            "Get 10% off your First Order",
            <img src={CoffeeMug} alt="Coffee Mug" width="25px" />,
            "Free Delivery",
            <img src={CoffeeMug} alt="Coffee Mug" width="25px" />,
            "Taste For Everyone",
          ]}
        />
        <BestSellers />
        <MeetTheTeam />
        <PhotoGallery />
        <ContentBar
          content={Array.from({ length: 10 }, (_, i) => (
            <img src={CoffeeMug} alt="Coffee Mug" width="25px" key={i} />
          ))}
        />
        <CoffeeEvents />
        <LandingContact />
        <NewsLetter />
        <ContentBar
          content={[
            "2025 Coffee Break Co. All Rights Reserved.",
            "Privacy Policy",
          ]}
        />
        <BackToTop />
      </motion.div>
    </>
  );
};

export default LandingPage;
