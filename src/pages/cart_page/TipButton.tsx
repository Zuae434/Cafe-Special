type TipButtonProps = {
  percent: number;
  amount?: string;
  value: string;
  selectedTip: string | null;
  setSelectedTip: (tip: string) => void;
};

const TipButton: React.FC<TipButtonProps> = ({
  percent,
  amount,
  value,
  selectedTip,
  setSelectedTip,
}) => {
  const isSelected = selectedTip === value;

  return (
    <div
      className={`flex flex-col mt-5 border border-[#a6a6a6] p-3 justify-center items-center min-w-[100px] cursor-pointer transition-colors duration-300 ease-in-out ${
        isSelected ? "bg-[#EAB85F]" : ""
      }`}
      onClick={() => setSelectedTip(value)}
    >
      <p
        className={`text-lg font-bold ${
          isSelected ? "text-white" : "text-black"
        }`}
      >
        {value === "none" ? "None" : `${percent}%`}
      </p>
      {amount && (
        <p
          className={`text-sm font-bold ${
            isSelected ? "text-black" : "text-[#C7C7C7]"
          }`}
        >
          {amount}
        </p>
      )}
    </div>
  );
};

export default TipButton;
