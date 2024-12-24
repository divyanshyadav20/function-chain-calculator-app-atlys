"use client";

import { useBoardContext } from "@/context/useBoardContext";
import { Edge as EdgeType } from "@/types";

type Props = {
  edge: EdgeType;
};

const Edge = ({ edge: { source, target, position } }: Props) => {
  const { nodes } = useBoardContext();

  const hasValidConnection = () => {
    const sourceNode = nodes.find((node) => node.id === source);
    const targetNode = nodes.find((node) => node.id === target);
    return !!sourceNode && !!targetNode;
  };

  if (!hasValidConnection()) {
    return null;
  }

  const createControlPoint = (isFirst: boolean) => {
    const dx = position.x1 - position.x0; // Distance in x direction
    const dy = position.y1 - position.y0; // Distance in y direction

    // Base proportions for control point calculations
    const horizontalProportion = 0.3;
    let offsetX = dx * horizontalProportion;
    let offsetY;

    // Adjust curve shape based on the connection type
    if (Math.abs(dy) < 30 && Math.abs(dx) > 100) {
      // Case 1: Horizontal or near-horizontal connections
      // Creates a symmetrical arc with fixed height for better visual appeal
      const curveHeight = 50;
      offsetY = isFirst ? curveHeight : -curveHeight;
    } else if (Math.abs(dx) < 30) {
      // Case 2: Vertical or near-vertical connections
      // Creates a gentle curve that bows outward
      const curveWidth = 55;
      offsetX = isFirst ? curveWidth : -curveWidth;
      offsetY = dy * 0.3;
    } else {
      // Case 3: Diagonal connections
      // Creates a smooth curve that follows the general direction
      const verticalProportion = 0.75;
      offsetY = dy * verticalProportion;
    }

    return {
      x: isFirst ? position.x0 + offsetX : position.x1 - offsetX,
      y: isFirst ? position.y0 + offsetY : position.y1 - offsetY,
    };
  };

  const cp1 = createControlPoint(true);
  const cp2 = createControlPoint(false);

  // Construct SVG path using cubic Bezier curve (C) command
  const pathDefinition = `
    M ${position.x0} ${position.y0} 
    C ${cp1.x} ${cp1.y}, 
      ${cp2.x} ${cp2.y}, 
      ${position.x1} ${position.y1}
  `;

  return (
    <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
      <path
        fill="none"
        d={pathDefinition}
        strokeLinecap="round"
        className="pointer-events-auto stroke-indigo-10/50 stroke-[6]"
      />
    </svg>
  );
};

export default Edge;
