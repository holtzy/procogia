import { useState } from "react";
import { dataScientistTypeData } from "../datav1/data";
import { AXIS_CONFIG, COLORS } from "../utils";
import { Radar } from "../dataviz/radar-chart/Radar";
import { Button } from "@/components/ui/button";

export const DataScientistTypeSection = () => {
  const allGroups = dataScientistTypeData.map((d) => d.name);

  const [selectedGroup, setSelectedGroup] = useState(allGroups[0]);

  const groupId = dataScientistTypeData.findIndex(
    (d) => d.name === selectedGroup
  );
  const groupColor = COLORS[groupId];

  const groupRadarData = dataScientistTypeData[groupId];

  return (
    <div>
      <div className="flex gap-2 mx-auto">
        {allGroups.map((group) => {
          const isSelected = group === selectedGroup;
          return (
            <Button
              size={"sm"}
              variant={isSelected ? "default" : "outline"}
              key={group}
              onClick={() => setSelectedGroup(group)}
            >
              {group}
            </Button>
          );
        })}
      </div>

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
