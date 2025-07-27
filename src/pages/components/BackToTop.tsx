import { useState, useEffect } from "react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    isVisible && (
      <div className="fixed bottom-10 right-10 z-10">
        <button
          onClick={scrollTop}
          className="w-auto h-auto px-8 py-2 bg-black text-white text-xl rounded-[100px] cursor-pointer font-georgia hover:bg-[#F3B54A] transition-all ease-in-out duration-150"
        >
          Back To Top
        </button>
      </div>
    )
  );
};

export default BackToTop;
