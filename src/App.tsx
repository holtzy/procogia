import "./App.css";
import { dataBrianc } from "./data/data";
import { Radar } from "./dataviz/radar-chart/RadarChart";

function App() {
  const params = new URLSearchParams(window.location.search);
  const name = params.get("name");

  if (!name) {
    return (
      <>
        <a href="http://localhost:5173/procogia/?name=brianc">brianc</a>
      </>
    );
  }

  const data = name === "brianc" ? dataBrianc : undefined;

  if (!data) {
    return <p>Name not known</p>;
  }

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
