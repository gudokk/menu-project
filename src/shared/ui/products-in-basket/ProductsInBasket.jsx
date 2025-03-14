// import React from "react";
// import styles from "./ProductsInBasket.module.css";
// import { ProductCard } from "../product-card/ProductCard";
// import { useCart } from "../../../app/context/CartContext";

// export const ProductsInBasket = ({ products }) => {
//   const { cart, addToCart, removeFromCart } = useCart();

//   const selectedProducts = products.filter((product) => cart[product.id] > 0);

//   return (
//     <div className={styles.container}>
//       {selectedProducts.length > 0 ? (
//         selectedProducts.map((product) => (
//           <ProductCard
//             key={product.id}
//             name={product.name}
//             count={cart[product.id]}
//             onAdd={() => addToCart(product.id)}
//             onRemove={() => removeFromCart(product.id)}
//           />
//         ))
//       ) : (
//         <p>Ваша корзина пуста.</p>
//       )}
//     </div>
//   );
// };

import React from "react";
import styles from "./ProductsInBasket.module.css";
import { ProductCard } from "../product-card/ProductCard";
import { useCart } from "../../../app/context/CartContext";

export const ProductsInBasket = ({ products }) => {
  const { cart, addToCart, removeFromCart } = useCart();
  const selectedProducts = products.filter((product) => cart[product.id] > 0);

  return (
    <div className={styles.container}>
      {selectedProducts.length > 0 ? (
        selectedProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            count={cart[product.id]}
            onAdd={() => addToCart(product.id)}
            onRemove={() => removeFromCart(product.id)}
            className={styles.basketCard}
          />
        ))
      ) : (
        <p>Ваша корзина пуста.</p>
      )}
    </div>
  );
};
