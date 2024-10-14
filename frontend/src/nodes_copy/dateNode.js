import React, { useState } from "react";
import CommonNode from "./CommonNode";
import { Position } from "reactflow";

export const DateNode = ({ id, data }) => {
  const [date, setDate] = useState(
    data?.selectedDate || new Date().toISOString().split("T")[0]
  );

  const handleDateChange = (event) => {
    const date = new Date(event.target.value);
    const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    setDate(formattedDate);
  };

  return (
    <CommonNode
      id={id}
      label="Date"
      inputHandles={[]}
      outputHandles={[{ idName: "date", position: Position.Right }]}
      styleClasses="bg-white border-2 border-yellow-400 shadow-sm shadow-yellow-400 p-4 rounded-lg flex flex-col gap-2 min-w-72"
    >
      <label className="flex flex-row gap-2 items-center font-medium text-black">
        <input
          type="date"
          value={date}
          onChange={handleDateChange}
          className="text-black px-2 py-1 rounded-md font-normal border border-slate-400"
        />

        {date && <p>{date}</p>}
      </label>
    </CommonNode>
  );
};
