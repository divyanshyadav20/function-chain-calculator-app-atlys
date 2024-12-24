"use client";

import { SpecialNodeAttributes } from "@/types";
import Badge from "../badge";
import InputWithIcon from "../input-with-icon";

type Props = {
  node: SpecialNodeAttributes;
};

const SpecialNode = ({ node }: Props) => {
  const { variant, title } = node.data;
  const { position } = node;

  const variantStyles = {
    input: "bg-mustard-200",
    output: "bg-green-30",
  };

  return (
    <div
      style={{
        top: position.y,
        left: position.x,
      }}
      className="flex flex-col items-center justify-center gap-1.5 max-w-28 absolute"
    >
      <Badge className={`${variantStyles[variant]} text-white`} label={title} />
      <InputWithIcon variant={variant} />
    </div>
  );
};

export default SpecialNode;
