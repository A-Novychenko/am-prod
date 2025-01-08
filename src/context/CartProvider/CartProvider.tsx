'use client';

import React, {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  useEffect,
  useCallback,
} from 'react';

import { CartAction, CartContextProps, CartItem, CartState } from './types';
import { getProductsForCartByIds } from '@/actions/servicesAPI';

// Початковий стан
const initialState: CartState = {
  items: [],
  totalAmount: 0,
  totalDiscount: 0,
  totalAmountWithDiscount: 0,
};

// Функція для обчислення сум
const calculateTotals = (items: CartItem[]) => ({
  totalAmountWithDiscount: items.reduce(
    (sum, item) => sum + (item.price_promo || item.price) * item.quantity,
    0,
  ),
  totalDiscount: items.reduce(
    (sum, item) =>
      sum +
      (item.price_promo ? item.price - item.price_promo : 0) * item.quantity,
    0,
  ),
  totalAmount: items.reduce((sum, item) => sum + item.price * item.quantity, 0),
});

// Ред'юсер для оновлення стану
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const updatedItems = state.items.slice();
      const existingItemIndex = updatedItems.findIndex(
        item => item.id === action.payload.id,
      );

      if (existingItemIndex >= 0) {
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: action.payload.quantity, // Використовуємо нове значення
        };
      } else {
        updatedItems.push(action.payload);
      }

      return {
        ...state,
        items: updatedItems,
        ...calculateTotals(updatedItems), // Викликаємо calculateTotals
      };
    }

    case 'REMOVE_ITEM': {
      const filteredItems = state.items.filter(
        item => item.id !== action.payload,
      );
      return {
        ...state,
        items: filteredItems,
        ...calculateTotals(filteredItems), // Викликаємо calculateTotals
      };
    }

    case 'CLEAR_CART':
      return initialState;

    default:
      return state;
  }
};

// Створення Context
const CartContext = createContext<CartContextProps | undefined>(undefined);

// Провайдер Context
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Завантаження кошика з localStorage
  useEffect(() => {
    const fetchCartItems = async () => {
      const storedCart = localStorage.getItem('cart');
      if (!storedCart) return;
      const parsedCart: CartState = JSON.parse(storedCart);
      const ids = parsedCart?.items?.map((item: CartItem) => item.id) || [];
      if (!ids.length) return;
      const { products } = await getProductsForCartByIds(ids);
      const updatedItems = products ?? [];
      const updatedCartItems =
        parsedCart.items?.map(item => {
          const updatedProduct = updatedItems.find(
            (product: IASGProduct) => product.id === item.id,
          );
          return {
            ...item,
            price: updatedProduct.price,
            price_promo: updatedProduct.price_promo,
          };
        }) || [];
      dispatch({ type: 'CLEAR_CART' });
      updatedCartItems.forEach((item: CartItem) =>
        dispatch({ type: 'ADD_ITEM', payload: item }),
      );
    };

    fetchCartItems();
  }, []);

  // Оновлення localStorage при зміні стану кошика
  const updateLocalStorage = useCallback(() => {
    if (typeof window !== 'undefined' && state.items.length > 0) {
      // Додаємо значення для img до кожного товару, якщо його ще немає
      const updatedItems = state.items.map(item => ({
        ...item,
        img: item.img || '/images/no-photo.png',
      }));
      localStorage.setItem(
        'cart',
        JSON.stringify({ ...state, items: updatedItems }),
      );
    }
  }, [state]);

  useEffect(() => {
    updateLocalStorage();
  }, [updateLocalStorage]);

  const addItem = useCallback(
    (item: CartItem) => {
      // Перевірка та додавання зображення, якщо воно не надано
      const itemWithImage = {
        ...item,
        img: item.img || '/images/no-photo.png', // Задаємо зображення, якщо його немає
      };
      dispatch({ type: 'ADD_ITEM', payload: itemWithImage });
    },
    [dispatch],
  );

  const removeItem = useCallback(
    (id: number) => {
      dispatch({ type: 'REMOVE_ITEM', payload: id });
    },
    [dispatch],
  );

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' });
  }, [dispatch]);

  const syncCart = useCallback(async () => {
    const storedCart = localStorage.getItem('cart');
    if (!storedCart) return;
    const parsedCart: CartState = JSON.parse(storedCart);
    const ids = parsedCart.items.map((item: CartItem) => item.id);
    if (ids.length) {
      const { products } = await getProductsForCartByIds(ids);
      const updatedItems = products.map((product: IASGProduct) => {
        const cartItem = parsedCart.items.find(item => item.id === product.id);
        return {
          ...cartItem,
          price: product.price,
          price_promo: product.price_promo,
          availability: product.count_warehouse_3,
          article: product.article,
        };
      });
      dispatch({ type: 'CLEAR_CART' });
      updatedItems.forEach((item: CartItem) =>
        dispatch({ type: 'ADD_ITEM', payload: item }),
      );
    }
  }, [dispatch]);

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        totalAmount: state.totalAmount,
        totalDiscount: state.totalDiscount,
        totalAmountWithDiscount: state.totalAmountWithDiscount,
        addItem,
        removeItem,
        clearCart,
        syncCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Хук для використання Context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
