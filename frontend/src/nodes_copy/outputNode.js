// src/nodes/OutputNode.js
import React, { useState } from "react";
import CommonNode from "./CommonNode";
import { Position } from "reactflow";

export const OutputNode = ({ id, data }) => {
  const [currentName, setCurrentName] = useState(data?.outputName);
  const [outputType, setOutputType] = useState(data.outputType || "Text");

  return (
    <CommonNode
      id={id}
      label="Output"
      inputHandles={[{ idName: "value", position: Position.Left }]}
      outputHandles={[]}
      styleClasses="bg-white border border-blue-500 shadow shdow-blue-500 p-4 rounded-lg flex flex-col gap-2 w-72"
    >
      <label className="flex flex-row gap-2 items-center justify-between font-medium">
        Name:
        <input
          type="text"
          value={currentName}
          className="text-black w-[60%] px-2 py-1 rounded-md font-normal border border-slate-400"
          placeholder={`${id.replace("customOutput-", "Output_")}`}
          onChange={(event) => setCurrentName(event.target.value)}
        />
      </label>

      <label className="flex flex-row gap-2 items-center justify-between font-medium">
        Type:
        <select
          value={outputType}
          className="text-black w-[60%] px-2 py-1 rounded-md font-normal border border-slate-400"
          onChange={(event) => setOutputType(event.target.value)}
        >
          <option value="Text">Text</option>

          <option value="Image">Image</option>
        </select>
      </label>
    </CommonNode>
  );
};
