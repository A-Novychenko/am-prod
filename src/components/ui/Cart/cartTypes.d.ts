type CartProps = { isPage: boolean; isCheckoutPage: boolean };

type DeliveryMethod = 'pickup' | 'post';

type PaymentMethod = 'card' | 'cash' | 'prepayment' | 'cod';

type HasContactsData = boolean;

type HasUnavailableItem = boolean;

type CheckoutState = {
  name: string;
  phone: string;
  email: string;
  comment: string;
  city: string;
  postOffice: string;
  deliveryMethod: DeliveryMethod;
  paymentMethod: PaymentMethod;
};

type CheckoutResult = {
  _id: string;
  name: string;
  phone: string;
  number: string;
  email: string;
  comment: string;
  deliveryCity: string;
  postOffice: string;
  delivery: DeliveryMethod;
  deliveryCity: string;
  payment: PaymentMethod;
  products: CartItem[];
  status: string;
  createdAt: string;
  updatedAt: string;
};

type SetCheckoutState = React.Dispatch<React.SetStateAction<CheckoutState>>;

type CartErrors = {
  name?: string;
  phone?: string;
};
type CartSetError = React.Dispatch<React.SetStateAction<CartError>>;

type OrderStatus = 'new' | 'in-progress' | 'done' | 'rejected';
