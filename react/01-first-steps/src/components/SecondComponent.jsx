import React from "react"; // rafc

export const SecondComponent = () => {
  const books = ["Harry Potter", "Clean Code"];

  return (
    <div className="secondComponent">
      <h2>Books:</h2>
      {books.length >= 1 ? (
        <ul>
          {books.map((book, i) => {
            return <li key={i}>{book}</li>;
          })}
        </ul>
      ) : (
        <p>No Books</p>
      )}
    </div>
  );
};
