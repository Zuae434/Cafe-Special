import {
  LocationIcon,
  ClockIcon,
  SwitchOffIcon,
  SwitchOnIcon,
  CouponIcon,
} from "./cartIcons";
import { useState, useEffect } from "react";
import TipButton from "./TipButton";

const tipAmountMap: Record<string, string> = {
  "5": "$1.90",
  "10": "$3.80",
  "15": "$5.70",
  none: "$0.00",
};

const totalAmountMap: Record<string, string> = {
  "5": "$7.90",
  "10": "$9.80",
  "15": "$11.70",
  none: "$6.00",
};

const Checkout = () => {
  const [isCurbside, setIsCurbSide] = useState(false);
  const [selectedTip, setSelectedTip] = useState<string | null>(null);

  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (checkoutUrl) {
      window.open(checkoutUrl, "_blank", "noopener,noreferrer");
    }
  }, [checkoutUrl]);

  const handleCheckout = async () => {
    setIsSubmitting(true);
    try {
      const resp = await fetch("http://127.0.0.1:8000/create-checkout", {
        method: "POST",
      });
      const data = await resp.json();
      if (resp.ok && data.checkoutUrl) {
        setCheckoutUrl(data.checkoutUrl);
      } else {
        console.error("Checkout API error:", data);
      }
    } catch (err) {
      console.error("Network error:", err);
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
          amount="$1.90"
          value="5"
          selectedTip={selectedTip}
          setSelectedTip={setSelectedTip}
        />
        <TipButton
          percent={10}
          amount="$3.80"
          value="10"
          selectedTip={selectedTip}
          setSelectedTip={setSelectedTip}
        />
        <TipButton
          percent={15}
          amount="$5.70"
          value="15"
          selectedTip={selectedTip}
          setSelectedTip={setSelectedTip}
        />
        <TipButton
          percent={0}
          value="none"
          selectedTip={selectedTip}
          setSelectedTip={setSelectedTip}
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
            $6.00
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
            {tipAmountMap[selectedTip ?? "none"]}
          </h1>
        </div>
        <div className="flex flex-row justify-between mt-5">
          <h1 className="text-2xl font-sans font-black tracking-wider">
            Estimated order total
          </h1>
          <h1 className="text-2xl font-sans font-semibold tracking-wider">
            {totalAmountMap[selectedTip ?? "none"]}
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
    </>
  );
};

export default Checkout;
