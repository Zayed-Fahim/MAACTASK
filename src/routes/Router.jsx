import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Components/Home";
import Login from "../pages/Components/Login";
import Register from "../pages/Components/Register";
import Dashboard from "../layout/Dashboard";
import RegionList from "../pages/Components/Dashboard/RegionList";
import PrivateRoute from "./PrivateRoute";
import AreaList from "../pages/Components/Dashboard/AreaList";
import CreateArea from "../pages/Components/Dashboard/CreateArea";
import CreateRegion from "../pages/Components/Dashboard/CreateRegion";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: (
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      ),
      children: [
        {
          path: "/dashboard",
          element: (
            <PrivateRoute>
              <RegionList />
            </PrivateRoute>
          ),
        },
        {
          path: "/dashboard/area-list",
          element: (
            <PrivateRoute>
              <AreaList />
            </PrivateRoute>
          ),
        },
        {
          path: "/dashboard/create-region",
          element: (
            <PrivateRoute>
              <CreateRegion />
            </PrivateRoute>
          ),
        },
        {
          path: "/dashboard/create-area",
          element: (
            <PrivateRoute>
              <CreateArea />
            </PrivateRoute>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
