import { useContext } from "react";
import { CartContext } from "./CartContext";

function Product() {
  const { addToCart } = useContext(CartContext);

  return (
    <div
      style={{
        background: "white",
        padding: "25px",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px lightgray",
        marginBottom: "25px",
      }}
    >
      <h2>Products</h2>

      <button
        onClick={() => addToCart("📱 iPhone")}
        style={{
          padding: "10px 20px",
          margin: "10px",
          background: "#3498db",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Add iPhone
      </button>

      <button
        onClick={() => addToCart("💻 Laptop")}
        style={{
          padding: "10px 20px",
          margin: "10px",
          background: "#27ae60",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Add Laptop
      </button>

      <button
        onClick={() => addToCart("⌚ Smart Watch")}
        style={{
          padding: "10px 20px",
          margin: "10px",
          background: "#9b59b6",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Add Watch
      </button>
    </div>
  );
}

export default Product;