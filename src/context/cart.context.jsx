import { createContext, useState } from "react";

export const CartContext = createContext({
  addItemToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
});

const addItemToCart = (prodcutToAdd) => {
  console.log(prodcutToAdd);
};

// const value = {
//   addToCart,
//   removeFromCart,
//   clearCart,
//   cartItems,
//   cartCount,
//   cartTotal,
// };

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const value = {
    addItemToCart,
    cartItems: [],
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
