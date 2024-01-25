import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import Help from "./components/Help";
import Offers from "./components/Offers";
import ErrorPage from "./components/ErrorPage";
import RestaurantDetails from "./components/RestaurantDetails";
import ContactUs from "./components/ContactUs";
import Navbar from "./components/Navbar";
import ExcelParser from "./components/ExcelParser";
import SideMenu from "./components/SideMenu";
import Dashboard from "./components/Dashboard";
import { useState } from "react";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import useInternetStatus from "./utils/useInternetStatus";
import Grid from "@mui/material/Grid";


const App = () => {
  const internetStatus = useInternetStatus();
  const [isMenuExpanded, setIsMenuExpanded] = useState(true);
  if (internetStatus == false) {
    return (
      <div className="no_internet">
        <h1>Oops!! No Internet Connection.</h1>
      </div>
    );
  }

  const toggleMenu = (toggleFlag) => {
    setIsMenuExpanded(toggleFlag);
  };

  return (
    // <div>
    //   {/* <HeaderComponent />
    //   <Outlet />
    //   <div>footer</div> */}
    // </div>
    <div className="container_block">
      <Grid container>
        <Grid item xs={12} md={isMenuExpanded ? 3 : 1}>
          <SideMenu isMenuExpanded={isMenuExpanded} toggleMenu={toggleMenu}/>
        </Grid>
        <Grid item xs={12} md={isMenuExpanded ? 9: 11} className="main_container">
          <Navbar />
          <Outlet />
        </Grid>
      </Grid>
    </div>
  );
};

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetails />,
      },
    ],
  },
])
// const appRoutes = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "/",
//         element: <BodyComponent />,
//       },
//       {
//         path: "/help",
//         element: <Help />,
//       },
//       {
//         path: "/contact",
//         element: <ContactUs />,
//       },
//       {
//         path: "/offers",
//         element: <Offers />,
//       },
//       {
//         path: "/restaurant/:id",
//         element: <RestaurantDetails />,
//       },
//     ],
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<App />);
root.render(<RouterProvider router={appRoutes} />);
