'use client';

import React, {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  useEffect,
} from 'react';

import { CartAction, CartContextProps, CartItem, CartState } from './types';

// Початковий стан
const initialState: CartState = {
  items: [],
  totalAmount: 0,
  totalDiscount: 0,
  totalAmountWithDiscount: 0,
};

// Ред'юсер для оновлення стану
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const updatedItems = [...state.items];
      const existingItemIndex = updatedItems.findIndex(
        item => item.id === action.payload.id,
      );

      if (existingItemIndex >= 0) {
        // Оновлення кількості існуючого товару
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: action.payload.quantity, // Використовуємо нове значення
        };
      } else {
        // Додавання нового товару
        updatedItems.push(action.payload);
      }

      return {
        ...state,
        items: updatedItems,
        totalAmountWithDiscount: updatedItems.reduce(
          (sum, item) =>
            sum +
            (item.price_promo ? item.price_promo : item.price) * item.quantity,
          0,
        ),
        totalDiscount: updatedItems.reduce(
          (sum, item) =>
            sum +
            (item.price_promo ? item.price - item.price_promo : 0) *
              item.quantity,
          0,
        ),
        totalAmount: updatedItems.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0,
        ),
      };
    }

    case 'REMOVE_ITEM': {
      const filteredItems = state.items.filter(
        item => item.id !== action.payload,
      );
      const totalAmountWithDiscountAfterRemoval = filteredItems.reduce(
        (sum, item) =>
          sum +
          (item.price_promo ? item.price_promo : item.price) * item.quantity,
        0,
      );
      const totalDiscountAfterRemoval = filteredItems.reduce(
        (sum, item) =>
          sum +
          (item.price_promo ? item.price - item.price_promo : 0) *
            item.quantity,
        0,
      );
      const totalAmountAfterRemoval = filteredItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      );

      return {
        ...state,
        items: filteredItems,
        totalAmount: totalAmountWithDiscountAfterRemoval,
        totalDiscount: totalDiscountAfterRemoval,
        totalAmountWithDiscount: totalAmountAfterRemoval,
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
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      const parsedCart: CartState = JSON.parse(storedCart);
      // Оновлення стану, якщо є кошик в localStorage
      dispatch({ type: 'CLEAR_CART' }); // Очищаємо кошик перед завантаженням
      parsedCart.items.forEach(item =>
        dispatch({ type: 'ADD_ITEM', payload: item }),
      );
    }
  }, []);

  // Оновлення localStorage при зміні стану кошика
  useEffect(() => {
    if (typeof window !== 'undefined' && state.items.length > 0) {
      localStorage.setItem('cart', JSON.stringify(state));
    }
  }, [state, state.items]);

  const addItem = (item: CartItem) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeItem = (id: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

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
