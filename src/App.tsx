import "./App.css";
import { AllEmployeeSection } from "./sections/AllEmployeeSection";
import { IndividualSection } from "./sections/IndividualSection";

function App() {
  const params = new URLSearchParams(window.location.search);
  const selectedName = params.get("name");

  // OPTION 2: return a radar chart with a select button to select the employee name
  if (selectedName === "all" || !selectedName) {
    return <AllEmployeeSection />;
  }

  // OPTION 3: if there is a specific name, make a radar chart for this specific individual
  return <IndividualSection name={selectedName} />;
}

export default App;
