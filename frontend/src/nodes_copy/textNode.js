import React, { useState, useRef, useEffect } from "react";
import CommonNode from "./CommonNode";
import { Position } from "reactflow";

export const TextNode = ({ id, data }) => {
  const [inputText, setInputText] = useState(data?.text || "");
  const [variables, setVariables] = useState([]);
  const textAreaRef = useRef(null);

  // Auto-resize the textarea height 
  const handleInputChange = (e) => {
    setInputText(e.target.value);
    autoResizeTextArea();
  };

  // Adjust the height of the textarea
  const autoResizeTextArea = () => {
    const textarea = textAreaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  const extractVariables = (text) => {
    const regex = /\{\{(\w+)\}\}/g;
    let match;

    const variables = [];
    while ((match = regex.exec(text)) !== null) {
      variables.push(match[1]);
    }
    return variables;
  };

  useEffect(() => {
    autoResizeTextArea();

    const extractedVariables = extractVariables(inputText);
    setVariables(extractedVariables);
  }, [inputText]);

  return (
    <CommonNode
      id={id}
      label="Text"
      inputHandles={[]}
      outputHandles={[{ idName: "output", position: Position.Right }]}
      styleClasses="bg-white border-2 border-slate-500 p-4 rounded-lg flex flex-col gap-2 min-w-80"
    >
      <label className="flex flex-col gap-2 items-start justify-between font-medium text-black w-full">
        <textarea
          name="text"
          rows={1}
          value={inputText}
          ref={textAreaRef}
          style={{
            resize: "none",
            maxWidth: "80ch", // 80 characters
          }}
          onChange={handleInputChange}
          placeholder="Input your text here..."
          className="text-black overflow-hidden w-full px-2 py-1 rounded-md font-normal border border-slate-500"
        ></textarea>
      </label>

      <div className="text-sm">
        {variables.length > 0 && (
          <p>Variables detected: {variables.join(", ")}</p>
        )}
      </div>
    </CommonNode>
  );
};
