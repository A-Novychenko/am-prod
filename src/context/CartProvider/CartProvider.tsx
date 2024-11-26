// 'use client';

// import React, { createContext, useContext, useReducer, ReactNode } from 'react';

// // Початковий стан
// const initialState: CartState = {
//   items: [],
//   totalAmount: 0,
// };

// // Ред'юсер для оновлення стану

// const cartReducer = (state: CartState, action: any): CartState => {
//   switch (action.type) {
//     case 'ADD_ITEM': {
//       const updatedItems = [...state.items];
//       const existingItemIndex = updatedItems.findIndex(
//         item => item.id === action.payload.id,
//       );

//       if (existingItemIndex >= 0) {
//         // Оновлення кількості існуючого товару
//         updatedItems[existingItemIndex] = {
//           ...updatedItems[existingItemIndex],
//           quantity:
//             updatedItems[existingItemIndex].quantity + action.payload.quantity,
//         };
//       } else {
//         // Додавання нового товару
//         updatedItems.push(action.payload);
//       }

//       return {
//         ...state,
//         items: updatedItems,
//         totalAmount:
//           state.totalAmount + action.payload.price * action.payload.quantity,
//       };
//     }

//     case 'REMOVE_ITEM': {
//       const filteredItems = state.items.filter(
//         item => item.id !== action.payload,
//       );
//       const totalAmountAfterRemoval = filteredItems.reduce(
//         (sum, item) => sum + item.price * item.quantity,
//         0,
//       );

//       return {
//         ...state,
//         items: filteredItems,
//         totalAmount: totalAmountAfterRemoval,
//       };
//     }

//     case 'CLEAR_CART':
//       return initialState;

//     default:
//       return state;
//   }
// };

// // Створення Context
// const CartContext = createContext<CartContextProps | undefined>(undefined);

// // Провайдер Context
// export const CartProvider = ({ children }: { children: ReactNode }) => {
//   const [state, dispatch] = useReducer(cartReducer, initialState);

//   const addItem = (item: CartItem) => {
//     dispatch({ type: 'ADD_ITEM', payload: item });
//   };

//   const removeItem = (id: number) => {
//     dispatch({ type: 'REMOVE_ITEM', payload: id });
//   };

//   const clearCart = () => {
//     dispatch({ type: 'CLEAR_CART' });
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         items: state.items,
//         totalAmount: state.totalAmount,
//         addItem,
//         removeItem,
//         clearCart,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// // Хук для використання Context
// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// };

'use client';

import React, { createContext, useContext, useReducer, ReactNode } from 'react';

// Тип для елемента корзини
type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  img: string;
};

// Тип для стану корзини
type CartState = {
  items: CartItem[];
  totalAmount: number;
};

// Типи дій для ред'юсера
type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: number } // `id` передається як число
  | { type: 'CLEAR_CART' };

// Типи для контексту
type CartContextProps = {
  items: CartItem[];
  totalAmount: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
};

// Початковий стан
const initialState: CartState = {
  items: [],
  totalAmount: 0,
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
          quantity:
            updatedItems[existingItemIndex].quantity + action.payload.quantity,
        };
      } else {
        // Додавання нового товару
        updatedItems.push(action.payload);
      }

      return {
        ...state,
        items: updatedItems,
        totalAmount:
          state.totalAmount + action.payload.price * action.payload.quantity,
      };
    }

    case 'REMOVE_ITEM': {
      const filteredItems = state.items.filter(
        item => item.id !== action.payload,
      );
      const totalAmountAfterRemoval = filteredItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      );

      return {
        ...state,
        items: filteredItems,
        totalAmount: totalAmountAfterRemoval,
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
