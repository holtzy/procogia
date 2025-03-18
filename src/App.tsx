import "./App.css";
import { data } from "./data/data";
import { Radar } from "./dataviz/radar-chart/RadarChart";

function App() {
  return (
    <div>
      <Radar
        data={data}
        width={700}
        height={700}
        axisConfig={[
          { name: "speed", max: 10 },
          { name: "acceleration", max: 10 },
          { name: "conso", max: 10 },
          { name: "safety", max: 2 },
          { name: "style", max: 1000 },
          { name: "price", max: 100 },
        ]}
      />
    </div>
  );
}

export default App;
