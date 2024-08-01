import React from "react";
import Registration from "./pages/Registration";
import Welcome from "./pages/Welcome";
import StepOne from "./pages/StepOne"
import StepTwo from "./pages/StepTwo"
import StepThree from "./pages/StepThree"
import StepFour from "./pages/StepFour"
import Thanks from "./pages/Thanks"
import "./styles/main.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Registration/>
  },
  {
    path:"/welcome",
    element:<Welcome/>
  },
  {
    path:"/step-One",
    element:<StepOne/>
  },
  {
    path:"/step-Two",
    element:<StepTwo/>
  },
  {
    path:"/step-Three",
    element:<StepThree/>
  },
  {
    path:"/step-Four",
    element:<StepFour/>
  },
  {
    path:"/thanks",
    element:<Thanks/>
  }
])

const App = () => {
  return (
    <RouterProvider router={router}/>
  );
};

export default App;

