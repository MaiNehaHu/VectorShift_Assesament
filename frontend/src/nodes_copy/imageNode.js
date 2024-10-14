import React, { useRef, useState } from "react";
import CommonNode from "./CommonNode";
import { Position } from "reactflow";

export const ImageNode = ({ id, data }) => {
  const [image, setImage] = useState(data?.image || null);
  const inputFileRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleImageUpload = () => {
    inputFileRef.current.click();
  };

  return (
    <CommonNode
      id={id}
      label="Upload Image"
      inputHandles={[]}
      outputHandles={[{ idName: "image", position: Position.Right }]}
      styleClasses="bg-white border-2 border-purple-400 shadow-sm shadow-purple-400 p-4 rounded-lg flex flex-col gap-2 min-w-72"
    >
      <label className="flex flex-col gap-2 items-start font-medium">
        <input
          type="file"
          className="hidden"
          ref={inputFileRef}
          accept=".png,.jpg,.jpeg"
          onChange={handleFileChange}
        />
        <button
          type="button"
          onClick={handleImageUpload}
          className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-md"
        >
          Choose
        </button>

        {image && (
          <img src={image} alt="Selected" className="w-full h-24 rounded-md object-contain" />
        )}
      </label>
    </CommonNode>
  );
};
