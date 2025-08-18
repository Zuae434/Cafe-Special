import { LocationIcon, ClockIcon, CouponIcon } from "./cartIcons";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import TipButton from "./TipButton";
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
      <h1 className="flex items-center gap-2 text-xs sm:text-sm font-sans font-semibold tracking-wider text-[#2E3F59]">
        <span className="shrink-0">{LocationIcon}</span>{" "}
        <span className="leading-tight">Pickup: 558 Riverdale Dr Ste #208</span>
      </h1>
      <h1 className="flex items-center gap-2 text-xs sm:text-sm font-sans font-semibold tracking-wider mt-2 sm:mt-3 text-[#2E3F59]">
        <span className="shrink-0">{ClockIcon}</span>{" "}
        <span className="leading-tight">Today at 8:22 AM</span>
      </h1>
      <div className="border-b-1 border-[#D1D3D4] w-full mt-10"></div>
      <h1 className="font-tiltwarp font-black text-xl sm:text-2xl mt-5 text-[#2E3F59]">
        Add a tip
      </h1>
      <div className="flex flex-row flex-wrap gap-2 sm:gap-3 mt-2 cursor-pointer">
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
      <div className="border-b-1 border-[#D1D3D4] w-full mt-10"></div>
      <div className="relative w-full">
        <span className="absolute left-3 top-11/16 md:top-3/4 -translate-y-1/2 pointer-events-none">
          {CouponIcon}
        </span>
        <input
          type="text"
          placeholder="Add coupon or gift card"
          className="w-full h-11 sm:h-12 mt-6 sm:mt-10 pl-10 pr-3 py-2 bg-[#D1D3D4]/20 text-base sm:text-xl text-[#2E3F59] placeholder:text-[#636466] border border-[#D1D3D4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4D79A9]"
        />
      </div>
      <div className="border-b-1 border-[#D1D3D4] w-full mt-10"></div>
      <div className="flex flex-col gap-1 mt-10">
        <div className="flex flex-row justify-between">
          <h1 className="text-base sm:text-lg font-sans font-semibold tracking-wider text-[#636466]">
            Subtotal
          </h1>
          <h1 className="text-base sm:text-lg font-sans font-semibold tracking-wider text-[#2E3F59]">
            {formatCurrency(subtotal)}
          </h1>
        </div>
        <div className="flex flex-row justify-between">
          <h1 className="text-base sm:text-lg font-sans font-semibold tracking-wider text-[#636466]">
            Estimated Tax
          </h1>
          <h1 className="text-base sm:text-lg font-sans font-semibold tracking-wider text-[#2E3F59]">
            $0.00
          </h1>
        </div>
        <div className="flex flex-row justify-between">
          <h1 className="text-base sm:text-lg font-sans font-semibold tracking-wider text-[#636466]">
            Tip
          </h1>
          <h1 className="text-base sm:text-lg font-sans font-semibold tracking-wider text-[#2E3F59]">
            {formatCurrency(tipAmount)}
          </h1>
        </div>
        <div className="flex flex-row justify-between mt-5">
          <h1 className="text-xl sm:text-2xl font-sans font-black tracking-wider text-[#2E3F59]">
            Estimated order total
          </h1>
          <h1 className="text-xl sm:text-2xl font-sans font-bold tracking-wider text-[#4D79A9]">
            {formatCurrency(estimatedTotal)}
          </h1>
        </div>
      </div>
      <button
        onClick={handleCheckout}
        disabled={isSubmitting}
        className="w-full h-12 sm:h-14 mt-5 bg-[#4D79A9] hover:bg-[#2E3F59] text-white text-lg sm:text-xl rounded-md font-sans transition-all duration-150 ease-in cursor-pointer disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-[#D1D3D4]"
      >
        {isSubmitting ? "Processing..." : "Checkout"}
      </button>
    </>
  );
};

export default Checkout;
