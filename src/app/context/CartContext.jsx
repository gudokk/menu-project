import React, { createContext, useState, useContext } from "react";

// Создаём контекст
const CartContext = createContext();

// Хук для использования корзины в компонентах
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({}); // Глобальное состояние корзины

  const addToCart = (id) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const removeFromCart = (id) => {
    setCart((prev) => {
      const newCart = { ...prev, [id]: Math.max((prev[id] || 0) - 1, 0) };
      if (newCart[id] === 0) delete newCart[id]; // Удаляем товар если 0
      return newCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
