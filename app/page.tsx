import DragContainer from "@/components/drag-container";
import FunctionNode from "@/components/nodes/function";
import SpecialNode from "@/components/nodes/special";
import nodes from "@/data/nodes.json";
import { FunctionNodeAttributes, SpecialNodeAttributes } from "@/types";

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute z-10 cursor-default top-5 right-5 border border-blue-300 rounded-lg px-4 py-2 bg-blue-900 font-medium text-white slide-in">
        <p>This view is draggable</p>
      </div>
      <DragContainer>
        {nodes.map(({ data, type, id, position }) => {
          switch (type) {
            case "function":
              return (
                <FunctionNode
                  key={id}
                  position={position}
                  data={data as FunctionNodeAttributes["data"]}
                />
              );
            case "special":
              return (
                <SpecialNode
                  key={id}
                  position={position}
                  data={data as SpecialNodeAttributes["data"]}
                />
              );
            default:
              return null;
          }
        })}
      </DragContainer>
    </div>
  );
}
