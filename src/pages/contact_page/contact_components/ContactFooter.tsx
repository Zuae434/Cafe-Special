import { Link } from "react-router-dom";
import Logo from "/Coffee-Break-Logo-Black.png";
import Facebook from "../../landing_page/landing_components/Contact/ContactImages/Facebook-Black.png";
import Instagram from "../../landing_page/landing_components/Contact/ContactImages/Instagram-Black.png";
import Twitter from "../../landing_page/landing_components/Contact/ContactImages/Twitter-Black.png";

const ContactFooter = () => {
  return (
    <footer className="bg-[#FFF1D8] text-black py-4 min-h-[311px]">
      <div className="grid grid-cols-4 gap-4 mb-10">
        <div className="flex flex-col items-center">
          <Link to="/">
            <img src={Logo} alt="Logo" className="mb-4 h-[150px] w-[150px] " />
          </Link>
          <div className="flex flex-row self-center">
            <img src={Facebook} alt="Facebook" className="h-[32px] w-[32px]" />
            <img
              src={Instagram}
              alt="Instagram"
              className="h-[32px] w-[32px]"
            />
            <img src={Twitter} alt="Twitter" className="h-[32px] w-[32px]" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 text-xl">
          <p className="font-bold text-location-text text-2xl">Experience</p>
          <p className="cursor-pointer hover:text-contact-hover hover:underline underline-offset-4">
            Experience
          </p>
          <Link to="/Locations">
            <p className="cursor-pointer hover:text-contact-hover hover:underline underline-offset-4">
              Locations
            </p>
          </Link>
          <p className="cursor-pointer hover:text-contact-hover hover:underline underline-offset-4">
            eGift Cards
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 text-xl">
          <p className="font-bold text-location-text text-2xl">Company</p>
          <Link to="/Story">
            <p className="cursor-pointer hover:text-contact-hover hover:underline underline-offset-4">
              About
            </p>
          </Link>
          <p className="cursor-pointer hover:text-contact-hover hover:underline underline-offset-4">
            Hiring
          </p>
          <Link to="/Events">
            <p className="cursor-pointer hover:text-contact-hover hover:underline underline-offset-4">
              Private Events
            </p>
          </Link>
        </div>
        <div className="flex flex-col items-center gap-4 text-xl">
          <p className="font-bold text-location-text text-2xl">Support</p>
          <Link to="/Contact">
            <p className="cursor-pointer hover:text-contact-hover hover:underline underline-offset-4">
              Contact
            </p>
          </Link>
          <p className="cursor-pointer hover:text-contact-hover hover:underline underline-offset-4">
            Privacy Policy
          </p>
        </div>
      </div>

      <p className="text-center border-t border-gray-600 pt-4">
        &copy; 2023 Coffee Break. All rights reserved.
      </p>
    </footer>
  );
};

export default ContactFooter;
