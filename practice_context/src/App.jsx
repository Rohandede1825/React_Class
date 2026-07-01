import { CartProvider } from "./CartContext";
import Navbar from "./Navbar";
import Product from "./Product";
import Cart from "./Cart";

function App() {
  return (
    <CartProvider>
      <div
        style={{
          backgroundColor: "#f4f6f9",
          minHeight: "100vh",
          padding: "30px",
          fontFamily: "Arial",
        }}
      >
        <Navbar />
        <Product />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;