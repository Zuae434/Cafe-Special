import type { ReactNode } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PlusButton = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="39"
    viewBox="0 0 40 39"
    fill="none"
  >
    <ellipse
      cx="20.1198"
      cy="19.3412"
      rx="19.1823"
      ry="18.8944"
      fill="#F7F7F7"
    />
    <rect
      x="18.1353"
      y="8.40234"
      width="3.96875"
      height="21.2148"
      rx="1.98438"
      fill="#7E805F"
    />
    <rect
      x="30.7031"
      y="17.0205"
      width="3.97778"
      height="21.1667"
      rx="1.98889"
      transform="rotate(90 30.7031 17.0205)"
      fill="#7E805F"
    />
  </svg>
);

type LandingMenuItemProps = {
  title: string;
  price: string;
  image: ReactNode;
};

const LandingMenuItem: React.FC<LandingMenuItemProps> = ({
  title,
  image,
  price,
}) => {
  const handleAddToCart = () => {
    toast.success("Successfully added to cart!");
  };
  return (
    <>
      <div className="group relative rounded-[30px] border-4 border-[#BEBABA] w-[275px] h-[350px] text-[#7D7A7A] hover:border-[#F7FBB7] hover:text-[#F7F7F7] hover:bg-[linear-gradient(151deg,_#FBFFBB_2.67%,_#9C9F72_97.33%)] transition-all duration-150 ease-in-out">
        <div className="flex flex-col items-center transform transition-all duration-150 ease-in-out -translate-y-[50px] group-hover:-translate-y-[90px]">
          <div className="w-[150px] h-[300px] translate-y-[75px]">{image}</div>
          <h1 className="text-2xl">{title}</h1>
          <h1 className="hidden group-hover:block mt-2 text-center text-2xl">
            {price}
          </h1>
          <button
            onClick={handleAddToCart}
            className="hidden group-hover:block mt-2 text-center hover:cursor-pointer"
          >
            {PlusButton}
          </button>
        </div>
        <ToastContainer position="top-center" />
      </div>
    </>
  );
};

export default LandingMenuItem;
