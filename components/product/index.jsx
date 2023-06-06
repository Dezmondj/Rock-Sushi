import { BASE_URL } from "utils/constants";
import productStyles from "./product.module.css";

export const Product = ({ product, addToBasket }) => {
  const handleAddToBasket = () => {
    addToBasket(product.id);
  };

  return (
    <div className={productStyles.base} style = {{background: `url(${BASE_URL}${product.img})`, backgroundSize: "cover"}}>
      <div>
      {product.name}
      </div>
      <button className={productStyles.addButton} onClick={handleAddToBasket}>
        +
      </button>
      <div className={productStyles.cost}>
      {product.cost} грн
      </div>
    </div>
  );
};
