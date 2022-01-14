import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import Dashboard from "./Pages/Dashboard";
import AboutUs from "./Pages/AboutUs";
// import AddNewPost from "./Pages/Dashboard";
// import Errors from "./Pages/Dashboard";
// import ComponentsOverview from "./Pages/Dashboard";
// import Tables from "./Pages/Dashboard";
// import BlogPosts from "./Pages/Dashboard";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/d" />
  },
  {
    path: "/d",
    layout: DefaultLayout,
    component: Dashboard
  },
  {
    path: "/aboutus",
    layout: DefaultLayout,
    component: AboutUs
  }
];
