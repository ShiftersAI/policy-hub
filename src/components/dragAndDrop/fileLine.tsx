import React from "react";
import { Button } from "../ui/button";
import { TiDelete } from "react-icons/ti";
import { filesAtom } from "@/atoms/filesAtom";
import { useSetAtom } from "jotai";

interface Props {
  file: File;
  name: string;
}

const FileLine: React.FC<Props> = ({ name, file }) => {
  const setFiles = useSetAtom(filesAtom);
  const handleDeleteFile = () => {
    setFiles((prevFiles) => prevFiles.filter((f) => f !== file));
  };
  return (
    <div className="flex justify-between items-center">
      <p>{name}</p>
      <Button
        onClick={handleDeleteFile}
        variant="ghost"
        size="icon"
        className="hover:text-red-500">
        <TiDelete />
      </Button>
    </div>
  );
};

export default FileLine;
