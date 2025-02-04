import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const RobotConfig: React.FC = () => {
  return (
    <Select>
      <SelectTrigger className="w-[280px] text-xl">
        <SelectValue placeholder="Select a robot" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="apple">Silver 127</SelectItem>
          <SelectItem value="banana">Sonic 123</SelectItem>
          <SelectItem value="blueberry">Albert 125</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default RobotConfig;
