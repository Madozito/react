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
