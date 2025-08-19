import { motion } from "framer-motion";
import Header from "../components/header";
import ContentBar from "./landing_components/ContentBar/ContentBar";
// import CoffeeMug from "./landing_components/ContentBar/WhiteCoffeeCup.svg";
import BestSellers from "./landing_components/BestSellers/BestSellers";
// import MeetTheTeam from "./landing_components/Team/Team";
import PhotoGallery from "./landing_components/PhotoGallery/PhotoGallery";
// import CoffeeEvents from "./landing_components/CoffeeEvents/Events";
import LandingContact from "./landing_components/Contact/LandingContact";
// import NewsLetter from "./landing_components/NewsLetter/NewsLetter";
import BackToTop from "../components/BackToTop";
import AnimatedContentBar from "./landing_components/ContentBar/AnimatedContentBar";

const LandingPage = () => {
  return (
    <>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Header />
        <BestSellers />
        <PhotoGallery />
        <AnimatedContentBar />
        <LandingContact />
        <ContentBar content={["2025 Coffee Break Co. All Rights Reserved.", "Privacy Policy"]} />
        <BackToTop />
      </motion.div>
    </>
  );
};

export default LandingPage;
