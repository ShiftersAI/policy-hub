"use client";

import DragAndDrop from "@/components/ui/dragAndDrop";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 dark:bg-gray-900">
      <h1 className="text-6xl font-bold text-primary dark:text-white absolute top-14">
        Policy Hub
      </h1>
      <DragAndDrop />
    </div>
  );
};

export default Home;
