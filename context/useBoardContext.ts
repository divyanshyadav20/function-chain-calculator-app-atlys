import { NodeProperties } from "@/types";
import { createContext, useContext } from "react";

type BoardContextType = {
  nodes: NodeProperties[];
  handleUpdateNode: (node: NodeProperties) => void;
};

export const BoardContext = createContext<BoardContextType>({
  nodes: [],
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
