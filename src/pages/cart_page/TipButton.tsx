type TipButtonProps = {
  percent: number;
  amount: string;
  selected: boolean;
  onSelect: () => void;
};

const TipButton: React.FC<TipButtonProps> = ({
  percent,
  amount,
  selected,
  onSelect,
}) => {
  return (
    <div
      className={`flex flex-col mt-5 border border-[#a6a6a6] p-3 justify-center items-center min-w-[100px] cursor-pointer transition-colors duration-300 ease-in-out ${
        selected ? "bg-[#EAB85F]" : ""
      }`}
      onClick={onSelect}
    >
      <p
        className={`text-lg font-bold ${
          selected ? "text-white" : "text-black"
        }`}
      >
        {percent === 0 ? "None" : `${percent}%`}
      </p>
      {percent !== 0 && (
        <p
          className={`text-sm font-bold ${
            selected ? "text-black" : "text-[#C7C7C7]"
          }`}
        >
          {amount}
        </p>
      )}
    </div>
  );
};

export default TipButton;
