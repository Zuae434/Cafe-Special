import { motion } from "framer-motion";
import HeaderLogo from "../sign-login_page/HeaderLogo.png";
import AcceptedCards from "./AcceptedCards.png";
import { Link } from "react-router-dom";

const square = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
  >
    <g clip-path="url(#clip0_1_1050)">
      <path
        d="M24.9165 1.6665H5.08341C3.25051 1.6665 1.76465 3.03489 1.76465 4.72287V23.6101C1.76465 25.2981 3.25051 26.6665 5.08341 26.6665H24.9165C26.7494 26.6665 28.2352 25.2981 28.2352 23.6101V4.72287C28.2352 3.03489 26.7494 1.6665 24.9165 1.6665Z"
        stroke="black"
        stroke-width="6"
        stroke-miterlimit="10"
      />
      <path d="M20 9H10V19H20V9Z" fill="black" />
    </g>
    <defs>
      <clipPath id="clip0_1_1050">
        <rect width="30" height="30" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const EmptyCart = () => {
  return (
    <motion.div
      className="empty-cart"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex justify-center p-10 bg-[#F3B54A]">
        <Link to="/Menu">
          <h1 className="absolute left-20 top-30 text-white text-2xl font-sans">
            &#8592; Continue Shopping
          </h1>
        </Link>
        <img src={HeaderLogo} alt="Header Logo" />
      </div>
      <div className="container mx-auto mt-20">
        <h1 className="text-4xl font-tiltwarp font-bold text-title-text">
          Your cart is empty
        </h1>
        <div className="flex flex-col gap-5 mt-80 items-center">
          {square}
          <h1 className="text-lg font-sans">Secure checkout by Square</h1>
          <img src={AcceptedCards} alt="Accepted Cards" />
        </div>
      </div>
    </motion.div>
  );
};

export default EmptyCart;
