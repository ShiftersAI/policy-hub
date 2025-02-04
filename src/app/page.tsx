"use client";

import { Button } from "@/components/ui/button";
import DragAndDrop from "@/components/dragAndDrop";
import RobotConfig from "@/components/robotConfig";
import React from "react";

const Home: React.FC = () => {
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
          onClick={() => console.log("Cancel")}>
          Send
        </Button>
      </div>
    </div>
  );
};

export default Home;
