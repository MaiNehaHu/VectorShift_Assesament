import React, { useState } from "react";
import CommonNode from "./CommonNode";
import { Position } from "reactflow";

export const RadioNode = ({ id, data }) => {
  const [selectedRadio, setSelectedRadio] = useState(data?.selectedRadio || "");

  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.value);
  };

  return (
    <CommonNode
      id={id}
      label="Radio"
      inputHandles={[]}
      outputHandles={[{ idName: "radio", position: Position.Right }]}
      styleClasses="bg-white border border-sky-500 shadow shadow-sky-500 p-4 rounded-lg flex flex-col gap-2 min-w-72"
    >
      <label className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <input
            type="radio"
            value="Developer"
            checked={selectedRadio === "Developer"}
            onChange={handleRadioChange}
          />
          <span>Developer</span>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="radio"
            value="Tester"
            checked={selectedRadio === "Tester"}
            onChange={handleRadioChange}
          />
          <span>Tester</span>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="radio"
            value="Designer"
            checked={selectedRadio === "Designer"}
            onChange={handleRadioChange}
          />
          <span>Designer</span>
        </div>
      </label>

      {selectedRadio && (
        <p className="mt-2 font-medium">Selected Role: {selectedRadio}</p>
      )}
    </CommonNode>
  );
};
