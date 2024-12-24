"use client";

import { BoardContext } from "@/context/useBoardContext";
import allEdges from "@/data/edges.json";
import allNodes from "@/data/nodes.json";
import { NodeProperties } from "@/types/node";
import { useCallback, useState } from "react";
import Edge from "./edge";
import NodeComponent from "./nodes";

const Board = () => {
  const [valueX, setValueX] = useState<number | null>(null);
  const [valueY, setValueY] = useState<number | null>(null);
  const [nodes, setNodes] = useState<NodeProperties[]>(
    allNodes as NodeProperties[]
  );

  const handleUpdateNode = useCallback((updatedNode: NodeProperties) => {
    setNodes((prevNodes) =>
      prevNodes.map((prevNode) =>
        prevNode.id === updatedNode.id ? updatedNode : prevNode
      )
    );
  }, []);

  return (
    <BoardContext.Provider
      value={{ nodes, valueX, valueY, handleUpdateNode, setValueX, setValueY }}
    >
      <div className="fixed w-screen h-screen top-0 left-0 overflow-hidden">
        <div className="relative w-screen h-screen bg-[#F8F8F8] bg-[radial-gradient(#CFCFCF_1.25px,transparent_1px)] [background-size:18px_18px] overflow-auto">
          {nodes.map((node, index) => (
            <NodeComponent key={index} node={node} />
          ))}
          {allEdges.map((edge, index) => (
            <Edge key={index} position={edge.position} />
          ))}
        </div>
      </div>
    </BoardContext.Provider>
  );
};

export default Board;
