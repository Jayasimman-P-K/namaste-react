import React from "react";
import ReactDOM from "react-dom/client";

// creating components using JSX
const jsxHeading = <h1>Hello from JSX</h1>;

// creating components using core React
const reactHeading = React.createElement("h1", {}, "Hello from React");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
