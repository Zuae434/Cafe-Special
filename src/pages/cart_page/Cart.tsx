import { motion } from "framer-motion";
import HeaderLogo from "../sign-login_page/HeaderLogo.png";
import { Link } from "react-router-dom";
import Checkout from "./CheckoutSummary";
import CartItems from "./CartItems";

const Cart = () => {
  return (
    <motion.div
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
      <div className="flex flex-row gap-5 pl-25 bg-repeating-stripes">
        <div className="container mx-auto mt-20 max-w-[50%]">
          <CartItems />
        </div>
        <div className="container mx-auto mt-20 max-w-[35%]">
          <Checkout />
        </div>
      </div>
    </motion.div>
  );
};

export default Cart;
