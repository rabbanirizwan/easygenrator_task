import React from "react";
import "./App.css";
import "antd/dist/reset.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Login from "./feature/Login/LoginContainer";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import SignUp from "./feature/SignUp/SingUpContainer";
import Welcome from "./feature/Welcome/welcome";
import { isAuthenticated } from "./utils/script";

const queryClient = new QueryClient();

type ProtectedRouteProps = {
  element: React.ReactElement;
  path: string;
};

const ProtectedRoute = ({
  element,
  path,
}: ProtectedRouteProps) => {
  return isAuthenticated() ? (
    element
  ) : (
    <Navigate to="/" replace state={{ from: path }} />
  );
};

const routesConfig = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/welcome",
    element: (
      <ProtectedRoute element={<Welcome />}  path="/welcome" />
    ),
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
      <RouterProvider router={routesConfig}  />
      </div>
    </QueryClientProvider>
  );
}

export default App;
