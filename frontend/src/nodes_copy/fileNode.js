import React, { useState, useRef } from "react";
import CommonNode from "./CommonNode";
import { Position } from "reactflow";

export const FileNode = ({ id, data }) => {
  const [fileName, setFileName] = useState(data?.fileName || "No file choosen");
  const inputFileRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleFileUploadClick = () => {
    inputFileRef.current.click();
  };

  return (
    <CommonNode
      id={id}
      label="Upload File"
      inputHandles={[]}
      outputHandles={[{ idName: "file", position: Position.Right }]}
      styleClasses="bg-white border border-orange-400 shadow-sm shadow-orange-500 p-4 rounded-lg flex flex-col gap-2 min-w-72"
    >
      <label className="flex flex-row gap-2 items-center font-medium">
        <input
          type="file"
          className="hidden"
          ref={inputFileRef}
          onChange={handleFileChange}
          accept=".txt,.pdf,.doc,.docx,.xls,.xlsx,.csv"
        />
        <button
          type="button"
          onClick={handleFileUploadClick}
          className="bg-orange-600 hover:bg-orange-500 text-white px-4 py-2 rounded-md"
        >
          Choose
        </button>

        {fileName && <p>{fileName}</p>}
      </label>
    </CommonNode>
  );
};
