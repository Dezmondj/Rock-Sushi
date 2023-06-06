"use client"

import { useCallback, useEffect, useState } from "react";

import { Header } from "components/header";
import { ProductsList } from "components/productsList";
import { BasketModal } from "components/basketModal";
import { MainContent } from "components/mainContent";
import { BASE_URL } from "utils/constants";

// const MENU = [
//   { id: '0', name: 'Святковий сет', img: "/images/festive.jpg"},
//   { id: '1', name: 'Запечений сет', img: "/images/grilled.jpg" },
//   { id: '2', name: 'Кедамо сет', img: "/images/kedamo.jpg"},
//   { id: '3', name: 'Хігума сет', img: "/images/higuma.jpg"},
//   { id: '4', name: 'Сет Kiss', img: "/images/kiss.jpg"},
// ]

export default function Page() {
  /**
   * Basket structure is a map (ID - item)
   */
  const [basket, setBasket] = useState({});
  const [isBasketModalOpen, setIsBasketModalOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      setIsLoading(true);
      fetch(`${BASE_URL}/products`)
        .then((response) => response.json())
        .then((products) => {
          setProducts(products);
          setIsLoading(false);
        })
        .catch(() => {
            setIsLoading(false);
        });
  }, []);

  const addItemToBasket = useCallback((itemId) => {
    setBasket(basket => {
      const existingItem = basket[itemId];

      if (existingItem) {
        return {
          ...basket,
          [itemId]: {
            ...existingItem,
            count: existingItem.count + 1,
          }
        };
      }

      const item = products.find(x => x.id === itemId);

      if (!item) {
        console.error('Item is not found in the menu list, something went terribly wrong :(');
        return basket;
      }

      return {
        ...basket,
        [itemId]: {
          ...item,
          count: 1,
        },
      };
    });
  }, [products]);

  const removeItemFromBasket = useCallback((itemId) => {
    setBasket(basket => {
      const copy = {...basket};
      delete copy[itemId];
      return copy;
    });
  }, []);

  const openBasketModal = useCallback(() => {
    setIsBasketModalOpen(true);
  }, []);

  const closeBusketModal = useCallback(() => {
    setIsBasketModalOpen(false);
  }, []);

  return (
    <>
      <Header basket={basket} openBasketModal={openBasketModal} />
      <MainContent />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ProductsList products={products} addToBasket={addItemToBasket} />
      )}

      <BasketModal
        isOpen={isBasketModalOpen}
        close={closeBusketModal}
        basket={basket}
        removeItem={removeItemFromBasket}
      />
    </>
  );
};
