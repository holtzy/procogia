import "./App.css";
import { AllEmployeeSection } from "./sections/AllEmployeeSection";
import { AllGroupSection } from "./sections/AllGroupSection";

function App() {
  const params = new URLSearchParams(window.location.search);
  const selectedName = params.get("name");

  // OPTION 1: return a radar chart with a select button to select the employee name
  if (selectedName === "all" || !selectedName) {
    return <AllEmployeeSection />;
  }

  // OPTION 2: http://localhost:5173/procogia/?name=group
  if (selectedName === "group") {
    return <AllGroupSection />;
  }
}

export default App;
