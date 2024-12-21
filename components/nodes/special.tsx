import { SpecialNodeAttributes } from "@/types";
import Badge from "../badge";
import InputWithIcon from "../input-with-icon";

type Props = {
  data: SpecialNodeAttributes["data"];
};

const SpecialNode = ({ data: { variant, title } }: Props) => {
  const variantStyles = {
    input: "bg-mustard-200",
    output: "bg-green-30",
  };

  return (
    <div className="flex flex-col items-center justify-center gap-1.5 max-w-28">
      <Badge className={`${variantStyles[variant]} text-white`} label={title} />
      <InputWithIcon variant={variant} />
    </div>
  );
};

export default SpecialNode;
