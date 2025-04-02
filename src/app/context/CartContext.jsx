import React, { createContext, useState, useContext } from "react";

// Создаём контекст
const CartContext = createContext();

// Хук для использования корзины в компонентах
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({}); // Глобальное состояние корзины

  // Универсальная функция изменения количества товара
  const updateCart = (ID, delta) => {
    setCart((prev) => {
      const newCount = (prev[ID] || 0) + delta;
      const newCart = { ...prev, [ID]: newCount };

      if (newCount <= 0) delete newCart[ID]; // Удаляем товар если 0
      return newCart;
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        handleAddToCart: (ID) => updateCart(ID, 1),
        handleRemoveFromCart: (ID) => updateCart(ID, -1),
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
