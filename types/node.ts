type BaseNode = {
  id: string;
  type: "function" | "special";
  position: {
    x: number;
    y: number;
  };
};

export type FunctionNodeAttributes = BaseNode & {
  data: {
    title: string;
    inputValue: string;
    optionValue: string;
    isSelectDisabled: boolean;
    nextNodeId: string;
    options: {
      label: string;
      value: string;
    }[];
  };
};

export type SpecialNodeAttributes = BaseNode & {
  data: {
    title: string;
    connectedNodeId: string;
    variant: "input" | "output";
  };
};
