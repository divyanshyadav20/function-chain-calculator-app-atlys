import Card from "@/components/card";
import Input from "@/components/input";
import Select from "@/components/select";
import Image from "next/image";

const options = [
  {
    label: "Function: 2",
    value: "function-2",
  },
];

export default function Home() {
  return (
    <div className="p-4">
      <Card className="h-[251px] w-[235px]">
        <Card.Header className="font-semibold text-sm leading-4 text-gray-30 flex items-center gap-2">
          <Image src="/drag.svg" alt="drag-logo" width={12} height={7} />
          <p>Function: 1</p>
        </Card.Header>

        <Card.Content className="flex flex-col gap-4 justify-center">
          <Input label="Equation" />
          <Select
            disabled
            options={options}
            value="function-2"
            label="Next Function"
          />
        </Card.Content>

        <Card.Footer className="flex justify-between items-center font-medium text-xs leading-3 text-gray-40">
          <div>input</div>
          <div>output</div>
        </Card.Footer>
      </Card>
    </div>
  );
}
