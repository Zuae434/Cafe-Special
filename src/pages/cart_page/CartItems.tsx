import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import useCart from "./useCart";
import Bin from "./Bin.png";

const CartItems = () => {
  const { cart, addToCart, removeFromCart, removeItem, clearCart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  const [itemToRemove, setItemToRemove] = useState<string | null>(null);
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  if (cart.length === 0) {
    return (
      <>
        <h1 className="text-4xl font-tiltwarp font-bold text-[#2E3F59]">
          Your cart
        </h1>
        <p className="mt-5 text-xl">Your cart is empty.</p>
        <Link to="/Menu">
          <h1 className="w-full py-3 border border-[#050505] rounded-[10px] text-center text-md font-sans tracking-wider mt-10">
            Add items
          </h1>
        </Link>
      </>
    );
  }
  return (
    <>
      <h1 className="text-4xl font-tiltwarp font-bold text-title-text">
        Your cart
      </h1>
      <h1 className="text-2xl font-sans font-[450] tracking-wider mt-5">
        Your order ({totalItems}
        {totalItems === 1 ? " item" : " items"})
      </h1>
      {cart.map((item) => (
        <div key={item.id} className="flex flex-row">
          {item.image && (
            <div className="w-[110px] h-[130px] mt-10 border border-white bg-[#F9F9F9] rounded-[15px] shadow-[0_0_8.8px_0_rgba(0,0,0,0.27)]">
              <img
                src={item.image}
                alt={item.name}
                className="ml-2 mt-2 w-full h-full object-cover"
              />
            </div>
          )}
          <div className="flex flex-col ml-5 mt-10 flex-1">
            <div className="flex flex-row justify-between gap-10 items-center">
              <h1 className="text-xl font-sans font-[450] font-stretch-semi-condensed">
                {item.name}
              </h1>
              <h1>${(item.price * item.qty).toFixed(2)}</h1>
            </div>
            <h1 className="mt-5 text-xl">
              ${(item.price * item.qty).toFixed(2)}
            </h1>
            <div className="flex flex-row justify-between items-center mt-10">
              <div className="flex flex-row gap-5 items-center">
                <button
                  className="w-[33px] h-[33px] hover:cursor-pointer bg-[#E7E5E5] rounded-[7px]"
                  onClick={() => {
                    removeFromCart(item.id);
                  }}
                >
                  &minus;
                </button>
                <h1>{item.qty}</h1>
                <button
                  className="w-[33px] h-[33px] hover:cursor-pointer bg-[#E7E5E5] rounded-[7px]"
                  onClick={() =>
                    addToCart({
                      id: item.id,
                      name: item.name,
                      image: item.image,
                      price: item.price,
                    })
                  }
                >
                  +
                </button>
              </div>
              <img
                src={Bin}
                alt="Bin"
                className="h-[21px] w-[21px] hover:cursor-pointer"
                onClick={() => setItemToRemove(item.id)}
              />
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={() => setShowClearConfirm(true)}
        className="w-full py-3 border border-[#050505] rounded-[10px] text-center text-md font-sans tracking-wider mt-10"
      >
        Clear Cart
      </button>

      {itemToRemove && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-black/10 flex items-center justify-center z-50"
          onClick={() => {
            setItemToRemove(null);
          }}
        >
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-[#E7E5E5] p-6 rounded-xl shadow-xl text-center w-[90%] max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-lg mb-4">Remove this item from your cart?</p>
            <div className="flex justify-center gap-4">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer"
                onClick={() => {
                  removeItem(itemToRemove);
                  setItemToRemove(null);
                }}
              >
                Yes
              </button>
              <button
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 cursor-pointer"
                onClick={() => setItemToRemove(null)}
              >
                No
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {showClearConfirm && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-black/10 flex items-center justify-center z-50"
          onClick={() => {
            setShowClearConfirm(false);
          }}
        >
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-[#E7E5E5] p-6 rounded-xl shadow-xl text-center w-[90%] max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-lg mb-4">
              Are you sure you want to clear your cart?
            </p>
            <div className="flex justify-center gap-4">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer"
                onClick={() => {
                  clearCart();
                  setShowClearConfirm(false);
                }}
              >
                Yes
              </button>
              <button
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 cursor-pointer"
                onClick={() => setShowClearConfirm(false)}
              >
                No
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default CartItems;
