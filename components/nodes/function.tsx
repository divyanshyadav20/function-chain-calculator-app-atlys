"use client";

import Card from "@/components/card";
import Connector from "@/components/connector";
import Input from "@/components/input";
import Select from "@/components/select";
import { FunctionNodeAttributes } from "@/types";
import Image from "next/image";

type Props = {
  position: FunctionNodeAttributes["position"];
  data: FunctionNodeAttributes["data"];
};

const FunctionNode = ({
  data: { title, options, defaultInputValue },
  position,
}: Props) => {
  return (
    <div
      style={{
        top: position.y,
        left: position.x,
      }}
      className="absolute"
    >
      <Card className="h-[251px] w-[235px]">
        <Card.Header className="font-semibold text-sm leading-4 text-gray-30 flex items-center gap-2 mb-5">
          <Image src="/drag.svg" alt="drag-logo" width={12} height={7} />
          <p>{title}</p>
        </Card.Header>

        <Card.Content className="flex flex-col gap-5 justify-center mb-11">
          <Input label="Equation" defaultValue={defaultInputValue} />
          <Select
            disabled
            options={options}
            value="function-2"
            label="Next Function"
          />
        </Card.Content>

        <Card.Footer className="flex justify-between items-center font-medium text-xs leading-3 text-gray-40 mb-px">
          <div className="flex items-center gap-1">
            <Connector />
            <p>input</p>
          </div>
          <div className="flex items-center gap-1">
            <p>output</p>
            <Connector />
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default FunctionNode;
