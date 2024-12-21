type Props = {
  label?: string;
  placeholder?: string;
  className?: string;
  defaultValue?: string;
};

const Input = ({ label, placeholder, className, defaultValue }: Props) => {
  return (
    <div>
      {label ? (
        <label
          htmlFor="text-input"
          className="block font-medium text-xs leading-3 mb-1"
        >
          {label}
        </label>
      ) : null}
      <input
        type="text"
        id="text-input"
        defaultValue={defaultValue}
        placeholder={placeholder}
        className={`border border-gray-20 min-h-8 rounded-lg px-3 py-2 text-black font-medium text-xs block leading-3 w-full  focus-visible:outline-none focus:ring-blue-500 focus:border-blue-500 ${className}`}
      />
    </div>
  );
};

export default Input;
