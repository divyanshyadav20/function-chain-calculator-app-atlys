import Connector from "./connector";

type Props = {
  className?: string;
  variant?: "input" | "output";
  value?: string;
};

const InputWithIcon = ({ className, variant = "input", value }: Props) => {
  const isRowReversed = variant === "output";

  return (
    <div
      className={`flex items-center bg-white rounded-2xl border-2 h-[50px] ${
        isRowReversed
          ? "flex-row-reverse border-green-20"
          : "border-mustard-100"
      }`}
    >
      <input
        type="number"
        value={value}
        disabled={isRowReversed}
        className={`h-full text-black w-full rounded-2xl disabled:bg-white text-lg font-bold leading-5 block pl-3 pr-1  appearance-none focus-visible:outline-none focus:ring-blue-500 focus:border-blue-500 ${className}`}
      />
      <div
        className={`w-px h-full mx-1 ${
          isRowReversed ? "bg-green-10" : "bg-mustard-50"
        }`}
      />
      <div className="h-full flex justify-center items-center px-1.5 pt-px">
        <Connector />
      </div>
    </div>
  );
};

export default InputWithIcon;
