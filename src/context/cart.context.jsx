import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemsFromCart: () => {},
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
  checkout: () => {},
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

// const clearCartItem = (cartItems, cartItemToClear) =>
//   cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.qty,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.qty * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (prodcutToAdd) => {
    setCartItems(addCartItem(cartItems, prodcutToAdd));
  };

  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const clearItemsFromCart = () => {
    setCartItems([]);
  };

  const checkout = () => {
    alert("Thank you for your purchase!");
    setCartItems([]);
  };

  const value = {
    addItemToCart,
    removeItemFromCart,
    clearItemsFromCart,
    cartItems,
    cartCount,
    cartTotal,
    checkout,
  };
  // console.log(cartItems);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
