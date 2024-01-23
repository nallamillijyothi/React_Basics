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
import ExcelParser from "./components/ExcelParser";
import SideMenu from "./components/SideMenu";
import Dashboard from "./components/Dashboard";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import useInternetStatus from "./utils/useInternetStatus";
import Grid from "@mui/material/Grid";


const App = () => {
  const internetStatus = useInternetStatus();

  if (internetStatus == false) {
    return (
      <div className="no_internet">
        <h1>Oops!! No Internet Connection.</h1>
      </div>
    );
  }
  return (
    // <div>
    //   {/* <HeaderComponent />
    //   <Outlet />
    //   <div>footer</div> */}
    // </div>
    <div className="container_block">
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <SideMenu />
        </Grid>
        <Grid item xs={12} md={9}>
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
