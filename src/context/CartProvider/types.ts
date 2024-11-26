// // @typescript-eslint/no-unused-vars

// interface CartItem {
//   id: number;
//   name: string;
//   price: number;
//   quantity: number;
//   img: string;
// }

// interface CartState {
//   items: CartItem[];
//   totalAmount: number;
// }

// interface CartContextProps extends CartState {
//   addItem: (item: CartItem) => void;
//   removeItem: (id: number) => void;
//   clearCart: () => void;
// }

// Опис типу товару
export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  img: string;
}

// Опис стану корзини
export interface CartState {
  items: CartItem[];
  totalAmount: number;
}

// Опис методів контексту
export interface CartContextProps extends CartState {
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
}

// Використання цих інтерфейсів у компонентах:

// 1. `CartState` використовується в `useReducer` для опису початкового стану та результату ред'юсера.
// 2. `CartContextProps` використовується для типізації значення, що передається у `CartContext.Provider`.
// 3. `CartItem` використовується для типізації кожного елементу корзини.
