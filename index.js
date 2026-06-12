import React from "react";
import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      name: "iPhone 16",
      price: 79999,
      image:
        "https://via.placeholder.com/200"
    },
    {
      id: 2,
      name: "Laptop",
      price: 59999,
      image:
        "https://via.placeholder.com/200"
    },
    {
      id: 3,
      name: "Headphones",
      price: 2999,
      image:
        "https://via.placeholder.com/200"
    },
    {
      id: 4,
      name: "Smart Watch",
      price: 4999,
      image:
        "https://via.placeholder.com/200"
    }
  ];

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h2>Amazon Clone</h2>

        <input
          type="text"
          placeholder="Search products..."
        />

        <button>Cart (0)</button>
      </nav>

      {/* Hero */}
      <div className="hero">
        <h1>Welcome to Amazon Clone</h1>
        <p>Best Deals Every Day</p>
      </div>

      {/* Products */}
      <div className="products">
        {products.map((product) => (
          <div
            className="card"
            key={product.id}
          >
            <img
              src={product.image}
              alt={product.name}
            />

            <h3>{product.name}</h3>

            <p>₹{product.price}</p>

            <button>
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
