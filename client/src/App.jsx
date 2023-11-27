import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter } from "react-router-dom";
import Schedule from "./components/dashboard/Schedule";
import TimerSchedules from "./components/dashboard/TimerSchedules";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Dashboard />
        {/* <Schedule /> */}
        {/* <TimerSchedules /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
