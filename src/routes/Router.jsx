import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Dashboard from "../layout/Dashboard";
import RegionList from "../pages/Components/Dashboard/RegionList";
import PrivateRoute from "./PrivateRoute";
import AreaList from "../pages/Components/Dashboard/AreaList";
import CreateArea from "../pages/Components/Dashboard/CreateArea";
import CreateRegion from "../pages/Components/Dashboard/CreateRegion";
import Home from "../pages/Components/Home/Home";
import Login from "../pages/Components/Home/Login";
import Register from "../pages/Components/Home/Register";

const Router = ({ redirectLoading, setRedirectLoading }) => {
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
          element: (
            <Login
              redirectLoading={redirectLoading}
              setRedirectLoading={setRedirectLoading}
            />
          ),
        },
        {
          path: "/register",
          element: (
            <Register
              redirectLoading={redirectLoading}
              setRedirectLoading={setRedirectLoading}
            />
          ),
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
