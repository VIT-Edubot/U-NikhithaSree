import React from "react";
import { Link, Outlet } from "@tanstack/react-router";

const App = () => {
  return (
    <div className="container">
      <h1>TanStack Query Demo</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/data">Data Page</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default App;
