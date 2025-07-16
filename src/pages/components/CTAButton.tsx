type CTAButtonProps = {
  title: string;
  color: boolean;
};

const CTAButton: React.FC<CTAButtonProps> = ({ title, color }) => {
  return (
    <button
      className={`w-[245px] h-[65px] rounded-full text-white font-sans shadow-[inset_4px_10px_7.3px_0px_rgba(255,255,255,0.20),_4px_4px_4px_0px_rgba(196,144,51,0.21)] text-3xl hover:bg-[#BDC08B] transition-all duration-150 ease-in cursor-pointer
    ${color ? "bg-[#EAB85F]" : "bg-[#CA7821]"}`}
    >
      {title}
    </button>
  );
};

export default CTAButton;
