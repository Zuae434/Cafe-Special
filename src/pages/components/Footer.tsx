import { Link } from "react-router-dom";

import Logo from "/Coffee-Break-Logo-Black.png";
import Facebook from "../landing_page/landing_components/Contact/ContactImages/Facebook-Black.png";
import Instagram from "../landing_page/landing_components/Contact/ContactImages/Instagram-Black.png";
import Twitter from "../landing_page/landing_components/Contact/ContactImages/Twitter-Black.png";

type FooterProps = {
  transparent?: boolean;
};

const Footer: React.FC<FooterProps> = ({ transparent }) => {
  return (
    <footer
      className={
        transparent ? "bg-transparent" : "footer-overlay py-4 min-h-[300px]"
      }
    >
      <div className="container mx-auto flex flex-row mt-10 justify-around items-center font-bold w-full">
        <p>© 2025 Coffee Break.</p>
        <Link to="/">
          <img
            src={Logo}
            alt="Logo"
            className="mx-auto mb-4 h-[150px] w-[150px] "
          />
        </Link>
        <div className="flex flex-row gap-4 items-center cursor-pointer">
          <img src={Facebook} alt="Facebook" className="h-[50px] w-[50px]" />
          <img src={Instagram} alt="Instagram" className="h-[50px] w-[50px]" />
          <img src={Twitter} alt="Twitter" className="h-[50px] w-[50px]" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
