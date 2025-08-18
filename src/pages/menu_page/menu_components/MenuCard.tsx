import { toast } from "react-toastify";
import useCart from "../../cart_page/useCart";

type MenuCardProps = {
  image: string;
  title: string;
  subtitle: string;
};

const MenuCard: React.FC<MenuCardProps> = ({ image, title, subtitle }) => {
  const { addToCart } = useCart();
  const handleAddToCart = () => {
    addToCart({ id: title, name: title, price: 6, image });
    toast.success("Successfully added to cart!", {
      autoClose: 2000,
      pauseOnHover: false,
      closeOnClick: true,
    });
  };
  return (
    <>
      <div className="relative w-[85vw] max-w-[372px] h-[360px] sm:h-[450px] rounded-[30px] sm:rounded-[50px] overflow-hidden shadow-lg m-4 sm:m-10 transition-all duration-300 ease-in-out md:hover:scale-110">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 flex flex-col justify-end items-center h-full p-4 sm:p-6 bg-gradient-to-t from-black/60 to-transparent text-white space-y-3 sm:space-y-4">
          <h3 className="font-georgia text-xl sm:text-2xl font-bold text-center">
            {title}
          </h3>
          <p className="text-base sm:text-lg mb-2 font-georgia text-center leading-snug">
            {subtitle}
          </p>
          <p className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 font-georgia">
            $6.00
          </p>
          <button
            onClick={handleAddToCart}
            aria-label={`Add ${title} to cart`}
            className="self-center w-full sm:w-auto px-4 sm:px-6 py-3 sm:py-2 rounded-[60px] sm:rounded-[80px] border-2 sm:border-3 border-[#4D79A9] bg-white text-[#2E3F59] font-georgia font-bold hover:bg-[#4D79A9] hover:text-white transition cursor-pointer"
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default MenuCard;
