import {
  LocationIcon,
  ClockIcon,
  SwitchOffIcon,
  SwitchOnIcon,
  CouponIcon,
} from "./cartIcons";
import { useState, useEffect } from "react";
import TipButton from "./TipButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useCart from "./useCart";

interface StoredItem {
  id: string;
  image: string;
  name: string;
  price: number;
  qty: string;
}

const formatCurrency = (amount: number) => {
  return `$${amount.toFixed(2)}`;
};

const Checkout = () => {
  const handleCheckoutError = () => {
    toast.error("Failed to checkout!");
  };
  const [isCurbside, setIsCurbSide] = useState(false);
  const [selectedTip, setSelectedTip] = useState(0);

  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { cart } = useCart();
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const tipAmount = (subtotal * selectedTip) / 100;
  const estimatedTotal = subtotal + tipAmount;

  useEffect(() => {
    if (checkoutUrl) {
      window.open(checkoutUrl, "_blank", "noopener,noreferrer");
    }
  }, [checkoutUrl]);

  const handleCheckout = async () => {
    setIsSubmitting(true);

    try {
      const stored: StoredItem[] = JSON.parse(
        localStorage.getItem("cart") || "[]"
      );

      const itemsPayload = stored.map((item) => ({
        name: item.name,
        amount: item.price * 100,
        qty: item.qty + "",
      }));

      const resp = await fetch("http://127.0.0.1:8000/create-checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(itemsPayload),
      });
      const data = await resp.json();
      const url = data.checkout_url;

      if (resp.ok && url) {
        setCheckoutUrl(url);
      } else {
        handleCheckoutError();
      }
    } catch {
      handleCheckoutError();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* ========================================
                      Checkout Summary  
        ========================================= */}
      <h1 className="flex flex-row gap-2 text-sm font-sans font-semibold tracking-wider">
        {LocationIcon} Pickup: 558 Riverdale Dr Ste #208
      </h1>
      <h1 className="flex flex-row gap-2 text-sm font-sans font-semibold tracking-wider mt-3">
        {ClockIcon} Today at 8:22 AM
      </h1>
      <h1
        className="flex flex-row gap-2 text-sm font-sans font-semibold tracking-wider mt-8"
        onClick={() => setIsCurbSide(!isCurbside)}
      >
        <span className="cursor-pointer">
          {isCurbside ? SwitchOnIcon : SwitchOffIcon}
        </span>
        Curbside Pickup
      </h1>
      <div className="border-b-1 border-[#a6a6a6] w-full mt-10"></div>
      <h1 className="font-tiltwarp font-black text-2xl mt-5">Add a tip</h1>
      <div className="flex flex-row cursor-pointer">
        <TipButton
          percent={5}
          amount={formatCurrency(subtotal * 0.05)}
          selected={selectedTip === 5}
          onSelect={() => setSelectedTip(5)}
        />
        <TipButton
          percent={10}
          amount={formatCurrency(subtotal * 0.1)}
          selected={selectedTip === 10}
          onSelect={() => setSelectedTip(10)}
        />
        <TipButton
          percent={15}
          amount={formatCurrency(subtotal * 0.15)}
          selected={selectedTip === 15}
          onSelect={() => setSelectedTip(15)}
        />
        <TipButton
          percent={0}
          amount={formatCurrency(0)}
          selected={selectedTip === 0}
          onSelect={() => setSelectedTip(0)}
        />
      </div>
      <div className="border-b-1 border-[#a6a6a6] w-full mt-10"></div>
      <div className="relative w-full">
        <span className="absolute left-3 top-3/4 -translate-y-1/2">
          {CouponIcon}
        </span>
        <input
          type="text"
          placeholder="Add coupon or gift card"
          className="w-full h-12 mt-10 px-10 py-2 bg-white bg-opacity-20 text-xl text-[#807D7D] border border-[#d9d9d9] rounded-md"
        />
      </div>
      <div className="border-b-1 border-[#a6a6a6] w-full mt-10"></div>
      <div className="flex flex-col gap-1 mt-10">
        <div className="flex flex-row justify-between">
          <h1 className="text-lg font-sans font-semibold tracking-wider">
            Subtotal
          </h1>
          <h1 className="text-lg font-sans font-semibold tracking-wider">
            {formatCurrency(subtotal)}
          </h1>
        </div>
        <div className="flex flex-row justify-between">
          <h1 className="text-lg font-sans font-semibold tracking-wider">
            Estimated Tax
          </h1>
          <h1 className="text-lg font-sans font-semibold tracking-wider">
            $0.00
          </h1>
        </div>
        <div className="flex flex-row justify-between">
          <h1 className="text-lg font-sans font-semibold tracking-wider">
            Tip
          </h1>
          <h1 className="text-lg font-sans font-semibold tracking-wider">
            {formatCurrency(tipAmount)}
          </h1>
        </div>
        <div className="flex flex-row justify-between mt-5">
          <h1 className="text-2xl font-sans font-black tracking-wider">
            Estimated order total
          </h1>
          <h1 className="text-2xl font-sans font-semibold tracking-wider">
            {formatCurrency(estimatedTotal)}
          </h1>
        </div>
      </div>
      <button
        onClick={handleCheckout}
        disabled={isSubmitting}
        className="w-full h-15 mt-5 bg-black text-white text-xl rounded-md font-sans transition-all duration-150 ease-in cursor-pointer disabled:opacity-50"
      >
        {isSubmitting ? "Processing..." : "Checkout"}
      </button>
      <ToastContainer position="top-center" />
    </>
  );
};

export default Checkout;
