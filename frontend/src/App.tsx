import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "antd/dist/reset.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Login from "./feature/Login/LoginContainer";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

const queryClient = new QueryClient();

const routesConfig = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    // element: <Register />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <RouterProvider router={routesConfig} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
