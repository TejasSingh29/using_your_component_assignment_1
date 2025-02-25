// write the book component code here
// cart/bookcard.jsx
import React from "react";

const BookCard = ({ book }) => {
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>{book.title}</h2>
      <p style={styles.author}>By {book.author}</p>
      <p style={styles.price}>Price: ${book.price}</p>
      <p style={styles.stock}>Stock: {book.stock}</p>
    </div>
  );
};

// Inline styles
const styles = {
  card: {
    border: "1px solid #ddd",
    padding: "16px",
    margin: "10px",
    borderRadius: "8px",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
    backgroundColor: "#fff",
  },
  title: { fontSize: "18px", fontWeight: "bold" },
  author: { color: "#555" },
  price: { fontWeight: "bold", color: "green" },
  stock: { color: "blue" },
};

export default BookCard;
