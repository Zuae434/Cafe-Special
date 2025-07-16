import CTAButton from "../../../components/CTAButton";
import brownCoffee from "../ContentBar/BrownCoffeeCup.svg";
import LandingMenuItem from "../../landing_components/LandingMenuItem";
import icedCaramelImage from "../../../Menu/MenuItemImages/Iced-Caramel-Macchiato.png";
import icedMatchaImage from "../../../Menu/MenuItemImages/Iced-Matcha-Latte.png";
import blackIcedImage from "../../../Menu/MenuItemImages/Black-Iced-Coffee.png";

const BestSellers = () => {
  return (
    <div className="mx-auto h-auto bg-[#F7F7F7] bg-repeating-stripes">
      <div className="container mx-auto">
        <h1 className="flex mt-[50px] text-[#764D3D] font-[Khmer MN] font-bold text-5xl">
          Shop Best-Sellers
        </h1>
        <div className="flex flex-row justify-center items-center gap-[75px] mt-[50px]">
          <LandingMenuItem
            title="Iced Caramel Macchiato"
            image={<img src={icedCaramelImage} alt="Iced Caramel Macchiato" />}
            price="$6.00"
          />
          <LandingMenuItem
            title="Iced Matcha Latte"
            image={<img src={icedMatchaImage} alt="Iced Caramel Macchiato" />}
            price="$6.00"
          />
          <LandingMenuItem
            title="Black Iced Coffee"
            image={<img src={blackIcedImage} alt="Iced Caramel Macchiato" />}
            price="$6.00"
          />
        </div>
        <div className="flex justify-center mt-[75px]">
          <CTAButton title="See Full Menu" color />
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <img
          className="relative left-[50px]"
          src={brownCoffee}
          alt="Brown Coffee Cup"
        />
        <img
          className="transform scale-x-[-1] relative left-[-50px]"
          src={brownCoffee}
          alt="Brown Coffee Cup"
        />
      </div>
    </div>
  );
};

export default BestSellers;
