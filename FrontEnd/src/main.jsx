import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createHashRouter, RouterProvider } from "react-router-dom";
import RegistrationForm from "./Components/RegitrationForm.jsx";
import AllData from "./Components/AllData.jsx";
import Home from "./Components/Home.jsx";
const createRoute = createHashRouter([{
  path: "/",
  element: <App />,
  children: [
    {
      path:"/",
      element: <Home/>,
    },
    {
      path: "/registration-form",
      element: <RegistrationForm />,
    },
    { path: "/all-data", element: <AllData /> },
  ],
}]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={createRoute}></RouterProvider>
  </StrictMode>
);
