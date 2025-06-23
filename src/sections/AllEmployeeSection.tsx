import { useState } from "react";
import { employeesData } from "../datav2/clean_data";
import { AXIS_CONFIG, COLORS } from "../utils";
import { Radar } from "../dataviz/radar-chart/Radar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const AllEmployeeSection = () => {
  const allEmployeeNames = employeesData.map((d) => d.name);

  const [selectedName, setSelectedName] = useState(allEmployeeNames[0]);

  const groupId = employeesData.findIndex((d) => d.name === selectedName);
  const groupColor = COLORS[groupId];

  const selectedEmployeeData = employeesData[groupId];

  return (
    <div className="mx-auto w-full">
      <Select value={selectedName} onValueChange={setSelectedName}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          {allEmployeeNames.map((group) => {
            //   const isSelected = group === selectedName;
            return (
              <SelectItem key={group} value={group}>
                {group}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>

      <Radar
        data={selectedEmployeeData}
        width={700}
        height={700}
        axisConfig={AXIS_CONFIG}
        color={groupColor}
      />
    </div>
  );
};
