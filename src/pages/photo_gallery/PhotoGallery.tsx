import { motion } from "framer-motion";
import Header from "../components/header";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

// Image Imports
import HeroImage from "./PhotoGalleryComponents/HeroImage.png";
import ImageOne from "./PhotoGalleryComponents/ImageOne.png";
import ImageTwo from "./PhotoGalleryComponents/ImageTwo.png";
import ImageThree from "./PhotoGalleryComponents/ImageThree.png";
import ImageFour from "./PhotoGalleryComponents/ImageFour.png";
import ImageFive from "./PhotoGalleryComponents/ImageFive.png";
import ImageSix from "./PhotoGalleryComponents/ImageSix.png";
import ImageSeven from "./PhotoGalleryComponents/ImageSeven.png";
import ImageEight from "./PhotoGalleryComponents/ImageEight.png";
import ImageNine from "./PhotoGalleryComponents/ImageNine.png";
import ImageTen from "./PhotoGalleryComponents/ImageTen.png";

const PhotoGallery = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <div className="bg-repeating-stripes">
        <div className="container mx-auto mt-10">
          <h1 className="absolute text-white font-georgia text-8xl font-bold opacity-80 left-[45%] top-[6%] z-10">
            GALLERY
          </h1>
          <img src={HeroImage} alt="" className="opacity-80" />
          <h1 className="font-georgia text-7xl font-bold text-title-text mt-10 mb-10">
            Our Space in Photos
          </h1>
          <div className="grid grid-cols-2 grid-rows-5 gap-20 items-center py-10">
            <img
              src={ImageOne}
              alt=""
              className="w-full h-auto object-cover opacity-80"
            />
            <img
              src={ImageTwo}
              alt=""
              className="w-full h-auto object-cover opacity-80"
            />
            <img
              src={ImageThree}
              alt=""
              className="w-full h-auto object-cover opacity-80"
            />
            <img
              src={ImageFour}
              alt=""
              className="w-full h-auto object-cover opacity-80"
            />
            <img
              src={ImageFive}
              alt=""
              className="w-full h-auto object-cover opacity-80"
            />
            <img
              src={ImageSix}
              alt=""
              className="w-full h-auto object-cover opacity-80"
            />
            <img
              src={ImageSeven}
              alt=""
              className="w-full h-auto object-cover opacity-80"
            />
            <img
              src={ImageEight}
              alt=""
              className="w-full h-auto object-cover opacity-80"
            />
            <img
              src={ImageNine}
              alt=""
              className="w-full h-auto object-cover opacity-80"
            />
            <img
              src={ImageTen}
              alt=""
              className="w-full h-auto object-cover opacity-80"
            />
          </div>
        </div>
      </div>

      <BackToTop />
      <Footer />
    </motion.div>
  );
};

export default PhotoGallery;
