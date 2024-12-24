"use client";

import allEdges from "@/data/edges.json";
import allNodes from "@/data/nodes.json";
import { NodeProperties } from "@/types/node";
import { useState } from "react";
import Edge from "./edge";
import NodeComponent from "./nodes";

const Board = () => {
  const [nodes] = useState<NodeProperties[]>(allNodes as NodeProperties[]);

  return (
    <div className="fixed w-screen h-screen top-0 left-0 overflow-scroll">
      <div className="relative w-screen h-screen bg-[#F8F8F8] bg-[radial-gradient(#CFCFCF_1.25px,transparent_1px)] [background-size:18px_18px]">
        {nodes.map((node, index) => (
          <NodeComponent key={index} node={node} />
        ))}
        {allEdges.map((edge, index) => (
          <Edge key={index} position={edge.position} />
        ))}
      </div>
    </div>
  );
};

export default Board;
