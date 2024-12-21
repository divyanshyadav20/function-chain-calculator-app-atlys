"use client";

import { useCallback, useState } from "react";

interface Position {
  x: number;
  y: number;
}

interface DragContainerProps {
  children: React.ReactNode;
  className?: string;
}

const DragContainer = ({ children, className = "" }: DragContainerProps) => {
  const [containerPosition, setContainerPosition] = useState<Position>({
    x: 0,
    y: 0,
  });

  const handleMouseMove = useCallback(
    (
      moveEvent: MouseEvent,
      startPosition: Position,
      initialPosition: Position
    ) => {
      const dx = moveEvent.clientX - startPosition.x;
      const dy = moveEvent.clientY - startPosition.y;

      setContainerPosition({
        x: initialPosition.x + dx,
        y: initialPosition.y + dy,
      });
    },
    []
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const startPosition = { x: e.clientX, y: e.clientY };
      const initialPosition = { ...containerPosition };

      const onMouseMove = (moveEvent: MouseEvent) => {
        handleMouseMove(moveEvent, startPosition, initialPosition);
      };

      const onMouseUp = () => {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseup", onMouseUp);
      };

      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
    },
    [containerPosition, handleMouseMove]
  );

  const containerStyle: React.CSSProperties = {
    transform: `translate(${containerPosition.x}px, ${containerPosition.y}px)`,
  };

  return (
    <div
      style={containerStyle}
      className={`relative p-4 w-full min-h-screen bg-yellow-300 cursor-grabbing ${className}`}
      onMouseDown={handleMouseDown}
    >
      {children}
    </div>
  );
};

export default DragContainer;
