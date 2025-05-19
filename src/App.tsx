import "./App.css";
import { AllEmployeeSection } from "./sections/AllEmployeeSection";

function App() {
  const params = new URLSearchParams(window.location.search);
  const selectedName = params.get("name");

  // OPTION 2: return a radar chart with a select button to select the employee name
  if (selectedName === "all" || !selectedName) {
    return <AllEmployeeSection />;
  }
}

export default App;
