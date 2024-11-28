import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("blue");

  return (
    <>
      <div>
        <p>HEllo</p>
        <p>Some SVG</p>
        <svg width={500} height={300}>
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="black"
            fill={color}
            onClick={() => setColor(color === "red" ? "blue" : "red")}
          />
        </svg>
      </div>
    </>
  );
}

export default App;
