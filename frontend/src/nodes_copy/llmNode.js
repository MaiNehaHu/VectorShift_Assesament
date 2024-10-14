// src/nodes/LLMNode.js
import { Position } from "reactflow";
import CommonNode from "./CommonNode";

export const LLMNode = ({ id, data }) => {
  return (
    <CommonNode
      id={id}
      label="LLM"
      inputHandles={[
        { idName: "system", position: Position.Left, style: { top: "33%" } },
        { idName: "prompt", position: Position.Left, style: { top: "66%" } },
      ]}
      outputHandles={[{ idName: "response", position: Position.Right }]}
      styleClasses="bg-white border-2 border-rose-500 shadow-sm shadow-rose-500 p-4 rounded-lg flex flex-col gap-2 w-72"
    >
      <p>This is a LLM node.</p>
    </CommonNode>
  );
};
