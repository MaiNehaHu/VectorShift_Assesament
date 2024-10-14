// toolbar.js

import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <div className="p-4 absolute top-0 left-0 bg-slate-200 z-10 rounded-br-2xl">
      <div className="flex flex-row items-center justify-start gap-4">
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />

        {/** 5 New Nodes */}
        <DraggableNode type="file" label="Upload File" />
        <DraggableNode type="image" label="Image" />
        <DraggableNode type="radio" label="Radio" />
        <DraggableNode type="date" label="Date" />
        <DraggableNode type="neha" label="Neha Node" />
      </div>
    </div>
  );
};
