import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import Help from "./components/Help";
import Offers from "./components/Offers";
import ErrorPage from "./components/ErrorPage";
import RestaurantDetails from "./components/RestaurantDetails";

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';


const App = () => {
  return (
    <div>
      <HeaderComponent />
      <Outlet />
      <div>footer</div>
    </div>
  );
};

const appRoutes = createBrowserRouter([
    {
      path:'/',
      element:<App />,
      errorElement: <ErrorPage />,
      children:[
        {
          path:'/',
          element:<BodyComponent />
        },
        {
          path:'/help',
          element: <Help />
        },
        {
          path:'/offers',
          element: <Offers />
        },
        {
          path:'/restaurant/:id',
          element: <RestaurantDetails />
        }
      ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<App />);
root.render(<RouterProvider router={appRoutes} />);
