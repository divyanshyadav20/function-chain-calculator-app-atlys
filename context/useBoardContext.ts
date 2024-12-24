import { NodeProperties } from "@/types";
import { createContext, useContext } from "react";

type BoardContextType = {
  nodes: NodeProperties[];
  valueX: number | null;
  valueY: number | null;
  setValueX: (value: number | null) => void;
  setValueY: (value: number | null) => void;
  handleUpdateNode: (node: NodeProperties) => void;
};

export const BoardContext = createContext<BoardContextType>({
  nodes: [],
  valueX: null,
  valueY: null,
  setValueX: () => {},
  setValueY: () => {},
  handleUpdateNode: () => {},
});

export const useBoardContext = (): BoardContextType => {
  const context = useContext(BoardContext);

  if (context === undefined) {
    throw new Error(
      "useBoardContext must be used within a BoardContext.Provider"
    );
  }

  return context;
};
