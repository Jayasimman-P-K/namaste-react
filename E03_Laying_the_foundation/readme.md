# creating an element using JSX:

- const jsxHeading = <h1>Hello from JSX</h1>;

# creating an element using core React:

- const reactHeading = React.createElement("h1", {}, "Hello from React");

# connecting with the DOM to render the element:

- const root = ReactDOM.createRoot(document.getElementById("root"));
- root.render(jsxHeading);

# two types of react components:

- class components => older version
- functional components => newer version

# React functional components:
