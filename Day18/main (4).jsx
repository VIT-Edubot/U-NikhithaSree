import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createRouter,
  Route,
  RootRoute,
} from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import DataPage from "./DataPage";
import "./App.css";

// Create TanStack Query client
const queryClient = new QueryClient();

// Setup routes
const rootRoute = new RootRoute({ component: App });
const indexRoute = new Route({ path: "/", getParentRoute: () => rootRoute, component: () => <p>🏠 Welcome to the Home Page</p> });
const dataRoute = new Route({ path: "/data", getParentRoute: () => rootRoute, component: DataPage });

const routeTree = rootRoute.addChildren([indexRoute, dataRoute]);
const router = createRouter({ routeTree });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
