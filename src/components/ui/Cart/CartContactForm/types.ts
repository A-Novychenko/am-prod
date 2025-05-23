export type CartContactFormProps = {
  checkoutState: CheckoutState;
  setCheckoutState: SetCheckoutState;
  errors: CartErrors;
  handleValidationPhone: (val: string) => void;
  handleValidationName: (val: string) => void;
  className?: string;
};
