import { useState } from "react";
import { employeesData } from "../data/data";
import { AXIS_CONFIG, COLORS } from "../utils";
import { Radar } from "../dataviz/radar-chart/Radar";

export const AllEmployeeSection = () => {
  const allGroups = employeesData.map((d) => d.name);

  const [selectedGroup, setSelectedGroup] = useState(allGroups[0]);

  const groupId = employeesData.findIndex((d) => d.name === selectedGroup);
  const groupColor = COLORS[groupId];

  const groupRadarData = employeesData[groupId];

  return (
    <div>
      <div>
        {allGroups.map((group) => {
          //   const isSelected = group === selectedGroup;
          return (
            <button key={group} onClick={() => setSelectedGroup(group)}>
              {group}
            </button>
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
