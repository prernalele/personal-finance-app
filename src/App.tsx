import Navigation from "./components/Navigation.tsx";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes.tsx";

function App() {
  return (
    <div className="bg-amber-950">
      <BrowserRouter>
        <Navigation />
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
