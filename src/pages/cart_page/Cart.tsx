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
      <div className="bg-[#002147]/95">
        <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            to="/Menu"
            className="sm:absolute sm:left-4 sm:top-1/2 sm:-translate-y-1/2"
          >
            <span className="inline-flex items-center gap-2 text-[#F5F7FA] text-base sm:text-lg font-sans hover:underline">
              <span aria-hidden>←</span> Continue Shopping
            </span>
          </Link>
          <img
            src={HeaderLogo}
            alt="Header Logo"
            className="h-12 sm:h-16 md:h-20 w-auto"
          />
        </div>
      </div>
      <div className="bg-[#F5F7FA]">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="lg:col-span-2">
              <CartItems />
            </div>
            <div>
              <Checkout />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Cart;
