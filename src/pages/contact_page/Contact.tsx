import { motion } from "framer-motion";
import Header from "../components/header";
import BakeryImg from "./contact-bakery.png";
import Form from "./contact_components/Form";
import ContactFooter from "./contact_components/ContactFooter";

const Contact = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
        <div className="relative inline-block min-w-full max-w-lg">
          <img
            src={BakeryImg}
            alt="Bakery"
            className="block w-full h-[883px]"
          />
          <div className="absolute inset-0 bg-black opacity-70 pointer-events-none" />
          <div className="container mx-auto absolute inset-0 p-10 m-10 flex flex-col h-full">
            <div>
              <h2 className="text-8xl text-location-text font-khmer font-semibold">
                Contact Us
              </h2>
              <p className="text-white text-xl">
                We’re here to help with any questions, feedback, or just to say
                hello. Connect with us today!
              </p>
            </div>
            <div className="flex-grow flex items-center justify-center">
              <Form />
            </div>
          </div>
        </div>
        <ContactFooter />
      </motion.div>
    </>
  );
};

export default Contact;
