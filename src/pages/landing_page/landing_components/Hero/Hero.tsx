import { Link } from "react-router-dom";
import coffeeCup from "./CoffeCup.svg";
import CTAButton from "../../../components/CTAButton";

const Hero = () => {
  return (
    <section className="relative h-[600px] yellow-overlay bg-cover bg-no-repeat overflow-hidden">
      <div className="container mx-auto h-full flex flex-col lg:flex-row items-center">
        <div className="flex flex-col justify-start">
          <h1 className="font-[Khmer] text-[80px] font-bold text-nav-hover">
            Break Time,
          </h1>
          <h1 className="font-[Khmer] text-[80px] font-bold text-[#EBA216] mt-[-10px] text-right mr-[50px]">
            Brew Time
          </h1>
          <div className="flex mt-[15px]">
            <p className="text-[#56362A] max-w-md text-xl leading-snug font-[Souliyo Unicode] text-left">
              Your daily escape for hand-crafted coffee, cozy vibes, and a
              moment that's just for you!
            </p>
          </div>
          <div className="flex gap-8 mt-[30px] text-3xl">
            <Link to="/Menu">
              <CTAButton title="Order Now" color />
            </Link>
            <Link to="/Locations">
              <CTAButton title="Locations" color={false} />
            </Link>
          </div>
        </div>

        {/* Right column: image */}
        <div className="flex-1 relative">
          <img
            className="absolute bottom-0 transform translate-x-1/4 translate-y-1/2 w-auto h-auto"
            src={coffeeCup}
            alt="Coffee Break"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
