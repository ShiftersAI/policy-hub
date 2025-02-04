import React, { useState } from "react";

const DragAndDrop: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files);
    setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };
  return (
    <div>
      <div
        className="mt-4 p-6 border-2 border-dashed h-[200px] w-[400px] border-gray-400 rounded-lg cursor-pointer"
        onDrop={handleDrop}
        onDragOver={handleDragOver}>
        <p className="text-gray-500 flex justify-center items-center h-full">
          Drag & Drop files or folders here
        </p>
      </div>

      <ul className="mt-4 text-gray-300 text-left">
        {files.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>

      <button onClick={() => console.log(files)} className="mt-4">
        send
      </button>
    </div>
  );
};

export default DragAndDrop;
