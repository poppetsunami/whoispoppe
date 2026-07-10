import { createBrowserRouter } from "react-router";
import { Home } from "./components/Home";
import { Resume } from "./pages/Resume";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
]);
