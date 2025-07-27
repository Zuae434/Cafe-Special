import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeaderLogo from "./HeaderLogo.png";

const checkmark = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <g clip-path="url(#clip0_1_1188)">
      <path
        d="M7.99421 15.3789C12.0684 15.3789 15.3712 12.0752 15.3712 7.99998C15.3712 3.92473 12.0684 0.621094 7.99421 0.621094C3.91999 0.621094 0.617188 3.92473 0.617188 7.99998C0.617188 12.0752 3.91999 15.3789 7.99421 15.3789Z"
        stroke="black"
        stroke-miterlimit="10"
      />
      <path
        d="M4.9834 7.81385L7.19157 9.97534L10.8924 6.18652"
        stroke="black"
        stroke-miterlimit="10"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_1188">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const square = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="18"
    viewBox="0 0 17 18"
    fill="none"
  >
    <g clip-path="url(#clip0_1_1191)">
      <path
        d="M14.1194 1H2.88063C1.84199 1 1 1.82103 1 2.83382V14.1662C1 15.179 1.84199 16 2.88063 16H14.1194C15.158 16 16 15.179 16 14.1662V2.83382C16 1.82103 15.158 1 14.1194 1Z"
        stroke="black"
        stroke-width="3"
        stroke-miterlimit="10"
      />
      <path d="M11 6H6V11H11V6Z" fill="black" />
    </g>
    <defs>
      <clipPath id="clip0_1_1191">
        <rect width="17" height="18" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const SignLogin = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-center p-10 bg-[#F3B54A]">
        <img src={HeaderLogo} alt="Header Logo" />
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col p-10 pl-30">
          <h1 className="font-extrabold text-4xl font-tiltwarp">
            Sign in or create an account with ust your phone number
          </h1>
          <div className="flex flex-row gap-5 mt-10 items-center">
            {checkmark}
            <p className="font-sans text-2xl">Get order status notifications</p>
          </div>
          <div className="border-b-3 border-[#DAD9D9] w-full mt-[20px]"></div>
          <div className="flex flex-row gap-5 mt-5 items-center">
            {checkmark}
            <p className="font-sans text-2xl">
              View your order history and quickly reorder
            </p>
          </div>
          <div className="border-b-3 border-[#DAD9D9] w-full mt-[20px]"></div>
          <div className="flex flex-row gap-5 mt-5 items-center">
            {square}
            <p className="font-sans text-xl">
              Manage your Square Pay payment detailsfor faster checkout from any
              Square Online Site
            </p>
          </div>
          <div className="flex flex-row">
            <Link to="/Menu">
              <button className="bg-white text-black w-font-bold w-[64px] h-[64px] rounded-[15px] mt-30 text-4xl hover:cursor-pointer">
                &times;
              </button>
            </Link>
            <button className="bg-black text-white font-sans text-2xl h-[64px] rounded-[15px] mt-30 w-full ml-5 hover:cursor-pointer">
              Sign in or Sign Up
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SignLogin;
