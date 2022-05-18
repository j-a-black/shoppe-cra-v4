import { createContext, useState } from "react";

export const CartContext = createContext({
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearCart: () => {},
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
});

const addCartItem = (cartItems, prodcutToAdd) => {
  const itemExistsInCart = cartItems.find(
    (cartItem) => cartItem.id === prodcutToAdd.id
  );

  if (itemExistsInCart) {
    return cartItems.map((cartItem) =>
      cartItem.id === prodcutToAdd.id
        ? { ...cartItem, qty: cartItem.qty + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...prodcutToAdd, qty: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  const itemExistsInCart = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (itemExistsInCart.qty === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, qty: cartItem.qty - 1 }
      : cartItem
  );
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

  const addItemToCart = (prodcutToAdd) => {
    setCartItems(addCartItem(cartItems, prodcutToAdd));
  };

  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const value = {
    addItemToCart,
    removeItemFromCart,
    cartItems,
  };
  // console.log(cartItems);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
