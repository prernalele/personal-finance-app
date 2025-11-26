import Navigation from "./components/Navigation.tsx";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes.tsx";

function App() {
  return (
    <div className="bg-amber-950">
      <BrowserRouter>
        <div className="flex flex-row">
          <Navigation />
          <AppRoutes />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
