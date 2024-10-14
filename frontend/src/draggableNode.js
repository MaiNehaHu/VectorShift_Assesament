// draggableNode.js

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      draggable
      className={`${
        type +
        " cursor-grab px-8 py-3 flex flex-col justify-center items-center rounded-xl bg-gray-800 hover:bg-black"
      }`}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
    >
      <span className="text-white font-semibold">{label}</span>
    </div>
  );
};
