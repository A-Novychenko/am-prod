export const generateDeliveryMethodText = (method: DeliveryMethod) => {
  switch (method) {
    case 'pickup':
      return 'Самовивіз';

    case 'post':
      return 'Нова пошта';

    default:
      return 'Самовивіз';
  }
};
