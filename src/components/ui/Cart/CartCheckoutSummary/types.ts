export type CartCheckoutSummaryProps = {
  hasContactsData: HasContactsData;
  checkoutState: CheckoutState;
  hasUnavailableItem: HasUnavailableItem;
  handleSubmitCart: () => void;
  errors: CartErrors;
};
