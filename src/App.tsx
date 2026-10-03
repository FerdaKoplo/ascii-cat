import { createBrowserRouter, RouterProvider } from "react-router";
import ShowcasePage from "./pages/showcase.page";
import LandingPage from "./pages/landing.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/viewer",
    element: <ShowcasePage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
