import "./App.css";
import { DataScientistTypeSection } from "./sections/DataScientistTypeSection";
import { IndividualSection } from "./sections/IndividualSection";

function App() {
  const params = new URLSearchParams(window.location.search);
  const selectedName = params.get("name");

  // OPTION 1: return a radar chart with 4 buttons to visualize the data scientist type
  if (!selectedName) {
    return <DataScientistTypeSection />;
  }

  // OPTION 2: if there is a name, make a radar chart for this specific individual
  return <IndividualSection name={selectedName} />;
}

export default App;
