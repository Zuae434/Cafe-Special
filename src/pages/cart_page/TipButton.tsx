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
      className={`flex flex-col mt-5 border p-3 justify-center items-center min-w-[100px] cursor-pointer transition-colors duration-300 ease-in-out ${
        selected ? "bg-[#4D79A9]" : "border-[#D1D3D4] hover:bg-[#e6edf5]"
      }`}
      onClick={onSelect}
    >
      <p
        className={`text-lg font-bold ${
          selected ? "text-white" : "text-[#2E3F59]"
        }`}
      >
        {percent === 0 ? "None" : `${percent}%`}
      </p>
      {percent !== 0 && (
        <p
          className={`text-sm font-bold ${
            selected ? "text-white" : "text-[#636466]"
          }`}
        >
          {amount}
        </p>
      )}
    </div>
  );
};

export default TipButton;
