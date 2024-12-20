import Image from "next/image";

type Props = {
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  value: string;
  options: {
    label: string;
    value: string;
  }[];
};

const Select = ({ label, disabled, options, value }: Props) => {
  return (
    <div>
      {label ? (
        <label
          htmlFor="select"
          className="block font-medium text-xs leading-3 mb-1"
        >
          {label}
        </label>
      ) : null}
      <div className="relative">
        <select
          id="select"
          disabled={disabled}
          value={value}
          className="border block border-gray-20 text-gray-40 rounded-lg px-3 py-2 disabled:bg-neutral-100 w-full font-medium text-xs leading-3 appearance-none"
        >
          {options.map((opt, index) => (
            <option key={index}>{opt.label}</option>
          ))}
        </select>
        <Image
          src="/chevron-down.svg"
          alt="chevron-down"
          height={14}
          width={14}
          className="absolute top-2 right-2 flex items-center pointer-events-none"
        />
      </div>
    </div>
  );
};

export default Select;
