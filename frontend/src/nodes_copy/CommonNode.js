import React, { Fragment } from "react";
import { Handle, Position } from "reactflow";

const CommonNode = ({
  id,
  data,
  label, // Output, Input, LLM, Text
  inputHandles = [],
  outputHandles = [],
  children,
  styleClasses,
}) => {
  return (
    <div className={`${styleClasses}`}>
      <h1 className="text-xl font-bold mb-2 text-black">
        <span>{label}</span>
      </h1>

      {/** This children has everything inside the <CommonNode></CommonNode> tags */}
      <Fragment>{children}</Fragment>

      {/* This is Input Handles */}
      {inputHandles.map((handle, i) => (
        <Handle
          key={i}
          type="target"
          position={handle.position || Position.Left}
          id={`${id}-${handle.idName}`}
          style={handle.style || {}}
        />
      ))}

      {/* This is Output Handles */}
      {outputHandles.map((handle, i) => (
        <Handle
          key={i}
          type="source"
          position={handle.position || Position.Right}
          id={`${id}-${handle.idName}`}
          style={handle.style || {}}
        />
      ))}
    </div>
  );
};

export default CommonNode;
