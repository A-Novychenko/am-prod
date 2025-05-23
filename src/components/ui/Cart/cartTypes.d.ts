type CartProps = { isPage: boolean; isCheckoutPage: boolean };

type DeliveryMethod = 'pickup' | 'post';

type PaymentMethod = 'card' | 'cash' | 'prepayment' | 'cod';

type HasContactsData = boolean;

type HasUnavailableItem = boolean;

type CheckoutState = {
  name: '';
  phone: '';
  email: '';
  comment: '';
  city: '';
  postOffice: '';
  deliveryMethod: DeliveryMethod;
  paymentMethod: PaymentMethod;
};

type SetCheckoutState = React.Dispatch<React.SetStateAction<CheckoutState>>;

type CartErrors = {
  name?: string;
  phone?: string;
};
type CartSetError = React.Dispatch<React.SetStateAction<CartError>>;
