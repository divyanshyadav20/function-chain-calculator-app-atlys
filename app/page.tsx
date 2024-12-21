import Badge from "@/components/badge";
import Card from "@/components/card";
import Input from "@/components/input";
import InputWithIcon from "@/components/input-with-icon";
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
    <div className="p-4 flex items-end gap-5">
      {/* x input badge */}
      <div className="flex flex-col items-center justify-center gap-1.5 max-w-28">
        <Badge
          className="bg-mustard-200 text-white"
          label="Initial value of x"
        />
        <InputWithIcon />
      </div>

      <Card className="h-[251px] w-[235px]">
        <Card.Header className="font-semibold text-sm leading-4 text-gray-30 flex items-center gap-2 mb-5">
          <Image src="/drag.svg" alt="drag-logo" width={12} height={7} />
          <p>Function: 1</p>
        </Card.Header>

        <Card.Content className="flex flex-col gap-5 justify-center mb-11">
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

      {/* y output badge */}
      <div className="flex flex-col items-center justify-center gap-1.5 max-w-28">
        <Badge className="bg-green-30 text-white" label="Final Output y" />
        <InputWithIcon variant="output" value="120" />
      </div>
    </div>
  );
}
