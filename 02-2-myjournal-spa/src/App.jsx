import { Navigation } from "./components/Navigation";
import { Outlet } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

export function App() {
  return (
    <div>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Navigation />
        <Outlet />
      </ErrorBoundary>
    </div>
  );
}

export default App;

function ErrorFallback() {
  return <div>HI</div>;
}
