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
    defaultInputValue: string;
    defaultOptionValue: string;
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
