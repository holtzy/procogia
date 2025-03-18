import { employeesData } from "../data/data";
import { Radar } from "../dataviz/radar-chart/Radar";
import { AXIS_CONFIG } from "../utils";

type IndividualSectionProps = {
  name: string;
};

export const IndividualSection = ({ name }: IndividualSectionProps) => {
  const selectedData = employeesData.find((d) => d.name === name);

  if (!selectedData) {
    return <p>Name not known</p>;
  }

  return (
    <div>
      <Radar
        data={selectedData}
        width={700}
        height={700}
        axisConfig={AXIS_CONFIG}
        color={"blue"}
      />
    </div>
  );
};
