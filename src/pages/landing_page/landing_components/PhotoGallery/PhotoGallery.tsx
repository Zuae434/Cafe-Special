import { Link } from "react-router-dom";
import Image1 from "./PhotoGalleryImages/Image1.png";
import Image2 from "./PhotoGalleryImages/Image2.png";
import Image3 from "./PhotoGalleryImages/Image3.png";
import Image4 from "./PhotoGalleryImages/Image4.png";
import FreeCoffee from "./PhotoGalleryImages/FreeCoffee.png";
import OpenSign from "./PhotoGalleryImages/OpenSign.png";
import "../../../../App.css";

const PhotoGallery = () => {
  return (
    <div className="bg-repeating-stripes bg-[#F7F7F7]">
      <div className="items-center mx-auto h-auto section-yellow-overlay m-10 max-w-[90%] py-10">
        <div className="container mx-auto">
          <h1 className="text-title-text font-bold text-5xl">Photo Gallery</h1>
        </div>

        <div className="container mx-auto flex flex-row flex-start mt-10">
          <div className="flex flex-col">
            <img src={Image1} alt="Image 1" className="h-[200px] w-[200px]" />
            <img src={Image2} alt="Image 2" className="h-[200px] w-[200px]" />
          </div>
          <div className="flex flex-col">
            <img src={Image3} alt="Image 3" className="h-[200px] w-[200px]" />
            <img src={Image4} alt="Image 4" className="h-[200px] w-[200px]" />
            <Link to="/PhotoGallery" className="self-end">
              <button className="mt-2 text-[#8F7D5E] cursor-pointer text-xl font-bold hover:text-hover-text transition-all ease-in-out duration-150">
                View All Photos
              </button>
            </Link>
          </div>
          <div className="flex flex-col ml-10 mt-5">
            <h2 className="font-georgia text-2xl text-[#4A2C20] font-bold mb-5">
              Welcome to Coffee Break
            </h2>
            <p className="text-[#4A2C20] text-lg font-georgia max-w-[465px]">
              The perfect palce to puase and recharge. Our cozy interior blends
              modern charm with inviting comfort, making it your go-to escape
              for a quiet moment or a catch-up with friends. From rich,
              handcrafted coffee to smooth matcha and soothing teas, every sip
              is brewed with care. Come in, take a seat, and make your break
              count.
            </p>
            <div className="flex flex-row mt-5 justify-around">
              <img
                src={FreeCoffee}
                alt="Free Coffee"
                className="h-[175px] w-[145px] ml-10 mt-20"
              />
              <img
                src={OpenSign}
                alt="Open Sign"
                className="OpenSign w-[200px] h-[200px] ml-25"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
