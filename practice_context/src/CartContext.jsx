import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeLastItem = () => {
    setCart(cart.slice(0, -1));
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeLastItem }}
    >
      {children}
    </CartContext.Provider>
  );
}