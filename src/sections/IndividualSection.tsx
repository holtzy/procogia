import { employeesData } from "../data/data";
import { Radar } from "../dataviz/radar-chart/Radar";
import { AXIS_CONFIG } from "../utils";

// URL example: //root.com//?name=Bill%20Carney

type IndividualSectionProps = {
  name: string;
};

export const IndividualSection = ({ name }: IndividualSectionProps) => {
  const selectedData = employeesData.find(
    (d) => encodeURIComponent(d.name) === encodeURIComponent(name)
  );

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
