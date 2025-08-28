export type CartCheckoutBtnsProps = {
  hasUnavailableItem: boolean;
  isOrderAmountValid: IsOrderAmountValid;
  handleSubmitCart: () => void;
  errors: CartErrors;
};
