import { createContext } from "react";

export const CartContext = createContext({
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
});

const value = {
  addToCart,
  removeFromCart,
  clearCart,
  cartItems,
  cartCount,
  cartTotal,
};

export const CartProvider = ({ children }) => {
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
