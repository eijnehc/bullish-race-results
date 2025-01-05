import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { RaceTimingTable } from "./components/RaceTimingTable";
import { RunnerDetail } from "./components/RunnerDetail";

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-gray-900 text-white">
        <Routes>
          <Route path="/" element={<RaceTimingTable />} />
          <Route path="/runner/:name" element={<RunnerDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
