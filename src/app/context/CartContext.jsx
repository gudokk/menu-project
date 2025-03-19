import React, { createContext, useState, useContext } from "react";

// Создаём контекст
const CartContext = createContext();

// Хук для использования корзины в компонентах
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({}); // Глобальное состояние корзины

  // Универсальная функция изменения количества товара
  const updateCart = (id, delta) => {
    setCart((prev) => {
      const newCount = (prev[id] || 0) + delta;
      const newCart = { ...prev, [id]: newCount };

      if (newCount <= 0) delete newCart[id]; // Удаляем товар если 0
      return newCart;
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        handleAddToCart: (id) => updateCart(id, 1),
        handleRemoveFromCart: (id) => updateCart(id, -1),
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
