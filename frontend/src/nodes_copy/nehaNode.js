import React from "react";
import CommonNode from "./CommonNode";
import { Position } from "reactflow";

export const NehaNode = ({ id, data }) => {
  return (
    <CommonNode
      id={id}
      label="Neha Node"
      inputHandles={[]}
      outputHandles={[{ idName: "neha", position: Position.Right }]}
      styleClasses="bg-white border border-green-800 shadow-sm shadow-green-800 p-4 rounded-lg flex flex-col gap-2 w-72"
    >
      <p className="font-medium">Neha Node</p>
    </CommonNode>
  );
};
