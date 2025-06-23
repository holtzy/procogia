import { useState } from "react";
import { AXIS_CONFIG, COLORS } from "../utils";
import { Radar } from "../dataviz/radar-chart/Radar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { groupsData } from "@/datav2/data_group";

export const AllGroupSection = () => {
  const allGroups = groupsData.map((d) => d.name);

  const [selectedGroup, setSelectedGroup] = useState(allGroups[0]);

  const groupId = groupsData.findIndex((d) => d.name === selectedGroup);

  const groupColor = COLORS[groupId];

  const groupRadarData = groupsData[groupId];

  return (
    <div className="mx-auto w-full">
      <Select value={selectedGroup} onValueChange={setSelectedGroup}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          {allGroups.map((group) => {
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
