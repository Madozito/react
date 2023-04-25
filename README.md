# <p align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" style="display: block; margin: 0 auto; margin-bottom: 40px; margin-top: 40pxx" width="100" height="100" /> Getting started with React </p>

## 📋 Requirements
Verify that you have <a href="https://nodejs.org/en">Node.js</a> installed by running the following command in your terminal:

```node
node --version
```

Also, you can verify that you have npm (Node Package Manager) installed with:
```node
npm --version
```

## Installation
To install React and create your first project, use the following commands in your terminal:
```node
npx create-react-app my-app
cd my-app
npm start

```

## Recommended Extensions for your Browser

We recommend installing the following extensions for your browser:

* React Developer Tools: allows you to view React components and profiles.

## File Structure
When working with React, you'll encounter the following file structure:

* `.gitignore`: specifies which files and folders to ignore when committing to GitHub.
* `node_modules`: where all the project's dependencies are stored.
* `package.json`: shows the project's installed dependencies.
* `public`: where the HTML file of the web app is loaded.
* `src`: where the app's components and CSS files are located.
* `App.js`: the main component of the app.
* `index.css`: the main style sheet.
* `index.js`: where the React framework is loaded and the starting point of the app is specified (<App/>).

## ES7 Snippet for React
When writing React code, we recommend using the `ES7 React/Redux/GraphQL/React-Native` snippets extension, which provides you with various useful snippets such as:

* `rfce`: creates a functional component with an export statement.
* `rfc`: creates a functional component without an export statement.
* `rcc`: creates a class component with a constructor, render, and export statement.

## What is a Component?

A component is a part of the application interface that can be reused and organized in a modular way.

## Component Structure
A component consists of a function that returns JSX (JavaScript XML) code. The function can take in props, which are used to pass data to the component. Instead of using `class`, you use `className` to apply CSS styles to the JSX elements.

To use a component in your app, you must export it from its file and import it into your `App.jsx` file.

Here's an example of a component called MyComponent:

``` node
import React from "react";

function MyComponent() {
    
  const name = "Juan";
  const web = "no-hunger-food.vercel.app";

  let user = {
    name: "John",
    lastname: "Foo",
    web: "www.google.com",
  };
  return (
    <>
      {/* You can use fragments: <></> or a div, all components must be wrapped with these */}
      <p>This is my first component!</p>
      <h3>Juan's data:</h3>
      <ul>
        <li>
          Name: <strong>{name}</strong>
        </li>
        <li>
          Web: <strong>{web}</strong>
        </li>
      </ul>
      <h3>User's data</h3>
      <ul>
        <li>Name: {user.name}</li>
        <li>Lastname: {user.lastname}</li>
        <li>Web: {user.web}</li>
      </ul>
      <ul>
        <li>React</li>
        <li>Angular</li>
        <li>Vue</li>
      </ul>
    </>
  );
}
// We export the component here to use it in our App.jsx
export default MyComponent;

```

Now we can import `MyComponent.jsx` into our `App.jsx` like this:

```node
import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';  // Required import for MyComponent
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to my React GitHub Repo by Juan Martin Madoz
        </p>
        {/*Here you add MyComponent*/}
        <MyComponent/>
      </header>
    </div>
  );
}

export default App;

```

## Creating a New React Application
To create a new react application, first, delete any files that you won't be using such as reportWebVitals and Apptest.js.

Next, create a folder called `components` in your project directory. Inside this folder, create a new file for your component, for example: `MyComponent.jsx`.

In your component file, define a function that returns JSX code. You can use comments and JavaScript code inside your component using `{}` just like we saw earlier.

For easy ways of creating components, you can use React snippets like `rfc` or `rfce`, this will create you a basic component.

It's important to note that all components must be wrapped in a div or a fragment (<> </>) to return multiple elements.



That's it! This should give you a good starting point for working with React.
We will continue updating it, so stay in touch!.


