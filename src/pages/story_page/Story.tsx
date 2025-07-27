import { motion } from "framer-motion";
import Header from "../components/header.tsx";
import Footer from "../components/Footer.tsx";
import StoryHeader from "./story_components/StoryHero.tsx";
import StoreFrontOne from "./story_components/coffeebreakstorefront.png";
import StoreFrontTwo from "./story_components/coffeebreakmockup2.png";

const Story = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <StoryHeader />
      <div className="bg-repeating-stripes">
        <div className="container mx-auto flex flex-col flex-start m-10 pl-20 pb-10 max-w-[1100px]">
          <div className="flex flex-row justify-around items-center gap-10">
            <img
              src={StoreFrontOne}
              alt="Store Front"
              className="w-[500px] h-[333px]"
            />
            <img
              src={StoreFrontTwo}
              alt="Store Front"
              className="w-[500px] h-[333px] mt-50"
            />
          </div>

          <div className="bg-repeating-stripes">
            <h1 className="text-title-text font-semibold text-6xl font-georgia">
              Our Story
            </h1>
            <p className="font-light text-2xl font-sans mt-[60px]">
              Founded in 2018, Coffee Break began as a cozy corner café with one
              simple goal: to create a space where people could slow down,
              connect, and enjoy quality coffee. What started as a passion
              project between two lifelong friends quickly grew into a
              neighborhood favorite—known for its warm atmosphere, ethically
              sourced beans, and perfectly brewed moments. At Coffee Break, we
              believe that taking a pause, even just for a cup, can make your
              day a little better. Whether you’re grabbing a quick latte or
              staying for open mic night, you’re always welcome here.
            </p>
          </div>
        </div>

        <Footer transparent />
      </div>
    </motion.div>
  );
};

export default Story;
