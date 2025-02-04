"use client";

import { Button } from "@/components/ui/button";
import DragAndDrop from "@/components/dragAndDrop/dragAndDrop";
import RobotConfig from "@/components/robotConfig";
import React from "react";
import { filesAtom } from "@/atoms/filesAtom";
import { useAtomValue } from "jotai";

const Home: React.FC = () => {
  const files = useAtomValue(filesAtom);

  const handleButtonClick = () => {
    console.log(files);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 dark:bg-gray-900">
      <h1 className="text-6xl font-bold text-primary dark:text-white absolute top-14">
        Policy Hub
      </h1>
      <RobotConfig />
      <DragAndDrop />
      <div className="flex justify-center">
        <Button
          variant="secondary"
          className="mt-4 px-4 py-2 text-xl mr-4"
          onClick={handleButtonClick}>
          Send
        </Button>
      </div>
    </div>
  );
};

export default Home;
