import { useContext } from "react";
import { CartContext } from "./CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <div
      style={{
        background: "#2c3e50",
        color: "white",
        padding: "18px",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "30px",
      }}
    >
      <h2>🛍️ Dummy Store</h2>

      <h2>🛒 Cart : {cart.length}</h2>
    </div>
  );
}

export default Navbar;