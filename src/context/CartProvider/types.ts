// Використання цих інтерфейсів у компонентах:

// 1. `CartState` використовується в `useReducer` для опису початкового стану та результату ред'юсера.
// 2. `CartContextProps` використовується для типізації значення, що передається у `CartContext.Provider`.
// 3. `CartItem` використовується для типізації кожного елементу корзини.

// Тип для елемента корзини
export type CartItem = {
  _id: string;
  id: number;
  brand: string;
  name: string;
  price: number;
  price_promo: number | null;
  quantity: number;
  img: string;
  availability: string;
  article: string;
};

// Тип для стану корзини
export type CartState = {
  items: CartItem[];
  totalAmount: number;
  totalDiscount: number;
  totalAmountWithDiscount: number;
};

// Типи дій для ред'юсера
export type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: number } // `id` передається як число
  | { type: 'CLEAR_CART' }
  | { type: 'SET_QUANTITY'; payload: { id: number; quantity: number } };

// Типи для контексту
export type CartContextProps = {
  items: CartItem[];
  totalAmount: number;
  totalDiscount: number;
  totalAmountWithDiscount: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
  syncCart: () => Promise<void>;
  setQuantity: (id: number, quantity: number) => void;
};

export type idsType = number[];
