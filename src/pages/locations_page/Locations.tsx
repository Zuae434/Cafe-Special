import { motion } from "framer-motion";
import Header from "../components/header";
import Footer from "../components/Footer";
import LocationCard from "./location_components/LocationCard";
import LocationOne from "./location_components/Location-One.png";
import LocationTwo from "./location_components/Location-Two.png";
import LocationThree from "./location_components/Location-Three.png";

const Locations = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-repeating-stripes">
        <Header />
        <div className="container bg-[#FFF1D8]/85 mx-auto flex justify-center mt-10 py-30 px-10 max-w-[1100px] gap-10 font-georgia">
          <LocationCard
            image={LocationOne}
            title="RIVERDALE"
            location="558 Riverdale Dr Ste 208"
            phone="(123) 456-7890"
            hours="Mon-Sun: 6am-11pm"
          />
          <div className="flex flex-col">
            <div className="w-[300px] h-[100px] -mt-27 mb-2 overflow-visible">
              <svg
                viewBox="0 0 300 100"
                className="w-full h-full overflow-visible mt-25 -ml-5"
              >
                <defs>
                  <path
                    id="locations-arc"
                    d="M10,140 A160,160 0 0,1 340,140"
                    fill="transparent"
                  />
                </defs>
                <text className="font-extrabold text-5xl fill-[#f3b54a] tracking-[8px]">
                  <textPath
                    href="#locations-arc"
                    startOffset="50%"
                    textAnchor="middle"
                  >
                    LOCATIONS
                  </textPath>
                </text>
              </svg>
            </div>
            <LocationCard
              image={LocationTwo}
              title="GREENDALE"
              location="222 Greendale Dr St 378"
              phone="(123) 456-7890"
              hours="Mon-Sun: 6am-11pm"
            />
          </div>
          <LocationCard
            image={LocationThree}
            title="SUNNYDALE"
            location="123 Sunnydale Dr 455"
            phone="(123) 456-7890"
            hours="Mon-Sun: 6am-11pm"
          />
        </div>
        <Footer transparent />
      </div>
    </motion.div>
  );
};

export default Locations;
