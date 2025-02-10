import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createHashRouter, RouterProvider } from "react-router-dom";
import RegistrationForm from "./Components/Pages/RegitrationForm.jsx";
import AllData from "./Components/AllData.jsx";
import Home from "./Components/Pages/Home.jsx";
import SignupPage from "./Components/Pages/SignupPage.jsx";
import LoginPage from "./Components/Pages/LoginPage.jsx";
import ProtectedRoute from "./Components/UI/ProtectedRoute.jsx";
import { Provider } from "react-redux";
import store from "./Components/Redux/store.js";
const createRoute = createHashRouter([
  {
    path: "/",
    element: (
      <Provider store={store}>
        <App />
      </Provider>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/registration-form",
        element: <RegistrationForm />,
      },
      {
        path: "/all-data",
        element: (
          <ProtectedRoute>
            <AllData />
          </ProtectedRoute>
        ),
      },
      { path: "/login", element: <LoginPage /> },
      { path: "/signup", element: <SignupPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={createRoute}></RouterProvider>
  </StrictMode>
);
