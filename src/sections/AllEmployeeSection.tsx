import { useState } from "react";
import { employeesData } from "../datav1/data";
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
  const allGroups = employeesData.map((d) => d.name);

  const [selectedGroup, setSelectedGroup] = useState(allGroups[0]);

  const groupId = employeesData.findIndex((d) => d.name === selectedGroup);
  const groupColor = COLORS[groupId];

  const groupRadarData = employeesData[groupId];

  return (
    <div className="mx-auto w-full">
      <Select value={selectedGroup} onValueChange={setSelectedGroup}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          {allGroups.map((group) => {
            //   const isSelected = group === selectedGroup;
            return (
              <SelectItem key={group} value={group}>
                {group}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>

      <Radar
        data={groupRadarData}
        width={700}
        height={700}
        axisConfig={AXIS_CONFIG}
        color={groupColor}
      />
    </div>
  );
};
