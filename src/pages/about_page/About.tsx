import "../../App.css";
// import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/header";
import Footer from "../components/Footer";
import AboutHero from "./about_components/AboutHero";
import AboutFooter from "./about_components/AboutFooter";
import BackToTop from "../components/BackToTop";
import Profile from "./about_components/Profile";

// Images imports
import TeamMember1 from "../../pages/landing_page/landing_components/Team/TeamMembers/TeamMember1.png";
import TeamMember2 from "../../pages/landing_page/landing_components/Team/TeamMembers/TeamMember2.png";
import TeamMember3 from "../../pages/landing_page/landing_components/Team/TeamMembers/TeamMember3.png";
import TeamMember4 from "../../pages/landing_page/landing_components/Team/TeamMembers/TeamMember4.png";
import TeamMember5 from "../../pages/landing_page/landing_components/Team/TeamMembers/TeamMember5.png";
import TeamMember6 from "../../pages/landing_page/landing_components/Team/TeamMembers/TeamMember6.png";
import SarahYoung from "../../pages/landing_page/landing_components/Team/TeamMembers/xIM0XY.png";
import ReeseWheeler from "../../pages/landing_page/landing_components/Team/TeamMembers/BarManager.png";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <AboutHero />
      <BackToTop />
      <div className="bg-repeating-stripes">
        <Profile
          image={SarahYoung}
          name="Sarah Young — Co-Founder, Coffee Break"
          description="Sarah Young has always believed in the power of a good cup of coffee and a great conversation. With a background in hospitality and a deep love for community spaces, she co-founded Coffee Break in 2018 to bring a sense of warmth, creativity, and connection to her neighborhood. Sarah curates the café’s seasonal menus, supports local roasters and bakers, and is the friendly face you’ll often find chatting with guests or leading Friday night events. Her vision for Coffee Break is simple: a place that feels like home, with coffee that inspires you to stay a while."
        />
        <Profile
          image={ReeseWheeler}
          name="Reese Wheeler — Co-Founder, Coffee Break"
          description="Reese Wheeler brings the heart and hustle to Coffee Break. With a background in design and a deep appreciation for coffee culture, Reese co-founded the café alongside Sarah Young in 2018, driven by a shared dream to build more than just a coffee shop—something meaningful. Reese is the creative force behind the café’s cozy aesthetic and branding, from the handwritten menu boards to the vintage-inspired interiors. Whether they're experimenting with new brews or hosting community art nights, Reese’s passion for detail and storytelling shapes every part of the Coffee Break experience."
        />
        <Profile
          image={TeamMember1}
          name="Maya Brooks — Head Barista"
          description=" Maya is the mastermind behind every perfectly poured latte and house-made syrup. With over six years of specialty coffee experience, she joined Coffee Break for its values—and stayed for the people. Known for her latte art skills and her encyclopedic knowledge of beans and brews, Maya trains the barista team and ensures every cup meets the café’s high standards. Her morning smile and custom drink recommendations have earned her a loyal following of regulars."
        />
        <Profile
          image={TeamMember2}
          name="Eli Thompson — Tech & Music Coordinator"
          description="Eli wears many hats—most of them backwards—and handles everything from the café’s sound system to live music bookings. With a degree in audio production and a love for vinyl, he curates the shop’s laid-back playlists and ensures every event sounds just right. On Fridays, you’ll often find him DJing mellow lo-fi sets or running sound for acoustic acts during open mic night. Eli’s vibe? Chill, thoughtful, and always two steps ahead on the aux."
        />
        <Profile
          image={TeamMember3}
          name="Lana Cruz — Event & Community Coordinator"
          description=" Lana’s the spark behind the energy at Coffee Break after dark. From open mic nights and poetry slams to local maker pop-ups, she turns the café into a vibrant gathering space. With a background in arts and nonprofit work, Lana is passionate about creating safe, welcoming environments for expression and connection. She’s always scribbling new event ideas in her notebook—or hyping up a local artist over cold brew."
        />
        <Profile
          image={TeamMember4}
          name="Tessa Nguyen — Pastry Chef & Kitchen Lead"
          description=" Tessa wakes up before the sun to fill the café with the smell of freshly baked scones, muffins, and seasonal treats. With roots in French pastry and a love for experimental flavors, she brings artistry to every plate. Tessa works closely with local farms for fresh ingredients and changes the pastry board weekly to reflect the seasons. Her lemon lavender shortbread has achieved near-legend status in the neighborhood."
        />
        <Profile
          image={TeamMember5}
          name="Nico Foster — Lead Roaster & Coffee Educator"
          description=" Nico is obsessed with the science and soul of coffee. As Coffee Break’s lead roaster, he’s the one behind the carefully sourced, perfectly balanced house blends. With a background in sustainable agriculture and time spent traveling through coffee-growing regions, Nico brings both passion and purpose to every batch. He also leads monthly tasting classes and loves nerding out with customers over flavor notes and brew methods."
        />
        <Profile
          image={TeamMember6}
          name="Julian Reyes — Floor Manager"
          description="Julian Reyes is the friendly face who keeps everything running like clockwork. With a background in hospitality management and a knack for anticipating both barista and guest needs, he oversees daily floor operations—coaching the team, smoothing out rush-hour kinks, and making sure every order lands perfectly. Julian’s calm energy and sharp eye for detail mean you’ll always find a clean table, a well-stocked pastry case, and a staff ready with a warm greeting (and your favorite drink) whenever you walk in."
        />
        <AboutFooter />
        <Footer />
      </div>
    </motion.div>
  );
};

export default About;
