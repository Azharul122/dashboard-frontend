import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Components/dashboard.jsx";
import DashboardHome from "./Components/DashboardHome.jsx";
import Application from "./Components/Application.jsx";
import Message from "./Components/Message.jsx";
import Calendar from "./Components/Calendar.jsx";
import CreateJob from "./Components/CreateJob.jsx";
import NewApplication from "./Components/NewApplication.jsx";
import EditApplication from "./Components/EditApplication.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/",
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "/applications",
        element: <Application></Application>,
      },
      {
        path: "/messages",
        element: <Message></Message>,
      },
      {
        path: "/calender",
        element: <Calendar></Calendar>,
      },
      {
        path: "/create-job",
        element: <CreateJob></CreateJob>,
      },
      {
        path: "/new-application",
        element: <NewApplication></NewApplication>,
      },
      {
        path: "/edit-application/:id",
        element: <EditApplication></EditApplication>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
