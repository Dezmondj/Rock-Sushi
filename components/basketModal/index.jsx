import { useMemo } from "react";
import basketModalStyles from "./basketModal.module.css";

export const BasketModal = ({ isOpen, close, basket, removeItem }) => {
  const items = useMemo(() => Object.values(basket), [basket]);
  const total = useMemo(() => items.reduce((acc, item) => acc + (item.cost || 0) * item.count, 0), [items]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className={basketModalStyles.overlay} onClick={close} />
      <div className={basketModalStyles.base}>
        {items.length === 0 && (
          <div className={basketModalStyles.emptyMessage}>
            Корзина поки що пуста
          </div>
        )}
        {items.length !== 0 && (
          <div className={basketModalStyles.list}>
            {items.map((item) => (
              <div key={item.id} className={basketModalStyles.listItem}>
                <p>{item.name}</p>
                <p>{item.count}</p>
                <p>{item.cost} грн.</p>
                <button
                  className={basketModalStyles.removeButton}
                  onClick={() => removeItem(item.id)}
                >
                </button>
              </div>
            ))}
          </div>
        )}
        <div className={basketModalStyles.total}>
          Вартість замовлення: {total} грн.
        </div>
        <div className={basketModalStyles.footer}>
          <button className={basketModalStyles.closeButton} onClick={close}>
            Close
          </button>
        </div>
      </div>
    </>
  );
};
