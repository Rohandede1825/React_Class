import { useContext } from "react";
import { CartContext } from "./CartContext";

function Cart() {
  const { cart, removeLastItem } = useContext(CartContext);

  return (
    <>
      <h3>Cart Products</h3>

      {cart.map((item, index) => (
        <p key={index}>{item}</p>
      ))}

        <button onClick={removeLastItem} style={{
          padding: "10px 20px",
          margin: "10px",
          background: "#e74c3c",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}>
        Remove Last Item
      </button>
    </>
  );
}

export default Cart;