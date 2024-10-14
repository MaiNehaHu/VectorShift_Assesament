import React, { useState } from "react";
import CommonNode from "./CommonNode";
import { Position } from "reactflow";

export const InputNode = ({ id, data }) => {
  const [currentName, setCurrentName] = useState(data?.inputName);
  const [inputType, setInputType] = useState(data.inputType || "Text");

  return (
    <CommonNode
      id={id}
      label="Input"
      inputHandles={[]}
      outputHandles={[{ idName: "value", position: Position.Right }]}
      styleClasses="bg-white border-2 border-indigo-500 shadow-sm shadow-indigo-500 p-4 rounded-lg flex flex-col gap-2 w-72"
    >
      <label className="flex flex-row gap-2 items-center justify-between font-medium ">
        Name:
        <input
          type="text"
          value={currentName}
          className="text-black w-[60%] px-2 py-1 rounded-md font-normal border border-slate-400"
          placeholder={`${id.replace("customInput-", "Input_")}`}
          onChange={(event) => setCurrentName(event.target.value)}
        />
      </label>

      <label className="flex flex-row gap-2 items-center justify-between font-medium ">
        Type:
        <select
          value={inputType}
          className="text-black w-[60%] px-2 py-1 rounded-md font-normal border border-slate-400"
          onChange={(event) => setInputType(event.target.value)}
        >
          <option value="Text">Text</option>

          <option value="File">File</option>
        </select>
      </label>
    </CommonNode>
  );
};
