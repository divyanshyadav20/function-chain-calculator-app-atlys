import FunctionNode from "@/components/nodes/function";
import SpecialNode from "@/components/nodes/special";
import nodes from "@/data/nodes.json";
import { FunctionNodeAttributes, SpecialNodeAttributes } from "@/types";

export default function Home() {
  return (
    <div className="p-4 flex items-end gap-5 justify-center">
      {nodes.map(({ data, type, id }) => {
        switch (type) {
          case "function":
            return (
              <FunctionNode
                key={id}
                data={data as FunctionNodeAttributes["data"]}
              />
            );
          case "special":
            return (
              <SpecialNode
                key={id}
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
