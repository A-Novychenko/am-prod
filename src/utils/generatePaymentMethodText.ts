export const generatePaymentMethodText = (method: PaymentMethod) => {
  switch (method) {
    case 'card':
      return 'Оплата по реквізитам';

    case 'cash':
      return 'Готівка';

    case 'prepayment':
      return 'Передплата по реквізитам';

    case 'cod':
      return 'Післяоплата';

    default:
      return 'Оплата по реквізитам';
  }
};
