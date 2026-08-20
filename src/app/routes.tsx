import { createBrowserRouter } from "react-router";
import { Home } from "./components/Home";
import { Resume } from "./pages/Resume";
import { ResearchIntelligence } from "./pages/ResearchIntelligence";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
  {
    path: "/research-intelligence",
    element: <ResearchIntelligence />,
  },
]);
