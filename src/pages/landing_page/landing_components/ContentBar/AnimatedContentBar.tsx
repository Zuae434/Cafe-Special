import "../../../../App.css";
import CoffeeMug from "./WhiteCoffeeCup.svg";

const AnimatedContentBar = () => {
  return (
    <div className="coffee-mug-list overflow-hidden bg-[#764D3D]">
      <div className="wrapper grid auto-cols-[15rem] grid-flow-col justify-stretch min-h-[50px] place-content-center">
        <img src={CoffeeMug} alt="Coffee Mug" width="25px" />
        <img src={CoffeeMug} alt="Coffee Mug" width="25px" />
        <img src={CoffeeMug} alt="Coffee Mug" width="25px" />
        <img src={CoffeeMug} alt="Coffee Mug" width="25px" />
        <img src={CoffeeMug} alt="Coffee Mug" width="25px" />
        <img src={CoffeeMug} alt="Coffee Mug" width="25px" />
        <img src={CoffeeMug} alt="Coffee Mug" width="25px" />
        <img src={CoffeeMug} alt="Coffee Mug" width="25px" />
        <img src={CoffeeMug} alt="Coffee Mug" width="25px" />
        <img src={CoffeeMug} alt="Coffee Mug" width="25px" />

        <img src={CoffeeMug} alt="" width="25px" />
        <img src={CoffeeMug} alt="" width="25px" />
        <img src={CoffeeMug} alt="" width="25px" />
        <img src={CoffeeMug} alt="" width="25px" />
        <img src={CoffeeMug} alt="" width="25px" />
        <img src={CoffeeMug} alt="" width="25px" />
        <img src={CoffeeMug} alt="" width="25px" />
        <img src={CoffeeMug} alt="" width="25px" />
        <img src={CoffeeMug} alt="" width="25px" />
        <img src={CoffeeMug} alt="" width="25px" />
      </div>
    </div>
  );
};

export default AnimatedContentBar;
