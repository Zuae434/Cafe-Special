type TipButtonProps = {
  /** Percentage for predefined tips. Use -1 or set isCustom=true for a custom tip button */
  percent: number;
  amount: string;
  selected: boolean;
  onSelect: () => void;
  /** Optional: mark this button as the custom tip option */
  isCustom?: boolean;
  /** Optional: controlled value for the custom tip input (e.g., "$2.00" or "2") */
  customValue?: string;
  /** Optional: handle changes to the custom tip input */
  onCustomChange?: (value: string) => void;
  /** Optional: handle submit/blur to commit the custom tip */
  onCustomSubmit?: () => void;
};

const TipButton: React.FC<TipButtonProps> = ({
  percent,
  amount,
  selected,
  onSelect,
  isCustom,
  customValue,
  onCustomChange,
  onCustomSubmit,
}) => {
  const custom = isCustom || percent === -1;

  return (
    <div
      role="button"
      tabIndex={0}
      aria-pressed={selected}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect();
        }
      }}
      className={`flex flex-col items-center justify-center select-none rounded-xl mt-4 sm:mt-5 border p-3 sm:p-4 min-w-[44%] xs:min-w-[140px] sm:min-w-[120px] min-h-[52px] cursor-pointer transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4D79A9] ${
        selected
          ? "bg-[#4D79A9] border-[#4D79A9]"
          : "border-[#D1D3D4] hover:bg-[#e6edf5]"
      }`}
    >
      {custom ? (
        <div className="w-full flex flex-col items-center gap-1">
          <p
            className={`text-sm font-bold ${
              selected ? "text-white" : "text-[#2E3F59]"
            }`}
          >
            Custom
          </p>
          {selected ? (
            <div className="w-full flex items-center justify-center">
              <input
                type="number"
                inputMode="decimal"
                step="0.01"
                min="0"
                placeholder="0.00"
                value={customValue ?? ""}
                onChange={(e) => onCustomChange?.(e.target.value)}
                onBlur={() => onCustomSubmit?.()}
                className="w-24 sm:w-28 text-center text-sm sm:text-base px-2 py-1 rounded-md bg-white text-[#2E3F59] border border-[#D1D3D4] focus:outline-none focus:ring-2 focus:ring-[#4D79A9]"
                onClick={(e) => e.stopPropagation()}
              />
              <span
                className={`ml-1 text-sm sm:text-base font-semibold ${
                  selected ? "text-white" : "text-[#2E3F59]"
                }`}
              >
                $
              </span>
            </div>
          ) : (
            <p className="text-xs sm:text-sm text-[#636466]">Enter amount</p>
          )}
        </div>
      ) : (
        <>
          <p
            className={`text-base sm:text-lg font-bold ${
              selected ? "text-white" : "text-[#2E3F59]"
            }`}
          >
            {percent}%
          </p>
          <p
            className={`text-xs sm:text-sm font-semibold ${
              selected ? "text-white/90" : "text-[#636466]"
            }`}
          >
            {amount}
          </p>
        </>
      )}
    </div>
  );
};

export default TipButton;
