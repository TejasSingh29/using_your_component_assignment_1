// App.jsx
import React from "react";
import BookCard from "./components/bookcard";


const books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 10.99, stock: 5 },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", price: 8.99, stock: 8 },
  { id: 3, title: "1984", author: "George Orwell", price: 12.99, stock: 2 },
];

const App = () => {
  return (
    <div>
      <h1>Digital Library</h1>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default App;

