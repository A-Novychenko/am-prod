'use client';

import React, {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  useEffect,
  useCallback,
} from 'react';

import { getProductsForCartByIds } from '@/actions/servicesAPI';

import { CartAction, CartContextProps, CartItem, CartState } from './types';

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
          quantity:
            updatedItems[existingItemIndex].quantity + action.payload.quantity,
        };
      } else {
        updatedItems.unshift(action.payload);
      }

      return {
        ...state,
        items: updatedItems,
        ...calculateTotals(updatedItems), // Викликаємо calculateTotals
      };
    }

    case 'SET_QUANTITY': {
      const updatedItems = state.items.slice();
      const index = updatedItems.findIndex(
        item => item.id === action.payload.id,
      );
      if (index >= 0) {
        updatedItems[index] = {
          ...updatedItems[index],
          quantity: action.payload.quantity,
        };
      }
      return {
        ...state,
        items: updatedItems,
        ...calculateTotals(updatedItems),
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

      try {
        const parsedCart: CartState = JSON.parse(storedCart);

        const ids = parsedCart?.items?.map((item: CartItem) => item.id) || [];

        if (!ids.length) return;

        const { products } = await getProductsForCartByIds(ids);

        const updatedCartItems =
          parsedCart.items?.map(item => {
            const updatedProduct = products.find(
              (product: IASGProduct) => product.id === item.id,
            );
            return {
              ...item,
              price: updatedProduct?.price || item.price,
              price_promo: updatedProduct?.price_promo || item.price_promo,
            };
          }) || [];

        dispatch({ type: 'CLEAR_CART' });

        updatedCartItems
          .reverse()
          .forEach((item: CartItem) =>
            dispatch({ type: 'ADD_ITEM', payload: item }),
          );
      } catch (e) {
        console.error('Failed to load cart from localStorage:', e);
        localStorage.removeItem('cart'); // Очистити, якщо дані некоректні
      }
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
    } else {
      localStorage.removeItem('cart');
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

  const setQuantity = useCallback((id: number, quantity: number) => {
    dispatch({ type: 'SET_QUANTITY', payload: { id, quantity } });
  }, []);

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

      const updatedItems = parsedCart.items.map((item: CartItem) => {
        const updatedProduct = products.find(
          (product: IASGProduct) => product.id === item.id,
        );
        return {
          ...item,
          price: updatedProduct?.price || item.price,
          price_promo: updatedProduct?.price_promo || item.price_promo,
          availability: updatedProduct?.count_warehouse_3,
          article: updatedProduct?.article,
        };
      });

      dispatch({ type: 'CLEAR_CART' });

      updatedItems
        .reverse()
        .forEach((item: CartItem) =>
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
        setQuantity,
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
