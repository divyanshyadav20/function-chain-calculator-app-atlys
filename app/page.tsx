import FunctionNode from "@/components/nodes/function";
import SpecialNode from "@/components/nodes/special";
import nodes from "@/data/nodes.json";
import { FunctionNodeAttributes, SpecialNodeAttributes } from "@/types";

export default function Home() {
  return (
    <div className="p-4 flex gap-5 justify-center items-center relative">
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
    </div>
  );
}
