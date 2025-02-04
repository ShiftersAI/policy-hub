import React from "react";
import FileLine from "./fileLine";
import { useAtom } from "jotai";
import { filesAtom } from "@/atoms/filesAtom";

const DragAndDrop: React.FC = () => {
  const [files, setFiles] = useAtom(filesAtom);

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
        className="mt-4 p-6 border-2 border-dashed h-[300px] w-[600px] border-gray-400 rounded-lg cursor-pointer"
        onDrop={handleDrop}
        onDragOver={handleDragOver}>
        <p className="text-xl text-gray-500 flex justify-center items-center h-full">
          Drag & Drop files or folders here
        </p>
      </div>

      <ul className="mt-4 text-gray-300 text-left">
        {files.map((file, index) => (
          <FileLine key={index} name={file.name} file={file} />
        ))}
      </ul>
    </div>
  );
};

export default DragAndDrop;
