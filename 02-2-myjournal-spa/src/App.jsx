import { Navigation } from "./components/Navigation";
import { Outlet } from "react-router-dom";

export function App() {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
}

export default App;
