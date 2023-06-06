import { Product } from "components/product";

import productsListStyles from "./productsList.module.css";

export const ProductsList = ({ products, addToBasket }) => {
  if (products.length === 0) {
    return (
      <div className={productsListStyles.emptyMessage}>
        Unfortunately there are no products right now :( Please subscribe to
        our newsletter to get updates.
      </div>
    );
  }

  return (
    <div className={productsListStyles.base}>
      {products.map((product) => (
        <Product key={product.id} product={product} addToBasket={addToBasket} />
      ))}
    </div>
  );
};
